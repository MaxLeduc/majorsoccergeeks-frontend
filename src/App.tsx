import React from 'react';
import { Provider } from 'urql';

import Home from './core/Home'
import {graphqlClient} from './common/api/graphqlClient'
import {PlayersProvider} from './common/data/PlayersProvider'

function App() {
  return (
    <Provider value={graphqlClient}>
      <PlayersProvider>
        <Home />
      </PlayersProvider>
    </Provider>
  );
}

export default App;
