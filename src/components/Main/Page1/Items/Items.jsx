import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cardsDataArray from '../../../../assets/cardsDataMock.json';
import './Items.scss';

const Items = ({ setItemId }) => {
  const [selectedSort, setSelectedSort] = useState(
    JSON.parse(localStorage.getItem('selectedSort')) ? 
    JSON.parse(localStorage.getItem('selectedSort')) : 'all'  
  );
  const [cardsData, setCardsData] = useState(
    JSON.parse(localStorage.getItem('cardsDataArray')) ? 
    JSON.parse(localStorage.getItem('cardsDataArray')) : cardsDataArray
  );
  const { t } = useTranslation();

  const renderCardsList = () => {
    return (
      cardsData.map((card, index) => {
        const className = 'new' in card ? 
        'items-card-fake-image fake-image-pseudo-element' : 'items-card-fake-image';
        return (
          <li key={index}>
            <div className='items-card-container'>
              <div className={className} />
              <div className='items-card-text-content-container'>
                <button
                  id={card.id}
                  className='items-card-name'
                  onClick={event => setItemId(event.target.id)}
                >
                  {card.name}
                </button>
                <div className='items-card-description'>{card.description}</div>
                <div className='items-card-flex-container'>
                  <span>${card.cost}</span>
                  <button>{t('toCart')}</button>
                </div>
              </div>
            </div>
          </li>
        );
      })
    );
  };

  const renderSortList = () => {
    let sortArray = ['all', 'new', 'cheapToExpensive', 'expensiveToCheap'];
    cardsDataArray.map(card => {
      if (!sortArray.some(sort => sort === card.category)) {
        sortArray.push(card.category);
      };
    });
    return (
      sortArray.map((sort, index) => {
        const className = sort === selectedSort ? 'items-selected-sort-button' : '';
        return (
          <li key={index}>
            <button className={className} onClick={changeSort} sort={sort}>
              {t(sort)}
            </button>
          </li>
        );
      })
    );
  };

  const changeSort = ({ target: { attributes: { sort: { value: sort } } } }) => {
    const cardsArray = [...cardsDataArray];
    let currentSortCardsArray = [];
    switch (sort) {
      case 'all':
        currentSortCardsArray = [...cardsDataArray];
        break;
      case 'new':
        cardsDataArray.map(card => {
          if ('new' in card) { currentSortCardsArray.push(card) };
        });
        break;
      case 'cheapToExpensive':
        currentSortCardsArray = cardsArray.sort((a, b) => { return a.cost - b.cost });
        break;
      case 'expensiveToCheap':
        currentSortCardsArray = cardsArray.sort((a, b) => { return b.cost - a.cost });
        break;        
      default:
        cardsDataArray.map(card => {
          if (card.category === sort) { currentSortCardsArray.push(card) };
        });
    };
    setCardsData(currentSortCardsArray);
    setSelectedSort(sort);
    localStorage.setItem('cardsDataArray', JSON.stringify(currentSortCardsArray));
    localStorage.setItem('selectedSort', JSON.stringify(sort));
  };

  return (
    <div>
      <p className='items-sort'>{t('sort')}:</p>
      <ul className='items-sort-list'>{renderSortList()}</ul>
      <ul className='items-cards-list'>{renderCardsList()}</ul>
    </div>
  );
};

export default Items;
