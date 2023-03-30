import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
  // get all data from api
  const [cards, setCards] = useState([]);
  const [singleData,setSingleData]=useState({})
  const [showAll, setShowAll] = useState(false);
  // get the clicked card id
  const [uniqueID, setUniqueId] = useState(null);
  
  // show all button hanlde
  const handleShowAll = () => {
    setShowAll(true);
  }
  // sort date button handle
  const dateHandle = () => {
    const sortedCard = cards.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setCards([...cards, sortedCard]);
  }
  // get all data from api
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => setCards(data.data.tools));
  }, []);

  // get single card data from api
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueID}`)
      .then(res => res.json())
      .then(data => setSingleData(data.data));
  }, [uniqueID])
  
  return (
    <>
      <span onClick={dateHandle}>
        <Button>Sort By Date</Button>
      </span>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-4 my-1 p-5">
        {cards.slice(0, showAll ? 12 : 6).map(card => (
          <SingleCard
            card={card}
            key={card.id}
            setUniqueId={setUniqueId}
          ></SingleCard>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData} />
    </>
  );
};

export default Card;
