import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/styles";
import Omar from "../../assets/omar.webp";
import Sohail from "../../assets/souhail.webp";
import Aljawhara from "../../assets/aljawhara.webp";
import Sama from "../../assets/sama.webp";

export default function LowerHome() {
  const data = [
    {
      image: Sohail,
      name: "Souhail",
      duration: "9 Months",
      description: "Teeth crowding",
    },
    {
      image: Sama,
      name: "Sama",
      duration: "3 Months",
      description: "Teeth spacing",
    },
    {
      image: Omar,
      name: "Omar",
      duration: "10 Months",
      description: "Teeth crowding",
    },
    {
      image: Aljawhara,
      name: "Aljawhara",
      duration: "8 Months",
      description: "Teeth crowding",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index}
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.duration}>- {item.duration}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 250,
    marginHorizontal: 10,
    marginVertical: 50,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  name: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  duration: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 3,
  },
  description: {
    textAlign: "center",
    width: "100%",
    color: "grey",
    fontSize: 16,
    marginTop: 5,
  },
});
