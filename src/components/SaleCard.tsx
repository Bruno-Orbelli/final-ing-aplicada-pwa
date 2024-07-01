import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonThumbnail, IonImg } from '@ionic/react';

type SaleItem = {
    productName: string;
    quantity: number;
    revenue: number;
};

const SaleCard: React.FC<{ item: SaleItem }> = ({ item }) => {
    const imageMap = {
        Burger: 'burger.webp',
        "French Fries": 'french-fries.png',
        "Ice Cream": 'ice-cream.webp',
        Soda: 'soda.webp',
        Salad: 'salad.png',
    };
  
    return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle><img src={imageMap[item.productName as keyof typeof imageMap]} width={50} height={50}/> {item.productName}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Units Sold: {item.quantity}</p>
        <p>Revenue: ${item.revenue.toFixed(2)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default SaleCard;
