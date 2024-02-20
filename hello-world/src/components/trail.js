import React from 'react'
import ReactPlayer from 'react-player';
import video from '../Assets/video trail.mp4';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import VideoRecorder from './videoRecorder';
import LiveStream from './liveStream'
import { useNavigate } from 'react-router-dom'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
// const liveDialog = styled(Dialog)(({theme}) =>{

// })
const Trail = () => {
  const navigate = useNavigate();
  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [liveStreamOpen, setLiveStreamOpen] = React.useState(false);
  const handleLiveStream = () => setLiveStreamOpen(true);
  const handleLiveStreamClose = () => setLiveStreamOpen(false);
  return (
    <div>
        <ReactPlayer
          className='react-player'
          controls = {true}
          url={video}
          width='450px'
          height='400px'
        />
        {/* Vid */}
       <button className='btn btn-light m-2' onClick={handleClickOpen}>Video recorder</button>
       <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} // Add open prop
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <VideoRecorder />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
{/* Live stream */}
 {/* Live Stream */}
 <button className='btn btn-light m-2' onClick={handleLiveStream}>Live Stream</button>
 <button className='btn btn-light m-2' onClick={() => navigate("/live")}>LiveStreaming</button>
 <button className='btn btn-light m-2' onClick={() => navigate("/Liveclasses")}> live classes</button>
 <button className='btn btn-light m-2' onClick={() => navigate("/ant")}> ant media</button>
 <button className='btn btn-light m-2' onClick={() => navigate("/quiz")}> Quiz page</button>
 <button className='btn btn-light m-2' onClick={() => navigate('lifeCycle')}> LifeCycle</button>
      <BootstrapDialog
        onClose={handleLiveStreamClose}
        aria-labelledby="customized-dialog-title"
        open={liveStreamOpen} // Add open prop
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Live Stream Title
        </DialogTitle>
        <LiveStream />
      </BootstrapDialog>
     
    </div>
    
  )
}


export default Trail