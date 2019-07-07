import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import FullScreenDialog from "../../../components//dialog/";

export default function SimpleTable(props) {
  const [job, setJob] = useState({});

  const close = isClose => isClose && setJob({});

  return (
    <Paper style={{ width: "95%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company Logo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Website</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">See actual Jobs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.companies.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                <img
                  alt="no image for showing"
                  style={{ width: "100px", heigth: "100px" }}
                  src={row.logoUrl}
                />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <a href={row.websiteUrl}> {row.websiteUrl}</a>
              </TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">
                {row.jobs.length === 0 ? (
                  <span style={{ fontSize: "18px" }}>
                    there is no active jobs
                  </span>
                ) : (
                  <FullScreenDialog
                    close={close}
                    count={row.jobs.length}
                    jobs={row.jobs}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
