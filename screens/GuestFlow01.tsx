import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GuestFlow01 = () => {
  return (
    <View style={styles.guestFlow01}>
      <Image
        style={[styles.backgroundMeshIcon, styles.statusbarIphone13Position]}
        resizeMode="cover"
        source={require("../assets/background-mesh.png")}
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
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.groupContainer, styles.groupPosition]}>
              <Text style={[styles.welcomeToEl3b, styles.groupPosition]}>
                Welcome to EL3B!
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.loaderIcon}
          resizeMode="cover"
          source={require("../assets/loader.png")}
        />
      </View>
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
  groupPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
  welcomeToEl3b: {
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 36,
    fontFamily: FontFamily.headersH2Light,
    left: "0%",
    top: "0%",
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  groupContainer: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
  },
  groupWrapper: {
    height: "26.57%",
    bottom: "73.43%",
    right: "0%",
    left: "0%",
    top: "0%",
  },
  loaderIcon: {
    top: 56,
    left: 155,
    width: 79,
    height: 79,
    position: "absolute",
  },
  groupParent: {
    height: "14.54%",
    width: "90.68%",
    top: "32.73%",
    right: "4.66%",
    bottom: "52.74%",
    left: "4.66%",
    position: "absolute",
  },
  guestFlow01: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default GuestFlow01;
