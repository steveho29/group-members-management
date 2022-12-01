import React from 'react';

import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

const Redirect = () => {
    const history = useHistory();

    useEffect(() => {
        history.push({ pathname: '/dashboard' });
    }, [])

    return (
        <p></p>
    )
}

export { Redirect };