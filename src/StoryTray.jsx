export default function StoryTray({ stories, idx }) {
  const storiesWithCreate = [
    ...stories,
    { id: "create", label: "Create Story" },
  ];
  //Spread Operator ...arr, values
  // stories.push({
  //   key: { idx },
  //   id: "create",
  //   label: "Create Story",
  // });
  return (
    <ul>
      {storiesWithCreate.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}

// idx !== Array.length - 1
//stories.length + 1
//stories.lable
// const createStory =
//
