import { StyleSheet, Dimensions, Platform } from 'react-native';
const {height, width} = Dimensions.get('window');

import {StyleConstants} from './StyleConstants';
import {Fonts} from './Fonts';

let Style = StyleSheet.create({

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

  errorMsg: {
    textAlign: 'center',
    color: StyleConstants.danger,
  },

  successMsg: {
    textAlign: 'center',
    color: StyleConstants.success,
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
    borderColor: StyleConstants.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Style;
