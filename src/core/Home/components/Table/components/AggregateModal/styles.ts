import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export const ModalWrapper = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-height: 85vh;
  overflow: scroll;
  width: 85%;
`

export const StyledTableCell = styled(TableCell)`
  text-transform: capitalize;
`

export const ModalHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 0.5px solid rgba(200, 200, 200, 0.4);
  padding: 15px 10px;
  font-size: 16px;

  > h2 {
    margin-right: 1rem;
  }
`

export const StyledTableHead = styled(TableHead)`
  background-color: #f50057;
`

export const StyledTableHeadCell = styled(TableCell)`
  color: white !important;
`
