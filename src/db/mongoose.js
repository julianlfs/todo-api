const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})