import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Box textAlign={"center"} my={8}>
          <Typography component="h1" variant="h3">
            Fanvue&apos;s Fullstack coding challenge
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NextLink href="/feed" passHref>
              <Link>
                <Paper
                  sx={{
                    textAlign: "center",
                    border: "1px solid grey",
                    borderRadius: 5,
                    p: 3,
                  }}
                  elevation={3}
                >
                  <h2>Go to Feed page</h2>
                  <p>And start the first task</p>
                </Paper>
              </Link>
            </NextLink>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NextLink href="/vault" passHref>
              <Link>
                <Paper
                  sx={{
                    textAlign: "center",
                    border: "1px solid grey",
                    borderRadius: 5,
                    p: 3,
                  }}
                  elevation={3}
                >
                  <h2>Go to Vault page</h2>
                  <p>And start the second task</p>
                </Paper>
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
