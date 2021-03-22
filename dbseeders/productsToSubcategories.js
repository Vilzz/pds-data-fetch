import fs from 'fs'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import connectDB from '../config/db.js'
import Subcategory from '../models/Subcategory.js'

// Импортируем карту ID подкатегорий
import getSubcategoryId from '../maps/subctgsMap.js'

// Импортируем карту товарных групп
import getGroupId from '../maps/groupsMap.js'

connectDB(process.env.MONGO_LOCAL)

const updateSubcategory = async (id, products) => {
  try {
    const subcategory = await Subcategory.findById(id)
    if (subcategory) {
      subcategory.groups = products
    }
    await subcategory.save()
  } catch (err) {
    console.log(err)
  }
}

const tree = JSON.parse(fs.readFileSync('./json/tree.json', 'utf-8'))

const { page } = tree.doct

setTimeout(() => {
  page[0].page.forEach((category) => {
    console.log(category.name[0].green.bold.italic)
    let subcategories = category.page.map((subctg) => {
      let id = getSubcategoryId()(subctg.name[0])
      console.log(
        'Name:'.yellow.bold,
        subctg.name[0].blue,
        'id:'.yellow.bold,
        id
      )
      let products = subctg.product.reduce(
        (acc, item) => [...acc, getGroupId()(item.product)],
        []
      )
      return { id, products }
    })
    if (subcategories.length > 0) {
      subcategories.forEach((subctg, idx) => {
        updateSubcategory(subctg.id, subctg.products)
      })
    }
  })
  //process.exit()
}, 2000)
