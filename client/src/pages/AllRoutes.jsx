import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {CreatePost, Home} from './'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create-post' element={<CreatePost />} />
            </Routes>
        </>
    )
}

export default AllRoutes