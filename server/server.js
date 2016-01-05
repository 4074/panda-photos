'use strict';

const path = require('path')
const express = require('express')
const jsonServer = require('json-server')

// Returns an Express server

const initServer = function(port){
	// Set default middlewares (logger, static, cors and no-cache)
    
    let app = express()
    let api = jsonServer.create()
	api.use(jsonServer.defaults())
	
	// Add custom routes
	// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })
	
	// Returns an Express router
	var router = jsonServer.router('database/db.json')
	api.use(router)
	
    app.use('/api', api)
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + './../static/index.html'))
    })
    
    app.use(express.static(path.join(__dirname + './../static')));
    
    port = port || 1828
	app.listen(port)
    console.log('server is listening on ' + port)
}

module.exports = initServer
