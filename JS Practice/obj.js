// const details = [43, 5, 3, 2, 3, 4, 2, 43, 5, 52];

// const details = {
//   name: "Medha",
//   age: 24,
//   address: {
//     city: "Muzaffarpur",
//     state: "Bihar",
//     mataji: "Vinita Jha",
//     pitashree: "Santosh Jha",
//   },
// };

// details.name = "Medha Bharti";

// console.log(details);
// console.log(details[age]); // reference error

// console.log(details["age"]);
// console.log(details.age);

// details[9] = "p@g.com";

// console.log(details[9]);

// details.background_color = "Red";
// console.log(details.background_color);

// let age = "address";

// console.log(details[age]);

// let parentKey = "address";
// let innerKey = "city";
// let main = details[parentKey];
// console.log(main[innerKey]);

// details.name = details.name.toUpperCase();

// console.log(details.name);

// !object method

// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));

// let keyss = Object.keys(details);

// for (let index = 0; index < keyss.length; index++) {
//   keyss[index] = keyss[index].toUpperCase();
// }

// const keys = Object.keys(details);
// for (const key of keys) {
//   console.log(details[key]);
// }

// console.log(keyss);

const students = [
  { name: "Jatin", age: 22 },
  { name: "Himanshu", age: 50 },
  { name: "Kissu", age: 26 },
];

for (const student of students) {
  if (student.age > 18) {
    console.log(student.name.toUpperCase());
  }
}




