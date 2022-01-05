import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import GraphTotal from "../../components/GraphTotal";
import SessionContext from "../../context/SessionContext";
import { Colors } from "../../styles/styles";

export default function AdminHome() {
  const { session } = useContext(SessionContext);
  const [lastDay, setLastDay] = useState("");
  const [lastWeek, setLastWeek] = useState({
    total: "",
    average: "",
  });
  const [lastMonth, setLastMonth] = useState({
    total: "",
    average: "",
  });
  const [lastThreeMonths, setLastThreeMonths] = useState({
    total: "",
    average: "",
  });
  const [lastYear, setLastYear] = useState({
    total: "",
    average: "",
  });

  const getLastDay = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/lastday`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setLastDay(res.data);
  };

  const getLastWeek = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/lastweek`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setLastWeek({
      ...lastWeek,
      average: res.data.average,
      total: res.data.total,
    });
  };

  const getLastMonth = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/lastmonth`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setLastMonth({
      ...lastMonth,
      average: res.data.average,
      total: res.data.total,
    });
  };

  const getLastThreeMonths = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/lastthreemonths`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setLastThreeMonths({
      ...lastThreeMonths,
      average: res.data.average,
      total: res.data.total,
    });
  };

  const getLastYear = async () => {
    let res = await axios.get(
      `https://basma-task.herokuapp.com/api/admins/lastyear`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.user.access_token,
        },
      }
    );
    setLastYear({
      ...lastYear,
      average: res.data.average,
      total: res.data.total,
    });
  };

  useEffect(() => {
    getLastDay();
    getLastWeek();
    getLastMonth();
    getLastThreeMonths();
    getLastYear();
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            padding: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.primary,
            width: "80%",
            marginHorizontal: 30,
          }}
        >
          Average registrations per day for the past year
        </Text>
        <LineChart
          data={{
            labels: ["Day", "Week", "Month", "3 Months", "Year"],
            datasets: [
              {
                data: [
                  Math.round(lastDay),
                  Math.round(lastWeek.average),
                  Math.round(lastMonth.average),
                  Math.round(lastThreeMonths.average),
                  Math.round(lastYear.average)
                ],
              },
            ],
          }}
          width={350}
          height={250}
          yAxisInterval={1} 
          chartConfig={{
            backgroundColor: Colors.primary,
            backgroundGradientFrom: Colors.primary,
            backgroundGradientTo: "#ffa726",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <GraphTotal
          lastDayTotal={lastDay}
          lastWeekTotal={lastWeek.total}
          lastMonthTotal={lastMonth.total}
          lastThreeMonthsTotal={lastThreeMonths.total}
          lastYearTotal={lastYear.total}
        />
      </View>
    </ScrollView>
  );
}
