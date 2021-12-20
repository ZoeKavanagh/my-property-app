const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema(
    {
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('properties', Property)