import React from 'react';
import { useTranslation } from 'react-i18next';
import cardsDataArray from '../../../../assets/cardsDataMock.json';
import './Cart.scss';

const Cart = ({ cartIdArray, setCartIdArray }) => {
  const { t } = useTranslation();

  const renderCardsList = () => {
    return (
      cartIdArray.map((id, index) => {
        const card = cardsDataArray.find(card => card.id === id.itemId);
        const className = 'new' in card ?
        'cart-card-fake-image cart-fake-image-pseudo-element' : 'cart-card-fake-image';
        return (
          <li key={index}>
            <div className='cart-card-container'>
              <div className={className} />
              <div className='cart-card-text-content-container'>
                <p>{card.name}</p>
                <div className='cart-card-description'>{card.description}</div>
                <div className='cart-card-flex-container'>
                  <span className='cart-card-cost'>${card.cost * id.itemCount}</span>
                  <div className='cart-card-count-container'>
                    <div>
                      <button 
                        id={card.id}
                        className='cart-count-button'
                        onClick={changeCardCount}
                      >
                        -
                      </button>
                      <span>{id.itemCount}</span>
                      <button
                        id={card.id}
                        className='cart-count-button'
                        onClick={changeCardCount}
                      >
                        +
                      </button>
                    </div>
                    <button
                      id={card.id}
                      className='cart-remove-button'
                      onClick={removeCard}
                    >
                      {t('removeFromCart')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })
    );
  };

  const changeCardCount = ({ target: { innerText: buttonValue, id: cardId } }) => {
    const cardIndex = cartIdArray.findIndex(card => card.itemId === cardId);
    let cardCount = cartIdArray[cardIndex].itemCount;
    const newCartIdArray = [...cartIdArray];    
    switch (buttonValue) {
      case '+':
        newCartIdArray[cardIndex].itemCount = ++cardCount;
        break;
      case '-':
        if (cardCount === 1) { 
          newCartIdArray.splice(cardIndex, 1);
        }
        else { 
          newCartIdArray[cardIndex].itemCount = --cardCount;
        };
        break;
    };
    setCartIdArray(newCartIdArray);
    localStorage.setItem('cartIdArray', JSON.stringify(newCartIdArray));
  };

  const removeCard = ({ target: { id: cardId } }) => {
    const cardIndex = cartIdArray.findIndex(card => card.itemId === cardId);
    const newCartIdArray = [...cartIdArray];
    newCartIdArray.splice(cardIndex, 1);
    setCartIdArray(newCartIdArray);
    localStorage.setItem('cartIdArray', JSON.stringify(newCartIdArray));
  };
  
  return (
    <div>
      <p className='cart-head'>{cartIdArray.length ? t('cart') + ':' : ''}</p>
      <ul className='cart-cards-list'>{renderCardsList()}</ul>
    </div>
  );
};

export default Cart;
