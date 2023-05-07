import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SignUpSocial01 = () => {
  return (
    <View style={styles.signUpSocial01}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh.png")}
      />
      <View style={styles.statusbarIphone13}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
        <Image
          style={styles.rightSideIcon}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
      <Image
        style={[styles.iconBackArrow, styles.leftSideLayout]}
        resizeMode="cover"
        source={require("../assets/icon--back-arrow.png")}
      />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.signUpProgressBar}>
        <LinearGradient
          style={[styles.signUpProgressBarChild, styles.buttonBg]}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        />
        <View style={[styles.signUpProgressBarItem, styles.signLayout]} />
        <View style={[styles.signUpProgressBarInner, styles.signLayout]} />
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.buttonParent, styles.parentLayout]}>
          <LinearGradient
            style={[styles.button, styles.buttonBg]}
            locations={[0, 1]}
            colors={["#a903d2", "#410095"]}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
          <View style={[styles.frameWrapper, styles.parentLayout]}>
            <View style={[styles.component6Parent, styles.parentLayout]}>
              <View style={[styles.component6, styles.componentLayout]}>
                <View
                  style={[styles.component6Child, styles.componentLayout]}
                />
                <Text style={[styles.textTextText, styles.textFlexBox]}>
                  sampleemail@gmail.com
                </Text>
                <Image
                  style={styles.iconCheck}
                  resizeMode="cover"
                  source={require("../assets/icon--check.png")}
                />
                <Text style={[styles.textFieldDetails, styles.textLayout]}>
                  Text field details here text field details here
                </Text>
              </View>
              <View style={[styles.component7, styles.componentLayout]}>
                <View
                  style={[styles.component6Child, styles.componentLayout]}
                />
                <Text style={[styles.inputTextHere, styles.textFlexBox]}>
                  Username *
                </Text>
                <Text
                  style={[
                    styles.textFieldDetails1,
                    styles.textFieldDetails1Typo,
                  ]}
                >
                  0/20
                </Text>
              </View>
              <Text
                style={[
                  styles.alreadyHaveAnContainer,
                  styles.textFieldDetails1Typo,
                ]}
              >
                <Text style={styles.alreadyHaveAnContainer1}>
                  <Text
                    style={styles.alreadyHaveAn}
                  >{`Already have an account? `}</Text>
                  <Text style={styles.logInTypo}>Log in</Text>
                  <Text style={styles.logInTypo}>{` >`}</Text>
                </Text>
              </Text>
              <Text style={styles.byClickingContinueContainer}>
                <Text style={styles.byClickingContinueYouAgre}>
                  <Text
                    style={styles.byClickingContinue}
                  >{`By clicking continue, you agree to our
`}</Text>
                  <Text style={styles.text2}>{` `}</Text>
                </Text>
                <Text style={styles.logInTypo}>Terms of Service</Text>
                <Text style={styles.byClickingContinueYouAgre}>
                  <Text style={styles.text2}>{` `}</Text>
                  <Text style={styles.byClickingContinue}>{` and  `}</Text>
                </Text>
                <Text style={styles.logInTypo}>Privacy Policy</Text>
                <Text style={styles.text4}>.</Text>
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.getStarted, styles.textFlexBox]}>Get Started</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSideLayout: {
    height: 21,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
  },
  buttonBg: {
    backgroundColor: Color.gradientsButton,
    position: "absolute",
  },
  signLayout: {
    backgroundColor: Color.gainsboro,
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 370,
    position: "absolute",
  },
  componentLayout: {
    height: 52,
    width: 370,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    width: 350,
    top: 58,
    height: 14,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    left: 20,
  },
  textFieldDetails1Typo: {
    display: "flex",
    fontSize: FontSize.buttonsButton_size,
    alignItems: "center",
    position: "absolute",
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
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 1,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    textAlign: "center",
    color: Color.grayscalesWhite,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    width: 54,
    left: "50%",
    top: 0,
  },
  leftSide: {
    marginLeft: -180.5,
    top: 14,
    width: 54,
    left: "50%",
  },
  rightSideIcon: {
    marginLeft: 104.5,
    width: 77,
    height: 13,
    top: 19,
    left: "50%",
    position: "absolute",
  },
  statusbarIphone13: {
    width: 429,
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    top: 81,
    left: 170,
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  iconBackArrow: {
    left: 36,
    width: 12,
    top: 84,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.grayscalesWhite,
    width: 134,
    height: 5,
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
  signUpProgressBarChild: {
    width: 46,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gradientsButton,
    height: 8,
    left: 0,
    top: 0,
  },
  signUpProgressBarItem: {
    left: 70,
  },
  signUpProgressBarInner: {
    left: 140,
  },
  signUpProgressBar: {
    top: 133,
    left: 122,
    width: 186,
    height: 8,
    position: "absolute",
  },
  buttonText: {
    letterSpacing: 0.3,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
    fontSize: FontSize.buttonsButton_size,
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  button: {
    top: 182,
    left: 106,
    borderRadius: Border.br_3xs,
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
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    alignItems: "center",
  },
  component6Child: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.solidColoursDarkPurple,
    top: 0,
  },
  textTextText: {
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    left: 20,
    top: 18,
    textAlign: "left",
    fontSize: FontSize.buttonsButton_size,
    color: Color.grayscalesWhite,
  },
  iconCheck: {
    left: 332,
    width: 19,
    height: 14,
    top: 19,
    position: "absolute",
  },
  textFieldDetails: {
    color: Color.oldStylesGreyscaleGrey,
    display: "none",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.buttonsButton_size,
    alignItems: "center",
  },
  component6: {
    top: 0,
  },
  inputTextHere: {
    color: Color.grayscalesMediumGrey,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    left: 20,
    top: 18,
    textAlign: "left",
    fontSize: FontSize.buttonsButton_size,
  },
  textFieldDetails1: {
    textAlign: "right",
    color: Color.grayscalesMediumGrey,
    width: 350,
    top: 58,
    height: 14,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    left: 20,
  },
  component7: {
    top: 84,
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
  },
  alreadyHaveAnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  alreadyHaveAnContainer: {
    top: 484,
    left: 59,
    width: 253,
    height: 34,
    textAlign: "center",
  },
  byClickingContinue: {
    color: Color.grayscalesMediumGrey,
  },
  text2: {
    color: Color.mediumblue,
  },
  byClickingContinueYouAgre: {
    fontFamily: FontFamily.headersH2Light,
  },
  text4: {
    color: Color.grayscalesMediumGrey,
    fontFamily: FontFamily.headersH2Light,
  },
  byClickingContinueContainer: {
    top: 246,
    left: 61,
    fontSize: FontSize.buttonsButton_size,
    textAlign: "center",
    position: "absolute",
  },
  component6Parent: {
    height: 304,
    left: 0,
    top: 0,
  },
  frameWrapper: {
    height: 156,
    left: 0,
    top: 0,
  },
  buttonParent: {
    top: 42,
    height: 230,
    left: 0,
  },
  getStarted: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 30,
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
    width: "100%",
  },
  groupParent: {
    top: 285,
    left: 30,
    height: 272,
  },
  signUpSocial01: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default SignUpSocial01;
