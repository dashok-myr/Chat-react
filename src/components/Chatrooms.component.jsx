import React from "react";
import Grid from "@material-ui/core/Grid";
import MyButton from "./MyButton.component";

const chatroomNames = ["General", "Gaming", "Music", "DevNerds"];

const Chatrooms = ({ handleChatRoomChange }) => {
  return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {chatroomNames.map((name, index) => {
          return (
            <MyButton
              onClick={() => handleChatRoomChange(name)}
              key={index}
              name={name}
            />
          );
        })}
      </Grid>
  );
};

export default Chatrooms;
