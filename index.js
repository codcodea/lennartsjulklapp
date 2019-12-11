



//const fetch = require('node-fetch');
//const table = new Tabulator("#example-table", {});


const file = require('file-system');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const https = require('https');
const url = require('url');
const requests = require('requests');
const deepai = require('deepai');
const multer  = require('multer')  //to handle uploads to server

      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, __dirname + '/uploads')
        },
        filename: function (req, file, cb) {
          cb(null, moment(Date.now()).format('YYYYMMDD_HHmmss') + '_' + file.originalname )
        }
      })
      const upload = multer({ storage: storage })

const express = require('express');
const app = express();	
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running at ${port}`))
app.use(express.static('public'));

app.post('/img', upload.single('passedImg'), function (req, res, next) {
  next();

});

app.post('/img',  (req, res)  => {

waiting()

async function waiting(response) {

const responseToColor = await toColor(req.file.path)
const outputURL = await responseToColor
console.log(outputURL)
res.send(outputURL)
}


})










//Deep AI API key
  deepai.setApiKey('e6d896e9-d6fc-4292-95a9-a245f5841da7');


const testUrl = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/05/vintage-black-and-white-women-fashion-photography-nina-leen-115-5730a0c06c684__700.jpg'
const testLocalPath = '/Users/fhalsius/Documents/JavaScriptProjects/SMHI/uploads/1575057213447-mammy.jpg'


async function toColor(imgFile, res) { 
    
    try {
        
        const resp = await deepai.callStandardApi("colorizer", {
        image: fs.createReadStream(imgFile)            
        });
        
        if (resp.ok) {
        }
        
        //console.log(resp);

        const outputURL = await resp.output_url
        console.log(`toColor returns:    ${outputURL}`)
        return outputURL

    } catch (error) {
    console.log("try error")
   
    }
}





