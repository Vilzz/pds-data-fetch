//************************************ */
// Загрузчик данных с сайта донора
// Сохраняет полученные данные в каталог ./xml
// Принимает название файла выгрузки (соответствует файлу на сайте доноре)
//************************************ */
import fs from 'fs'
import axios from 'axios'
import Path from 'path'

const downloadXML = async (filename) => {
  const url = `${process.env.DONOR_URL}${filename}`
  const __dirname = process.cwd()
  const path = Path.resolve(__dirname, 'xml', filename)
  const writer = fs.createWriteStream(path)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })
  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

export default downloadXML
