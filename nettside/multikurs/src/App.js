import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import logo from './images/profilepic.png';
import { useNavigate } from 'react-router-dom';
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import Info from './info';
import Login from './login';
import Layout from './layout';
import { UserContext } from './context';
import { useRefreshUserData } from './custom_hooks';

function App() {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/course/:courseId" element={<Info />} />
				<Route path="/loggin" element={<Login isLogin={true} />} />
				<Route path="/registrerdeg" element={<Login isLogin={false} />} />
			</Route>
		</Routes>
	);
}

export default App;