import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

function NivoCalculationChart(props) {
  console.log("the props in the nivo chart: ", props);
  const { resultSet } = props;
  return (
    <ResponsiveLine
      data={resultSet === undefined ? [] : resultSet[props.chartKey]}
      margin={{ top: 10, right: 25, bottom: 100, left: 80 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "year",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "$ amount",
        legendOffset: -55,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      pointSize={10}
      lineWidth={10}
      pointColor={{ from: "#ffffff" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 150,
          translateY: 46,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

function mapStateToProps({ results }) {
  let { resultSet } = results;
  return {
    resultSet,
  };
}

export default connect(mapStateToProps)(NivoCalculationChart);
