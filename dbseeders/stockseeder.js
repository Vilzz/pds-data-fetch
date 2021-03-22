import fs from 'fs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })

import connectDB from '../config/db.js'
connectDB(process.env.MONGO_LOCAL)

import getGroupId from '../maps/groupsMap.js'
import getProductId from '../maps/productsMap.js'
import Stock from '../models/Stock.js'

const stockData = JSON.parse(fs.readFileSync('./json/stock.json', 'utf-8'))
const { stock } = stockData.doct

const getStocksArray = () => {
  const stocks = stock.map((st) => {
    let groupid = getGroupId()(st.product_id[0])
    if (groupid) {
      return {
        productgroup: groupid,
        donor_product_id: st.product_id[0],
        article: st.code[0],
        amount: st.amount[0],
        free: st.free[0],
        inwayamount: st.inwayamount[0],
        inwayfree: st.inwayfree[0],
        dealerprice: st.dealerprice[0],
        enduserprice: st.enduserprice[0],
      }
    } else {
      let productid = getProductId()(st.product_id[0])
      return {
        product: productid,
        donor_product_id: st.product_id[0],
        article: st.code[0],
        amount: st.amount[0],
        free: st.free[0],
        inwayamount: st.inwayamount[0],
        inwayfree: st.inwayfree[0],
        dealerprice: st.dealerprice[0],
        enduserprice: st.enduserprice[0],
      }
    }
  })
  return stocks
}
const createStocks = async (stockarray) => {
  try {
    await Stock.create(stockarray)
    console.log('Данные загружены...')
    console.log(`Импортировано всего документов: ${stockarray.length}`)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

setTimeout(() => {
  const stockarray = getStocksArray()
  createStocks(stockarray)
}, 1000)
