import { ReactElement, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { DialogProps } from '@mui/material';

import { ColorSwitch, ModeSwitch } from '@/components';

const PREFIX = 'CloseProjectDialog';
const classes = {
  root: `${PREFIX}-Root`,
};

interface CloseProjectDialogProps extends DialogProps {
  onClose: () => void;
}

export const CloseProjectDialog: React.FC<CloseProjectDialogProps> = ({ onClose, ...props }) => {
  return (
    <Dialog className={classes.root} fullWidth maxWidth="xs" onClose={onClose} {...props}>
      {props.open && (
        <>
          <AppBar position="absolute" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
              <IconButton edge="end" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogTitle>Close project?</DialogTitle>
          <DialogContent>
            <DialogContentText>Project will be closed.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} color="primary" variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export const useCloseProjectDialog = (): [() => void, ReactElement] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hideSettings = () => setIsOpen(false);
  const showSettings = () => setIsOpen(true);

  const dialogEl = <CloseProjectDialog onClose={hideSettings} open={isOpen} />;

  return [showSettings, dialogEl];
};

export default CloseProjectDialog;
