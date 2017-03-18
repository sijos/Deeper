export const fetchResorts = () => {
  return $.ajax({
    method: "GET",
    url: "api/resorts"
  });
};

export const fetchResort = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/resorts/${id}`
  });
};
