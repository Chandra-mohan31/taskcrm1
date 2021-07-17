import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"
import { useState } from "react"
import Button from "@material-ui/core/Button"

export default function ChipsAlternative() {
  const [hashtag, setHashtag] = useState("")
  const [numberOfHashtags, setNumberOfHashtags] = useState(0)
  const [arrayOfHashtags, addHashtag] = useState([])
  const handleDelete = (h) => () => {
    addHashtag((arrayOfHashtags) =>
      arrayOfHashtags.filter((hashtag) => hashtag !== h)
    )
  }
  const handleHashtagChange = (event) => setHashtag(event.target.value)

  const handleClick = () => {
    console.info("You clicked the Chip.")
  }
  const newHashtag = () => {
    if (numberOfHashtags < 3) {
      setNumberOfHashtags(numberOfHashtags + 1)
      addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
    } else {
      console.log("Too much hashtags")
    }
  }
  const Hashtags = arrayOfHashtags.map((h) => (
    <Chip
      size="small"
      avatar={<Avatar>#</Avatar>}
      label={h}
      onDelete={handleDelete(h)}
    />
  ))
  console.log(arrayOfHashtags)
  return (
    <div>
      <TextField
        size="small"
        inputProps={{
          style: { fontSize: 15 },
        }}
        id="outlined-multiline-static"
        multiline
        rows={1}
        placeholder="Description"
        variant="outlined"
        value={hashtag}
        onChange={handleHashtagChange}
      />
      <Button color="primary" onClick={newHashtag}>
        Create!
      </Button>
      {numberOfHashtags > 0 ? Hashtags : ""}
    </div>
  )
}
