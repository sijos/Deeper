export const fetchResorts = (limit) => {
  return $.ajax({
    method: "GET",
    url: "api/resorts",
    data: { most_popular: limit }
  });
};

export const fetchResort = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/resorts/${id}`
  });
};
