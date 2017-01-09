import React, { Component } from 'react';
import { Navigator } from 'react-native';

let configureScene = (route) => {
  switch (route.id) {
    case 100: {
      return { ...Navigator.SceneConfigs.FloatFromBottom, gestures: false }
    }
    default: {
			return { ...Navigator.SceneConfigs.FadeAndroid, gestures: false }
    }
  }
}

export default configureScene;
