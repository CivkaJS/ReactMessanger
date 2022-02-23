import React from "react";
import { useCallback, useEffect } from "react";
import { Box } from "@mui/system";
import { Button, CircularProgress } from "@mui/material";
import { getAllGist } from "../store/middleware"
import { useDispatch, useSelector } from "react-redux";
import { SelectGists, selectGistsError, selectGistsLoading } from "../store/Gists/selector";

const GistsList = () => {

    const gists = useSelector(SelectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
    const dispatch = useDispatch();


    // const requestGists = useCallback(() => {
    //     setLoading(true);
    //     fetch(API_URL_PUBLIC)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request failed with status ${response.status}`)
    //             }
    //             return response.json();
    //         })
    //         .then((result) => {
    //             setGists(result);
    //         })
    //         .catch(() => {
    //             counter ? setCounter(counter => counter - 1) : setCounter(0);
    //             setError(true);
    //         })
    //         .finally(() => { setLoading(false) });
    // }, [counter])

    const requestGists = useCallback(() => {
        dispatch(getAllGist());
    },[])

    useEffect(() => {
        requestGists(); 
    },[])

    const renderGists = useCallback((gist) => (
        <li key={gist.id}>{gist.description || 'No description'}</li>
    ), []);

    if (loading) {
        return (
            <Box className='PageBox' sx={{ marginTop: '40vh' }}>
                <CircularProgress />
            </Box>
        )
    };

    if (error) {
        return (
            <Box color="secondary" className='PageBox' sx={{ marginTop: '10vh' }}>
                <h1>Error</h1>
                <Button onClick={requestGists} sx={{
                    backgroundColor: 'orange',
                    padding: '15px 100px',
                    marginTop: '10vh',
                    '&:hover': {
                        backgroundColor: "bisque",
                    },
                }}>
                    Retry
                </Button>
            </Box>
        )
    }

    return (
        <Box className='PageBox'>
            <ul style={{ listStyleType: 'none' }}>{gists?.map(renderGists)}</ul>
        </Box>
    )
}
export default GistsList;