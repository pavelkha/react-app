import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cardsDataArray from '../../../../assets/cardsDataMock.json';
import './ItemPopup.scss';

const ItemPopup = ({ itemId, closePopup, cartIdArray, setCartIdArray }) => {
  const [itemCount, setItemCount] = useState(1);
  const [itemCost, setItemCost] = useState(0);
  const { t } = useTranslation();

  if (!itemId) { return null };

  const item = cardsDataArray.find(card => card.id === itemId);
  
  const changeItemCount = ({ target: { innerText: buttonValue } }) => {
    let itemNewCount = itemCount;
    let currentItemCost = itemCost ? itemCost : Number(item.cost);
    switch (buttonValue) {
      case '+':
        setItemCount(++itemNewCount);
        const newItemCost = currentItemCost + Number(item.cost);
        setItemCost(newItemCost);
        break;
      case '-':
        if (itemCount > 1) {
          setItemCount(--itemNewCount);
          const newItemCost = currentItemCost - Number(item.cost);
          setItemCost(newItemCost);
        };
        break;
    };
  };

  const closeWindow = () => {
    setItemCount(1);
    setItemCost(0);
    closePopup();
  };

  const addToCart = () => {
    let newCartIdArray = [...cartIdArray];
    if (cartIdArray.some(card => card.itemId === item.id)) {
      const cardIndex = cartIdArray.findIndex(card => card.itemId === item.id);
      const cardCount = cartIdArray[cardIndex].itemCount;
      newCartIdArray[cardIndex].itemCount = cardCount + itemCount;
    } 
    else { 
      newCartIdArray.push({ "itemId": item.id, "itemCount": itemCount });
    };
    setCartIdArray(newCartIdArray);
    setItemCost(Number(item.cost));
    setItemCount(1);
    localStorage.setItem('cartIdArray', JSON.stringify(newCartIdArray));
  };

  return (
    <div className='item-popup-window-overlay'>
      <div className='item-popup-window-wrapper'>
        <button onClick={closeWindow} className='item-popup-close-window-button' />
        <div className='item-popup-card-info-container'>
          <div className='item-popup-card-fake-image' />
          <div className='item-popup-card-text-info'>
            <div>
              <p className='item-popup-card-name'>{item.name}</p>
              <p>{item.longDescription}</p>
            </div>
            <div className='item-popup-card-cost-container'>
              <span className='item-popup-card-cost'>
                ${itemCost ? itemCost : item.cost}
              </span>
              <div className='item-popup-ordering-container'>
                <div>
                  <button className='item-popup-count-button' onClick={changeItemCount}>
                    -
                  </button>
                  <span>{itemCount}</span>
                  <button className='item-popup-count-button' onClick={changeItemCount}>
                    +
                  </button>
                </div>
                <button className='item-popup-to-cart-button' onClick={addToCart}>
                  {t('toCart')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPopup;
