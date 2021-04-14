console.log("HEllo");
import people from "./utils2/data2.js";
import showPeople from "./utils2/showPeople2.js";
import get from "./utils2/getElement2.js";

const container = get(".container");
const btn = get(".btn");

btn.addEventListener("click", function () {
  container.innerHTML = showPeople(people);
});
