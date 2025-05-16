// src/ChatComponent.jsx
import React from "react";
import ChatBubble, { useConvaiClient } from "convai-chatui-sdk";

const ChatComponent = () => {
  const characterId = "c2df0b48-252a-11f0-bf51-42010a7be01a"; // Reemplázalo
  const apiKey = "d7edfc1b440dac9a71b601ecc251e450"; // Reemplázalo

  const { client } = useConvaiClient(characterId, apiKey);

  return (
    <div style={{ width: "100%", maxWidth: 600, margin: "auto", marginTop: 50 }}>
      <ChatBubble
        chatHistory="Show"
        chatUiVariant="Sequential Line Chat"
        client={client}
      />
    </div>
  );
};

export default ChatComponent;
