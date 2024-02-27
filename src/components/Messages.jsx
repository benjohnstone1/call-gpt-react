import React from "react";

const Message = ({ username, text, color }) => {
  return (
    <div className="message">
      <p className="message-text" style={{ color: color }}>
        {text}
      </p>
    </div>
  );
};

export default Message;
