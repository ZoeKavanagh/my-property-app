const Property = require('../models/property-model')
const { ObjectId } = require('mongodb')

createProperty = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide property details',
        })
    }

    const property = new Property(body)

    if (!property) {
        return res.status(400).json({ success: false, error: err })
    }

    property
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: property._id,
                message: 'Property created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Propery not created!',
            })
        })
}

updateProperty = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a details to update',
        })
    }

    Property.findOne({ _id: ObjectId(req.params.id) }, (err, property) => {
        console.log('Property: ', property)
        if (err) {
            return res.status(404).json({
                err,
                message: 'Propery not found!',
            })
        }
        property.description = body.description
        property.price = body.price
        property.image = body.image
        property.type = body.type
        property
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: property._id,
                    message: 'Property succesfully updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Property not updated!',
                })
            })
    })
}

deleteProperty = async (req, res) => {
    await Property.findOneAndDelete({ _id: ObjectId(req.params.id) }, (err, property) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!property) {
            return res
                .status(404)
                .json({ success: false, error: `Property not found` })
        }

        return res.status(200).json({ success: true, data: property })
    }).catch(err => console.log(err))
}

getPropertyById = async (req, res) => {
    await Property.findOne({ _id: ObjectId(req.params.id) }, (err, property) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!property) {
            return res
                .status(404)
                .json({ success: false, error: `Property not found` })
        }
        return res.status(200).json({ success: true, data: property })
    }).catch(err => console.log(err))
}

getProperties = async (req, res) => {
    await Property.find({}, (err, properties) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!properties.length) {
            return res
                .status(404)
                .json({ success: false, error: `Properties not found` })
        }
        return res.status(200).json({ success: true, data: properties })
    }).catch(err => console.log(err))
}

module.exports = {
    createProperty,
    updateProperty,
    deleteProperty,
    getProperties,
    getPropertyById,
}