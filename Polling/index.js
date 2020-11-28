let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get('/clock',(req,res)=>{
    res.end(new Date().toLocaleTimeString());
});

app.listen(8080);