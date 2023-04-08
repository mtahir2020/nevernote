import React from 'react'
import Form from './Form'
import './UserBox.css'

const UserBox = ( { finalUserInfo}) => {

  const userInfo = (info) => {
    // console.log(info);
    finalUserInfo({
      id: info.id,
      title: info.title,
      body: info.body
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
