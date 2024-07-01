import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { refreshOutline } from 'ionicons/icons';
import StockItem from '../components/StockItem';
import { getLowStockItems } from '../services/StockService';
import { getToken } from '../services/AuthService';

const StockWarnings: React.FC = () => {
  const [lowStockItems, setLowStockItems] = useState<any[]>([]);

  const getData = async () => {
    const token = await getToken();
    const lowStockItems = await getLowStockItems(token);
    setLowStockItems(lowStockItems.sort((a, b) => a.stock - b.stock));
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>GreatBurgers</b> - Stock Warnings</IonTitle>
          <IonButton slot="end" onClick={getData}>
            <IonIcon icon={refreshOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {lowStockItems.length > 0 ? (
          <IonList>
            {lowStockItems.map((item, index) => (
              <StockItem key={index} item={item} />
            ))}
          </IonList>
        ) : (
          <IonItem>
            <IonLabel>All products are appropriately stocked</IonLabel>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default StockWarnings;
