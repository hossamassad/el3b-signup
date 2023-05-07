import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const GoogleModal1 = () => {
  return (
    <View style={styles.googleModal}>
      <View style={styles.googleModalChild} />
      <Text
        style={[styles.externalLink, styles.pressableFlexBox]}
      >{`External link > log into Google account`}</Text>
      <LinearGradient
        style={styles.largeButton}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableFlexBox]}
          onPress={() => navigation.navigate("SignUpSocial01")}
        >
          <Text style={[styles.buttonText, styles.buttonTextFlexBox]}>
            Continue
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  googleModalChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.oldStylesGreyscaleBlack,
    width: 382,
    position: "absolute",
    height: 450,
  },
  externalLink: {
    top: 127,
    left: 64,
    fontSize: FontSize.headersH1Heavy_size,
    letterSpacing: 0.5,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtrabold,
    display: "flex",
    width: 254,
    height: 196,
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  buttonText: {
    fontSize: FontSize.headersH2Light_size,
    letterSpacing: 0.4,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
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
    width: "100%",
  },
  largeButton: {
    left: 56,
    top: 323,
    width: 270,
    height: 67,
    position: "absolute",
  },
  googleModal: {
    flex: 1,
    height: 450,
    width: "100%",
  },
});

export default GoogleModal1;
