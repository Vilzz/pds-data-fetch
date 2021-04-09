//********************************************************** */
// Скрипт сидер для начальной заливки/удаления данных товаров и
// товарных групп в базу mongodb
// Запуск с ключем -i для заливки с ключем -d для удаления
//*********************************************************** */
import fs from 'fs'
import mongoose from 'mongoose'
import getParsedDOMText from '../domparser/parser.js'
import connectDB from '../config/db.js'
// Подключаем переменные окружения
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
// Модели базы данных
import ProductGroup from '../models/ProductGroup.js'
import Product from '../models/Product.js'
// Подключаем базу данных
connectDB(process.env.MONGO_LOCAL)
// Читаем выгрузку созданную скриптом parseXML.js из файла json/product.json
const products = JSON.parse(fs.readFileSync('./json/product.json', 'utf-8'))
const { product } = products.doct

const productsData = () =>
  product.map((item) => {
    const pack = {}
    const productGroup = {}
    const products = []
    const productsId = []
    const attachs = []

    if (item.product_attachment && item.product_attachment.length > 0) {
      item.product_attachment.map((attachment, idx) => {
        attachs[idx] = `/images/${item.code[0]}_${idx}_1000x1000.jpg`
      })
    }

    if (item.pack) {
      pack.amount = item.pack[0].amount ? item.pack[0].amount[0] : null
      pack.weight = item.pack[0].weight ? item.pack[0].weight[0] : null
      pack.volume = item.pack[0].volume ? item.pack[0].volume[0] : null
      pack.sizex = item.pack[0].sizex ? item.pack[0].sizex[0] : null
      pack.sizey = item.pack[0].sizey ? item.pack[0].sizey[0] : null
      pack.sizez = item.pack[0].sizez ? item.pack[0].sizez[0] : null
    }

    let productGroupId = new mongoose.Types.ObjectId()

    if (item.product && item.product.length > 0) {
      item.product.map((prod, idx) => {
        let id = new mongoose.Types.ObjectId()
        productsId[idx] = id
        products[idx] = {
          _id: id,
          donor_id: prod.product_id ? prod.product_id[0] : '',
          group: productGroupId,
          main_product: prod.main_product ? prod.main_product[0] : '',
          article: prod.code ? prod.code[0] : '',
          name: prod.name ? prod.name[0] : '',
          size_code: prod.size_code ? prod.size_code[0] : '',
          price: prod.price ? prod.price[0].price[0] : '',
          weight: prod.weight ? prod.weight[0] : '',
        }
      })
    }
    productGroup._id = productGroupId
    productGroup.name = item.name ? item.name[0] : ''
    productGroup.description = item.content
      ? getParsedDOMText(`<div>${item.content[0]}</div>`)
      : ''
    productGroup.donor_id = item.product_id[0]
    productGroup.product_size = item.product_size ? item.product_size[0] : ''
    productGroup.material = item.matherial ? item.matherial[0] : ''
    productGroup.brand = item.brand ? item.brand[0] : ''
    productGroup.article = item.code ? item.code[0] : ''
    productGroup.weight = item.weight ? item.weight[0] : ''
    productGroup.ondemand = item.ondemand ? item.ondemand[0] : false
    productGroup.price = item.price.length > 0 ? item.price[0].price[0] : null
    productGroup.small_img = item.small_image
      ? `/images/small/${item.code[0]}_small.jpg`
      : ''
    productGroup.big_img = item.super_big_image
      ? `/images/big/${item.code[0]}_big.jpg`
      : ''
    productGroup.status = item.status ? item.status[0]._ : ''
    productGroup.pack = pack.amount ? pack : {}
    productGroup.attachments = attachs
    productGroup.products = productsId
    return [productGroup, products]
  })

//Import Data to DB
const importData = async (func) => {
  const data = func()
  const products = data.reduce((acc, product) => acc.concat(product[1]), [])
  const groups = data.map((item) => item[0])

  try {
    await ProductGroup.create(groups)
    await Product.create(products)
    console.log('Данные загружены...')
    console.log(
      `Импортировано товарных групп всего: ${groups.length}`,
      `Товаров всего: ${products.length}`
    )
    process.exit()
  } catch (err) {
    console.error(err)
  }
}
// Delete data
const deleteData = async () => {
  try {
    await ProductGroup.deleteMany()
    await Product.deleteMany()
    console.log('Data Deleted...')
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData(productsData)
} else if (process.argv[2] === '-d') {
  deleteData()
}
