let express = require('express');

let app = express();

app.use(express.static('public'))

app.get("/", function(req, res) {
res.send("Kaixo mundua!");
})

app.post("/bezeroa", function(req,res) {
    res.send('POST eskaera jaso dut')
})

app.listen( 3000, function() {
console.log("Zerbitzaria 3000 portuan entzuten");
})


