const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'b',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
function TodoListTwo() {
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + '.jpg'}
            alt={person.name}
        />
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
    );
    }

export default function TodoList() {
    return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"/>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <br />
    </>
    );
  }
  
  export {TodoList, TodoListTwo};
