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

    const reTellevents = new EventSource(
      "https://call-gpt-retell.fly.dev/events"
    );

    function getRealtimeData(data) {
      if (isEmpty(data)) {
        // Do nothing
      } else {
        console.log("====parsed data", data);
        setMessages([...messages, { text: data.log, color: data.color }]);
      }
    }

    events.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    reTellevents.onmessage = (e) => getRealtimeData(JSON.parse(e.data));

    events.onerror = (e) => {
      console.log(e);
      events.close();
    };
    reTellevents.onerror = (e) => {
      console.log(e);
      events.close();
    };
    return () => {
      events.close();
      reTellevents.close();
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
