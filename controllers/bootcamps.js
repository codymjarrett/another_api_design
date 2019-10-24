const Bootcamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
	const bootcamps = await Bootcamp.find({})
	res.status(200).json({
		success: true,
		count: bootcamps.length,
		data: bootcamps,
	})
})

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
	const { id } = req.params

	const bootcamp = await Bootcamp.findById(id)

	if (!bootcamp) {
		return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404))
	}
	res.status(200).json({
		success: true,
		data: bootcamp,
	})
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private

exports.createBootcamp = asyncHandler(async (req, res, next) => {
	const { body } = req

	const bootcamp = await Bootcamp.create(body)

	res.status(201).json({
		success: true,
		data: bootcamp,
	})
})

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
	const { id } = req.params
	const { body } = req

	const bootcamp = await Bootcamp.findByIdAndUpdate(id, body, {
		// data returned to be new updated data
		new: true,
		runValidators: true,
	})

	if (!bootcamp) {
		return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404))
	}

	res.status(200).json({
		success: true,
		data: bootcamp,
	})
})

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
	const { id } = req.params

	const bootcamp = await Bootcamp.findByIdAndDelete(id)

	if (!bootcamp) {
		return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404))
	}

	res.status(200).json({
		success: true,
		data: {},
	})
})
