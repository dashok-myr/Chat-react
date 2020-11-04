import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MyButton from "./MyButton.component";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const InputWithSubmit = (props) => {
  const { inputLabel, buttonName, value, handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box display="flex" flexDirection="row">
        <Box flexGrow={1}>
          <TextField
            id="outlined-multiline-flexible"
            label={inputLabel}
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <MyButton type="submit" name={buttonName} />
        </Box>
      </Box>
    </form>
  );
};

export default InputWithSubmit;
