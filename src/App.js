import "./App.css";
import React, { useState, useEffect } from "react";
import { applause, boo, gasp, tada, victory, wrong } from "./sounds";

const sounds = [applause, boo, gasp, tada, victory, wrong];

const App = () => {
  const audioElements = sounds.map((sound) => {
    return <audio id={sound} key={sound} src={sound} />;
  });

  const [selectedSound, setSelectedSound] = useState(null);

  useEffect(() => {
    if (selectedSound) {
      sounds.forEach((s) => {
        const song = document.getElementById(s);
        song.pause();
        song.currentTime = 0;
      });
      document.getElementById(selectedSound).play();
    }
  }, [selectedSound]);

  const buttons = sounds.map((sound) => {

    return (
      <button
        className='btn'
        key={sound}
        onClick={() => {
          setSelectedSound(sound);
        }}
      >
        {sound}
      </button>
    );
  });

  return (
    <div>
      {audioElements}
      <div id="buttons">{buttons}</div>
    </div>
  );
};

export default App;
