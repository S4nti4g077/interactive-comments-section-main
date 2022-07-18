// const commentQuantity = async () => {
//   const res = await axios.get("/data.json");
//   const size = Object.keys(res.data.comments);
//   console.log(size.length);
//   const dlugosc = size.length - 1;
//   console.log(dlugosc);
//   return dlugosc;
// };

const commentData = async () => {
  const res = await axios.get("/data.json");
  const size = Object.keys(res.data.comments);
  const dlugosc = size.length;
  for (let cytat of dlugosc) {
    console.log(res.data.comments[`${cytat}`].content);
  }

  //   console.log(JSON.parse(data));
  //   return res.data.id - 1;
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
