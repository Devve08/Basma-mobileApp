import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../styles/styles";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from "react-native-chart-kit";

export default function GraphTotal({
  lastDayTotal,
  lastMonthTotal,
  lastThreeMonthsTotal,
  lastWeekTotal,
  lastYearTotal,
}) {
  return (
    <>
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
        Total customer registrations for the past year
      </Text>
      <LineChart
        data={{
          labels: [
            "L.Day",
            "L.Week",
            "L.Month",
            "L.3Months",
            "L.Year",
          ],
          datasets: [
            {
              data: [
                Math.round(lastDayTotal),
                Math.round(lastWeekTotal),
                Math.round(lastMonthTotal),
                Math.round(lastThreeMonthsTotal),
                Math.round(lastYearTotal)
              ],
            },
          ],
        }}
        width={350} // from react-native
        height={250}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: Colors.primary,
          backgroundGradientFrom: Colors.primary,
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
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
    </>
  );
}
