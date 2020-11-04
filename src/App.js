import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import HeroBackground from "./components/HeroBackground.component";
import Chatrooms from "./components/Chatrooms.component";
import Title from "./components/Title.component";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InputWithSubmit from "./components/InputWithSubmit.component";
import UpdateNameInput from "./components/UpdateNameInput.component";
import ChatList from "./components/ChatList.component";
import Chatroom from "./firebaseUtils/chat";

const convertToDate = (created_at) => {
  return formatDistanceToNow(created_at.toDate(), {
    addSuffix: true,
  });
};

function App() {
  const [chats, setChats] = useState([]);
  const [name, setName] = useState("Daria");
  const [message, setMessage] = useState("");
  const [currentChatRoom, setChatRoom] = useState("General");

  const chatRoom = new Chatroom(currentChatRoom, name);

  useEffect(() => {
    chatRoom.getChats().then((chats) => {
      // Convert all date created_at to good dates that we can display e.g. "1 second ago"
      const newChats = chats.map((chat) => {
        const newDate = convertToDate(chat.created_at);
        return { ...chat, created_at: newDate };
      });
      // Updated state with this new chat dates
      setChats(newChats);
    });
  }, [currentChatRoom]);

  const messageHandleChange = (event) => {
    setMessage(event.target.value);
  };
  const nameHandleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await chatRoom.addChat(message);
      const doc = await docRef.get();
      const data = await doc.data();
      console.log(data);
      const { message: dataMessage, name: dataName, created_at } = data;
      const newCreatedAt = convertToDate(created_at);

      const newChat = {
        name: dataName,
        message: dataMessage,
        created_at: newCreatedAt,
      };

      setChats([...chats, ...[newChat]]);
    } catch (e) {
      console.error("Could not save message");
    }

    setMessage("");
  };

  const handleChatRoomChange = (name) => {
    setChatRoom(name);
  };

  return (
    <>
      <HeroBackground />
      <Container maxWidth="md">
        <Grid container justify="center">
          <Title />
          <Chatrooms handleChatRoomChange={handleChatRoomChange} />
          <ChatList chats={chats} />
          <InputWithSubmit
            inputLabel="Message"
            buttonName="Send"
            handleChange={messageHandleChange}
            handleSubmit={handleSubmit}
            value={message}
          />
        </Grid>
        <UpdateNameInput handleChange={nameHandleChange} value={name} />
      </Container>
    </>
  );
}

export default App;
