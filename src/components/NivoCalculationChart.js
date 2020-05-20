import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

function NivoCalculationChart(props) {
  console.log("the props in the nivo chart: ", props);
  const { resultSet } = props;
  return (
    <ResponsiveLine
      data={resultSet[props.chartKey]}
      margin={{ top: 10, right: 110, bottom: 100, left: 60 }}
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
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "dark2" }}
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

const data = [
  {
    id: "japan",
    color: "hsl(296, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 292,
      },
      {
        x: "helicopter",
        y: 232,
      },
      {
        x: "boat",
        y: 216,
      },
      {
        x: "train",
        y: 267,
      },
      {
        x: "subway",
        y: 149,
      },
      {
        x: "bus",
        y: 272,
      },
      {
        x: "car",
        y: 181,
      },
      {
        x: "moto",
        y: 294,
      },
      {
        x: "bicycle",
        y: 86,
      },
      {
        x: "horse",
        y: 89,
      },
      {
        x: "skateboard",
        y: 63,
      },
      {
        x: "others",
        y: 233,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(233, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 37,
      },
      {
        x: "helicopter",
        y: 193,
      },
      {
        x: "boat",
        y: 52,
      },
      {
        x: "train",
        y: 184,
      },
      {
        x: "subway",
        y: 164,
      },
      {
        x: "bus",
        y: 208,
      },
      {
        x: "car",
        y: 288,
      },
      {
        x: "moto",
        y: 230,
      },
      {
        x: "bicycle",
        y: 266,
      },
      {
        x: "horse",
        y: 253,
      },
      {
        x: "skateboard",
        y: 269,
      },
      {
        x: "others",
        y: 86,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(331, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 44,
      },
      {
        x: "helicopter",
        y: 173,
      },
      {
        x: "boat",
        y: 277,
      },
      {
        x: "train",
        y: 65,
      },
      {
        x: "subway",
        y: 77,
      },
      {
        x: "bus",
        y: 129,
      },
      {
        x: "car",
        y: 159,
      },
      {
        x: "moto",
        y: 282,
      },
      {
        x: "bicycle",
        y: 73,
      },
      {
        x: "horse",
        y: 290,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 146,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(248, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 239,
      },
      {
        x: "helicopter",
        y: 137,
      },
      {
        x: "boat",
        y: 40,
      },
      {
        x: "train",
        y: 124,
      },
      {
        x: "subway",
        y: 196,
      },
      {
        x: "bus",
        y: 54,
      },
      {
        x: "car",
        y: 32,
      },
      {
        x: "moto",
        y: 103,
      },
      {
        x: "bicycle",
        y: 196,
      },
      {
        x: "horse",
        y: 169,
      },
      {
        x: "skateboard",
        y: 209,
      },
      {
        x: "others",
        y: 248,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(340, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 175,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 62,
      },
      {
        x: "train",
        y: 124,
      },
      {
        x: "subway",
        y: 118,
      },
      {
        x: "bus",
        y: 56,
      },
      {
        x: "car",
        y: 104,
      },
      {
        x: "moto",
        y: 177,
      },
      {
        x: "bicycle",
        y: 112,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 94,
      },
      {
        x: "others",
        y: 15,
      },
    ],
  },
];
