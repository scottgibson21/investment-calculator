import React from "react";
import ReactPlayer from "react-player";

function CalculationTutorialCard() {
  return (
    <div style={styles.videoContainer}>
      <h2>Tutorial</h2>
      <div
        className="video"
        style={{
          display: "flex",
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          marginBottom: 25,
          width: "90%",
        }}
      >
        <iframe
          title="iframeTitle"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/oUlLeDKPCYA`}
          frameBorder="0"
          allowfullscreen="true"
        />
      </div>
    </div>
  );
}

const styles = {
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    color: "black",
    marginTop: 30,
  },
  playerWrapper: {},
  video: {
    position: "absolute",
    top: 0,
    left: 0,
  },
};

export default CalculationTutorialCard;
