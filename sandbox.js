// const data = [
//   { terjual: 10, nama: "Item 1" },
//   { terjual: 20, nama: "Item 2" },
//   { terjual: 5, nama: "Item 3" },
//   { terjual: 30, nama: "Item 4" },
//   { terjual: 15, nama: "Item 5" },
//   { terjual: 25, nama: "Item 6" },
//   { terjual: 35, nama: "Item 7" },
// ];

// const test
// const nextDatas = [...data];

// const top5 = [...data].sort((a, b) => a.terjual - b.terjual);

// console.log("🚀 ~ top5:", top5);

// console.log("🚀 ~ data:", data);
const { subDays } = require("date-fns");

const test = subDays(new Date(), 68);
console.log("🚀 ~ test:", test);
