//**************************************************************** */
// Скрипт создания карт товаров и групп товаров
// создаем соответствие _id нашей базы с donor_id
// id в системе донора
// Запуск с ключем -products или -groups в зависимости от желаемого
//***************************************************************** */
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs'
//Load env vars
dotenv.config({ path: './config/config.env' })
//Load models
import ProductGroup from '../models/ProductGroup.js'
import Product from '../models/Product.js'
//Connect to DB
mongoose.connect(process.env.MONGO_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

const products = async () => {
  const res = await Product.find({}).select('_id donor_id')
  return res
}
const groups = async () => {
  const res = await ProductGroup.find({}).select('_id donor_id')
  return res
}
const createProductMap = async () => {
  try {
    const result = await products()
    result.forEach(({ _id, donor_id }) => {
      fs.appendFileSync('productsMap.txt', `'${donor_id}':'${_id}',\n`)
    })
    console.log('Обработка завершена')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}
const createGroupsMap = async () => {
  try {
    const result = await groups()
    result.forEach(({ _id, donor_id }) => {
      fs.appendFileSync('groupsMap.txt', `'${donor_id}':'${_id}',\n`)
    })
    console.log('Обработка завершена')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

if (process.argv[2] === '-products') {
  createProductMap()
} else if (process.argv[2] === '-groups') {
  createGroupsMap()
}
