'use strict'
/**
 * Express Start Kit
 */
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import express from 'express'
import {router} from '~/routes'

dotenv.config()
const server = express()
const PORT = process.env.PORT || 3000

console.log(process.env.NODE_ENV)

server.use(express.static(__dirname))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/', router)

server.listen(PORT, () => console.log(`Kit is running on port ${PORT}`))
