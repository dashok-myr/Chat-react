import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(() => ({
    title: {
        color: "white"
    }
}));

const Title = () => {
    const classes = useStyles();

    return (
        <Box mt={10} mb={4}>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                <Grid item>
                <Typography className={classes.title} variant="h3">Nerd's Chat</Typography>
                </Grid>
                <Grid item>
                <Typography className={classes.title} variant="h5">Choose a chatroom:</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Title
