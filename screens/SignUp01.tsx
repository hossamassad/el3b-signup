import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SignUp01 = () => {
  return (
    <View style={styles.signUp01}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh4.png")}
      />
      <View style={styles.statusbarIphone13}>
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
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      <Image
        style={[styles.iconBackArrow, styles.leftSideLayout]}
        resizeMode="cover"
        source={require("../assets/icon--back-arrow.png")}
      />
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
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
      <Text
        style={[
          styles.byClickingContinueContainer,
          styles.passwordRequirementsLayout,
        ]}
      >
        <Text
          style={styles.byClickingContinue}
        >{`By clicking continue, you agree to our
`}</Text>
        <Text style={styles.signUpTypo}>
          <Text style={styles.text1}>{` `}</Text>Terms of Service
        </Text>
        <Text style={styles.and}>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.and1}>{` and  `}</Text>
        </Text>
        <Text style={styles.signUpTypo}>Privacy Policy</Text>
        <Text style={styles.byClickingContinue}>.</Text>
      </Text>
      <View style={[styles.groupParent, styles.frameViewLayout]}>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameView, styles.frameViewLayout]}>
              <View style={styles.emailOrPhoneParent}>
                <View style={styles.emailLayout}>
                  <View
                    style={[styles.emailOrPhoneChild, styles.emailLayout]}
                  />
                  <Text style={[styles.inputTextHere, styles.getStartedTypo]}>
                    Phone Number *
                  </Text>
                  <Text style={styles.textFieldDetails}>
                    Text field details here text field details here
                  </Text>
                </View>
                <View style={[styles.displayName, styles.emailLayout]}>
                  <View
                    style={[styles.emailOrPhoneChild, styles.emailLayout]}
                  />
                  <Text style={[styles.inputTextHere, styles.getStartedTypo]}>
                    Display Name *
                  </Text>
                  <Text style={[styles.textFieldDetails1, styles.textFlexBox]}>
                    0/20
                  </Text>
                </View>
                <View style={[styles.displayName, styles.emailLayout]}>
                  <View
                    style={[styles.emailOrPhoneChild, styles.emailLayout]}
                  />
                  <Text style={[styles.inputTextHere, styles.getStartedTypo]}>
                    Username *
                  </Text>
                  <Text style={[styles.textFieldDetails2, styles.textFlexBox]}>
                    0/20
                  </Text>
                </View>
                <View style={[styles.displayName, styles.emailLayout]}>
                  <View
                    style={[styles.emailOrPhoneChild, styles.emailLayout]}
                  />
                  <Text style={[styles.inputTextHere, styles.getStartedTypo]}>
                    Password *
                  </Text>
                  <Text style={styles.textFieldDetails}>
                    Text field details here text field details here
                  </Text>
                </View>
                <View style={[styles.displayName, styles.emailLayout]}>
                  <View
                    style={[styles.emailOrPhoneChild, styles.emailLayout]}
                  />
                  <Text style={[styles.inputTextHere, styles.getStartedTypo]}>
                    Confirm Password *
                  </Text>
                  <Text style={styles.textFieldDetails}>
                    Text field details here text field details here
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Get Started
        </Text>
      </View>
      <Text style={[styles.alreadyHaveAnContainer, styles.textFlexBox]}>
        <Text style={styles.alreadyHaveAnContainer1}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={styles.signUpTypo}>Log in</Text>
          <Text style={styles.signUpTypo}>{` `}</Text>
          <Text style={styles.and}>{`>`}</Text>
        </Text>
      </Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </LinearGradient>
      <View style={styles.passwordRequirementsParent}>
        <Text style={[styles.passwordRequirements, styles.getStartedTypo]}>
          Password requirements:
        </Text>
        <View style={styles.groupContainer}>
          <View style={styles.mustContainAtLeast8CharacParent}>
            <Text
              style={[styles.mustContainAt, styles.mustContainAtTypo]}
            >{`Must contain at least 8 characters, 1 special symbol (!@#$%&), 1 number`}</Text>
            <Image
              style={[
                styles.passwordRequirementsIcon,
                styles.passwordIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/password-requirements.png")}
            />
          </View>
          <View style={styles.mayNotIncludeYourNameOrBParent}>
            <Text style={[styles.mayNotInclude, styles.mustContainAtTypo]}>
              May not include your name or birth date
            </Text>
            <Image
              style={[
                styles.passwordRequirementsIcon1,
                styles.passwordIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/password-requirements.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
  },
  signLayout: {
    backgroundColor: Color.gainsboro,
    width: 46,
    borderRadius: Border.br_8xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  passwordRequirementsLayout: {
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
  },
  frameViewLayout: {
    width: 370,
    position: "absolute",
  },
  frameLayout: {
    height: 386,
    width: 370,
    left: 0,
    position: "absolute",
  },
  emailLayout: {
    height: 52,
    width: 370,
  },
  getStartedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.headersH2Light,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  mustContainAtTypo: {
    fontSize: FontSize.size_xs,
    left: 17,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.grayscalesMediumGrey,
    fontFamily: FontFamily.headersH2Light,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  passwordIconLayout: {
    width: 8,
    height: 8,
    left: 0,
    position: "absolute",
  },
  backgroundMeshIcon: {
    width: 500,
    height: 936,
    left: 0,
    top: 0,
    position: "absolute",
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
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    textAlign: "center",
    color: Color.grayscalesWhite,
    letterSpacing: 0,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    width: 54,
    height: 21,
    left: "50%",
    top: 0,
  },
  leftSide: {
    marginLeft: -180.5,
    top: 14,
    width: 54,
    height: 21,
    left: "50%",
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
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.grayscalesWhite,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    left: 132,
    width: 166,
    height: 34,
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
  byClickingContinue: {
    color: Color.grayscalesMediumGrey,
    fontFamily: FontFamily.headersH2Light,
  },
  text1: {
    color: Color.mediumblue,
  },
  and1: {
    color: Color.grayscalesMediumGrey,
  },
  and: {
    fontFamily: FontFamily.headersH2Light,
  },
  byClickingContinueContainer: {
    bottom: 245,
    left: 91,
    textAlign: "center",
    position: "absolute",
  },
  emailOrPhoneChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.solidColoursDarkPurple,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputTextHere: {
    top: 18,
    left: 20,
    textAlign: "left",
    color: Color.grayscalesMediumGrey,
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
  },
  textFieldDetails: {
    display: "none",
    height: 14,
    width: 350,
    top: 58,
    alignItems: "center",
    color: Color.oldStylesGreyscaleGrey,
    textAlign: "left",
    left: 20,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
    position: "absolute",
  },
  textFieldDetails1: {
    textAlign: "right",
    display: "flex",
    height: 14,
    width: 350,
    top: 58,
    left: 20,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    color: Color.oldStylesGreyscaleGrey,
  },
  displayName: {
    marginTop: 32,
  },
  textFieldDetails2: {
    textAlign: "right",
    display: "flex",
    height: 14,
    width: 350,
    top: 58,
    left: 20,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 17,
    color: Color.grayscalesMediumGrey,
  },
  emailOrPhoneParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameView: {
    height: 398,
    left: 0,
    top: 0,
  },
  frameContainer: {
    top: 0,
  },
  frameWrapper: {
    top: 40,
  },
  getStarted: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.headersH2Light_size,
    lineHeight: 28,
    color: Color.grayscalesWhite,
    width: "100%",
  },
  groupParent: {
    top: 202,
    left: 30,
    height: 426,
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
    top: 994,
    left: 88,
    width: 253,
    height: 34,
    textAlign: "center",
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
    top: 773,
    left: 136,
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
    backgroundColor: Color.gradientsButton,
    position: "absolute",
  },
  passwordRequirements: {
    width: 205,
    height: 18,
    color: Color.grayscalesMediumGrey,
    lineHeight: 17,
    fontSize: FontSize.buttonsButton_size,
    left: 0,
    top: 0,
  },
  mustContainAt: {
    lineHeight: 18,
    width: 245,
    height: 31,
  },
  passwordRequirementsIcon: {
    top: 3,
  },
  mustContainAtLeast8CharacParent: {
    width: 262,
    height: 31,
  },
  mayNotInclude: {
    lineHeight: 12,
    width: 270,
    height: 16,
  },
  passwordRequirementsIcon1: {
    top: 5,
  },
  mayNotIncludeYourNameOrBParent: {
    marginTop: 3,
    height: 16,
    width: 287,
  },
  groupContainer: {
    top: 24,
    left: 0,
    position: "absolute",
  },
  passwordRequirementsParent: {
    top: 636,
    left: 50,
    height: 86,
    width: 287,
    position: "absolute",
  },
  signUp01: {
    backgroundColor: Color.solidColoursBackground,
    flex: 1,
    height: 1116,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp01;
