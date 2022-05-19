import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😡": "Enraged Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand"
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  var emojisWeHave = Object.keys(emojiDictionary);

  function emojiHandler(event) {
    var userInput = event.target.value;

    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "Emoji you are Searching for, is not in our Database";
    }

    setEmojiMeaning(emojiMeaning);
  }
  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoticon</h1>

      <input placeholder="Emoji.........." onChange={emojiHandler}></input>

      <h2>{emojiMeaning}</h2>
      <h3>Emojis we have</h3>
      {emojisWeHave.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
