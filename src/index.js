// == Import : npm
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
// Store
import store from 'src/store';

// Composants
import Otravel from 'src/components/Otravel';

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <Otravel />
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById('root');
render(rootReactElement, target);
