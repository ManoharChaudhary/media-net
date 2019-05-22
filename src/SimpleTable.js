import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { timeSince } from "./utils/utils";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  priceUp: {
    backgroundColor: "green"
  },
  priceDown: {
    backgroundColor: "red"
  }
};

function SimpleTable(props) {
  const { classes } = props;
  console.log(props);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>TICKER</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">LAST UPDATED</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stocks.map((n, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell
                align="right"
                className={
                  n.priceUpdated
                    ? n.priceRaised
                      ? classes.priceUp
                      : classes.priceDown
                    : ""
                }
              >
                {Math.round(n.price * 100) / 100}
              </TableCell>
              <TableCell align="right">
                {timeSince(n.last_updated_at) + n.priceUpdated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
