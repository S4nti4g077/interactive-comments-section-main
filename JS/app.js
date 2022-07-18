const commentQuantity = async () => {
  const res = await axios.get("/data.json");
  const size = Object.keys(res.data.comments).length;
  console.log(size - 1);
  const length = size - 1;
  return length.toString();
};

const commentData = async (id) => {
  const res = await axios.get("/data.json");
  const size = commentQuantity();
  console.log(res.data.comments[`${id}`].content);
  return res.data;
};

// const showComment = async (commentData) => {
//   console.log(commentData);
// };
// const showComment = async (commentSection) => {
//   console.log(commentSection);
// };

// const object = commentSection();

// for (const comment in object) {
//   console.log(`${comment} ${comment[object]}`);
// }
// elements = Object.values(commentSection());

// elements.forEach((element) => {
//   const newComment = document.createElement("p");
//   newComment.append(res.data.[element].comment)
// });
