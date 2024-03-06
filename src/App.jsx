// import Gallery from './Gallery';
// import GalleryTwo from './GalleryTwo.jsx'; // Adjust the import path with .jsx extension
// import getImageUrl from './Utils';
// import Bio from './Bio';
// import Congratulations from './Congratulations';
// import { Profile, ProfileTwo, ProfileThree } from './Profile'
// import {TodoList, TodoListTwo} from './TodoList';

import Profile from "./Card";
import DrinkList from "./Drinklist";
import GalleryTwo from "./GalleryTwo";
import Item from "./Item";
import PackingList from "./PackingList";
import Poem from "./Poem";
import RecipeList from "./RecipeList";



function App() {
  
  return (
    <> 
    {/* <ProfileThree/ >
    <ProfileTwo/ >
    <Gallery />
    <Congratulations />
    <TodoList />
    <Bio />
    <TodoListTwo />
   */}
    <getImageUrl />
    <GalleryTwo />
    <Profile />
    <PackingList />
    <Item />
    <DrinkList />
    <RecipeList />
    <Poem />
  
    </>
  );
}

export default App;

