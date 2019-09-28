const superagent = require("superagent");

const getTatooineResidents = () => {
  superagent
    .get("https://swapi.co/api/planets/1/")
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  return superagent.get("https://swapi.co/api/planets/1/");
};

module.exports = { getTatooineResidents };
