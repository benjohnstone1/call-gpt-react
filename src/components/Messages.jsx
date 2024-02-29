import React from "react";

const Message = ({ text, color }) => {
  return (
    <div className="message">
      <p className="message-text" style={{ color: color }}>
        {text}
      </p>
    </div>
  );
};

export default Message;
