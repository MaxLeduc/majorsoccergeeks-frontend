import React, { useMemo } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { Player } from "../../../../../../common/data/types";

import {
  ModalWrapper,
  StyledTableCell,
  ModalHeadWrapper,
  StyledTableHead,
  StyledTableHeadCell,
} from "./styles";
import { currencyFormatter } from "../../helpers";

type AggregateModalProps = {
  showAggregate: boolean;
  selected: string[];
  players: Player[];
  closeModal: () => void;
};

type AggregateRow = { [key: string]: string | number };

type Aggregate = { [key: string]: AggregateRow };

const getAggregate = (selectedPlayers: Player[]) => {
  const aggregate: Aggregate = {
    total: { base: 0, guaranteed: 0 },
    average: { base: 0, guaranteed: 0 },
    highest: { base: 0, guaranteed: 0 },
    lowest: { base: Infinity, guaranteed: Infinity },
  };

  selectedPlayers.forEach((player) => {
    const {
      baseSalary,
      guaranteedCompensation,
      firstName,
      lastName,
      positions,
    } = player;
    const playerSalary = Number(baseSalary);
    const playerCompensation = Number(guaranteedCompensation);
    const fullName = `${firstName} ${lastName}`;
    const playerPositions = positions
      .map((position) => position.name)
      .join(", ");

    aggregate.total.base = Number(aggregate.total.base) + Number(playerSalary);
    aggregate.total.guaranteed =
      Number(aggregate.total.guaranteed) + Number(playerCompensation);

    aggregate.average = {
      base: Math.round(Number(aggregate.total.base) / selectedPlayers.length),
      guaranteed: Math.round(
        Number(aggregate.total.guaranteed) / selectedPlayers.length
      ),
    };

    if (aggregate.highest.base < playerSalary) {
      aggregate.highest.base = playerSalary;
      aggregate.highest.basePlayerName = fullName;
      aggregate.highest.basePlayerPositions = playerPositions;
    }

    if (aggregate.highest.guaranteed < playerCompensation) {
      aggregate.highest.guaranteed = playerCompensation;
      aggregate.highest.guaranteedPlayerName = fullName;
      aggregate.highest.guaranteedPlayerPositions = playerPositions;
    }

    if (aggregate.lowest.base > playerSalary) {
      aggregate.lowest.base = playerSalary;
      aggregate.lowest.basePlayerName = fullName;
      aggregate.lowest.basePlayerPositions = playerPositions;
    }

    if (aggregate.lowest.guaranteed > playerCompensation) {
      aggregate.lowest.guaranteed = playerCompensation;
      aggregate.lowest.guaranteedPlayerName = fullName;
      aggregate.lowest.guaranteedPlayerPositions = playerPositions;
    }
  });

  return aggregate;
};

const CustomRow = ({
  rowName,
  row,
}: {
  rowName: string;
  row: AggregateRow;
}) => {
  return (
    <TableRow tabIndex={-1} key={1}>
      <StyledTableCell>
        <b>
          {rowName} {rowName === "total" ? "Salaries" : "Salary"}
        </b>
      </StyledTableCell>
      <TableCell>
        {currencyFormatter.format(Number(row.base))}{" "}
        {row.basePlayerName &&
          `(${row.basePlayerName} ${
            row.basePlayerPositions && `- ${row.basePlayerPositions}`
          })`}
      </TableCell>
      <TableCell>
        {currencyFormatter.format(Number(row.guaranteed))}{" "}
        {row.guaranteedPlayerName &&
          `(${row.guaranteedPlayerName} ${
            row.guaranteedPlayerPositions &&
            `- ${row.guaranteedPlayerPositions}`
          })`}
      </TableCell>
    </TableRow>
  );
};

export const AggregateModal = ({
  showAggregate,
  selected,
  players,
  closeModal,
}: AggregateModalProps) => {
  const selectedPlayers = useMemo(
    () => players.filter((player) => selected.includes(player.id)),
    [players, selected]
  );
  const aggregate = useMemo(
    () => getAggregate(selectedPlayers),
    [selectedPlayers]
  );

  return (
    <Modal open={showAggregate} BackdropProps={{ onClick: closeModal }}>
      <ModalWrapper>
        <ModalHeadWrapper>
          <h2>
            Aggregate ({selectedPlayers.length} player
            {selectedPlayers.length > 1 && "s"})
          </h2>
          <Button variant="contained" color="primary" onClick={closeModal}>
            Close
          </Button>
        </ModalHeadWrapper>
        <Paper>
          <TableContainer>
            <Table>
              <StyledTableHead>
                <TableRow>
                  <StyledTableHeadCell>Aggregate Category</StyledTableHeadCell>
                  <StyledTableHeadCell>Base Salary</StyledTableHeadCell>
                  <StyledTableHeadCell>
                    Guaranteed Compensation
                  </StyledTableHeadCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {Object.keys(aggregate).map((key: string) => {
                  return <CustomRow rowName={key} row={aggregate[key]} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ModalWrapper>
    </Modal>
  );
};
