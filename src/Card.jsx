//Extract a Card component from the markup below,
//and use the children prop to pass different JSX to it:


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
    <>
    <img
      className="avatar"
      //'s'= Avatar 40*40, IMG90*90 'b'=160*160
      src={getImageUrlFive(person, 's')}
      alt={person.name}
      width={size}
      height={size}
    />
    </>
  );
}

function Card({children}) {
    return (
      <div>
        <div className="card">
          <div className="card-content">
              {children}
          </div>
        </div>
        {/* <div className="card">
            <div className="card-content">

            </div>
        </div> */}
      </div>
    );
  }

function Profile() {
  return (
    <div>
        <div className="card">
            <div className="card-content">
                <card />
                <h1>Photo</h1>
                <img
                className="avatar"
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                width={70}
                height={70}
                />
            </div>
        </div>
        {/* About */}
        <div className="card">
            <div className="card-content">
                <h1>About</h1>
                <p>
                    Aklilu Lemma was a distinguished Ethiopian scientist 
                    who discovered a natural treatment to schistosomiasis.
                </p>
            </div>
        </div>
    </div>
  );
}

export default Profile;
