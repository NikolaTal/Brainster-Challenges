function Cube(sideArg) {
  this.side = sideArg;

  this.oneSideArea = function () {
    return Math.pow(this.side, 2);
  };

  this.allSidesArea = function () {
    return 6 * Math.pow(this.side, 2);
  };

  this.perimeter = function () {
    return this.side * 12;
  };
}

//Enter the size of the side
const enterTheSizeOfTheSides = +prompt("Please enter the cube side size");
const content = document.querySelector("#content");

//CALCULATING AREA
//Calculate area only for one side
const oneSideArea = new Cube(enterTheSizeOfTheSides).oneSideArea();
const li1 = document.createElement("li");
li1.innerHTML += `The area of one side of the cube with cube side size ${enterTheSizeOfTheSides} is ${oneSideArea}`;
content.appendChild(li1)
console.log(
  `The area of one side of the cube with cube side size ${enterTheSizeOfTheSides} is ${oneSideArea}`
);

//Calculate area for all sides
const allSidesArea = new Cube(enterTheSizeOfTheSides).allSidesArea();
const li2 = document.createElement("li");
li2.innerHTML += `The area of all sides of the cube with cube side size ${enterTheSizeOfTheSides} is ${allSidesArea}`;
content.appendChild(li2)
console.log(
  `The area of all sides of the cube with cube side size ${enterTheSizeOfTheSides} is ${allSidesArea}`
);

//CALCULATING PERIMETER
const perimeter = new Cube(enterTheSizeOfTheSides).perimeter();
const li3 = document.createElement("li");
li3.innerHTML += `The perimeter of the cube with cube side size ${enterTheSizeOfTheSides} is ${perimeter}`;
content.appendChild(li3)
console.log(
  `The perimeter of the cube with cube side size ${enterTheSizeOfTheSides} is ${perimeter}`
);
