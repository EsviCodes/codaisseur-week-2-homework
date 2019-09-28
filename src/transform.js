const groupAdultsByAgeRange = people => {
  //console.log(people);
  if (people.length === 0 || people.filter(person => person.age < 18)) {
    return {};
  } else {
    const totalGroup = people.reduce(
      (categories, currentPerson) => {
        //console.log("Categories", categories);
        // console.log("CurrentPerson", currentPerson);
        if (currentPerson.age < 18) {
          return categories;
        } else if (currentPerson.age >= 18 && currentPerson.age <= 20) {
          categories["20 and younger"].push(currentPerson);
        } else if (currentPerson.age > 20 && currentPerson.age <= 30) {
          categories["21-30"].push(currentPerson);
        } else if (currentPerson.age > 30 && currentPerson.age <= 40) {
          categories["31-40"].push(currentPerson);
        } else if (currentPerson.age > 40 && currentPerson.age <= 50) {
          categories["41-50"].push(currentPerson);
        } else {
          categories["51 and older"].push(currentPerson);
        }
        console.log(categories);
        return categories;
      },
      {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
      }
    );
  }
};

module.exports = { groupAdultsByAgeRange };
