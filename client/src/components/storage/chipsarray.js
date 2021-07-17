let chipsArray = [];

export const handleDelete = (chipToDelete) => () => {
    // chipsArray.filter((chip) => chip !== chipToDelete);
    var index = chipsArray.indexOf(chipToDelete);

    if (index > -1) {
        chipsArray.splice(index, 1);
    }
    console.log(chipsArray);
    
    return chipsArray;
    
  };

  export const getdatachips = () => {
      return chipsArray;
  }

export const addToArray = (item) => {
    chipsArray.push(item)
}

  export default chipsArray;


