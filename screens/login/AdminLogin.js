import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";

import { View } from "react-native";
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

export default function AdminLogin({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    session,
    actions: { LoginAdmin},
    error,
  } = useContext(SessionContext);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          
          <PageTitle>Basma</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              LoginAdmin(values.email, values.password);
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