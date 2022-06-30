import React, { useState } from 'react';
import cardsDataArray from '../../../../assets/cardsDataMock.json';
import './ItemPopup.scss';

const ItemPopup = ({ itemId, closePopup }) => {
  const [itemCount, setItemCount] = useState(1);
  const [itemCost, setItemCost] = useState(0);

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
                <button className='item-popup-to-cart-button'>to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPopup;
