function Drink ({name}){
    // let itemContent = name;
    let partOfPlant, caffeineContent, age;
    if (name === 'tea'){
        // console.log('I am Tea');
        partOfPlant = 'leaf';
        caffeineContent = '15–70 mg/cup';
        age = '4,000+ years';
    } else {
        (name === 'bean');
        // console.log('I am Cofee');
        partOfPlant = 'bean';
        caffeineContent = '80-185 mg/cup';
        age = '1,000+ years';
    }
    return (
        <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant:</dt>
          <dd>{partOfPlant}</dd>
          <dt>Caffeine content:</dt>
          <dd>{caffeineContent}</dd>
          <dt>Age:</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }

  export default Drink;