import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`

export const SelectedWrapper = styled.div`
  display: flex;
`

export const SelectedIndicator = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  padding: 10px 15px;
  background-color: rgba(245, 0, 87, 0.065);
  border-radius: 5px;
  margin-right: 10px;
`

export const SelectedButton = styled(Button)`

`