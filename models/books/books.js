const { Schema, model } = require('mongoose')
const Joi = require('joi')

const bookSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  name: Joi.string(),
  author: Joi.string(),
  pageCount: Joi.number(),
})

const Book = model('book', bookSchema)

module.exports = {
  Book,
  joiSchema,
}
