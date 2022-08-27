import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import SignUp from './user/SignUp';
import Cookies from 'universal-cookie';
import Header from './core/Header';
import jwt_decode from "jwt-decode";
import './App.css'
import Protected from './pages/Protected';
import UserInfo from './user/UserInfo';
const cookies = new Cookies();
export default function App() {
    const [user,setUser] =useState(null)
    let token=cookies.get('token')
    if (token) {
        var decoded = jwt_decode(token);
        console.log(decoded);
    }
    useEffect(() => {
        if (decoded) {
            setUser(decoded)
        }
        // eslint-disable-next-line
    },[]);
    return (
        <div>
            <BrowserRouter>
            <Header user={user}/>
                {/* <Menu/> */}
                <Routes>
                    <Route path='/signin' element={user?< Home />:< Signin  />}/>
                    <Route path='/signup' element={< SignUp />}/>
                    <Route path='/' element={< Home />}/>
                    <Route path='/protected' element={user?<Protected/>:< Signin  />}/>
                    <Route path='/userinfo' element={user?<UserInfo user={user}/>:< Signin  />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
