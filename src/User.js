import React, { useState } from 'react'
import Button from './Button'
import styles from './User.module.css'
import classes from './Button.module.css'
import NewBodyInput from './NewBodyInput'

const User = ({ onHandleClick, handleModify, name, age }) => {

  const [modifiable, setModifiable] = useState(false)

  const removeUser = (e) => {
    // console.log(e.currentTarget);
    onHandleClick({
      name: name,
      age: age
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
    // return {
    //   title: modded.title,
    //   body: modded.body
    // }
  }

  return (
    <div className={styles['note-container']}>
      {!modifiable && <div className={styles['name-container']}>
        {<div className={styles.name}>{name}</div>}
        {<Button onClick={removeUser} className={classes.remove}> Remove</Button>}
        {<div onClick={toggleModify}>Modify</div>}
      </div>}
      <div className={styles.body}>{modifiable ? <NewBodyInput onModData={onModData}/> : `${age} years old`}</div>
    </div>
  )
}

export default User
