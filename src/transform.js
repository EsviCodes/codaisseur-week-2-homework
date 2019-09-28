const groupAdultsByAgeRange = people => {
  //console.log(people);
  if (people.length === 0) {
    return people.push({});
  } else {
    return people.filter(person => person.age < 18);
  }
};

module.exports = { groupAdultsByAgeRange };
