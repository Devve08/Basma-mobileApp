import React from "react";
import { Text, View, ScrollView } from "react-native";
import LowerHome from "../components/home/LowerHome";
import MiddleHome from "../components/home/MiddleHome";
import UpperHome from "../components/home/UpperHome";

export default function Home() {
  return (
    <ScrollView>
      <UpperHome />
      <MiddleHome />
      <LowerHome/>
    </ScrollView>
  );
}
