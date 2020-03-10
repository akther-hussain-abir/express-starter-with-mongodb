const paginationLabels = {
    totalDocs: "itemCount",
    docs: "data",
    limit: "perPage",
    page: "currentPage",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pageCount",
    pagingCounter: "slNo",
    meta: "paginator"
  };

const defaultPaginationOptions = {
  page: 1,
  limit: 10,
  collation: {
    locale: "en"
  },
  customLabels: paginationLabels,
};

module.exports = {
  paginationLabels,
  defaultPaginationOptions
};