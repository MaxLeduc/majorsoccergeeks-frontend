import React, {ReactNode, createContext} from 'react'
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

export const PlayerContext = createContext<Player[] | null>(null);

export const PlayersProvider = ({children}: {children: ReactNode}) => {
  const [res, reexecuteQuery] = useQuery({query: PlayerQuery})
  const {data, fetching, error} = res

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <PlayerContext.Provider value={data.players}>
      {children}
    </PlayerContext.Provider>
  )
}
