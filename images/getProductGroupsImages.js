import fs from 'fs'
import downloadImage from './getImages.js'

const __dirname = process.cwd()
const fileData = fs.readFileSync(`${__dirname}/json/product.json`, 'utf-8')
const resData = JSON.parse(fileData)
const { product } = resData.doct

const imagesArray = product.map((item) => {
  return { link: item.small_image[0].$.src, name: `${item.code[0]}_small` }
})

const withTimeout = (from, to) => {
  let current = from
  setTimeout(function go() {
    console.log(
      current,
      'Name: ',
      imagesArray[current].name,
      'Path: ',
      imagesArray[current].link
    )
    try {
      downloadImage(imagesArray[current].link, imagesArray[current].name)
    } catch (error) {
      console.log(error)
    }

    if (current < to) {
      setTimeout(go, 300)
    }
    current++
  }, 300)
}

console.log('Всего изображений', imagesArray.length)

withTimeout(7935, imagesArray.length)
