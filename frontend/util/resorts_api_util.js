export const fetchResorts = () => {
  return $.ajax({
    method: "GET",
    url: "api/resorts"
  });
};
