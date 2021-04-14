const showPeople = function (people) {
  const peopleInfo = people
    .map(function (person) {
      console.log(person);
      const { name, job } = person;
      return `<p>${name} is a <strong>${job}</strong></p>`;
    })
    .join("");
  return peopleInfo;
};

export default showPeople;
