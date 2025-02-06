import { fetchData, sendData } from "../../helpers/network";
import classes from "./Vote.module.css";
import VoteBar from "./VoteBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

const voteUrl = "http://localhost:8080/vote";
const livePollUrl = "http://localhost:8080/poll";

function Vote() {
  const [pollData, setpollData] = useState({});
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(livePollUrl).then((data) => {
      setpollData(data);
    });
  }, []);

  const updatePoll = (id, name) => {
    const vote = {
      pollId: id,
      name: name,
    };
    sendData(voteUrl, vote);
  };

  const submit = () => {
    updatePoll(pollData.id, selected);
    navigate("/poll");
  };

  return (
    <div className={classes.layout}>
      <Header title={pollData.title} />
      {pollData.options &&
        pollData.options.map((data) => (
          <VoteBar
            key={data.id}
            text={data.name}
            clicked={data.name === selected}
            select={() => setSelected(data.name)}
          />
        ))}

      <div
        disabled={selected ? false : true}
        onClick={submit}
        className={classes.submitBtn}
      >
        <span className={classes.submitText}>Submit</span>
      </div>
    </div>
  );
}

export default Vote;
