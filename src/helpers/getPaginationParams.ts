// helper/getPaginationParams.ts
export const paginateResults = (page: number, pageSize: number, results: any[]) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  return results.slice(startIndex, endIndex);
};
