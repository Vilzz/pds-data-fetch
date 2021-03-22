import mongoose from 'mongoose'
import slugify from 'slugify'

const SubcategorySchema = new mongoose.Schema(
  {
    parent: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
    name: {
      type: String,
      required: [true, 'Требуется задать наименование подкатегории'],
    },
    description: {
      type: String,
      required: [true, 'Требуется задать описание подкатегории'],
    },
    donor: {
      type: String,
    },
    photo: {
      type: String,
      default: '/images/subcategories/no-image.jpg',
    },
    icon: {
      type: String,
    },
    groups: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductGroup',
      },
    ],
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)
SubcategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Subcategory = mongoose.model('Subcategory', SubcategorySchema)

export default Subcategory
