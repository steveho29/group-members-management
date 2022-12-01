import React from 'react'
import { useTable } from 'react-table'

export function ReactTable({ columns, data, onRowClick, disable: Disable = false, disableField: DisableField = "is_active" }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table className="table table-hover table-center mb-0" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr key={i} {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            {Disable ? <td>
                                <div className="btn btn-sm bg-info-light">
                                    {row.original[DisableField] ? "Actived" : "Disabled"}
                                </div>
                            </td> : ""}
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}