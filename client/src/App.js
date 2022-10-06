import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";

function App() {
  return (
    <div>
      <Container>
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Memories
            <img src={memories} alt="memories" height="60" />
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing="3"
            >
              <Grid item xs="12" sm="7">
                <Posts />
              </Grid>
              <Grid item xs="12" sm="7">
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
