import {people} from "./Data.jsx";
import { getImageUrl } from "./Utils.jsx";

export default function List() {
  const chemists = people.filter(person => 
   person.profession === "chemist");
  const others = people.filter(person => 
   person.profession !== "chemist");
  const chemistItems = chemists.map(person => 
    <li key={person.id}>
      {" "}
      <img src={getImageUrl(person)} alt={person.name} />{" "}
      <p>
        {" "}
        <b>{person.name}:</b> {" " + person.profession + " "} known for{" "}
        {person.accomplishment}{" "}
      </p>{" "}
    </li>
  );
  const otherItems = others.map(person => 
    <li key={person.id}>
      {" "}
      <img src={getImageUrl(person)} alt={person.name} />{" "}
      <p>
        {" "}
        <b>{person.name}:</b> {" " + person.profession + " "} known for{" "}
        {person.accomplishment}{" "}
      </p>{" "}
    </li>
  );
  return (
    <article>
      {" "}
      <h1>Scientists</h1> <h2>Chemists</h2> <ul>{chemistItems}</ul>{" "}
      <h2>Other Scientist</h2> <ul>{otherItems}</ul>{" "}
    </article>
  );
}

{/* <br /> */}