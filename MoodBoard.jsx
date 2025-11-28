export function MoodBoardItem ({ color, image, description }) {
  return(
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">
        {description}
      </h3>
    </div>
  );
}

export function MoodBoard () {

  const items = [
    {
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Test1"
    },{
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Test2"
    },{
      color: "yellow",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Test3"
    }
  ];

  return(
    <div className="mood-board">
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>
      {items.map( (item, index) => (
        <MoodBoardItem 
          key={index}
          color={item.color} 
          image={item.image} 
          description={item.description}
        />
      ))
      }
    </div>
  );
}
