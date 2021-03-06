import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing"
};

// console.log(Object.keys(emojiDictionary));
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput === undefined) {
      meaning = "Not available in database";
    }
    setMeaning(meaning); //react call
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input
        style={{ width: "80%", padding: "1rem" }}
        onChange={inputChangeHandler}
      ></input>
      <div style={{ padding: "2rem", fontWeight: "bold" }}>{meaning}</div>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "1.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
