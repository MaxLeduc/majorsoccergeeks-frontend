import {Player} from '../../../../common/data/types' 

import {EnhancedTableQuery} from './types'

export const descendingComparator = (a: Player, b: Player, orderBy: keyof Player): number => {
  let firstValue = a[orderBy]
  let secondValue = b[orderBy]

  if (orderBy === 'club') {
    firstValue = a[orderBy].name
    secondValue = b[orderBy].name 
  }

  if (orderBy === 'positions') {
    firstValue = a[orderBy].map(position => position.name).join('')
    secondValue = b[orderBy].map(position => position.name).join('')
  }

  // ! salaries are coming as string instead of numbers
  if (orderBy === 'baseSalary' || orderBy === 'guaranteedCompensation') {
    firstValue = Number(a[orderBy])
    secondValue = Number(b[orderBy])
  }

  if (secondValue < firstValue) {
    return -1;
  }

  if (secondValue > firstValue) {
    return 1;
  }

  return 0;
}

type Order = 'asc' | 'desc';

export const getComparator = (order: Order, orderBy: keyof Player): (a: Player, b: Player) => number =>  {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const stableSort = (array: Player[], comparator: (a: Player, b: Player) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [Player, number]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const getPlayerUrl = (firstName: string, lastName: string) => {
  let fullName = `${firstName}${lastName ? '-' + lastName : ''}`

  if (fullName.includes("\"")) {
    const names = fullName.split("\"")

    fullName = (names[0] + names[names.length - 1]).replace(' ', '')
  }

  return `
    https://www.mlssoccer.com/players/${fullName.toLowerCase().replace(' ', '-')}
  `
}

export const getClubUrl = (club: string) => {
  return `
    https://www.mlssoccer.com/clubs/${club.toLowerCase().replace(' ', '-')}
  `
}

export const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export const playerHasSearchValue = (player: Player, value: string): boolean => {
  const {firstName, lastName, club: {name: clubName}, positions} = player
  const searchString = firstName + lastName + clubName + positions.map(position => position.name).join(',')
  const search_values = value.split(' ')
  const matches = search_values.filter(val => searchString.toLowerCase().includes(val.toLowerCase())).length

  return matches === search_values.length
}

export const getFilteredPlayers = (player: Player, query: EnhancedTableQuery) => {
  const {search, clubFilter, positionFilter} = query
  const conditions: boolean[] = []

  if (search) {
    conditions.push(playerHasSearchValue(player, search))
  }

  if (clubFilter) {
    conditions.push(player.club.name === clubFilter)
  }

  if (positionFilter) {
    let hasPosition = false

    player.positions.forEach((position) => {
      if (position.name === positionFilter) {
        hasPosition = true
        return
      }
    })

    conditions.push(hasPosition)
  }

  return !conditions.filter(condition => !condition).length
}
