import sizeOf from 'image-size'
import fs from 'fs'
const folder = './images/big/'
const files = fs.readdirSync(folder)

files.forEach((file, idx) => {
  let imgWidth = sizeOf(`./images/big/${file}`).width
  let imgHeight = sizeOf(`./images/big/${file}`).height
  if (imgWidth < 1000 || imgHeight < 1000) {
    fs.rename(
      `./images/big/${file}`,
      `./images/big_bad/${file}`,
      function (err) {
        if (err) {
          console.log(err)
        }
      }
    )
  }
})
console.log(files.length)
