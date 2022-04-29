const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/src"));
//Configuraciones
app.set("port", 3000);
//routers
app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));

});


//static files
//Listening the server
app.listen(app.get('port'), () => {

    console.log("Server on port",app.get('port'));
});