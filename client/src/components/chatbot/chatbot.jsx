import { useState } from "react";
import emailjs from "emailjs-com";
import "./Chatbot.css";
import botIcon from "./chatimage/robot.png"; 

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", email: "", service: "" });
  const [isDetailsCollected, setIsDetailsCollected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { user: "user", text: userInput }];
    setMessages(newMessages);
    setIsBotTyping(true);

    setTimeout(() => {
      let botResponse = generateResponse(userInput);
      setMessages([...newMessages, { user: "bot", text: botResponse }]);
      setIsBotTyping(false);
    }, 1200);

    setUserInput("");
  };

  const generateResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();
    if (lowerCaseInput.includes("it support")) {
      return `Sure, ${userDetails.name}! Our IT Support services offer 24/7 troubleshooting, network management, and hardware repair. How can I assist you?`;
    } else if (lowerCaseInput.includes("cybersecurity")) {
      return `${userDetails.name}, we provide comprehensive cybersecurity solutions including threat assessments, vulnerability scans, and incident response. Let us know what you need.`;
    } else if (lowerCaseInput.includes("custom software")) {
      return `We build custom software tailored to your business needs, ${userDetails.name}. Whether it’s a web app, desktop solution, or mobile app, we can help!`;
    } else if (lowerCaseInput.includes("unique query")) {
      return handleUniqueQuery();
    } else {
      return `I’m sorry, ${userDetails.name}, I didn’t understand that. Could you please rephrase or choose a quick option below?`;
    }
  };

  const handleUniqueQuery = () => {
    return `I see you have a unique query, ${userDetails.name}. Would you like us to forward it to our team for further assistance? Please type "yes" to confirm.`;
  };

  const sendQueryToEmail = () => {
    const emailData = {
      user_name: userDetails.name,
      user_email: userDetails.email,
      user_service: userDetails.service,
      chat_history: messages.map((msg) => `${msg.user}: ${msg.text}`).join("\n"),
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailData, "YOUR_USER_ID")
      .then(() => {
        setMessages([...messages, { user: "bot", text: "Your query has been forwarded to our team. We will reach out to you soon!" }]);
      })
      .catch(() => {
        setMessages([...messages, { user: "bot", text: "Sorry, there was an issue forwarding your query. Please try again later." }]);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!isDetailsCollected) {
        collectUserDetails();
      } else {
        handleSendMessage();
      }
    }
  };

  const collectUserDetails = () => {
    const detailsArray = userInput.split(",").map((item) => item.trim());
    if (detailsArray.length === 3) {
      setUserDetails({ name: detailsArray[0], email: detailsArray[1], service: detailsArray[2] });
      setIsDetailsCollected(true);
      setMessages([{ user: "bot", text: `Thanks, ${detailsArray[0]}! How can I assist you today with ${detailsArray[2]}?` }]);
      setUserInput("");
    } else {
      setMessages([{ user: "bot", text: "Please provide your details in this format: Name, Email, Service Interest" }]);
    }
  };

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

          {!isDetailsCollected ? (
            <div className="chatbot-footer">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyPress={handleKeyPress}
                placeholder="Enter Name, Email, Service Interest..."
              />
              <button onClick={collectUserDetails}>Submit</button>
            </div>
          ) : (
            <div className="chatbot-footer">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;





