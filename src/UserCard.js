import React, { useState } from 'react';
import User from './User.js'
import Wrapper from './Helpers/Wrapper.js';
import styles from './User.module.css'

const UserCard = ({ onRemovePerson, filteredUsers}) => {

  const onHandleClick = (user) => {
    onRemovePerson(user)
  }

  const filteredUserInfo = filteredUsers.map((user, index) => {
    // console.log(user.name + ': ' + user.age + ' (in UserCard)');
    return <User key={index}
                name={user.name}
                age={user.age}
                onHandleClick={onHandleClick}
          />
  })


  return (
    <Wrapper className={styles['card-container']}>
      {filteredUserInfo}
    </Wrapper>
  )
}

export default UserCard
