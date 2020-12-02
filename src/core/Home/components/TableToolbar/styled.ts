import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

export const StyledToolbar = styled(Toolbar)`
`

export const StyledTitle = styled(Typography)`
  flex: 1 1 100%;
`

export const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const StyledIcon = styled(SearchIcon)`
  margin-right: 10px;
`
