import React from "react";
import { Routes, Route } from "react-router-dom";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Home from "./pages/Home/components/Home";
import Header from "./general/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="month-statistics" element={<MonthStatistics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
