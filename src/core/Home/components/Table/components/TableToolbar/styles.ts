import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const StyledFormControl = styled(FormControl)`
  min-width: 150px !important;
  margin-right: 10px !important;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const DropdownWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 800px) {
    margin-bottom: 10px;
    width: 100%;
    margin-right: 0;
  }
`

export const ClearButton = styled(Button)`
  font-size: 10px !important;
  padding: 5px 10px !important;
  min-width: unset !important;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 48px;

  @media (max-width: 800px) {
    margin-bottom: 25px;
    width: 100%;
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 1125px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 800px) {
    align-items: flex-start;
  }
`

export const SelectedWrapper = styled.div`
  display: flex;

  @media (max-width: 1125px) {
    margin-bottom: 10px;
  }
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

export const SelectedButton = styled(Button)``

export const StyledTextField = styled(TextField)`
  @media (max-width: 800px) {
    width: 100%;
  }
`
