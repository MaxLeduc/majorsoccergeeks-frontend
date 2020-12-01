import {Player} from '../../common/data/interfaces' 

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
