import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import MyStory from "./MyStory";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<MyStory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
