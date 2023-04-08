import React, { useState } from 'react'
import Button from './Button'
import classes from './Button.module.css'


const Title = ({ /*toReorder*/ onNoteClick, onHandleClick, id, title, body }) => {

  // const [modifiable, setModifiable] = useState(false)

  const removeUser = (e) => {
    // console.log(e.currentTarget);
    onHandleClick({
      id: id,
      title: title,
      body: body
    })
  }

  // const toggleModify = () => {
  //   setModifiable((oldModifiable) => {
  //     return !oldModifiable
  //   })
  // }

  const getNoteDetails = () => {
    onNoteClick({
      id: id,
      title: title,
      body: body
    })
  }

  // const reOrderList = (id) => {
  //   toReorder(id)
  // }

  return (
    <div /*onClick={() => { return getNoteDetails(); reOrderList()}}*/ onClick={getNoteDetails}>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', borderBottom: '2px solid black'}}>
        {<p style={{margin: 'auto'}}>{title}</p>}
        {<Button onClick={removeUser} className={classes.remove}>Remove</Button>}
        {/* {<p style={{margin: 'auto'}} onClick={toggleModify}>Modify</p>} */}
      </div>
      {/* <div className={styles.body}>{modifiable && <NewBodyInput id={id} onModData={onModData}/>}</div> */}
      {/* <div>{age}</div> */}
    </div>
  )
}

export default Title
