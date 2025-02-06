import classes from "./PollBar.module.css";
import PropTypes from "prop-types";

const PollBar = ({ value, total, text }) => {
  const percent = total === 0 ? 0 : ((value / total) * 100).toPrecision(3);
  return (
    <div className={classes.progressBarBackground}>
      <div className={classes.title}> {text} </div>
      <div className={classes.percent}> {percent}% </div>
      <div
        className={classes.progressBar}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

PollBar.propTypes = {
  value: PropTypes.number,
  total: PropTypes.number,
  text: PropTypes.string,
};

export default PollBar;
