import mongoose from 'mongoose'

const StockSchema = new mongoose.Schema(
  {
    productgroup: {
      type: mongoose.Schema.ObjectId,
      ref: 'ProductGroup',
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
    donor_product_id: {
      type: String,
    },
    article: {
      type: String,
    },
    amount: {
      type: Number,
    },
    free: {
      type: Number,
    },
    inwayamount: {
      type: Number,
    },
    inwayfree: {
      type: Number,
    },
    enduserprice: {
      type: Number,
    },
    dealerprice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)
const Stock = mongoose.model('Stock', StockSchema)

export default Stock
