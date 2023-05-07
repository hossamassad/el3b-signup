import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp05 = () => {
  return (
    <View style={styles.signUp05}>
      <Image
        style={[styles.backgroundMeshIcon, styles.statusbarIphone13Position]}
        resizeMode="cover"
        source={require("../assets/background-mesh2.png")}
      />
      <View
        style={[styles.statusbarIphone13, styles.statusbarIphone13Position]}
      >
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
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
      <Image
        style={styles.el3b2Icon}
        resizeMode="cover"
        source={require("../assets/el3b-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarIphone13Position: {
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
    color: Color.grayscalesWhite,
    textAlign: "center",
    height: 20,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
    height: 21,
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
  el3b2Icon: {
    top: 342,
    left: 52,
    width: 324,
    height: 94,
    position: "absolute",
  },
  signUp05: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default SignUp05;
