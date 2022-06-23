import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cardsDataArray from '../../../assets/cardsDataMock.json';
import './Page1.scss';

const Page1 = () => {
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
        const cardImageClassesList = 'new' in card ? 
        'page1-card-fake-image fake-image-pseudo-element' : 'page1-card-fake-image';
        return (
          <li key={index}>
            <div className='page1-card-container'>
              <div className={cardImageClassesList} />
              <div className='page1-card-text-content-container'>
                <a href='#'>{card.name}</a>
                <div className='page1-card-description'>{card.description}</div>
                <div className='page1-card-flex-container'>
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
    let sortArray = 
    ['all', 'new', 'cheapToExpensive', 'expensiveToCheap'];
    cardsDataArray.map(card => {
      if (!sortArray.some(sort => sort === card.category)) {
        sortArray.push(card.category);
      };
    });
    return (
      sortArray.map((sort, index) => {
        const buttonClassName =
        sort === selectedSort ? 'page1-selected-sort-button' : '';
        return (
          <li key={index}>
            <button className={buttonClassName} onClick={changeSort} sort={sort}>
              {t(sort)}
            </button>
          </li>
        );
      })
    );
  };

  const changeSort = event => {
    const selectedSort = event.target.attributes.sort.value;
    const cardsArray = [...cardsDataArray];
    let currentSortCardsArray = [];
    switch (selectedSort) {
      case 'all':
        currentSortCardsArray = [...cardsDataArray];
        break;
      case 'new':
        cardsDataArray.map(card => {
          if ('new' in card) { currentSortCardsArray.push(card) };
        });
        break;
      case 'cheapToExpensive':
        currentSortCardsArray = cardsArray.sort((a, b) => {
          return a.cost - b.cost;
        });
        break;
      case 'expensiveToCheap':
        currentSortCardsArray = cardsArray.sort((a, b) => { 
          return b.cost - a.cost;
        });
        break;        
      default:
        cardsDataArray.map(card => {
          if (card.category === selectedSort) {
            currentSortCardsArray.push(card);
          };
        });
    };
    setCardsData(currentSortCardsArray);
    setSelectedSort(selectedSort);
    localStorage.setItem('cardsDataArray', JSON.stringify(currentSortCardsArray));
    localStorage.setItem('selectedSort', JSON.stringify(selectedSort));
  };

  return (
    <div>
      <p className='page1-sort'>{t('sort')}:</p>
      <ul className='page1-sort-list'>{renderSortList()}</ul>
      <ul className='page1-cards-list'>{renderCardsList()}</ul>
    </div>
  );
};

export default Page1;
