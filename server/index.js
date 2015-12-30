'use strict';

const jsonServer = require('json-server')

// Returns an Express server
const server = jsonServer.create()

const initServer = function(port){
	// Set default middlewares (logger, static, cors and no-cache)
	server.use(jsonServer.defaults())
	
	// Add custom routes
	// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })
	
	// Returns an Express router
	var router = jsonServer.router('database/db.json')
	server.use(router)
	
	server.listen(port || 1828)
}

module.exports = initServer
