import React from "react";
import Fab from "@material-ui/core/Fab";
import { MailOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function FeedbackButton() {
  return (
    <Link to="/contact">
      <Fab color="secondary" style={style} variant="extended">
        <MailOutline style={{ marginRight: 5 }} />
        Feedback
      </Fab>
    </Link>
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
