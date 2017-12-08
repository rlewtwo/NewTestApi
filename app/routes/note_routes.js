
const request = require('request')
module.exports = function(app, db) {
  app.get('/api', (req, res) => {
    request('http://www.kanyerest.xyz/api/album/the_life_of_pablo', function (error, response, body) {
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      let parsedBody = JSON.parse(body);
      console.log('body:', typeof(parsedBody)); // Print the HTML for the Google homepage.


      db.collection('notes').insert(parsedBody, (err, result) => {
        console.log('ERR', err);
        console.log('RESULT', typeof(result));
        if (err) {
          res.send({ 'error':`error is ${err}`});
        } else {
          res.send(result);
        }
      });
    });
    // make a request using request library (callback function)
    // get that data back (console.log)
    // save to the db (callback function) nested(nest with the top callback function if)
    // send that data to clien
  })
};
  // app.post('/api', (req, res) => {
  //   const note = { text: req.body.body, title: req.body.title };
    // db.collection('notes').insert(note, (err, result) => {
    //   if (err) {
    //     res.send({ 'error':`error is ${err}`});
    //   } else {
    //     res.send(result.ops[0]);
    //   }
    // });
  // });
