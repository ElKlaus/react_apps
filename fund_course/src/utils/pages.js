export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
  // Использовать useMemo и сделать так, чтобы массив не пересчитывался при каждом рендере,
  // а только при изменении общего кол-ва страниц. Оформить в хуке usePagination
  let result = [];

  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
}