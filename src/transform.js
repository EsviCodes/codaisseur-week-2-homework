const groupAdultsByAgeRange = people => {
  //console.log(people);
  if (people.length === 0 || people.filter(person => person.age < 18)) {
    return {};
  }
};

module.exports = { groupAdultsByAgeRange };
