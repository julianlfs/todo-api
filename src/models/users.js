const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
     },
     email: {
         type: String,
         required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail()){
                throw new Error('Email inválido')
            }
        }
     },
     password: {
        type: String,
        required: true,
       trim: true,
       min: 7,
       validate(value){
           if (value.toLowerCase().includes('senha')){
               throw new Error('A senha nao pode ter a palavra "senha"')
           }
       }
     },
     age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Idade deve ser um valor positivo')
            }
        }
     }
})

module.exports = User