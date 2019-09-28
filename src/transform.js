const groupAdultsByAgeRange = people => {
  //console.log(people);
  if (people.length === 0) {
    return {};
  }

  // LOGIC - but now I have to make it work
  return people.reduce((categories, currentPerson) => {
    // console.log("Categories", categories);
    // console.log("CurrentPerson", currentPerson);

    if (currentPerson.age >= 18 && currentPerson.age <= 20) {
      //   console.log("20 and younger");
      if (categories["20 and younger"] === undefined) {
        categories["20 and younger"] = [currentPerson];
      } else {
        categories["20 and younger"].push(currentPerson);
      }
    }
    if (currentPerson.age > 20 && currentPerson.age <= 30) {
      //   console.log("21-30");
      if (categories["21-30"] === undefined) {
        categories["21-30"] = [currentPerson];
      } else {
        categories["21-30"].push(currentPerson);
      }
    }
    if (currentPerson.age > 30 && currentPerson.age <= 40) {
      //   console.log("31-40");
      if (categories["31-40"] === undefined) {
        categories["31-40"] = [currentPerson];
      } else {
        categories["31-40"].push(currentPerson);
      }
    }
    if (currentPerson.age > 40 && currentPerson.age <= 50) {
      //   console.log("41-50");
      if (categories["41-50"] === undefined) {
        categories["41-50"] = [currentPerson];
      } else {
        categories["41-50"].push(currentPerson);
      }
    }
    if (currentPerson.age > 50) {
      //   console.log("51 and older");
      if (categories["51 and older"] === undefined) {
        categories["51 and older"] = [currentPerson];
      } else {
        categories["51 and older"].push(currentPerson);
      }
    }
    return categories;
  }, {});
};

module.exports = { groupAdultsByAgeRange };
