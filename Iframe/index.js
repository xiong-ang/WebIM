let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get('/clock',(req,res)=>{
    setInterval(() => {
        res.write(`<script type="text/javascript">
            parent.document.querySelector('#clock').innerHTML = "${new Date().toLocaleTimeString()}"
            </script>
        `);
    }, 1000);
});

app.listen(8080);