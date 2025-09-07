// // // CASE 1
// let developer1 = { name: "Khanh" };
// let developer2 = developer1;

// console.log(developer1 == developer2); // true

// // // CASE 2
// let developer3 = { name: "Khanh" };
// let developer4 = { ...developer3 }; // spread operator creates a shallow copy

// console.log(developer3 == developer4); // false

// // // CASE 3
// let developer5 = {
//   name: "Khanh",
//   skills: { primary: "Fullstack", secondary: "DevOps" },
// };
// let developer6 = Object.assign({}, developer5); // also creates a shallow copy

// console.log(developer5 == developer6); // false
// developer6.name = "Tran";
// developer6.skills.primary = "Front-end";
// console.log(developer5);
// console.log(developer6);

// // // CASE 4
// let developer7 = {
//   name: "Khanh",
//   skills: { primary: "Fullstack", secondary: "DevOps" },
// };

// let developer8 = { ...developer7 };

// console.log(developer7 == developer8); // false

// developer8.name = "Tran";
// developer8.skills.primary = "frontend";

// console.log(developer7);
// console.log(developer8);

// // // CASE 5
// let developer9 = {
//   name: "Khanh",
//   skills: { primary: "Fullstack", secondary: "DevOps" },
// };

// let developer10 = JSON.parse(JSON.stringify(developer9)); // deep copy
// developer10.skills.secondary = "Brs";

// console.log(developer9);
// console.log(developer10);

// // // CASE 6
// let developer11 = {
//   name: "khanh",
//   skills: { primary: "Fullstack", secondary: "DevOps" },
//   calculateAge: function (param) {
//     return 30;
//   },
//   joiningDate: new Date(),
// };

// let developer12 = JSON.parse(JSON.stringify(developer11));
// developer12.name = "phuong";
// developer12.skills.secondary = "pm";

// console.log(developer11);
// console.log(developer12);

// // CASE 7
let developer13 = {
  name: "khanh",
  calculateAge: function (param) {
    return 30;
  },
  joiningDate: new Date(),
  roles: { primary: "fullstack", secondary: "pm" },
};

let developer14 = { ...developer13 };
developer14.name = "tran";
developer14.joiningDate.setFullYear(2026);
developer14.calculateAge.custom = "hello new age";
developer14.roles.primary = "front-end";
console.log(developer13);
console.log(developer14);

// Reassignment breaks the reference. Mutation does not.
