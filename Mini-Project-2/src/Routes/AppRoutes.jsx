import React from 'react'
import { BrowserRouter as Routes, Route, Router} from "react-router-dom";
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Explore from '../Pages/Explore'




const AppRoutes = () => {
  return (
    <Router>
        <Header/>
    <Routes>
        <Route index element={<Landing {...props}/>}/>
        <Route path="login" element={<Login {...props}/>}/>
        <Route path="dashboard" element={<Dashboard {...props}/>}/>
        <Route path="explore" element={<Explore {...props}/>}/>
        <Route path="leagues" element={<Leagues {...props}/>}/>
        <Route path="community" element={<Community {...props}/>}/>
    </Routes>
    </Router>
  )
}

export default AppRoutes
