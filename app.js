import { random, people } from "./utils/data.js";
console.log(random);
console.log(people);

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = function () {
  const peopleInfo = people.map(function (person) {
    console.log(person);
    const { name, job } = person;
    return `<p>${name} is a <strong>${job}</strong></p>`;
  });
  container.innerHTML = peopleInfo;
};

btn.addEventListener("click", function () {
  showPeople();
});
