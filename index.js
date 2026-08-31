// const express = require('express');
// const http = require('http')
// const fs = require('fs')
// const os = require('os')
// const url = require('url')
//
//
//
// const app = express();
//
// app.get('/', (req,res) =>{
// 	return res.send()
// })
//
//
//
//
// const myServer = http.createServer(app);
//
// myServer.listen(3000, () => console.log('server started on port 3000'))
//
//
const express = require("express");
const app = express();

// serve static files
app.use(express.static("public"));

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
