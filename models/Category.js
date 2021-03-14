import mongoose from 'mongoose'
import slugify from 'slugify'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Требуется ввести наименование категории'],
  },
  description: {
    type: String,
    required: [true, 'Требуется добавить описание категории'],
    maxlength: [1000, 'Максимальная длина описания категории 1000 символов'],
  },
  photo: {
    type: String,
    default: '/images/categories/no-image.jpg',
  },
  icon: {
    type: String,
  },
  showinmenu: {
    type: Boolean,
    default: false,
  },
  donor_id: {
    name: String,
    id: String,
    url: String,
  },
  subcategories: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Subcategory',
    },
  ],
  slug: {
    type: String,
    unique: true,
  },
})

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

CategorySchema.statics.deleteCategory = async function (categoryId) {
  try {
    await this.model('Subcategory').deleteMany({ parent: categoryId })
  } catch (err) {
    console.error(err)
  }
}
CategorySchema.pre('remove', function (next) {
  this.constructor.deleteCategory(this._id)
  next()
})

const Category = mongoose.model('Category', CategorySchema)
export default Category
