import React from "react";
import AdminHome from "../screens/admin/AdminHome";
import AddCustomer from "../screens/admin/AddCustomer";
import Customers from "../screens/admin/Customers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";



const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 5,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="AdminHome"
        component={AdminHome}
        options={{
          headerStyle:{
            backgroundColor: Colors.primary,
          },
          headerTitle: 'Customers Stats',
          headerTitleStyle:{
            color: 'white'
          },
          tabBarInactiveTintColor: Colors.primary,
          tabBarActiveBackgroundColor: Colors.primary,

          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="stats-chart"
                  size={40}
                  style={{
                    color: focused ? "white" : Colors.primary,
                    paddingBottom: 5,
                  }}
                />
                <Text
                  style={{
                    color: focused ? "white" : Colors.primary,
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Stats
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddCustomers"
        component={AddCustomer}
        options={{
          headerStyle:{
            backgroundColor: Colors.primary,
          },
          headerTitle: 'Add Customer',
          headerTitleStyle:{
            color: 'white'
          },
          tabBarInactiveTintColor: Colors.primary,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="add-circle"
                  size={40}
                  style={{
                    color: focused ? "white" : Colors.primary,
                    paddingBottom: 5,
                  }}
                />
                <Text
                  style={{
                    color: focused ? "white" : Colors.primary,
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Add Customer
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          headerStyle:{
            backgroundColor: Colors.primary,
          },
          headerTitle: 'View Customers',
          headerTitleStyle:{
            color: 'white'
          },
          tabBarInactiveTintColor: Colors.primary,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="person"
                  size={40}
                  style={{
                    color: focused ? "white" : Colors.primary,
                    paddingBottom: 5,
                  }}
                />
                <Text
                  style={{
                    color: focused ? "white" : Colors.primary,
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  View
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#7f5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });