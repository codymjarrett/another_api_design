const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// load config file

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(morgan('combined'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`listening in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})
