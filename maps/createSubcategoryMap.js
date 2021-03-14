import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import Subcategory from '../models/Subcategory.js'
import connectDB from '../config/db.js'
connectDB(process.env.MONGO_LOCAL)

const subcategories = async () => {
  try {
    const res = await Subcategory.find({}).select('_id name')
    return res
  } catch (err) {
    console.log(err)
  }
}

setTimeout(() => {
  subcategories().then((data) => {
    data.map((str) => {
      fs.appendFileSync('prodsToSubctgs.txt', `'${str.name}':'${str._id}',\n`)
    })
    process.exit()
  })
}, 1000)
