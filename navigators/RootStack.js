import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminLogin from "../screens/login/AdminLogin";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/login/RegisterScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../styles/styles";
import DrawerContent from "./DrawerContent";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./TabsContent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: Colors.darkLight,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle:{
            backgroundColor: Colors.primary,
          },
          headerTitle: 'Home',
          headerTitleStyle:{
            color: 'white'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}

export default function RootStack() {
  const { session, isLoggedIn } = useContext(SessionContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn && session.user.role === "Costumer" ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={DrawerStack}
          />
        ) : isLoggedIn && session.user.role === "Admin" ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabBar"
            component={Tabs}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="CustomerLogin"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="AdminLogin"
              component={AdminLogin}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Register"
              component={RegisterScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
