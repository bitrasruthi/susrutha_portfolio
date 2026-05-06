import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../styles/theme";
interface IProps {
  openDialog: any;
  setOpenDialog: any;
  children: any;
  actions: any;
}

const MuiDialog: FC<IProps> = (props) => {
  const { openDialog, setOpenDialog, children, actions } = props;

  const handleClose = () => {
    setOpenDialog({ ...openDialog, isOpen: false });
  };

  return (
    <Dialog onClose={handleClose} open={openDialog.isOpen}>
      <DialogTitle
        sx={{ backgroundColor: theme.palette.secondary.light, color: "#fff" }}
      >
        <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h5">{openDialog.title}</Typography>
          <IconButton disableRipple onClick={handleClose}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ maxHeight: 500, overflowY: "auto" }}>
        {children}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
