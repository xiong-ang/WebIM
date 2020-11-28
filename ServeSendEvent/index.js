let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get('/clock',(req,res)=>{
    res.setHeader('Content-Type','text/event-stream')
    setInterval(() => {
        res.write(`event:clock\ndata:${new Date().toLocaleTimeString()}\n\n`)
    }, 1000);
});

app.listen(8080);