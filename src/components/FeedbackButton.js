import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { MailOutline } from "@material-ui/icons";

export default function FeedbackButton() {
  return (
    <Fab color="secondary" style={style} variant="extended">
      <MailOutline style={{ marginRight: 5 }} />
      Feedback
    </Fab>
  );
}

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};
