export const getPaginationArray = (count, started_value, pagination) => {
    const totalPages = parseInt(count !== 0 ? (count % pagination !== 0 ?
        count / pagination : count / pagination - 1) : 0);
    const length = totalPages + 1;
    if (length > 3) length = 3;

    if (started_value === 1)
        return [...Array(length).keys()].map(value => value + started_value);

    if (started_value === totalPages + 1)
        return [...Array(length).keys()].map(value => value + started_value - totalPages);

    if (started_value !== 1)
        return [...Array(length).keys()].map(value => value + started_value - 1);
}