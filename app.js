const express = require('express');
const app = express();
app.get("/",(req,res) => {
    res.send("Welcome To Marvin Patel Dockerzed Node.js Application");

});
app.listen(3000, () => {
    console.log("Server running n porst 3000");
});
