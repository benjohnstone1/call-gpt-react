import React, { useState, useEffect } from "react";
import { Heading } from "@twilio-paste/core/heading";

import io from "socket.io-client";
import Message from "./Messages";

const socket = io("https://genai-phone-call-patient-grass-8186.fly.dev");
// const socket = io("http://localhost:5001");
// https://genai-phone-call-patient-grass-8186.fly.dev/

const SimulateAgent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // receive message from server
    socket.on("logs", (log, color) => {
      setMessages([...messages, { text: log, color: color }]);
    });
  }, [messages]);

  return (
    <div>
      <Heading as="h2" variant="heading20">
        Virtual Agent Logs
      </Heading>
      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            username={message.username}
            text={message.text}
            color={message.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SimulateAgent;
