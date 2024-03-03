function getImageUrlFive(person, size) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      //'s'= Avatar 40*40, IMG90*90 'b'=160*160
      src={getImageUrlFive(person, 's')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

// export default Profile;