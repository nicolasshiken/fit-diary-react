const dataFilter = ({ categories, dataToFilter }) => {
  return categories.map((category) => ({
    category: category,
    data: dataToFilter.filter((item) => item.category === category),
  }));
};

export default dataFilter;
