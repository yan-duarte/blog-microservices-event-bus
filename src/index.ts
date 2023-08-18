import express from "express";
import { json } from "body-parser";
import axios from "axios";
import { Event } from "./types";

const app = express();
app.use(json());

const events: Event[] = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);

  try {
    await Promise.all([
      axios.post("http://localhost:4000/events", event),
      axios.post("http://localhost:4001/events", event),
      axios.post("http://localhost:4002/events", event),
      axios.post("http://localhost:4003/events", event),
    ]);
  } catch (error) {
    console.error(error);
  }

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
