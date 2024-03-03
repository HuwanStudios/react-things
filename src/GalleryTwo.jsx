import { getImageUrl } from "./Utils";

// function Avatar ({person, size = 70}){
//     // person and size available 
//     return(
//         <img
//             className="avatar"
//             src={getImageUrl(person.imageId)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//         );
// }


function Profile({person, size = 70, profession, awards, discovered}) {
    const imageUrl = getImageUrl(person); //Get the imaage URL for the person
    console.log(imageUrl);

    return (
      <>
          <img
             className="avatar"
             src={imageUrl}
             alt={person.name}
             width={size}
             height={size}
         />
            <h2>{person.name}</h2>
            <p><b>Profession:</b>{profession}</p>
            <p><b>Awards:</b>{awards}</p>
            <p><b>Discovered:</b>{discovered}</p>
        </>
    );
  }

  function GalleryTwo(){
    const size = 70; //Default size for avatars

    return(
    <>
        <div>
            <h1>Notable Scientist</h1>
            <Profile
                size={size} // Pass in size or 70
                person={{ 
                    name: 'Maria Skłodowska-Curie', 
                    imageId: 'szV5sdG',
                }}
                profession="Physicist and Chemist"
                awards="Nobel Prize in Physics, Nobel Prize in Chemistry"
                discovered="Polonium, Radium"
            />
            <Profile
                size={size}
                person={{
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2',
                }}
                profession="Geochemist"
                awards="Miyake Prize for Geochemistry"
                discovered="Methodologies in measuring carbon dioxide in seawater"
            />
        </div>
    </>
    );
  }

export default GalleryTwo;