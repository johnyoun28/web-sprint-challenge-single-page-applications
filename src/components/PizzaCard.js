import React from 'react';

const PizzaCard = ({ pizza }) => {
  console.log(pizza);
  return (
    <div>
      <h3>
        {pizza.name}
        <br />
        {pizza.size}
        <br />
        {pizza.toppings}
        <br />
        {pizza.instructions}
      </h3>
    </div>
  );
};

export default PizzaCard;
