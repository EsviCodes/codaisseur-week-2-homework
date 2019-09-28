const superagent = require("superagent");

const getTatooineResidents = () => {
  superagent.get("https://swapi.co/api/planets/1/");
  return superagent
    .get("https://swapi.co/api/planets/1/")
    .then(response => response.body.residents)
    .catch(err => err);
};

module.exports = { getTatooineResidents };
