

module.exports = function(app, db) {
  app.get('/notes', (req, res) => {
    res.send('hello') 
  })
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error':`error is ${err}`});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
