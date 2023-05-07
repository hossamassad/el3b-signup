import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GuestFlow2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.guestFlow2}>
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
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
      <View style={styles.guestFlow2Inner}>
        <View style={[styles.groupWrapper, styles.bookPlayPosition]}>
          <View style={[styles.groupWrapper, styles.bookPlayPosition]}>
            <Text
              style={[styles.bookPlay, styles.bookPlayPosition]}
            >{` Book & play at your favorite spots`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.signUpProgressBar}>
        <LinearGradient
          style={styles.signUpProgressBarChild}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        />
        <View style={[styles.signUpProgressBarItem, styles.signLayout]} />
        <View style={[styles.signUpProgressBarInner, styles.signLayout]} />
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Pressable
          style={[styles.pressable, styles.button1ShadowBox]}
          onPress={() => navigation.navigate("GuestFlow3")}
        >
          <Text style={[styles.buttonText, styles.textFlexBox]}>Next</Text>
        </Pressable>
      </LinearGradient>
      <Pressable
        style={[styles.button1, styles.button1ShadowBox]}
        onPress={() => navigation.navigate("SignUp05")}
      >
        <Text style={[styles.buttonText, styles.textFlexBox]}>Skip Intro</Text>
      </Pressable>
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
  textFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  bookPlayPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  signLayout: {
    backgroundColor: Color.gainsboro,
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 157,
    left: 136,
    position: "absolute",
  },
  button1ShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#5921cb",
    borderRadius: Border.br_3xs,
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
    width: 54,
    textAlign: "center",
    color: Color.grayscalesWhite,
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
  bookPlay: {
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 36,
    fontFamily: FontFamily.headersH2Light,
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  groupWrapper: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  guestFlow2Inner: {
    height: "3.86%",
    width: "90.68%",
    top: "63.2%",
    right: "4.66%",
    bottom: "32.94%",
    left: "4.66%",
    position: "absolute",
  },
  signUpProgressBarChild: {
    backgroundColor: Color.gradientsButton,
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    left: 0,
    top: 0,
    position: "absolute",
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
    fontSize: FontSize.buttonsButton_size,
    letterSpacing: 0.3,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
  },
  pressable: {
    backgroundColor: Color.gradientsButton,
    height: "100%",
    width: "100%",
  },
  button: {
    top: 691,
  },
  button1: {
    top: 747,
    height: 48,
    width: 157,
    left: 136,
    position: "absolute",
  },
  guestFlow2: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default GuestFlow2;
