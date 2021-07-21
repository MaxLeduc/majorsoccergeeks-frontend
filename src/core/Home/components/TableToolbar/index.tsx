import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import debounce from "lodash/debounce";

import {PlayerContext} from '../../../../common/data/PlayersProvider'
import {Player} from '../../../../common/data/interfaces'

import {StyledToolbar, SearchFieldWrapper, StyledIcon} from './styled'

interface EnhancedTableToolbarProps {
  selected: string[];
}

const hasValue = (player: Player, value: string): boolean => {
  const {firstName, lastName, club: {name: clubName}, positions} = player
  const searchString = firstName + lastName + clubName + positions.map(position => position.name).join(',')
  const search_values = value.split(' ')
  const matches = search_values.filter(val => searchString.toLowerCase().includes(val.toLowerCase())).length

  return matches === search_values.length
}

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const {players, setFilteredPlayers} = useContext(PlayerContext);
  const {selected} = props

  const debouncedFunction = debounce((value) => {
    searchPlayers(value);
  }, 500);

  const searchPlayers = (value: string) => {
    if (!players) return null
    if (!value && setFilteredPlayers) return setFilteredPlayers([])

    const output = players.filter((player) => hasValue(player, value))

    if(setFilteredPlayers) {
      setFilteredPlayers(output)
    }
  }

  console.log(selected)

  return (
    <StyledToolbar>
      <SearchFieldWrapper>
        <StyledIcon /><TextField id="standard-basic" label="Search" onChange={(e) => debouncedFunction(e.target.value)} />
      </SearchFieldWrapper>
    </StyledToolbar>
  );
};
