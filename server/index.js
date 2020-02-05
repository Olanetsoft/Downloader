const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.listen(8000, () => {
    console.log('Server Works !!! At port 8000');
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    res.json({url:URL});
})