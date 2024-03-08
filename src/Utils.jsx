function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}
// Request
export default getImageUrl; // Export getImageUrl as named export
