import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundImage:
      "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
    margin: "10px",
    width: "150px",
    padding: "15px 45px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "block",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
  },
}));

const MyButton = ({ name, handleOnSubmit, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      {...otherProps}
      onSubmit={handleOnSubmit}
    >
      {name}
    </Button>
  );
};

export default MyButton;
