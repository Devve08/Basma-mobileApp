import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import SessionContext from "../context/SessionContext";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles/styles";

export default function DrawerContent(props) {
  const {
    session,
    actions: { Logout },
  } = useContext(SessionContext);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <DrawerContentScrollView {...props}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 150, width: 150, alignSelf: "center" }}
        />

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={Logout}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="exit-outline" size={22} color={Colors.darkLight} />
            <Text
              style={{ marginLeft: 10, fontSize: 16, color: Colors.darkLight }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutSection: {
    paddingLeft: 40,
  },
});
