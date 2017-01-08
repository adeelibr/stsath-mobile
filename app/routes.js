import React, { Component } from 'react';

import SplashPage from './login/SplashPage';
import LoginhPage from './login/LoginhPage';

let routes = (route, navigator, data) => {

	let currentRoute = navigator.getCurrentRoutes();
  console.log ('routes.js -- Route History Is:', JSON.stringify(currentRoute));

	switch (route.id) {
    case 1: {
      return <SplashPage navigator = {navigator}/>;
		}
    case 2: {
      return <LoginPage navigator = {navigator}/>;
		}
  }

}

module.exports = routes;
