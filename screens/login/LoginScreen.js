import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";

import { Text, TouchableOpacity, View } from "react-native";
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
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../../styles/styles";
import SessionContext from "../../context/SessionContext";

const { primary, secondary, light, darkLight } = Colors;

export default function LoginScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    session,
    actions: { LoginCustomer, Logout },
    error,
  } = useContext(SessionContext);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          
          <PageTitle>Basma</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <TouchableOpacity onPress={Logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              LoginCustomer(values.email, values.password);
            }}
          >
            {({ handleChange, handleSubmit, handleBlur, values }) => (
              <StyledFormArea>
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
                    <> Please enter a valid email and password </>
                  </MsgBox>
                )} */}
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" size={30} color="white" />
                  <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Register")}>
                    <TextLinkContent>Register</TextLinkContent>
                  </TextLink>
                </ExtraView>
                <ExtraView>
                  <ExtraText>Login as admin?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("AdminLogin")}>
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
