import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SessionProvider from "./context/SessionProvider";
import RootStack from "./navigators/RootStack";

export default function App({ navigation }) {
  return (
    <SessionProvider>
      <RootStack />
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
