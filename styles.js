import { StyleSheet } from 'react-native';

export const RASBERRY_PINK = "#E56399";
export const TUBMLEWEED = "D3A588";
export const ALMOND = "#ECE2D0";
export const PEARL_AQUA = "#7FD1B9";
export const NON_PHOTO_BLUE = "#90E5ED";
export const RAISIN_BLACK = "#2D2524";
export const DAVYS_GREY = "#5A5A5A";
export const WHITE = "#FFF";
export const RUSTY_RED = "#DB2B39";

export const FONTS = {
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 28
  },
  h3: {
    fontSize: 24
  },
  h4: {
    fontSize: 18
  }
}

export const SHADOWS = {
  vertical: {
    shadowColor: DAVYS_GREY,
    shadowOffset: {
      width: 0, height: -0.3
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.6
  }
}

export default StyleSheet.create({
  actionButton:{
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    width:60,
    height:60,
    paddingTop:5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card : {
    display:"flex",
    padding:20,
    minHeight:350,
    justifyContent: 'center',
    backgroundColor: RASBERRY_PINK,
    borderRadius: 35,
    alignSelf:"center",
    width: "100%",
    position:"absolute",
    top:0,
    ...SHADOWS.vertical
  },
  choiceButton : {
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:RASBERRY_PINK,
    minWidth: 150,
    height:50,
    marginBottom:30,
    ...SHADOWS.wide
  }
})