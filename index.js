const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Note');
require('./models/User');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ikakochua:antivirus73@ds137089.mlab.com:37089/notes-app-dev');

app.use(bodyParser.json());

require('./routes/noteRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }



const PORT = process.env.PORT || 4001;
app.listen(PORT);