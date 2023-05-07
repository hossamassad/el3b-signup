import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={[styles.landingPage, styles.image2IconLayout]}>
      <Image
        style={[styles.backgroundMeshIcon, styles.signUpWithPosition]}
        resizeMode="cover"
        source={require("../assets/background-mesh5.png")}
      />
      <View style={[styles.statusbarIphone13, styles.signUpWithPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={styles.landingPageInner}>
        <View style={styles.largeButtonParent}>
          <LinearGradient
            style={[styles.largeButton, styles.buttonFlexBox]}
            locations={[0, 1]}
            colors={["#a903d2", "#410095"]}
          >
            <Text style={[styles.buttonText, styles.buttonTypo]}>Sign Up</Text>
          </LinearGradient>
          <View style={[styles.largeButton1, styles.largeLayout]}>
            <Text style={[styles.buttonText, styles.buttonTypo]}>Log In</Text>
          </View>
          <View style={styles.largeLayout}>
            <View style={styles.signUpWithParent}>
              <Text style={[styles.signUpWith, styles.buttonTypo]}>
                Sign Up With
              </Text>
              <Image
                style={styles.logosgoogleIcon}
                resizeMode="cover"
                source={require("../assets/logosgoogleicon1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.buttonText2, styles.buttonTypo]}>
          Continue as Guest
        </Text>
      </View>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
      <View style={[styles.el3b1Parent, styles.buttonFlexBox]}>
        <Image
          style={styles.el3b1Icon}
          resizeMode="cover"
          source={require("../assets/el3b-1.png")}
        />
        <Text style={[styles.text1, styles.buttonFlexBox]}>
          It's Time To Kick Ass And Chew Bubble Gum
        </Text>
        <View style={[styles.textLogo, styles.textLogoShadowBox]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image2IconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  signUpWithPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTypo: {
    fontFamily: FontFamily.buttonsButton,
    fontWeight: "500",
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  largeLayout: {
    marginTop: 10,
    height: 67,
    borderRadius: Border.br_3xs,
    width: 270,
  },
  textLogoShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  backgroundMeshIcon: {
    width: 500,
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
    textAlign: "center",
    color: Color.grayscalesWhite,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
    height: 21,
    width: 54,
  },
  leftSide: {
    marginLeft: -180.5,
    top: 14,
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
    overflow: "hidden",
  },
  buttonText: {
    lineHeight: 30,
    letterSpacing: 0.4,
    fontSize: FontSize.headersH2Light_size,
    fontFamily: FontFamily.buttonsButton,
    fontWeight: "500",
  },
  largeButton: {
    backgroundColor: Color.gradientsButton,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    justifyContent: "center",
    height: 67,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#5921cb",
    borderRadius: Border.br_3xs,
    width: 270,
  },
  largeButton1: {
    borderStyle: "solid",
    borderColor: "#9636e2",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#5921cb",
    marginTop: 10,
  },
  signUpWith: {
    lineHeight: 30,
    letterSpacing: 0.4,
    fontSize: FontSize.headersH2Light_size,
    fontFamily: FontFamily.buttonsButton,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  logosgoogleIcon: {
    top: 5,
    left: 153,
    width: 18,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  signUpWithParent: {
    top: 18,
    left: 52,
    width: 171,
    height: 30,
    position: "absolute",
  },
  largeButtonParent: {
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  landingPageInner: {
    top: 420,
    left: 80,
    height: 221,
    width: 270,
    position: "absolute",
  },
  buttonText2: {
    fontSize: FontSize.buttonsButton_size,
    letterSpacing: 0.3,
    lineHeight: 21,
  },
  button: {
    marginTop: 280,
    marginLeft: -93.5,
    top: "50%",
    height: 33,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.grayscalesWhite,
    width: 134,
    height: 5,
  },
  homeindicator: {
    top: 898,
    left: 132,
    width: 166,
    height: 34,
    position: "absolute",
  },
  el3b1Icon: {
    width: 303,
    height: 107,
  },
  text1: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.headersH1Heavy,
    display: "flex",
    width: 366,
    marginTop: 11,
    textAlign: "center",
  },
  image2Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  textLogo: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 327,
    height: 49,
    display: "none",
    marginTop: 11,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  el3b1Parent: {
    top: 274,
    left: 32,
    position: "absolute",
  },
  landingPage: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
  },
});

export default LandingPage;
