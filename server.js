const express =require("express");
const dotenv =require("dotenv");
const connectDB =require("./db");

const cors = require('cors');

const user = require("./routes/usersRoute");
const room = require("./routes/roomsRoute");
const booking = require("./routes/bookingRoute");




dotenv.config();

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
// Use the user routes
app.use("/api/users", user);
app.use("/api/rooms", room);
app.use("/api/bookings", booking);

// Define a simple route to test the server
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});