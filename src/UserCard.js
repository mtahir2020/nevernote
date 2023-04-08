import React, { useState } from 'react';
import User from './User.js'
import Wrapper from './Helpers/Wrapper.js';
import styles from './User.module.css'

const UserCard = ({ onRemovePerson, onModification, filteredUsers}) => {

  const onHandleClick = (user) => {
    // console.log(user);
    onRemovePerson(user)
  }

  const moddedData = (mod) => {
    // console.log(mod);
    onModification(mod)
  }

  const filteredUserInfo = filteredUsers.map((user, index) => {
    return <User key={`${Math.floor(Math.random() * user.body)}${user.title[0]}${Math.floor(Math.random() * user.body)}`}
                id={user.id}
                // id={filteredUserLength}
                title={user.title}
                body={user.body}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                // listOfUsers={filteredUserInfo}
          />
  })


  return (
    <Wrapper className={styles['card-container']}>
      {filteredUserInfo}
      {/* <div>Big text</div> */}
    </Wrapper>
  )
}

export default UserCard
