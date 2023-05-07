import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignUp02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp02}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh3.png")}
      />
      <View style={styles.statusbarIphone13}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
          </View>
        </View>
        <Image
          style={styles.rightSideIcon}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
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
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </LinearGradient>
      <View style={styles.didntReceiveACodeSendAgParent}>
        <Pressable
          style={styles.didntReceiveAContainer}
          onPress={() => navigation.navigate("SignUp6")}
        >
          <Text style={styles.text1}>
            <Text style={styles.didntReceiveAContainer1}>
              <Text
                style={styles.didntReceiveA}
              >{`Didn’t receive a code? `}</Text>
              <Text style={styles.signUpTypo}>Send again</Text>
              <Text style={styles.text2}>.</Text>
            </Text>
          </Text>
        </Pressable>
        <View
          style={[
            styles.aConfirmationCodeWasSentTParent,
            styles.confirmationPosition,
          ]}
        >
          <Text
            style={[
              styles.aConfirmationCodeContainer,
              styles.confirmationPosition,
            ]}
          >
            <Text style={styles.text2}>{`A confirmation code was sent to
`}</Text>
            <Text style={styles.signUpTypo}>example123@gmail.com</Text>
            <Text style={styles.text2}>.</Text>
          </Text>
          <View style={[styles.component5Parent, styles.component5Layout]}>
            <View style={[styles.component5, styles.component5Layout]}>
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
          </View>
        </View>
      </View>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      <Image
        style={[styles.iconBackArrow, styles.leftSideLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  leftSideLayout: {
    height: 21,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  confirmationPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  component5Layout: {
    width: 369,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    left: 20,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
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
    color: Color.grayscalesWhite,
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
    justifyContent: "center",
    backgroundColor: Color.gradientsButton,
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
  didntReceiveA: {
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
  },
  text2: {
    fontFamily: FontFamily.headersH2Light,
  },
  didntReceiveAContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text1: {
    display: "flex",
    width: 253,
    height: 19,
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
    alignItems: "center",
    textAlign: "center",
  },
  didntReceiveAContainer: {
    left: 73,
    top: 233,
    position: "absolute",
  },
  aConfirmationCodeContainer: {
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.grayscalesWhite,
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
    top: 33,
    height: 53,
    left: 0,
  },
  checkYourEmail: {
    left: "10.84%",
    top: "0%",
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  component5Parent: {
    height: 86,
    left: 20,
    top: 133,
    width: 369,
  },
  aConfirmationCodeWasSentTParent: {
    height: "86.9%",
    right: "0%",
    bottom: "13.1%",
  },
  didntReceiveACodeSendAgParent: {
    top: 285,
    left: 15,
    width: 389,
    height: 252,
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
    left: 122,
    width: 186,
    height: 8,
    top: 133,
    position: "absolute",
  },
  signUp02: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default SignUp02;
