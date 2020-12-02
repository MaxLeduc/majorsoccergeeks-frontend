import React from 'react'

import {PlayerContext} from '../../common/data/PlayersProvider'

import {EnhancedTable} from './components/Table'

const Home = () => {
  return <PlayerContext.Consumer>
    {({players}) => {
      if (players) {
        return <EnhancedTable players={players} />
      }

      return null
    }}
  </PlayerContext.Consumer>

}

export default Home
