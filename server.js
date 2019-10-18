const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const logger = require('./middleware/logger')
const connectDB = require('./config/db')

// load config file
dotenv.config({ path: './config/config.env' })

//connect to DB
connectDB()

//route files
const bootcamps = require('./routes/bootcamps')


const app = express()

// Dev logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps)




const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
	console.log(
		`listening in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`.magenta.bold
	)
})

// handle unhandled proise rejections

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red.bold)
	// close server and exit process
	server.close(()=> process.exit(1))
})
