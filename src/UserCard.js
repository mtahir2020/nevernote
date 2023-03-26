import React, { useState } from 'react';
import User from './User.js'
import Wrapper from './Helpers/Wrapper.js';
import styles from './User.module.css'

const UserCard = ({ onRemovePerson, onModification, filteredUsers}) => {

  const onHandleClick = (user) => {
    console.log(user);
    onRemovePerson(user)
  }

  const moddedData = (mod) => {
    // console.log(mod);
    onModification(mod)
  }

  // QUESTIONABLE
  // console.log(filteredUsers.length);
  // let filteredUserLength = filteredUsers.length + 1

  const filteredUserInfo = filteredUsers.map((user, index) => {
    // console.log(user.name + ': ' + user.age + ' (in UserCard)');
    return <User key={`${Math.floor(Math.random() * user.age)}${user.name[0]}${Math.floor(Math.random() * user.age)}`}
                id={user.id}
                // id={filteredUserLength}
                name={user.name}
                age={user.age}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                // listOfUsers={filteredUserInfo}
          />
  })


  return (
    <Wrapper className={styles['card-container']}>
      {filteredUserInfo}
    </Wrapper>
  )
}

export default UserCard
