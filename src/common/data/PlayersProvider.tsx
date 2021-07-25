import React, {ReactNode, createContext, useState, useEffect, useContext} from 'react'
import { useQuery } from 'urql'

import {Player} from './types'

const PlayerQuery = `
  query {
    players {
      id,
      firstName,
      lastName,
      baseSalary,
      guaranteedCompensation,
      club {
        id,
        name,
      },
      positions {
        id,
        name
      }
    }
  }
`

interface PlayersContext {
  players: Player[],
  fetching: boolean
}

export const PlayerContext = createContext<PlayersContext>({players: [] as Player[], fetching: false});

export const usePlayersProvider = () => {
  const value = useContext(PlayerContext)

  return value
}

export const PlayersProvider = ({children}: {children: ReactNode}) => {
  const [res] = useQuery({query: PlayerQuery})
  const [players, setPlayers] = useState([])

  const {data, fetching, error} = res

  useEffect(() => {
    if (data && data.players) {
      setPlayers(data.players)
    }
  }, [data])

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <PlayerContext.Provider value={{players, fetching}}>
      {children}
    </PlayerContext.Provider>
  )
}
