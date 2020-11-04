import firebase, { db } from "../firebase.config";

export default class Chatroom {
  constructor(room, name) {
    this.room = room;
    this.name = name;
    this.chats = db.collection("chats");
    this.unsub = undefined;
  }

  async addChat(message) {
    // format a chat object
    const now = new Date();
    const chat = {
      message: message,
      name: this.name,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document
    return await this.chats.add(chat);
  }

  async getChats() {
    const chats = [];
    const snapshot = await this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .get();

    snapshot.forEach((doc) => {
      chats.push(doc.data());
    });
    return chats;
  }
}
