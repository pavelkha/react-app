import React from 'react';
import cardsDataArray from '../../../assets/cardsDataMock.json';
import './Page1.scss';

const Page1 = () => {
  const renderCardsList = () => {
    return (
      cardsDataArray.map((item, index) => {
        const cardImageClassesList = 'new' in item ? 
        'page1-card-fake-image fake-image-pseudo-element' : 'page1-card-fake-image';
        return (
          <li key={index}>
            <div className='page1-card-container'>
              <div className={cardImageClassesList} />
              <div  className='page1-card-text-content-container'>
                <a href='#'>{item.name}</a>
                <div className='page1-card-description'>{item.description}</div>
                <div className='page1-card-flex-container'>
                  <span>${item.cost}</span>
                  <button>to cart</button>
                </div>
              </div>
            </div>
          </li>
        );
      })
    );
  };

  return (
    <div>
      <ul className='page1-cards-list'>{renderCardsList()}</ul>
    </div>
  );
};

export default Page1;
