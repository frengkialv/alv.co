function usePagination(page: number, totalPage: number) {
  const result = [];
  const dot = "...";
  const arrTotalPage = [];

  for (let i = 1; i <= totalPage; i++) {
    arrTotalPage.push(i);
  }

  // If Total Page Less Than 7
  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++) {
      result.push(i);
    }

    return result;
  }

  // If Page Less Than 5
  if (page - 3 <= 1) {
    const nextTotalPage = arrTotalPage.slice(0, 5);
    result.push(1, 2, 3, 4, 5, dot, totalPage);

    return result;
  }

  // If Page Less 5 Digits From Total Page
  if (page + 3 >= totalPage) {
    const nextTotalPage = arrTotalPage.slice(-5);
    result.push(1, dot, ...nextTotalPage);

    return result;
  }

  // If Page In Middle Total Page
  result.push(1, dot, page - 1, page, page + 1, dot, totalPage);

  return result;
}

export default usePagination;
