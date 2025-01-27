import React, { useState } from "react";
import "./Chatbot.css";
import botIcon from "./chatimage/robot.png"; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: "bot", text: "Hello! How can I assist you with our services today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    setMessages([...messages, { user: "user", text: userInput }]);
    setIsBotTyping(true);

    let botResponse = "";
    const lowerCaseInput = userInput.toLowerCase();
    
    if (lowerCaseInput.includes("it support")) {
      botResponse = "Our IT Support services offer 24/7 troubleshooting, network management, and hardware repair. How can I help you today?";
    } else if (lowerCaseInput.includes("cybersecurity")) {
      botResponse = "We provide comprehensive cybersecurity solutions including threat assessments, vulnerability scans, and incident response. Let us know what you need.";
    } else if (lowerCaseInput.includes("cloud solutions")) {
      botResponse = "Our cloud solutions help businesses scale efficiently with storage, computing, and networking services tailored to your needs.";
    } else if (lowerCaseInput.includes("digital marketing")) {
      botResponse = "We specialize in SEO, social media marketing, PPC, and content creation to grow your online presence and increase revenue.";
    } else if (lowerCaseInput.includes("custom software")) {
      botResponse = "We build custom software tailored to your business needs, whether it’s a web app, desktop solution, or mobile app.";
    } else if (lowerCaseInput.includes("erp solutions")) {
      botResponse = "Our ERP solutions help integrate your core business processes and ensure smooth operations with real-time data insights.";
    } else if (lowerCaseInput.includes("mobile apps")) {
      botResponse = "We develop mobile apps for both Android and iOS, providing seamless user experiences and innovative functionalities.";
    } else if (lowerCaseInput.includes("web development")) {
      botResponse = "Our web development team creates scalable, secure, and user-friendly websites that can grow with your business.";
    } else {
      botResponse = "I’m sorry, I didn’t understand that. Could you please rephrase or choose a quick option below?";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { user: "bot", text: botResponse }]);
      setIsBotTyping(false);
    }, 1200);

    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      {!isChatOpen && (
        <div className="bot-icon" onClick={toggleChat}>
          <img src={botIcon} alt="Chatbot" />
        </div>
      )}

      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <img src={botIcon} alt="Bot Icon" className="chatbot-icon" />
            <h3>Service Assistance</h3>
            <button className="close-btn" onClick={toggleChat}>–</button>
          </div>

          <div className="chatbot-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.user}`}>
                  <p>{message.text}</p>
                </div>
              ))}
              {isBotTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          </div>

          <div className="quick-replies">
            {["IT Support", "Cybersecurity", "Cloud Solutions", "Digital Marketing", "Custom Software", "ERP Solutions", "Mobile Apps", "Web Development"].map((service, index) => (
              <button key={index} onClick={() => setUserInput(service)}>{service}</button>
            ))}
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;



