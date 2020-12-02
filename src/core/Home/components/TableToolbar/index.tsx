import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';

import {StyledToolbar, StyledTitle, SearchFieldWrapper, StyledIcon} from './styled'
import {PlayerContext} from '../../../../common/data/PlayersProvider'

interface EnhancedTableToolbarProps {
  numSelected: number;
}

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;
  const contextValue = useContext(PlayerContext);

  console.log(contextValue)

  return (
    <StyledToolbar>
      {numSelected > 0 ? (
        <StyledTitle color="inherit" variant="subtitle1">
          {numSelected} selected
        </StyledTitle>
      ) : (
        <StyledTitle variant="h6" id="tableTitle">
          Major Soccer Geeks
        </StyledTitle>
      )}
      <SearchFieldWrapper>
        <StyledIcon /><TextField id="standard-basic" label="Search" onChange={(e) => console.log(e.target.value)} />
      </SearchFieldWrapper>
    </StyledToolbar>
  );
};
