import React, { useContext, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Toolbar from "@material-ui/core/Toolbar";

import { PlayerContext } from "../../../../../../common/data/PlayersProvider";
import { Club, Position } from "../../../../../../common/data/types";

import {
  StyledTextField,
  StyledFormControl,
  DropdownWrapper,
  ClearButton,
  SearchWrapper,
  ToolbarWrapper,
  InputsWrapper,
  SelectedIndicator,
  SelectedButton,
  SelectedWrapper,
} from "./styles";
import { EnhancedTableReducerActions, EnhancedTableQuery } from "../../types";

interface EnhancedTableToolbarProps {
  selected: string[];
  dispatch: (value: EnhancedTableReducerActions) => void;
  query: EnhancedTableQuery;
  clubs: Map<string, Club>;
  positions: Map<string, Position>;
}

export const EnhancedTableToolbar = ({
  dispatch,
  query,
  clubs,
  positions,
  selected,
}: EnhancedTableToolbarProps) => {
  const { players } = useContext(PlayerContext);

  const search = (value: string) => {
    if (!players) return null;
    if (!value) return dispatch({ type: "setSearch", payload: "" });

    dispatch({ type: "setSearch", payload: value });
  };

  return (
    <Toolbar>
      <ToolbarWrapper>
        <SelectedWrapper>
          <SelectedIndicator>
            <b>{selected.length}</b>{" "}
            {`player${selected.length > 1 ? "s" : ""} selected`}
          </SelectedIndicator>
          <SelectedButton
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: "showAggregate", payload: true })}
          >
            Aggregate
          </SelectedButton>
        </SelectedWrapper>
        <InputsWrapper>
          <DropdownWrapper>
            <StyledFormControl>
              <InputLabel id="club-dropdown-label">Club</InputLabel>
              <Select
                labelId="club-dropdown-label"
                id="club-dropdown"
                value={query.clubFilter}
                onChange={(e) =>
                  dispatch({
                    type: "setClubFilter",
                    payload: e.target.value as string,
                  })
                }
              >
                {Array.from(clubs.keys())
                  .sort()
                  .map((name) => {
                    const club = clubs.get(name);
                    return (
                      <MenuItem key={club!.id} value={club!.name}>
                        {club!.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </StyledFormControl>
          </DropdownWrapper>

          <DropdownWrapper>
            <StyledFormControl>
              <InputLabel id="positions-dropdown-label">Positions</InputLabel>
              <Select
                labelId="positions-dropdown-label"
                id="positions-dropdown"
                value={query.positionFilter}
                onChange={(e) =>
                  dispatch({
                    type: "setPositionsFilter",
                    payload: e.target.value as string,
                  })
                }
              >
                {Array.from(positions.keys())
                  .sort()
                  .map((name) => {
                    const position = positions.get(name);
                    return (
                      <MenuItem key={position!.id} value={position!.name}>
                        {position!.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </StyledFormControl>
          </DropdownWrapper>

          <SearchWrapper>
            <StyledTextField
              id="standard-basic"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => search(e.target.value)}
              value={query.search}
            />
          </SearchWrapper>

          <ClearButton
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: "clearAll" })}
          >
            Clear All
          </ClearButton>
        </InputsWrapper>
      </ToolbarWrapper>
    </Toolbar>
  );
};
