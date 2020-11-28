let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get('/clock', (req, res) => {
    let timer = setInterval(() => {
        let date = new Date()
        let seconds = date.getSeconds()
        if (seconds % 5 === 0) {
            res.end(date.toLocaleString())
            clearInterval(timer)
        }
    }, 1000);
});

app.listen(8080);