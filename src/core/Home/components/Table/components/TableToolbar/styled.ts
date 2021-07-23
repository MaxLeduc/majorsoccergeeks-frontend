import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`

export const SearchFieldWrapper = styled.div`
  margin-right: 10px;
`

export const StyledFormControl = styled(FormControl)`
  min-width: 150px !important;
  margin-right: 10px !important;
`

export const DropdownWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
`

export const ClearButton = styled(Button)`
  font-size: 10px !important;
  padding: 5px 10px !important;
  min-width: unset !important;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
