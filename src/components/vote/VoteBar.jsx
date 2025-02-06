import classes from "./VoteBar.module.css";
import PropTypes from "prop-types";

function VoteBar({ text, clicked, select }) {
  return (
    <div
      onClick={select}
      className={clicked ? classes.voteBarClicked : classes.voteBarBackground}
    >
      <div className={classes.title}> {text} </div>
    </div>
  );
}

VoteBar.propTypes = {
  text: PropTypes.string,
  clicked: PropTypes.bool,
  select: PropTypes.func,
};

export default VoteBar;
