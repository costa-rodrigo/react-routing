import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() => {
      fetchItem();
  },[]);

  const [item, setItem] = useState({
      images: {}
  });

  const fetchItem = async () => {
      const itemid = match.params.id;
      const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemid}`);
      const item = await fetchItem.json();
      setItem(item.data.item);
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.information} alt="" />
    </div>
  );
}

export default ItemDetail;
