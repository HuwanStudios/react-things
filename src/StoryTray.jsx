//
// // <StoryTray stories={ [{id: "create", label: "Create Story"},  {id: "create", label: "Create Story"}] } />
// export default function StoryTray({stories, idx}) {
//
//     const storiesWithCreate = [
//         ...stories,
//         {id: "create", label: "Create Story"},
//     ];
//
//     //Spread Operator ...arr, values
//     // stories.push({
//     //   key: { idx },
//     //   id: "create",
//     //   label: "Create Story",
//     // });
//     return (
//         <>
//             <ul>
//                 {
//                     storiesWithCreate.map((story) => (
//                         <li key={story.id}>{story.label}</li>
//                     ))
//                 }
//             </ul>
//
//         </>
//     );
// }
//
// export default function StoryTrayOrig({ stories }) {
//     stories.push({
//         id: 'create',
//         label: 'Create Story'
//     });
//     // [ {} , ...stories ]
//
//     return (
//         <ul>
//             {stories.map(story => (
//                 <li key={story.id}>
//                     {story.label}
//                 </li>
//             ))}
//         </ul>
//     );
// }
//
// // idx !== Array.length - 1
// //stories.length + 1
// //stories.lable
// // const createStory =
// //
export default function StoryTray({ stories, setStories }) {
  // stories.push({
  //   id: 'create',
  //   label: 'Create Story'
  // });

  return (
      <>
        <ul>
          {stories.map(story => (
              <li key={story.id}>
                {story.label}
              </li>
          ))}
        </ul>
        {/*<button onClick={()=> setStories()}></button>*/}
        <button onClick={
          () => setStories(  [ ...stories, { id: Math.abs(Math.random() * 100), label: `${Math.random() * 1000} + Hweleldededd`  } ]    )
        } > Set Stories
        </button>
      </>
  );
}
//We have component StoryTray it goes into arr: stories, with param: setStories
//btn: On click run setStories -  setStories doesn't actually exist we passed it through the parent with spread operator. Pass everything we have amd add a new story/object