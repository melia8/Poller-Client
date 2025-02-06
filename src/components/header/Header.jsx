import classes from "./Header.module.css";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <>
      <div className={classes.logo}>
        <a
          className={classes.logoLink}
          href="https://dizplai.com/home/"
          rel="nofollow"
        >
          <img
            alt="Logo"
            width="124"
            height="60"
            src="https://dizplai.com/wp-content/themes/neverno/library/images/logo.svg"
          />
        </a>
      </div>
      <div className={classes.title}> {title}</div>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
