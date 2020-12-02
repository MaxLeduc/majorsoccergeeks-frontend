import React, {ReactNode, createContext, useState, useEffect} from 'react'
import { useQuery } from 'urql'

import {Player} from './interfaces'

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
  players: Player[] | null,
  setPlayers?: Function
}

export const PlayerContext = createContext<PlayersContext>({players: null});

export const PlayersProvider = ({children}: {children: ReactNode}) => {
  const [res] = useQuery({query: PlayerQuery})
  const [players, setPlayers] = useState(null)

  const {data, fetching, error} = res

  useEffect(() => {
    if (data && data.players) {
      setPlayers(data.players)
    }
  }, [data])

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <PlayerContext.Provider value={{players, setPlayers}}>
      {children}
    </PlayerContext.Provider>
  )
}
