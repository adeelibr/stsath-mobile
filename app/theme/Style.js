import { StyleSheet, Dimensions, Platform } from 'react-native';
const {height, width} = Dimensions.get('window');

import {StyleConstants} from './StyleConstants';
import {Fonts} from './Fonts';

let BaseStyle = StyleSheet.create({

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  rowWithSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  center: {
    alignSelf: 'center',
  },

  centerItems: {
    alignItems: 'center',
  },

  listRow: {
    padding: 10,
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    borderTopColor: '#ececec',
    borderLeftColor: '#ececec',
    borderRightColor: '#ececec',
    backgroundColor: '#ffffff',
  },

  textColorPrimary: {
    color: StyleConstants.primary,
  },

  textColorWhite: {
    color: 'white',
  },

  textColorBlack: {
    color: StyleConstants.black,
  },

  textColorGray: {
    color: StyleConstants.gray,
  },

  b: {
    fontWeight: 'bold',
  },

  f12: {
    fontSize: 12,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f14: {
    fontSize: 14,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f15: {
    fontSize: 15,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f16: {
    fontSize: 16,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f18: {
    fontSize: 18,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f20: {
    fontSize: 20,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f22: {
    fontSize: 22,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f24: {
    fontSize: 24,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f26: {
    fontSize: 26,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  f28: {
    fontSize: 28,
    fontFamily: Fonts.regFont[Platform.OS],
  },

  btnDefault: {
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9999',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPrimary: {
    borderColor: StyleConstants.primary,
    flex: 2,
    marginVertical:2,
    marginBottom: 4,
    marginLeft:20,
    height: 30,
    borderWidth: 0.8,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export {BaseStyle};
