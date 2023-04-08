import React, { useState } from 'react'
import Button from './Button'
import styles from './User.module.css'
import classes from './Button.module.css'
import NewBodyInput from './NewBodyInput'

const User = ({ onHandleClick, handleModify, id, title, body }) => {

  const [modifiable, setModifiable] = useState(false)

  const removeUser = (e) => {
    // console.log(e.currentTarget);
    onHandleClick({
      id: id,
      title: title,
      body: body
    })
  }

  const toggleModify = () => {
    setModifiable((oldModifiable) => {
      return !oldModifiable
    })
  }

  const onModData = (modded) => {
    // console.log(modded);
    handleModify(modded)
  }

  return (
    <div className={styles['note-container']}>
      {!modifiable && <div className={styles['name-container']}>
        {<div className={styles.name}>{title}</div>}
        {/* {<div>{`Key: ${id}`}</div>} */}
        {<Button onClick={removeUser} className={classes.remove}>Remove</Button>}
        {<div onClick={toggleModify}>Modify</div>}
      </div>}
      <div className={styles.body}>{modifiable ? <NewBodyInput id={id} onModData={onModData}/> : `${body}`}</div>
    </div>
  )
}

export default User
