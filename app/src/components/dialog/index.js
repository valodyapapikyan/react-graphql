import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

export default function MaxWidthDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Actual jobs{" "}
        <span
          style={{
            color: "red",
            fontWeight: "900",
            display: "inline-block",
            marginLeft: "10px"
          }}
        >
          {props.count}
        </span>
      </Button>
      <Dialog
        fullWidth={"600px"}
        maxWidth={"500px"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Jobs</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <List subheader={<li />}>
              {props.jobs && props.jobs.length
                ? props.jobs.map(job => <ListItemText primary={job.title} />)
                : null}
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
