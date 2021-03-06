import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

import tweetRouter from "./routes/tweet.route";
import retweetRouter from "./routes/retweet.route";

const connectionString = process.env.DATABASE_URL;

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/tweets", tweetRouter);
app.use("/retweets", retweetRouter);

createConnection({ type: "postgres", url: connectionString })
  .then(() => {
    app.listen(port, () =>
      console.log(`The server is listening on port ${port}`)
    );
  })
  .catch((error) =>
    console.log(`couldn't connect to database, error: ${error}`)
  );
