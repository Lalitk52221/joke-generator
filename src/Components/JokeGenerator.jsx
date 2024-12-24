import React, { useState } from "react";

const JokeGenerator = () => {
  const [data, setData] = useState(null);

  const GenerateJoke = async () => {
    
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await response.json();
    setData(data);
    // console.log(data);
  };

  return (
    <div>
      <h1>New Jokes here</h1>
      <button onClick={GenerateJoke}>Generate new Joke</button>
    <div>
      {data &&
          <div>
            <h4>Question: {data.setup}</h4>
            <h4>Answer: {data.punchline}</h4>
          </div>
       
      }
      </div>
    </div>
  );
};

export default JokeGenerator;
