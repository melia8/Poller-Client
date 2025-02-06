import classes from "./App.module.css";
import Poll from "./components/poll/Poll.jsx";
import Vote from "./components/vote/Vote.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route index element={<Vote />}></Route>
        <Route path="/poll" element={<Poll />}></Route>
      </Routes>
    </div>
  );
}

export default App;
