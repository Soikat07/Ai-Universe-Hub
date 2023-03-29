import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
  // get data from api
  const [cards, setCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  }
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => setCards(data.data.tools));
  }, []);

  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-4 my-8 p-5">
        {cards.slice(0, showAll ? 12 : 6).map(card => (
          <SingleCard card={card} key={card.id}></SingleCard>
        ))}
      </div>
      <p onClick={handleShowAll}>
      <Button>See More</Button>
      </p>
    </>
  );
};

export default Card;
