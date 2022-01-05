import SessionContext from "./SessionContext";
import axios from "axios";

import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";
export default function SessionProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [session, setSession] = useState({
    user: {
      token: AsyncStorage.getItem("token"),
      username: AsyncStorage.getItem("username"),
      user_id: AsyncStorage.getItem("user_id"),
      role: AsyncStorage.getItem("role"),
    },
  });

  function updateSession(nextSession) {
    let value =
      typeof nextSession === "function"
        ? nextSession
        : (prevSession) => ({ ...prevSession, ...nextSession });
    setSession(value);
  }

  useEffect(async () => {
    setIsLoading(true);
    let username = await AsyncStorage.getItem("username");
    let role = await AsyncStorage.getItem("role");
    let access_token = await AsyncStorage.getItem("token");
    let user_id = await AsyncStorage.getItem("user_id");
    let user = { username, access_token, user_id, role };
    updateSession({ user });
    verifyUser();
  }, []);

  const storeData = async (value, name, user_id, role) => {
    try {
      await AsyncStorage.setItem("token", value);
      await AsyncStorage.setItem("username", name);
      await AsyncStorage.setItem("user_id", JSON.stringify(user_id));
      await AsyncStorage.setItem("role", role);
    } catch (e) {
      console.log(e.message);
    }
  };

  const verifyUser = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        setIsLoggedIn(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: store[i][1] });
        return true;
      });
    });
  });

  const LoginCustomer = async (email, password) => {
    setError(false);

    try {
      const userData = new FormData();
      userData.append("email", email);
      userData.append("password", password);
      let res = await axios.post(
        `https://basma-task.herokuapp.com/api/users/login`,
        userData
      );
      const { access_token, name, id, role } = res.data;
      storeData(access_token, name, id, role);
      const user = { access_token, name, user_id: id, role };
      setIsLoggedIn(true);
      updateSession({ user });
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const LoginAdmin = async (email, password) => {
    setError(false);
    try {
      const userData = new FormData();
      userData.append("email", email);
      userData.append("password", password);
      let res = await axios.post(
        `https://basma-task.herokuapp.com/api/admins/login`,
        userData
      );
      const { access_token, name, id, role } = res.data;
      storeData(access_token, name, id, role);
      const user = { access_token, name, user_id: id, role };
      setIsLoggedIn(true);
      updateSession({ user });
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const Register = async (email, password, name) => {
    setError(false);
    try {
      const userData = new FormData();
      userData.append("email", email);
      userData.append("password", password);
      userData.append("name", name);
      let res = await axios.post(
        `${config.Base_Online}/api/users/register`,
        userData
      );
      const { access_token, username, role } = res.data;
      storeData(access_token, username, role);
      const user = { access_token, username, role };
      updateSession({ user });
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const AddCustomer = async (email, password, name) => {
    setError(false);
    
    try {
      const userData = new FormData();
      userData.append("email", email);
      userData.append("password", password);
      userData.append("name", name);
      console.log(userData, "jjgh")
      let res = await axios.post(
        `${config.Base_Online}/api/admins/addcustomer`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.user.access_token,
          },
        }
      );
     console.log(res, "hello")
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("user_id");
      await AsyncStorage.removeItem("role");
      const user = { token: null, name: null, user_id: null, role: null };
      updateSession({ user });
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    isLoggedIn,
    session,
    actions: { Logout, LoginCustomer, Register, LoginAdmin, AddCustomer },
    isLoading,
    setIsLoading,
    error,
  };

  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
}
