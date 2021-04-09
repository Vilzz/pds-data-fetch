import fs from 'fs'
import downloadImage from './getImages.js'

const __dirname = process.cwd()
const fileData = fs.readFileSync(`${__dirname}/json/product.json`, 'utf-8')
const resData = JSON.parse(fileData)
const { product } = resData.doct
const attaches = []
const imagesArray = product
  //.filter((item, idx) => idx < 2)
  .map((item) => {
    if (item.product_attachment && item.product_attachment.length > 0) {
      item.product_attachment.forEach((attachment, idx) => {
        attaches[
          idx
        ] = `/images/${item.code[0]}/${item.code[0]}_${idx}_1000x1000.jpg`
        //console.log(attachment.image[0])
      })
    }
  })
console.log(imagesArray.length)
