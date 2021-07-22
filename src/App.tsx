import React from 'react';
import { Provider } from 'urql';

import Home from './core/Home'
import {graphqlClient} from './common/api/graphqlClient'
import {PlayersProvider} from './common/data/PlayersProvider'
import { Footer } from './common/components/Footer';

function App() {
  return (
    <Provider value={graphqlClient}>
      <PlayersProvider>
        <Home />
        <Footer />
      </PlayersProvider>
    </Provider>
  );
}

export default App;
