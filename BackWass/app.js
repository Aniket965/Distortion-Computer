var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(fileUpload());
app.post('/upload', function(req, res) {
  var ImageFile;
  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }
   ImageFile = req.files.ImageFile;
   ImageFile.mv('D:/filename.jpg', function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send('File uploaded!');
    }
  });
});
app.post('/uploadChkImage', function(req, res) {
  var ImageFile;
  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }
   ImageFile = req.files.ImageFile;
   ImageFile.mv('/fileCompare/Chk.jpg', function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send('File uploaded!');
    }
  });



});
app.listen(8000);
