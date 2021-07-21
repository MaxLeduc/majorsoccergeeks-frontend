import React from 'react'

import {PlayerContext} from '../../common/data/PlayersProvider'
import {Header} from '../../common/components/header'

import {EnhancedTable} from './components/Table'

const Home = () => {
  return <PlayerContext.Consumer>
    {({players}) => {
      if (players) {
        return <>
          <Header />
          <EnhancedTable players={players} />
        </>
      }

      return null
    }}
  </PlayerContext.Consumer>

}

export default Home
