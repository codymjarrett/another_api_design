const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'show all bootcamps' })
}

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` })
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private

exports.createBootcamp = async (req, res, next) => {
	const { body } = req

	try {
		const bootcamp = await Bootcamp.create(body)

		res.status(201).json({
			success: true,
			data: bootcamp,
		})
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.errmsg,
		})
	}
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `update bootcamp ${req.params.id}` })
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `delete bootcamp ${req.params.id}` })
}
