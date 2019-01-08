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
      width: 0, height: 13
    },
    shadowOpacity: 0.1,
    shadowRadius: 7
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
    backgroundColor: WHITE,
  },
  cardList: {
    display: "flex",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 50
  },
  card : {
    backgroundColor:  WHITE,
    borderRadius: 28,
    flex:1,
    height:420,
    marginBottom: 50,
    resizeMode:"cover",
    ...SHADOWS.vertical,
    width:"100%"
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