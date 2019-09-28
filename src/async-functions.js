const superagent = require("superagent");

const getTatooineResidents = () => {
  superagent
    .get("https://swapi.co/api/planets/1/")
    .then(res => {
      console.log(res.body);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = { getTatooineResidents };
