//************************************************ */
// Парсер xml файлов полученных выгрузок
// ************************************************/
import fs from 'fs'
import Path from 'path'
import xml2js from 'xml2js'

const parser = new xml2js.Parser()

const parseXML = (filename) => {
  const name = Path.parse(filename).name
  const __dirname = process.cwd()
  fs.readFile(`${__dirname}/xml/${filename}`, (err, data) => {
    parser.parseString(data, (err, res) => {
      const parseres = JSON.stringify(res)
      fs.writeFile(`${__dirname}/json/${name}.json`, parseres, (err) => {
        if (err) throw 'Отсутствует каталог для вывода результата - json'
        console.log(
          `Файл ${filename} обработан, результат в файле ./json/${name}.json`
        )
      })
    })
  })
}

export default parseXML
