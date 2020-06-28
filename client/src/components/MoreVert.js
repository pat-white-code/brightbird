import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const VertMore = props => {
  const {deleteTeacherWeek, week} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    deleteTeacherWeek(week.id)
    // delete code here
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-haspopup="true"
        onClick={handleClick} >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}

export default VertMore;