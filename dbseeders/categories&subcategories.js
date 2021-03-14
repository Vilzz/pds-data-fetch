import fs from 'fs'
import mongoose from 'mongoose'
import Subcategory from '../models/Subcategory.js'
import Category from '../models/Category.js'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import connectDB from '../config/db.js'
connectDB(process.env.MONGO_LOCAL)

const categoriesData = JSON.parse(fs.readFileSync('./json/tree.json', 'utf-8'))

const subcategories = []

const setSubcategories = (arr, parent_id) => {
  const subs = arr.map((item) => {
    let id = new mongoose.Types.ObjectId()

    const subcategory = {
      _id: id,
      parent: parent_id,
      name: item.name[0],
      description: item.name[0],
      donor_id: item.page_id[0],
    }
    subcategories.push(subcategory)
    return subcategory._id
  })

  return subs
}

const { page } = categoriesData.doct.page[0]
const categories = []

page.forEach((p) => {
  let id = new mongoose.Types.ObjectId()
  let subcategories = []
  let category = {
    _id: id,
    name: p.name[0],
    description: p.name[0],
    donor_id: p.page_id[0],
    subcategories: setSubcategories(p.page, id),
  }
  categories.push(category)
})

const createSubcategories = async (subcategories, categories) => {
  try {
    await Subcategory.create(subcategories)
    console.log('Данные загружены...')
    console.log(`Импортировано всего документов: ${subcategories.length}`)
    await Category.create(categories)
    console.log('Данные загружены...')
    console.log(`Импортировано всего документов: ${categories.length}`)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

setTimeout(() => {
  createSubcategories(subcategories, categories)
}, 100)
