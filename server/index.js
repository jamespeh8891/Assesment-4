const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getMotivate, getQuotes } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune/", getFortune);
app.get("/api/motivate/", getMotivate);
app.get("/api/quotes/", getQuotes);

app.listen(4000, () => console.log("Server running on 4000"));
