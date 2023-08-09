import "./styles.css";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function App() {
  const data = [
    {
      id: "Clientes",
      data: [
        {
          x: "Consultados",
          y: 7
        },
        {
          x: "Disponibles",
          y: 3
        }
      ]
    },
    {
      id: "Inmuebles",
      data: [
        {
          x: "Consultados",
          y: 5
        },
        {
          x: "Disponibles",
          y: 4
        }
      ]
    }
  ];

  const customColors = ["#0A3323", "#C5F5CA"];

  return (
    <div style={styles}>
      <div style={{ height: "500px" }}>
        <ResponsiveRadialBar
          data={data}
          padding={0.4}
          cornerRadius={2}
          margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
          radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
          circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
          colors={customColors}
          legends={[
            {
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 80,
              translateY: 0,
              itemsSpacing: 6,
              itemDirection: "left-to-right",
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 18,
              symbolShape: "square",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000"
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}
