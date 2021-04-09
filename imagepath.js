import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import ProductGroup from './models/ProductGroup.js'
import Product from './models/Product.js'
import connectDB from './config/db.js'
connectDB(process.env.MONGO_LOCAL)
const products = async () => {
  const res = await ProductGroup.find().select('small_img big_img')
  return res
}
try {
  products().then((items) => {
    items.forEach(async (item) => {
      let a = item.small_img.slice(7)
      let b = item.big_img.slice(7)
      let product = await ProductGroup.findByIdAndUpdate(item._id, {
        big_img: `/images/big${b}`,
        small_img: `/images/small${a}`,
      })
      //

      //console.log(`/images/small${a}`)
    })
  })
} catch (err) {
  err && console.log(err)
}
