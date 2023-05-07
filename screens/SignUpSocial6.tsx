import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignUpSocial6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpSocial6}>
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
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
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
        style={[styles.button, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Pressable
          style={[styles.pressable, styles.button1FlexBox]}
          onPress={() => navigation.navigate("SignUpSocial7")}
        >
          <Text style={[styles.buttonText, styles.textFlexBox]}>Continue</Text>
        </Pressable>
      </LinearGradient>
      <Pressable
        style={[styles.button1, styles.button1FlexBox]}
        onPress={() => navigation.navigate("SignUp05")}
      >
        <Text style={[styles.buttonText, styles.textFlexBox]}>
          Skip This Step
        </Text>
      </Pressable>
      <Text style={[styles.whatAre3, styles.searchTypo]}>
        What are 3 of your favorite games?
      </Text>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.childLayout]} />
        <Text style={[styles.search, styles.searchPosition]}>Search games</Text>
        <Image
          style={[styles.iconSearch, styles.textLayout]}
          resizeMode="cover"
          source={require("../assets/icon--search.png")}
        />
      </View>
      <Text style={[styles.signUp, styles.textFlexBox]}>Sign Up</Text>
      <Pressable
        style={[styles.iconBackArrow, styles.leftSideLayout]}
        onPress={() => navigation.navigate("SignUp02")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icon--back-arrow.png")}
        />
      </Pressable>
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
        <LinearGradient
          style={[styles.signUpProgressBarInner, styles.signLayout]}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        />
      </View>
      <View style={[styles.frameParent, styles.searchPosition]}>
        <View style={styles.onboardingCardLayout1}>
          <View
            style={[styles.onboardingImageCard, styles.onboardingCardLayout]}
          >
            <Image
              style={[styles.onboardingImageCardChild, styles.childLayout]}
              resizeMode="cover"
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>Minecraft</Text>
          </View>
          <View
            style={[styles.onboardingImageCard1, styles.onboardingCardLayout]}
          >
            <Image
              style={styles.onboardingImageCardItem}
              resizeMode="cover"
              source={require("../assets/rectangle-6506.png")}
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>GTA V</Text>
          </View>
        </View>
        <View
          style={[
            styles.onboardingImageCardGroup,
            styles.onboardingCardLayout1,
          ]}
        >
          <View
            style={[styles.onboardingImageCard, styles.onboardingCardLayout]}
          >
            <Image
              style={styles.onboardingImageCardItem}
              resizeMode="cover"
              source={require("../assets/rectangle-65061.png")}
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>
              APEX Legends
            </Text>
          </View>
          <View
            style={[styles.onboardingImageCard1, styles.onboardingCardLayout]}
          >
            <Image
              style={styles.onboardingImageCardItem}
              resizeMode="cover"
              source={require("../assets/rectangle-65062.png")}
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>FIFA 2023</Text>
          </View>
        </View>
        <View
          style={[
            styles.onboardingImageCardGroup,
            styles.onboardingCardLayout1,
          ]}
        >
          <View
            style={[styles.onboardingImageCard, styles.onboardingCardLayout]}
          >
            <Image
              style={styles.onboardingImageCardItem}
              resizeMode="cover"
              source={require("../assets/rectangle-65063.png")}
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>
              League of Legends
            </Text>
          </View>
          <View
            style={[styles.onboardingImageCard1, styles.onboardingCardLayout]}
          >
            <Image
              style={styles.onboardingImageCardItem}
              resizeMode="cover"
              source={require("../assets/rectangle-65064.png")}
            />
            <LinearGradient
              style={[styles.blackGradientFill, styles.onboardingCardLayout]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.gameName, styles.searchTypo]}>PUBG</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSideLayout: {
    height: 21,
    position: "absolute",
  },
  textLayout: {
    height: 20,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 157,
    left: 136,
    position: "absolute",
  },
  button1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  searchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.headersH2Light,
  },
  searchLayout: {
    width: 370,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_mini,
    left: 0,
  },
  searchPosition: {
    left: 20,
    position: "absolute",
  },
  signLayout: {
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    backgroundColor: Color.gradientsButton,
    top: 0,
    position: "absolute",
  },
  onboardingCardLayout: {
    width: 185,
    height: 89,
    top: 0,
    position: "absolute",
  },
  onboardingCardLayout1: {
    height: 89,
    width: 390,
  },
  backgroundMeshIcon: {
    width: 500,
    left: 14,
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
    textAlign: "center",
    color: Color.grayscalesWhite,
    width: 54,
    left: 0,
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
  },
  pressable: {
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
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
  whatAre3: {
    top: 200,
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 28,
    width: 391,
    height: 24,
    left: 30,
    color: Color.grayscalesWhite,
    fontFamily: FontFamily.headersH2Light,
    position: "absolute",
  },
  searchBarChild: {
    backgroundColor: Color.solidColoursDarkPurple,
    height: 52,
    width: 370,
    position: "absolute",
    top: 0,
  },
  search: {
    top: 18,
    lineHeight: 17,
    color: Color.grayscalesMediumGrey,
    textAlign: "left",
    fontFamily: FontFamily.headersH2Light,
    fontSize: FontSize.buttonsButton_size,
  },
  iconSearch: {
    top: 16,
    left: 330,
    width: 20,
  },
  searchBar: {
    top: 232,
    height: 53,
    left: 30,
  },
  signUp: {
    top: 81,
    left: 170,
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.headersH1Heavy,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconBackArrow: {
    left: 36,
    top: 84,
    width: 12,
  },
  signUpProgressBarChild: {
    left: 0,
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
    height: 8,
    width: 186,
    position: "absolute",
  },
  onboardingImageCardChild: {
    width: 187,
    height: 91,
    top: 0,
    position: "absolute",
  },
  blackGradientFill: {
    opacity: 0.7,
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.gradientsButton,
  },
  gameName: {
    top: 64,
    fontSize: FontSize.headersH3Light_size,
    lineHeight: 20,
    color: Color.grayscalesWhite,
    fontFamily: FontFamily.headersH2Light,
    position: "absolute",
    left: 14,
  },
  onboardingImageCard: {
    left: 0,
  },
  onboardingImageCardItem: {
    height: 90,
    width: 186,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  onboardingImageCard1: {
    left: 205,
  },
  onboardingImageCardGroup: {
    marginTop: 23,
  },
  frameParent: {
    top: 322,
  },
  signUpSocial6: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default SignUpSocial6;
