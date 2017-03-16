export const selectHomeResorts = ({ resorts }) => (
  Object.keys(resorts).map(id => ({
    id: id,
    name: resorts[id].name,
    profile_pic_url: resorts[id].profile_pic_url
  }))
);
