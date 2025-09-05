import React, { useState } from "react";

const VoiceToText = () => {
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.start();
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={startListening}>Start Speaking</button>
      <p><strong>Transcript:</strong> {transcript}</p>
    </div>
  );
};

export default VoiceToText;
