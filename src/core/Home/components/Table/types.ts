import {Club, Player, Position} from '../../../../common/data/types'

export type Order = 'asc' | 'desc';

export type EnhancedTableQuery = {
  search: string
  clubFilter: string
  positionFilter: string
}

export type EnhancedTableReducerState = {
  players: Player[]
  order: Order
  orderBy: keyof Player
  selected: string[]
  page: number
  rowsPerPage: number
  query: EnhancedTableQuery
  clubs: Map<string, Club>
  positions: Map<string, Position>
  showAggregate: boolean
}

export type EnhancedTableReducerActions =
  | {type: 'setPlayers', payload: Player[]}
  | {type: 'setOrder', payload: {order: Order, orderBy: keyof Player}}
  | {type: 'setSelected', payload: string[]}
  | {type: 'setPage', payload: number}
  | {type: 'setRowsPerPage', payload: {page: number, rowsPerPage: number}}
  | {type: 'setSearch', payload: string}
  | {type: 'setClubFilter', payload: string}
  | {type: 'setPositionsFilter', payload: string}
  | {type: 'showAggregate', payload: boolean}
