import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundImage:
      "linear-gradient(to bottom, rgb(129 143 220 / 36%), rgb(178 158 158 / 14%))",
  },
  inline: {
    display: "inline",
    fontSize: "13px"
  },
}));

export default function ChatElement({ name, message, date }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                  variant="body2"
                  color="textPrimary"
              >
                {message}
              </Typography>
              <Typography
                component="span"
                className={classes.inline}
              >
                {date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
