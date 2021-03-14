import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import Subcategory from './models/Subcategory.js'
import Category from './models/Category.js'
import ProductGroup from './models/ProductGroup.js'
import Product from './models/Product.js'
connectDB(process.env.MONGO_LOCAL)

const getSubcategory = async (id) => {
  try {
    const subcategory = await Subcategory.findById(id).populate({
      path: 'products',
      select: 'name description products',
      populate: {
        path: 'products',
        select: 'name description',
      },
    })
    return subcategory
  } catch (err) {
    console.log(err)
  }
}
const res = getSubcategory('604a1c0b3d798e3a735c4070').then((data) =>
  console.log(data)
)
