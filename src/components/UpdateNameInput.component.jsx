import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const UpdateNameInput = (props) => {
  const { value, handleChange } = props;

  return (
    <Box display="flex" flexDirection="row" ml={1}>
      <Box>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default UpdateNameInput;
