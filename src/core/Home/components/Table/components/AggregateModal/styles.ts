import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export const ModalWrapper = styled.div`
  width: 90%;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-height: 90vh;
  overflow: scroll;
`

export const StyledTableCell = styled(TableCell)`
  text-transform: capitalize;
`

export const ModalHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  border: 0.5px solid rgba(200, 200, 200, 0.4);
  padding: 40px 15px 10px;
  font-size: 16px;
`

export const StyledTableHead = styled(TableHead)`
  background-color: #f50057;
`

export const StyledTableHeadCell = styled(TableCell)`
  color: white !important;
`
