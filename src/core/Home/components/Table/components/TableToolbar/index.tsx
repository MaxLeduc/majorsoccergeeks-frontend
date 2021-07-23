import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import debounce from "lodash/debounce";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import {PlayerContext} from '../../../../../../common/data/PlayersProvider'
import { Club, Position } from '../../../../../../common/data/types';

import {StyledToolbar, SearchFieldWrapper, StyledFormControl, DropdownWrapper, ClearButton, SearchWrapper, ToolbarWrapper} from './styled'
import {EnhancedTableReducerActions, EnhancedTableQuery} from '../../types'

interface EnhancedTableToolbarProps {
  selected: string[];
  dispatch: (value: EnhancedTableReducerActions) => void
  query: EnhancedTableQuery
  clubs: Map<string, Club>
  positions: Map<string, Position>
}

export const EnhancedTableToolbar = ({dispatch, query, clubs, positions}: EnhancedTableToolbarProps) => {
  const {players} = useContext(PlayerContext);

  const debouncedFunction = debounce((value) => {
    if (!players) return null
    if (!value) return dispatch({type: 'setSearch', payload: ''})

    dispatch({type: 'setSearch', payload: value});
  }, 500);

  return (
    <StyledToolbar>
      <ToolbarWrapper>
        <DropdownWrapper>
          <StyledFormControl>
            <InputLabel id="club-dropdown-label">Club</InputLabel>
            <Select
              labelId="club-dropdown-label"
              id="club-dropdown"
              value={query.clubFilter}
              onChange={(e) => dispatch({type: 'setClubFilter', payload: e.target.value as string})}
            >
              {Array.from(clubs.keys()).sort().map(name => {
                const club = clubs.get(name)
                return <MenuItem key={club!.id} value={club!.name}>{club!.name}</MenuItem>
              })}
            </Select>
          </StyledFormControl>
          <ClearButton variant="contained" color="primary" onClick={() => dispatch({type: 'setClubFilter', payload: ''})}>Clear</ClearButton>
        </DropdownWrapper>

        <DropdownWrapper>
          <StyledFormControl>
            <InputLabel id="positions-dropdown-label">Positions</InputLabel>
            <Select
              labelId="positions-dropdown-label"
              id="positions-dropdown"
              value={query.positionFilter}
              onChange={(e) => dispatch({type: 'setPositionsFilter', payload: e.target.value as string})}
            >
              {Array.from(positions.keys()).sort().map(name => {
                const position = positions.get(name)
                return <MenuItem key={position!.id} value={position!.name}>{position!.name}</MenuItem>
              })}
            </Select>
          </StyledFormControl>
          <ClearButton variant="contained" color="primary" onClick={() => dispatch({type: 'setPositionsFilter', payload: ''})}>Clear</ClearButton>
        </DropdownWrapper>

        <SearchWrapper>
          <SearchFieldWrapper>
          <TextField
            id="standard-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => debouncedFunction(e.target.value)}
          />
          </SearchFieldWrapper>
        </SearchWrapper>
      </ToolbarWrapper>
    </StyledToolbar>
  );
};
