import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import SaleCard from '../components/SaleCard';
import { getSaleItems, getTotalRevenue } from '../services/SaleService';
import './SaleStatisticsTab.css';
import { refreshOutline } from 'ionicons/icons';
import { getToken } from '../services/AuthService';

const SaleStatistics: React.FC = () => {
  const [saleItems, setSaleItems] = useState<any[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  
  const getData = async () => {
    const token = await getToken();
    const saleItems = await getSaleItems(token)
    setSaleItems(saleItems.sort((a, b) => b.revenue - a.revenue));
    setTotalRevenue(getTotalRevenue(saleItems));
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>GreatBurgers</b> - Sale Statistics</IonTitle>
          <IonButton slot="end" onClick={getData}>
            <IonIcon icon={refreshOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {saleItems.map((item, index) => (
          <SaleCard key={index} item={item} />
        ))}
        <IonItem className="total-revenue-item">
          <IonLabel className="total-revenue-text">
            Total revenue since opening: <span className="revenue-amount">${totalRevenue.toFixed(2)}</span>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SaleStatistics;
