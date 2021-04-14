import { random } from "./utils/data.js";
console.log(random);

const people = [
  { name: "john", job: "fe developer" },
  { name: "susan", job: "be developer" },
  { name: "anna", job: "devop developer" },
];

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
