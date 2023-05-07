import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn01 = () => {
  return (
    <View style={styles.logIn01}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh.png")}
      />
      <View style={styles.statusbarIphone13}>
        <Image
          style={[styles.notchIcon, styles.sideIconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.sideIconPosition]}>
          <View style={[styles.statusbarTime, styles.sideIconPosition]}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.sideIconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={styles.newToGamerpalContainer}>
        <Text style={styles.newToGamerpalContainer1}>
          <Text style={styles.goodToSeeTypo}>{`New to GamerPal? `}</Text>
          <Text style={styles.logInTypo}>Sign Up</Text>
          <Text style={styles.logInTypo}>{` >`}</Text>
        </Text>
      </Text>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <View style={[styles.rememberMeParent, styles.iconBackArrowPosition]}>
        <Text style={styles.rememberMe}>Remember me</Text>
        <View style={styles.radioButton}>
          <View style={styles.radioButtonChild} />
        </View>
      </View>
      <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      <Image
        style={[styles.iconBackArrow, styles.iconBackArrowPosition]}
        resizeMode="cover"
        source={require("../assets/icon--back-arrow.png")}
      />
      <View style={styles.component7Parent}>
        <View style={[styles.component7, styles.componentLayout]}>
          <View style={[styles.component7Child, styles.componentLayout]} />
          <Text style={styles.inputTextHere}>Password</Text>
          <Text style={[styles.textFieldDetails, styles.textLayout]}>
            Text field details here text field details here
          </Text>
        </View>
        <View style={[styles.component6, styles.componentLayout]}>
          <View style={[styles.component7Child, styles.componentLayout]} />
          <Text style={styles.inputTextHere}>Username</Text>
          <Text style={[styles.textFieldDetails1, styles.textLayout]} />
        </View>
      </View>
      <Text style={[styles.goodToSee, styles.goodToSeeTypo]}>
        Good to see you again!
      </Text>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Text style={[styles.buttonText, styles.buttonTypo]}>Log In</Text>
      </LinearGradient>
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={styles.buttonTypo}>
          <Text style={styles.logInWith}>{`Log In With  `}</Text>
          <Text style={styles.text2}> .</Text>
        </Text>
      </View>
      <Image
        style={styles.logosgoogleIcon}
        resizeMode="cover"
        source={require("../assets/logosgoogleicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sideIconPosition: {
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  iconBackArrowPosition: {
    left: 36,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
  },
  componentLayout: {
    height: 52,
    width: 370,
    left: 0,
    position: "absolute",
  },
  textLayout: {
    height: 14,
    width: 350,
    display: "none",
    color: Color.oldStylesGreyscaleGrey,
    top: 58,
    left: 20,
    lineHeight: 17,
    fontFamily: FontFamily.headersH2Light,
    alignItems: "center",
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  goodToSeeTypo: {
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
  },
  buttonFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.buttonsButton,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0.3,
    fontSize: FontSize.buttonsButton_size,
    textAlign: "center",
  },
  backgroundMeshIcon: {
    width: 500,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 0,
    height: 0,
  },
  text: {
    top: 1,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    width: 54,
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
    top: 0,
  },
  leftSide: {
    marginLeft: -180.5,
    top: 14,
    height: 21,
    width: 54,
  },
  rightSideIcon: {
    marginLeft: 104.5,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13: {
    width: 429,
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.grayscalesWhite,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    top: 898,
    left: 132,
    width: 166,
    height: 34,
    position: "absolute",
  },
  newToGamerpalContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  newToGamerpalContainer: {
    top: 810,
    left: 88,
    display: "flex",
    width: 253,
    alignItems: "center",
    fontSize: FontSize.buttonsButton_size,
    height: 34,
    textAlign: "center",
    position: "absolute",
  },
  forgotPassword: {
    top: 499,
    left: 285,
    textAlign: "right",
    lineHeight: 17,
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  rememberMe: {
    left: 25,
    textAlign: "left",
    color: Color.grayscalesMediumGrey,
    top: 4,
    lineHeight: 17,
    fontFamily: FontFamily.headersH2Light,
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  radioButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.grayscalesWhite,
    position: "absolute",
    width: "100%",
  },
  radioButton: {
    width: 16,
    height: 16,
    top: 4,
    left: 0,
    position: "absolute",
  },
  rememberMeParent: {
    top: 495,
    width: 118,
    height: 24,
  },
  logIn: {
    top: 81,
    left: 181,
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  iconBackArrow: {
    width: 12,
    top: 84,
    height: 21,
  },
  component7Child: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.solidColoursDarkPurple,
    top: 0,
  },
  inputTextHere: {
    top: 18,
    left: 20,
    textAlign: "left",
    color: Color.grayscalesMediumGrey,
    lineHeight: 17,
    fontFamily: FontFamily.headersH2Light,
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  textFieldDetails: {
    textAlign: "left",
  },
  component7: {
    top: 84,
  },
  textFieldDetails1: {
    textAlign: "right",
  },
  component6: {
    top: 0,
  },
  component7Parent: {
    top: 327,
    height: 136,
    width: 370,
    left: 36,
    position: "absolute",
  },
  goodToSee: {
    width: "86.25%",
    top: "30.58%",
    left: "8.39%",
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  buttonText: {
    color: Color.grayscalesWhite,
  },
  button: {
    top: 585,
    left: 136,
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 157,
    height: 48,
    backgroundColor: Color.gradientsButton,
  },
  logInWith: {
    color: Color.grayscalesWhite,
  },
  text2: {
    color: "rgba(255, 255, 255, 0)",
  },
  button1: {
    top: 648,
    left: 135,
    height: 33,
  },
  logosgoogleIcon: {
    top: 657,
    left: 256,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  logIn01: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default LogIn01;
