import Gallery from './Gallery';
import GalleryTwo from './GalleryTwo.jsx'; // Adjust the import path with .jsx extension
import Bio from './Bio';
import Congratulations from './Congratulations';
import { ProfileTwo, ProfileThree } from './Profile'
import {TodoList, TodoListTwo} from './TodoList';
import Profile from "./Card";
import Clock from "./Clock";
import DrinkList from "./Drinklist";
import Item from "./Item";
import PackingList from "./PackingList";
import Poem from "./Poem";
import RecipeList from "./RecipeList";



function App() {
  
  const currentTime = new Date();
  return (
    <> 
    <ProfileThree />
    <ProfileTwo />
    <Gallery />
    <Congratulations />
    <TodoList />
    <Bio />
    <TodoListTwo />
  
    <GalleryTwo />
    <Profile />
    <PackingList />
    <Item />
    <DrinkList />
    <RecipeList />
    <Poem />
    <Clock time={currentTime} />

    </>
  );
}

export default App;

