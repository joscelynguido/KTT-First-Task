const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/src"));

app.set("port", 3000);

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));

});


app.listen(app.get('port'), () => {

    console.log("Server on port",app.get('port'));
});