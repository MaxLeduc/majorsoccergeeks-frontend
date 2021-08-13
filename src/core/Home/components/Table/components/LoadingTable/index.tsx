import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { TableWrapper, StyledPaper, StyledTable } from "../../styles";

import { Loading, LoadingWrapper, LoadingText } from "./styles";

export const LoadingTable = () => {
  const columns = new Array(4).fill(undefined);
  const rows = new Array(3).fill(undefined);

  return (
    <LoadingWrapper>
      <LoadingText>Loading players...</LoadingText>
      <TableWrapper>
        <StyledPaper>
          <TableContainer>
            <StyledTable>
              <TableBody>
                {rows.map(() => {
                  return (
                    <TableRow>
                      {columns.map(() => {
                        return (
                          <TableCell>
                            <Loading />
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </StyledPaper>
      </TableWrapper>
    </LoadingWrapper>
  );
};
