const request = require('request')
const fs = require('fs')
const args = process.argv.slice(2)

const url = args[0];
const localPath = args[1]


const fetcher = (url, localPath) =>{

  request.get(url, (err, res, body) => {
    if(err){
      console.log("invalid url!")
      throw err;
    }

    fs.writeFile(localPath, body, err => {
      if (err) {
        console.log(err)
        return
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
    })

  })
  
  
}


fetcher(url, localPath)


