import React from "react";
import Card from "./Card";

export const CardArray = ({ robo }) => {
  //const cardss =
  return (
    <div>
      {robo.map((users, i) => {
        //while using loops always give  a key because if you would ever delete anything it would only delete the component and not have to render the whole page.
        return (
          <Card
            key={i}
            id={robo[i].id}
            name={robo[i].name}
            email={robo[i].email}
          />
        );
      })}
    </div>
  );
};

//<Card id={robo[i].id} name={robo[i].name} email={robo[i].email} />

export default CardArray;
