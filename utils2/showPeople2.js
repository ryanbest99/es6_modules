const showPeople = function (people) {
  const personInfo = people
    .map(function (person) {
      const { name, job } = person;
      console.log(name, job);
      return `<h3>${name} is a ${job}</h3>`;
    })
    .join("");
  return personInfo;
};

export default showPeople;
