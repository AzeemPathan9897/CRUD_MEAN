// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");

// dotenv.config();

// //connect to db 
// mongoose.connect(process.env.DB_CONNECT,
// { useNewUrlParser: true, useUnifiedTopology: true },
// () => console.log("connected to db"));
// //Import Routes
// const listinRoutes = require("./routes/listing");
// const userRoutes = require("./routes/user");

// //Middlewares
// app.use(express.json());
// app.use(cors());

// //Routes Middlewares
// app.use("/api/listings",listinRoutes);
// app.use("/api/user",userRoutes);

// app.listen(4000, () => console.log('App listening on port 4000!'));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const API_PORT = 4000;

dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
);

// Import routes
const listinRoutes = require("./routes/listing");
const userRoutes = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());
// route Middlewares
app.use("/api/listings", listinRoutes);
app.use("/api/user", userRoutes);

app.listen(API_PORT, () => console.log("server up and runing on port 4000!"));