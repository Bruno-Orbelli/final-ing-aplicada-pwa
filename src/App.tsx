import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alertCircleOutline, ellipse, square, statsChartOutline, triangle } from 'ionicons/icons';
import Tab1 from './pages/StockWarningTab';
import Tab2 from './pages/SaleStatisticsTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import '@ionic/react/css/palettes/dark.always.css';
import StockWarnings from './pages/StockWarningTab';
import SaleStatistics from './pages/SaleStatisticsTab';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/stock-warnings" component={StockWarnings} exact={true} />
          <Route path="/sale-statistics" component={SaleStatistics} exact={true} />
          <Route path="/" render={() => <Redirect to="/stock-warnings" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="stock-warnings" href="/stock-warnings">
            <IonIcon icon={alertCircleOutline} />
            <IonLabel>Stock Warnings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sale-statistics" href="/sale-statistics">
            <IonIcon icon={statsChartOutline} />
            <IonLabel>Sale Statistics</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default App;
