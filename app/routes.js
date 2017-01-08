import React, { Component } from 'react';

import Splash from './intro/Splash';

let routes = (route, navigator, data) => {

	let currentRoute = navigator.getCurrentRoutes();
  console.log ('routes.js -- Route History Is:', JSON.stringify(currentRoute));

	switch (route.id) {
    case 1: {
      return <Splash navigator = {navigator}/>;
		}
  }

}

module.exports = routes;
