import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  const data = {
    userId: 1,
    title: "Suchita",
    body: "Manohare",
  };

  useEffect(() => {
    // const response = axios.post("https://jsonplaceholder.typicode.com/posts", {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   data,
    // });

    // const response = axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   data,
    // });
    // const response = axios.patch(
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   {
    //     body: {
    //       body: "Manohare",
    //     },
    //   }
    // );

    const response = axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response);
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
