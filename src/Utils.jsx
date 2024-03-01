// function getImageUrl(person, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       size +
//       '.jpg'
//     );
//   }
  
//   export default getImageUrl;

  function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}
// Request
export { getImageUrl }; // Export getImageUrl as named export
