import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import {TableWrapper, StyledPaper, StyledTable} from '../../styles'

import {Loading} from './styles'

export const LoadingTable = () => {
  const columns = new Array(4).fill(undefined)
  const rows = new Array(4).fill(undefined)

  return <TableWrapper>
  <StyledPaper>
    <TableContainer>
      <StyledTable>
        <TableBody>
          {rows.map(() => {
            return <TableRow>
              {columns.map(() => {
                return <TableCell><Loading /></TableCell>
              })}
          </TableRow>
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  </StyledPaper>
</TableWrapper>
}
