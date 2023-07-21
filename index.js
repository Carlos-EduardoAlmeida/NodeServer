require("./modules/express")
const dotenv = require('dotenv') // módulo dotenv Para segurança da senha e user no connect
const connectToDatabase = require('./src/database/connect') //Conectando ao connect.js para linkar ao servidor mongodb

dotenv.config()
connectToDatabase()