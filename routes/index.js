var express = require('express');
var router = express.Router();
const fs = require('fs');
const { IamAuthenticator } = require('ibm-watson/auth');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const multer = require('multer');
var upload = multer({ dest: 'public/uploads/speech'}) // 文件储存路径
const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'SJbQm9zZS0EMXTWtmUMb36kRd3jQ_tBV4XMQ8UFoLZlf',
  }),
  serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/dfff3e37-5ec1-4caa-b09b-8545cab09743',
});
var params = {
    objectMode: true,
    contentType: 'audio/flac',
    model: 'en-US_BroadbandModel',
    keywords: ['colorado', 'tornado', 'tornadoes'],
    keywordsThreshold: 0.5,
    maxAlternatives: 3
};
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/file',upload.single('avatar'), function(req, res, next) {
    let file = req.file;
    console.log(file.filename)
    // res.json({message: });
    let myfile = './public/uploads/speech/' + file.filename;
    const recognizeParams = {
        audio: fs.createReadStream(myfile.toString()),
        // audio: file,
        contentType: 'audio/flac',
        wordAlternativesThreshold: 0.9,
        keywords: ['colorado', 'tornado', 'tornadoes'],
        keywordsThreshold: 0.5,
    };
    // console.log(file)
    // res.json({message: "ok"});
    speechToText.recognize(recognizeParams)
        .then(speechRecognitionResults => {
            res.json({ message: speechRecognitionResults });
            fs.unlinkSync(myfile)
    })
    .catch(err => {
        console.log('error:', err);
    });
});
router.get('/', (req, res) => res.render('./Index'));
router.get('/index/speech', (req, res) => res.render('./speech'));
router.get('/index/pic', (req, res) => res.render('./picindex'));
router.get('/index/chat', (req, res) => res.render('./chat'));
/* component router */
router.get('/index/index', (req, res) => res.render('./index'));
module.exports = router;
