import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import SessionContext from "../../context/SessionContext";
import { Colors } from "../../styles/styles";

export default function AddCustomer() {
  const {actions :{ AddCustomer} } = useContext(SessionContext)
  const [info, setInfo] = useState({
name: "", email: "", password: "" ,
  });
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>BASMA.com </Text>
        <TextInput
          onChangeText={(text) => setInfo({ ...info,  name: text  })}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput onChangeText={(text)=> setInfo({...info, email: text})} placeholder="Email" style={styles.input} />
        <TextInput onChangeText={(text)=> setInfo({...info,password: text}) } placeholder="Password" style={styles.input} />
        <TouchableOpacity onPress={()=>AddCustomer(info.email, info.password, info.name)} style={styles.btn}>
          <Text
            style={{ color: Colors.primary, fontSize: 18, fontWeight: "bold" }}
          >
            Add customer
          </Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingWrapper>
    
  );
}

const styles = StyleSheet.create({
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    shadowColor: "#7f5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  btn: {
    backgroundColor: "white",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 10,
    shadowColor: "#7f5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderRadius: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 5,
    height: 450,
    marginTop: 30,
    backgroundColor: Colors.primary,
  },
  title: {
    marginBottom: 60,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
