import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SessionContext from "../../context/SessionContext";
import { Colors } from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";


export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const {
    session,
    actions: { Logout },
  } = useContext(SessionContext);

  const getCustomers = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/costumers/7`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setCustomers(res.data.data);
    setPrevPage(res.data.prev_page_url);
    setNextPage(res.data.next_page_url);
  };

  const getNextPage = async (nextURL) => {
    let res = await axios.get(`${nextURL}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session.user.access_token,
      },
    });
    setCustomers(res.data.data);
    setPrevPage(res.data.prev_page_url);
    setNextPage(res.data.next_page_url);
  };

  const getPrevPage = async (nextURL) => {
    let res = await axios.get(`${nextURL}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session.user.access_token,
      },
    });
    setCustomers(res.data.data);
    setPrevPage(res.data.prev_page_url);
    setNextPage(res.data.next_page_url);
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <View>
      <View style={{ width: "100%", alignItems: "flex-end", marginTop: 10 }}>
        <TouchableOpacity onPress={Logout} style={styles.logoutContainer}>
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pagContainer}>
        <TouchableOpacity style={!nextPage ? styles.hide : null} onPress={()=>getNextPage(nextPage)}>
          <Ionicons
            name="md-arrow-forward-circle-sharp"
            size={40}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={!prevPage ? styles.hide : styles.start} onPress={()=>getPrevPage(prevPage)}>
          <Ionicons
            name="md-arrow-back-circle-sharp"
            size={40}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ height: 450 }}
        data={customers}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <View style={styles.info}>
              <Text style={{ width: "10%", color: "white" }}>{item.id}</Text>
              <Text style={{ width: "45%", color: "white" }}>{item.name}</Text>
              <Text style={{ width: "45%", color: "white" }}>{item.email}</Text>
            </View>
            <TouchableOpacity style={styles.dltBtn}>
              <Ionicons name="trash" size={30} color={"white"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    marginRight: 2,
  },
  pagContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row-reverse",
    alignSelf: "center",
  },
  dataContainer: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: Colors.primary,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: 60,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  dltBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
  hide: {
      display: "none"
  },
});
