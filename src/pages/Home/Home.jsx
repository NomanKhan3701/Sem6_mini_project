import React, { useEffect } from 'react'
import View from '../../components/View/View'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux';

const Home = () => {
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token);
    const location = useLocation();

    useEffect(() => {

    }, [])

    return (
        <></>
    )
}

export default Home