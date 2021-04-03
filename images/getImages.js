import fs from 'fs'
import axios from 'axios'
import Path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })

const downloadImage = async (link, filename) => {
  const __dirname = process.cwd()
  const url = `${process.env.DONOR_URL}${link}`
  const path = Path.resolve(__dirname, './images/big', `${filename}.jpg`)
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

export default downloadImage
