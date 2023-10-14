import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: `600px`,
  width: "80%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  margin: "auto",
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src="assets/images/Community_Update.png" />
    </div>
    <div>
      <img style={contentStyle} src="assets/images/thisweek.png" />
    </div>
  </Carousel>
);

export default App;
