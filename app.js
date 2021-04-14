import { random, people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";
import kin from "./utils/getElement.js";
console.log(random);
console.log(people);

const container = kin(".container");
const btn = kin(".btn");
// const container1 = get(".container1");
// console.log(container1);

btn.addEventListener("click", function () {
  container.innerHTML = showPeople(people);
});
