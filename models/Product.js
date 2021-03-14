import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    article: {
      type: String,
    },
    group: {
      type: mongoose.Schema.ObjectId,
      ref: 'ProductGroup',
    },
    main_product: {
      type: String,
    },
    size_code: {
      type: String,
    },
    price: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    donor_id: {
      type: String,
    },
  },
  { timestamps: true }
)
const Product = mongoose.model('Product', ProductSchema)
export default Product
