import React from 'react'
import Button from './Button'
import styles from './User.module.css'
import classes from './Button.module.css'

const User = ({ onHandleClick, name, age }) => {

  const removeUser = (e) => {
    // console.log(e.currentTarget);
    onHandleClick({
      name: name,
      age: age
    })
  }

  return (
    <div className={styles['note-container']}>
      <div className={styles['name-container']}>
        <div className={styles.name}>{name}</div>
        <Button onClick={removeUser} className={classes.remove}> Remove</Button>
      </div>
      <div className={styles.body}>{age} years old</div>
    </div>
  )
}

export default User
