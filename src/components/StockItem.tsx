import React from 'react';
import { IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/react';

type StockItem = {
    productName: string;
    stock: number;
};

const StockItem: React.FC<{ item: StockItem }> = ({ item }) => {
  const getColor = (stock: number): string => {
    if (stock > 10) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const imageMap = {
    Burger: 'burger.webp',
    "French Fries": 'french-fries.png',
    "Ice Cream": 'ice-cream.webp',
    Soda: 'soda.webp',
    Salad: 'salad.png',
  };

  return (
    <IonItem style={{ color: getColor(item.stock) }}>
      <IonThumbnail slot="start">
        <IonImg src={imageMap[item.productName as keyof typeof imageMap]} />
      </IonThumbnail>
      <IonLabel>
        <h2>{item.productName}</h2>
        <p>Stock: {item.stock}</p>
      </IonLabel>
    </IonItem>
  );
};

export default StockItem;
