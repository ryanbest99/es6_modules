import { random, people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";
import kin from "./utils/getElement.js";

const container = kin(".container");
const btn = kin(".btn");

btn.addEventListener("click", function () {
  container.innerHTML = showPeople(people);
});
