import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../styles/styles";

export default function MiddleHome() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginHorizontal: 40,
        marginTop: 40,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        Choose confidence with our invisible braces.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        We offer a doctor-directed treatment with invisible braces to align your
        teeth, with the convenience of doing it from home.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          width: "90%",
          borderRadius: 25,
          padding: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: "white",
            fontWeight: "bold",
          }}
        >
          See if you're a candidate{" "}
          <Ionicons name="arrow-forward" size={15} color={"white"} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
