import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../styles/styles";

export default function UpperHome() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/image.jpeg")}
        style={{ width: "100%", height: 500 }}
        resizeMode="cover"
      >
        <LinearGradient
          style={{
            width: "100%",
            height: 500,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          colors={["#00000000", "#00000099"]}
        >
          <View style={{ marginBottom: 50 }}>
            <Text style={styles.text}>Results guaranteed.</Text>
            <Text style={styles.text}>Smiles transformed.</Text>
            <Text style={{color: Colors.primary,fontWeight: "bold", textAlign: "center"}}>See results in an average of 6 months.</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 28,
    padding: 5,
    fontWeight: "bold",
  },
});
