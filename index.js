const app = require('./app')
const port = process.env.PORT || 3000;
//const {PORT} = process.env

app.listen(PORT, () => {

    console.log (`Server is running at port : ${PORT}`);
})
