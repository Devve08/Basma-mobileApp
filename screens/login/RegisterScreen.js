import { Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledButton,
  ButtonText,
  StyledInputLabel,
  Colors,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  MsgBox,
} from "../../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SessionContext from "../../context/SessionContext";
const { primary, secondary, light, darkLight } = Colors;

export default function RegisterScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Basma</PageTitle>
          <SubTitle>Account Register</SubTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              fullName: "",
            }}
            onSubmit={(values) => {
              Register(values.email, values.password, values.fullName);
            }}
          >
            {({ handleChange, handleSubmit, handleBlur, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label={"Full Name"}
                  icon="person"
                  placeholder="example example"
                  placeholderTextColor={"grey"}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />
                <MyTextInput
                  label={"Email Address"}
                  icon="mail"
                  placeholder="example@gmail.com"
                  placeholderTextColor={"grey"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyBoardType="email-address"
                />

                <MyTextInput
                  label={"Password"}
                  icon="lock"
                  placeholder="* * * * * *"
                  placeholderTextColor={"grey"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  isPassword={true}
                />
                {/* {error && (
                <MsgBox>
                  Please enter the right credentials
                </MsgBox>
              )} */}
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Register</ButtonText>
                </StyledButton>
                <Line />
                <ExtraView>
                  <ExtraText>Have an account already?</ExtraText>
                  <TextLink
                    onPress={() => navigation.navigate("CustomerLogin")}
                  >
                    <TextLinkContent>Login</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}

const MyTextInput = ({
  icon,
  label,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={primary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={primary}
          />
        </RightIcon>
      )}
    </View>
  );
};
