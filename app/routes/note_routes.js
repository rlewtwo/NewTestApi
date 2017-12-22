
const optionsOBJ  =
{
  options1 :
    {
      method: 'GET',
      json: true,
      uri: 'http://www.kanyerest.xyz/api/album/the_life_of_pablo'
    },

  options2 :
    {
      method: 'GET',
      json: true,
      uri: 'http://www.kanyerest.xyz/api/album/graduation'
    }
};


const request = require('request')
const rp = require('request-promise')
module.exports = function(app, db) {

  app.get('/wordsTest', async (req, res, next) => {

    try {
      const data = await rp(optionsOBJ.options1);
      const songsUrlArr = [];

      data.result.forEach(function(track){
// code below does not work
          songsUrlArr.push(await rp({uri: 'http://www.kanyerest.xyz/api/track/' + track.title}))
      })
        console.log('songsUrlArr', songsUrlArr)

      // let allTracks = [await rp({uri: "http://www.kanyerest.xyz/api/track/champion"}), await rp({uri: "http://www.kanyerest.xyz/api/track/champion"})]


      let test = await Promise.all(songsUrlArr)
      console.log("TEST", test)

      res.json(data);
    } catch (e) {

      console.log('this is error', e);
      next(e)
    }
  })
};
