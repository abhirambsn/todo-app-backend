const app = require('./App')
const mongoose = require('mongoose')
const PORT = process.env.PORT | 5000

const CONNECTION_URI = process.env.DB_URI

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
    if(error) {
        console.error(error);
    } else {
        console.log("DATABASE CONNECTION ESTABLISHED");
        app.listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`)
        })
    }
})