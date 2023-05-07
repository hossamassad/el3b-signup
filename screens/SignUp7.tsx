import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignUp7 = () => {
  return (
    <View style={styles.signUp7}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh2.png")}
      />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("SignUpSocial6")}
        >
          <Text style={[styles.buttonText, styles.textFlexBox]}>Continue</Text>
        </Pressable>
      </LinearGradient>
      <Text style={[styles.aConfirmationCodeContainer, styles.textFlexBox]}>
        <Text style={styles.aConfirmationCode}>{`A confirmation code was sent to
`}</Text>
        <Text style={styles.signUpTypo}>example123@gmail.com</Text>
        <Text style={styles.aConfirmationCode}>.</Text>
      </Text>
      <View style={styles.component5}>
        <View style={styles.component5Child} />
        <Text
          style={[styles.inputTextHere, styles.textTypo]}
        >{`Confirmation Code `}</Text>
        <Text style={[styles.textFieldDetails, styles.textTypo]}>
          Text field details here text field details here
        </Text>
      </View>
      <Text style={styles.checkYourEmail}>
        Check your email and enter the code below.
      </Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      <Image
        style={styles.iconBackArrow}
        resizeMode="cover"
        source={require("../assets/icon--back-arrow.png")}
      />
      <View style={styles.signUpProgressBar}>
        <LinearGradient
          style={[styles.signUpProgressBarChild, styles.signLayout]}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        />
        <LinearGradient
          style={[styles.signUpProgressBarItem, styles.signLayout]}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        />
        <View style={[styles.signUpProgressBarInner, styles.signLayout]} />
      </View>
      <View style={styles.pleaseWait90SecondsBeforeParent}>
        <Text style={[styles.pleaseWait90, styles.pleaseWait90Layout]}>
          Please wait 90 seconds before resending
        </Text>
        <Text
          style={[styles.didntReceiveAContainer, styles.pleaseWait90Layout]}
        >
          <Text style={styles.didntReceiveAContainer1}>
            <Text
              style={styles.didntReceiveA}
            >{`Didn’t receive a code? `}</Text>
            <Text style={styles.signUpTypo}>Send again</Text>
            <Text style={styles.aConfirmationCode}>.</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.statusbarIphone13}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.text2Layout]}>
          <View style={[styles.statusbarTime, styles.text2Layout]}>
            <Text style={[styles.text2, styles.text2Layout]}>9:41</Text>
          </View>
        </View>
        <Image
          style={styles.rightSideIcon}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  textTypo: {
    textAlign: "left",
    left: 20,
    lineHeight: 17,
    fontFamily: FontFamily.headersH2Light,
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
  },
  signLayout: {
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  pleaseWait90Layout: {
    height: 19,
    display: "flex",
    lineHeight: 17,
    textAlign: "center",
    fontSize: FontSize.buttonsButton_size,
    alignItems: "center",
    position: "absolute",
  },
  text2Layout: {
    width: 54,
    position: "absolute",
  },
  backgroundMeshIcon: {
    width: 500,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
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
  buttonText: {
    letterSpacing: 0.3,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
    fontSize: FontSize.buttonsButton_size,
    textAlign: "center",
  },
  pressable: {
    borderRadius: Border.br_3xs,
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.gradientsButton,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    left: 136,
    top: 691,
    width: 157,
    height: 48,
    position: "absolute",
  },
  aConfirmationCode: {
    fontFamily: FontFamily.headersH2Light,
  },
  aConfirmationCodeContainer: {
    width: "90.68%",
    top: "30.58%",
    left: "4.66%",
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 28,
    position: "absolute",
  },
  component5Child: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.solidColoursDarkPurple,
    width: 370,
    height: 52,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputTextHere: {
    top: 18,
    color: Color.grayscalesMediumGrey,
  },
  textFieldDetails: {
    top: 58,
    color: Color.oldStylesGreyscaleGrey,
    display: "none",
    width: 350,
    height: 14,
    alignItems: "center",
  },
  component5: {
    top: 451,
    left: 30,
    width: 369,
    height: 53,
    position: "absolute",
  },
  checkYourEmail: {
    top: "44.85%",
    left: "17.48%",
    lineHeight: 17,
    fontFamily: FontFamily.headersH2Light,
    textAlign: "center",
    color: Color.grayscalesWhite,
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
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
    top: 84,
    left: 36,
    width: 12,
    height: 21,
    position: "absolute",
  },
  signUpProgressBarChild: {
    backgroundColor: Color.gradientsButton,
    left: 0,
  },
  signUpProgressBarItem: {
    left: 70,
    backgroundColor: Color.gradientsButton,
  },
  signUpProgressBarInner: {
    left: 140,
    backgroundColor: Color.gainsboro,
  },
  signUpProgressBar: {
    top: 133,
    left: 122,
    width: 186,
    height: 8,
    position: "absolute",
  },
  pleaseWait90: {
    top: 25,
    color: Color.statesError,
    width: 284,
    fontFamily: FontFamily.headersH2Light,
    justifyContent: "center",
    left: 0,
  },
  didntReceiveA: {
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
  },
  didntReceiveAContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  didntReceiveAContainer: {
    left: 15,
    width: 253,
    top: 0,
  },
  pleaseWait90SecondsBeforeParent: {
    top: 518,
    left: 73,
    height: 44,
    width: 284,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 0,
    height: 0,
    left: "50%",
    position: "absolute",
  },
  text2: {
    top: 1,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    textAlign: "center",
    color: Color.grayscalesWhite,
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    height: 21,
    left: "50%",
    top: 0,
  },
  leftSide: {
    marginLeft: -180.5,
    top: 14,
    height: 21,
    left: "50%",
  },
  rightSideIcon: {
    marginLeft: 104.5,
    top: 19,
    width: 77,
    height: 13,
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
  signUp7: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default SignUp7;
