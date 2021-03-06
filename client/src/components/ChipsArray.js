import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import chipsArray, { getdatachips, handleDelete } from './storage/chipsarray';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {


  const classes = useStyles();
//   const [chipData, setChipData] = React.useState([
//     { key: 0, label: 'Angular' },
//     { key: 1, label: 'jQuery' },
//     { key: 2, label: 'Polymer' },
//     { key: 3, label: 'React' },
//     { key: 4, label: 'Vue.js' },
//   ]);

// const [chipData, setChipData] = React.useState(chipVal)
  
const delChip = (data) => {
  console.log(data)
}

   



  return (
    <Paper component="ul" className={classes.root}>
      {chipsArray.map((data) => {
        let icon;


        return (
          <li>
            <Chip
              icon={icon}
              label={data}
              
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}