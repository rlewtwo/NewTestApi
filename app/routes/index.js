
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {

  noteRoutes(app, db);
    console.log(app)
  // Other route groups could go here, in the future
};  
