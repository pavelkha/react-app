import React, { useState } from 'react';
import Items from './Items/Items';
import ItemPopup from './ItemPopup/ItemPopup';
import './Page1.scss';

const Page1 = () => {
  const [itemId, setItemId] = useState();

  return (
    <>
      <Items setItemId={setItemId} />
      <ItemPopup itemId={itemId} closePopup={() => setItemId()} />
    </>
  );
};

export default Page1;
