import React, { useReducer, useCallback, useEffect } from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';

import {Club, Player, Position} from '../../../../common/data/types'

import {EnhancedTableHead} from './components/TableHead'
import {EnhancedTableToolbar} from './components/TableToolbar'
import {TableWrapper, StyledPaper, StyledTable} from './styles'
import {EnhancedTableReducerActions, EnhancedTableReducerState, Order} from './types'
import {currencyFormatter, getComparator, getClubUrl, getPlayerUrl, stableSort, getFilteredPlayers} from './helpers'

const DEFAULT_ROWS_PER_PAGE = 25

const EnhancedTableInitialState = {
  players: [] as Player[],
  order: 'asc' as Order,
  orderBy: 'id' as keyof Player,
  selected: [] as string[],
  page: 0,
  rowsPerPage: DEFAULT_ROWS_PER_PAGE,
  query: {
    search: '',
    clubFilter: '',
    positionFilter: ''
  },
  clubs: new Map() as Map<string, Club>,
  positions: new Map() as Map<string, Position>
}

const EnhancedTableReducer = (state: EnhancedTableReducerState, action: EnhancedTableReducerActions) => {
  switch (action.type) {
    case 'setPlayers':
      const clubs = new Map()
      const positions = new Map()

      action.payload.forEach(player => {
        const {club, positions: playerPositions} = player

        if (!clubs.get(club.name)) {
          clubs.set(club.name, club)
        }

        playerPositions.forEach(position => {
          if (!positions.get(position.name)) {
            positions.set(position.name, position)
          }
        })
      })

      return {
        ...state,
        players: action.payload,
        clubs,
        positions
      }
    case 'setOrder':
      return {
        ...state,
        order: action.payload.order,
        orderBy: action.payload.orderBy
      }
    case 'setSelected':
      return {
        ...state,
        selected: action.payload
      }
    case 'setPage':
      return {
        ...state,
        page: action.payload
      }
    case 'setRowsPerPage':
      return {
        ...state,
        page: action.payload.page,
        rowsPerPage: action.payload.rowsPerPage
      }
    case 'setSearch':
      return {
        ...state,
        page: 0,
        query: {
          ...state.query,
          search: action.payload
        }
      }
    case 'setClubFilter':
      return {
        ...state,
        page: 0,
        query: {
          ...state.query,
          clubFilter: action.payload
        }
      }
    case 'setPositionsFilter':
      return {
        ...state,
        page: 0,
        query: {
          ...state.query,
          positionFilter: action.payload
        }
      }
    default:
      return state
  }  
}



export const EnhancedTable = ({players}: {players: Player[]} ) => {
  const [{
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    query,
    clubs,
    positions
  }, dispatch] = useReducer(EnhancedTableReducer, EnhancedTableInitialState)

  useEffect(() => {
    dispatch({type: 'setPlayers', payload: players})
  }, [players])

  const handleRequestSort = useCallback((event: React.MouseEvent<unknown>, property: keyof Player) => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch({type: 'setOrder', payload: { order: isAsc ? 'desc' : 'asc', orderBy: property }});
  }, [order, orderBy])

  const handleSelectAllClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = players.map((n) => n.id);
      dispatch({type: 'setSelected', payload: newSelecteds});
      return;
    }
    dispatch({type: 'setSelected', payload: []});
  }, [players])

  const selectRow = useCallback((id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    dispatch({type: 'setSelected', payload: newSelected});
  }, [selected])

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    dispatch({type: 'setPage', payload: newPage});
  }, [])

  const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'setRowsPerPage', payload: { page: 0, rowsPerPage: parseInt(event.target.value, 10)}});
  }, [])

  const playersToDisplay = stableSort(players, getComparator(order, orderBy)).filter(player => getFilteredPlayers(player, query))

  return (
    <TableWrapper>
      <StyledPaper>
        <EnhancedTableToolbar selected={selected} dispatch={dispatch} query={query} clubs={clubs} positions={positions} />
        <TableContainer>
          <StyledTable
            stickyHeader
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={players.length}
            />
            <TableBody>
              {playersToDisplay.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Player, index: number) => {
                  const isItemSelected = selected.indexOf(row.id) !== -1;
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const {
                    firstName,
                    lastName,
                    baseSalary,
                    guaranteedCompensation,
                    club,
                    positions: playerPositions
                  } = row

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={() => selectRow(row.id)}
                        />
                      </TableCell>
                      <TableCell align="right" id={labelId} scope="row">
                        <a rel="noopener noreferrer" target="_blank" href={getPlayerUrl(firstName, lastName)}>{firstName} {lastName}</a>
                      </TableCell>
                      <TableCell align="right">{`${currencyFormatter.format(baseSalary)}`}</TableCell>
                      <TableCell align="right">{`${currencyFormatter.format(guaranteedCompensation)}`}</TableCell>
                      <TableCell align="right">
                        <a rel="noopener noreferrer" target="_blank" href={getClubUrl(club.name)}>{club.name}</a>
                      </TableCell>
                      <TableCell align="right">{playerPositions.map(({name}) => name).join(', ')}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[DEFAULT_ROWS_PER_PAGE, 50, 100]}
          component="div"
          count={playersToDisplay.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </StyledPaper>
    </TableWrapper>
  );
}
