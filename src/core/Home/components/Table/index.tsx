import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';

import {Player} from '../../../../common/data/interfaces'

import {EnhancedTableHead} from '../TableHead'
import {EnhancedTableToolbar} from '../TableToolbar'
import {TableWrapper, StyledPaper, StyledTable} from './styles'
import {Order} from './interfaces'
import {getComparator, getClubUrl, getPlayerUrl, stableSort} from './helpers'

const DEFAULT_ROWS_PER_PAGE = 25

// todo: replace state by a reducer and add `useCallback` to functions defined in the component
export const EnhancedTable = ({players}: {players: Player[]} ) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Player>('id');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Player) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = players.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const selectRow = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

  return (
    <TableWrapper>
      <StyledPaper>
        <EnhancedTableToolbar selected={selected} />
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
              {stableSort(players, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Player, index: number) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const {
                    firstName,
                    lastName,
                    baseSalary,
                    guaranteedCompensation,
                    club,
                    positions
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
                          onClick={(event) => selectRow(event, row.id)}
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
                      <TableCell align="right">{positions.map(({name}) => name).join(', ')}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[DEFAULT_ROWS_PER_PAGE, 50, 100]}
          component="div"
          count={players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </StyledPaper>
    </TableWrapper>
  );
}
