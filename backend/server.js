import express from "express";


const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});


app.listen(5000, () => {
    console.log("Backend server is running on port 5000");
}
)