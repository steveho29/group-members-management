import { useDispatch, useSelector } from "react-redux/es/exports";
import { loadAuth } from "../../store/authSlice";
import { useState } from 'react'
const useFetch = (url) => {
    console.log(url)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const handleGoogle = async (response) => {
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ credential: response.credential }),
        })
            .then((res) => {
                setLoading(false);

                return res.json();
            })
            .then((data) => {
                const { access_token,  refresh_token } = data
                localStorage.setItem("accessToken", access_token);
                localStorage.setItem("refreshToken", refresh_token)
                dispatch(loadAuth());
                window.location.reload();
                throw new Error(data?.message || data);
            })
            .catch((error) => {
                setError(error?.message);
            });
    };
    return { loading, error, handleGoogle };
};

export default useFetch;
