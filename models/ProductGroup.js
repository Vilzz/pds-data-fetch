import mongoose from 'mongoose'

const ProductGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    donor_id: {
      type: String,
    },
    product_size: {
      type: String,
    },
    material: {
      type: String,
    },
    brand: {
      type: String,
    },
    article: {
      type: String,
    },
    weight: {
      type: String,
    },
    ondemand: {
      type: Boolean,
    },
    small_img: {
      type: String,
    },
    big_img: {
      type: String,
    },
    status: {
      type: String,
    },
    price: {
      type: Number,
    },
    prints: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Prints',
      },
    ],
    pack: {
      amount: Number,
      weight: Number,
      volume: Number,
      sizex: Number,
      sizey: Number,
      syzez: Number,
    },
    products: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
      },
    ],
    attachments: [String],
  },
  { timestamps: true }
)
const ProductGroup = mongoose.model('ProductGroup', ProductGroupSchema)
export default ProductGroup
