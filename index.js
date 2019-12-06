const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
    })
)


app.get('/', (req, res, ) => {
    res.render('/login')
});
require('./router/router') (app)

app.listen(7100, () => {
    console.log('Berhasil menjalankan server pada port 7100')
})