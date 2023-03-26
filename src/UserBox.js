import React from 'react'
import Form from './Form'
import './UserBox.css'

const UserBox = ( { finalUserInfo}) => {

  const userInfo = (info) => {
    // console.log(info);
    finalUserInfo({
      id: info.id,
      name: info.name,
      age: info.age
    })
  }

  return (
    // Style form-container box in this component
    <div className='user--entry'>
      <Form userInfo={userInfo}/>
    </div>
  )
}

export default UserBox
