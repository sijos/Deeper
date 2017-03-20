export const fetchResorts = () => {
  return $.ajax({
    method: "GET",
    url: "api/resorts",
    data: { most_popular: true }
  });
};

export const fetchResort = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/resorts/${id}`
  });
};
