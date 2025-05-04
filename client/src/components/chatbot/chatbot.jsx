import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";
import botIcon from "./chatimage/robot.png";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [chatStage, setChatStage] = useState("welcome");
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { user: "user", text: userInput }]);
    handleBotResponse(userInput);
    setUserInput("");
  };

  const handleBotResponse = (input) => {
    setIsBotTyping(true);
    setTimeout(() => {
      let botResponse = "";
      let options = null;
      const lowerCaseInput = input.toLowerCase().trim();

      if (chatStage === "welcome") {
        setUserName(input);
        setChatStage("options");
        botResponse = `Hello, ${input}! How can I assist you today?`;
        options = ["Our Services", "Get in Touch", "Frequently Asked Questions"];
      } else if (chatStage === "options") {
        if (lowerCaseInput === "our services") {
          setChatStage("serviceSelection");
          botResponse = "We offer a range of professional services. Please select an option:";
          options = [
            "IT Support & Infrastructure",
            "Cybersecurity Solutions",
            "Cloud Computing Services",
            "Digital Marketing Strategy",
            "Custom Software Development",
            "Enterprise Resource Planning (ERP)",
            "Mobile Application Development",
            "Web Design & Development",
          ];
        } else if (lowerCaseInput === "get in touch") {
          botResponse = "You can reach us at info@ernestwelltech.com or Whatsapp us at (+44)7880234123";
        } else if (lowerCaseInput === "frequently asked questions") {
          botResponse =
            "Here are some common topics: pricing, project timelines, and support services. What would you like to learn more about?";
        } else {
          botResponse = "I didn't quite get that. Please select one of the options below.";
          options = ["Our Services", "Get in Touch", "Frequently Asked Questions"];
        }
      } else if (chatStage === "serviceSelection") {
        const serviceRoutes = {
          "it support & infrastructure": "/ITsupport",
          "cybersecurity solutions": "/CybersecuritySolutions",
          "cloud computing services": "/cloudsolutions",
          "digital marketing strategy": "/digitalmarketing",
          "custom software development": "/custom-development",
          "enterprise resource planning (erp)": "/erp-development",
          "mobile application development": "/app-development",
          "web design & development": "/web-development",
        };

        const matchedService = Object.keys(serviceRoutes).find(
          (service) => lowerCaseInput === service
        );

        if (matchedService) {
          botResponse = `Redirecting you to our **${matchedService}** page...`;
          setChatStage("serviceSelected");
          setTimeout(() => {
            navigate(serviceRoutes[matchedService]);
          }, 1000);
        } else {
          botResponse = "Please choose from the available services below.";
          options = [
            "IT Support & Infrastructure",
            "Cybersecurity Solutions",
            "Cloud Computing Services",
            "Digital Marketing Strategy",
            "Custom Software Development",
            "Enterprise Resource Planning (ERP)",
            "Mobile Application Development",
            "Web Design & Development",
          ];
        }
      }

      setMessages((prev) => [...prev, { user: "bot", text: botResponse, options }]);
      setIsBotTyping(false);
    }, 1200);
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
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <div className="chatbot-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.user}`}>
                  <p>{message.text}</p>
                  {message.options && (
                    <div className="options-container">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          className="option-btn"
                          onClick={() => handleBotResponse(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
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

          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={chatStage === "welcome" ? "Enter your name..." : "Type your message..."}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;