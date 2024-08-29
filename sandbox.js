const result = [];
const page = 9;
const totalPage = 13;
const dot = "...";
const arrTotalPage = [];

for (let i = 1; i <= totalPage; i++) {
  arrTotalPage.push(i);
}

if (totalPage <= 7) {
  for (let i = 1; i <= totalPage; i++) {
    result.push(i);
  }
  console.log("🚀 ~ usePagination ~ result:", result);
  return;
}

if (page - 3 <= 1) {
  const nextTotalPage = arrTotalPage.slice(0, 5);
  result.push(1, 2, 3, 4, 5, dot, totalPage);
  console.log("🚀 ~ result:", result);
  return;
}

if (page + 3 >= totalPage) {
  const nextTotalPage = arrTotalPage.slice(-5);
  result.push(1, dot, ...nextTotalPage);
  console.log("🚀 ~ result:", result);
  return;
}

result.push(1, dot, page - 1, page, page + 1, dot, totalPage);
console.log("🚀 ~ result:", result);
// }
