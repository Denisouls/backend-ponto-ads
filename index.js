
let express = require('express');
let app = express();

const port = 3000;


//app.METHOD(path, callback [, callback ...])
app.get("/user/:id1-:id2", (req, res) => {
    res.send("Resposta da rota /teste");
});

app.post("/rotapost", (req, res) => {
    res.send("Retorno da rota isando o método post");
})


app.listen(port, () => {
    console.log(`servidor escutando a porta ${port}`);
});