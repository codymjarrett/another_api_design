const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const logger = require('./middleware/logger')

//route files
const bootcamps = require('./routes/bootcamps')

// load config file
dotenv.config({ path: './config/config.env' })

const app = express()

// Dev logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(
		`listening in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
	)
})
