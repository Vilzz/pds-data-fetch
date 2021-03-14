//******************************************************* */
// Входной скрипт для получения данных с сайта донора
// Для запуска в командной строке набрать: node runme [Имя Файла].xml
// Доступные файлы выгрузки - tree.xml product.xml stock.xml
//******************************************************* */
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })
import downloadXML from './getXML.js'
import parseXML from './parseXML.js'

const names = ['tree.xml', 'product.xml', 'stock.xml']
const filename = process.argv[2]
if (!filename) {
  console.log(
    'Ошибка: Отсутствует аргумент - имя загружаемого файла(tree.xml,product.xml,stock.xml)'
  )
  process.exit(1)
}
if (!names.includes(filename.toString())) {
  console.log(
    'Ошибка: Допустимое имя загружаемого файла (tree.xml,product.xml,stock.xml)'
  )
  process.exit(1)
}
console.log(`Загружаю файл - ${filename}`)

const getData = async (filename) => {
  await downloadXML(filename)
  parseXML(filename)
}
getData(filename)
