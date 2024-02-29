import React, { useState, useEffect } from "react";
import { Heading } from "@twilio-paste/core/heading";

import Message from "./Messages";

const SimulateAgent = () => {
  const [messages, setMessages] = useState([]);

  function isEmpty(array) {
    return Array.isArray(array) && array.length === 0;
  }

  useEffect(() => {
    // SSE
    const events = new EventSource(
      "https://genai-phone-call-patient-grass-8186.fly.dev/events"
    );
    // const events = new EventSource("https://ben-johnstone.ngrok.io/events");

    function getRealtimeData(data) {
      console.log("====parsed data", data);
      if (isEmpty(data)) {
        // Do nothing
      } else {
        setMessages([...messages, { text: data.log, color: data.color }]);
      }
    }

    events.onmessage = (e) => getRealtimeData(JSON.parse(e.data));

    events.onerror = (e) => {
      console.log(e);
      events.close();
    };
    return () => {
      events.close();
    };
  }, [messages]);

  return (
    <div>
      <Heading as="h2" variant="heading20">
        Virtual Agent Logs
      </Heading>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} color={message.color} />
        ))}
      </div>
    </div>
  );
};

export default SimulateAgent;
