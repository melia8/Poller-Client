import PollBar from "./PollBar.jsx";
import classes from "./Poll.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/network.js";
import Header from "../header/Header.jsx";

const livePollUrl = "http://localhost:8080/poll";

function Poll() {
  const [pollData, setPollData] = useState({});

  useEffect(() => {
    fetchData(livePollUrl).then((data) => {
      setPollData(data);
    });
  }, []);

  return (
    <div className={classes.layout}>
      <Header title={pollData.title} />
      {pollData.options &&
        pollData.options.map((data) => (
          <PollBar
            key={data.id}
            value={data.total}
            total={pollData.total}
            text={data.name}
          />
        ))}
    </div>
  );
}

export default Poll;
