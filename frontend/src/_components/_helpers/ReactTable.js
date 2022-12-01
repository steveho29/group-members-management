import React from 'react'
import { useTable } from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

export function ReactTable({ columns, data, onRowClick }) {
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
                            <td className="text-right">
                                <div className="table-action">
                                    <Link to="#" className="btn btn-sm bg-info-light mr-1">
                                        <FontAwesomeIcon icon={faEye} /> View
                                    </Link>

                                    <Link to="#" className="btn btn-sm bg-success-light mr-1">
                                        <FontAwesomeIcon icon={faCheck} /> Accept
                                    </Link>
                                    <Link to="#" className="btn btn-sm bg-danger-light">
                                        <FontAwesomeIcon icon={faTimes} /> Cancel
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}