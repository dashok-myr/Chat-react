import React from "react";
import ChatElement from "./ChatElement.component";
import { Box, List, Paper } from "@material-ui/core";

const ChatList = ({ chats }) => {
  return (
    <Box py={5}>
      <Paper
        elevation={3}
        style={{ maxHeight: 350, width: 700, overflow: "auto" }}
      >
        <List disablePadding>
          {chats.map((chat, index) => {
            return (
              <ChatElement
                key={index}
                name={chat.name}
                date={chat.created_at}
                message={chat.message}
              />
            );
          })}
        </List>
      </Paper>
    </Box>
  );
};

export default ChatList;
