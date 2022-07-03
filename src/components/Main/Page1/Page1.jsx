import React, { useState } from 'react';
import Items from './Items/Items';
import ItemPopup from './ItemPopup/ItemPopup';
import Cart from './Cart/Cart';
import './Page1.scss';

const Page1 = () => {
  const [itemId, setItemId] = useState();
  const [cartIdArray, setCartIdArray] = useState(
    JSON.parse(localStorage.getItem('cartIdArray')) ? 
    JSON.parse(localStorage.getItem('cartIdArray')) : []
  );

  return (
    <>
      <Items
        setItemId={setItemId}
        cartIdArray={cartIdArray}
        setCartIdArray={setCartIdArray}
      />
      <ItemPopup 
        itemId={itemId}
        closePopup={() => setItemId()}
        cartIdArray={cartIdArray} 
        setCartIdArray={setCartIdArray} 
      />
      <Cart cartIdArray={cartIdArray} setCartIdArray={setCartIdArray} />
    </>
  );
};

export default Page1;
