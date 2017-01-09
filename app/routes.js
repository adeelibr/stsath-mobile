import React, { Component } from 'react';

import SplashPage from './login/SplashPage';
import LoginPage from './login/LoginPage';
import SignupPage from './login/SignupPage';

import WelcomePage from './dashboard/WelcomePage';
import SignoutPage from './dashboard/SignoutPage';
import SearchPage from './dashboard/SearchPage';

let routes = (route, navigator, data) => {

	// let currentRoute = navigator.getCurrentRoutes();
  // console.log ('routes.js -- Route History Is:', JSON.stringify(currentRoute));

	switch (route.id) {
    case 1: {
      return <SplashPage navigator={navigator}/>;
		}
    case 2: {
      return <LoginPage navigator={navigator}/>;
		}
    case 3: {
      return <SignupPage navigator={navigator}/>;
    }
    case 4: {
      return <WelcomePage navigator={navigator}/>;
    }
    case 5: {
      return <SignoutPage navigator={navigator}/>;
    }
    case 6: {
      return <SearchPage navigator={navigator}/>;
		}
  }

}

module.exports = routes;
