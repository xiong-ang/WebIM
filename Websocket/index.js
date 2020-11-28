let express = require("express");
let app = express();

app.use(express.static(__dirname));

let expressWs = require('express-ws');
expressWs(app);

app.ws('/clock',(ws,res)=>{
    setInterval(() => {
        ws.send(`${new Date().toLocaleTimeString()}`);
    }, 1000);
});

app.listen(8080);