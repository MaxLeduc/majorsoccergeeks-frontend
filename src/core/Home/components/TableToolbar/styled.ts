import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`

export const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0;
`

export const StyledIcon = styled(SearchIcon)`
  margin-right: 10px;
`
