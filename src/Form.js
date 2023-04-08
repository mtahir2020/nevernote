import React, { useRef, useState } from 'react'
import './UserBox.css'
import ErrorModal from './UI/ErrorModal'
import Button from './Button'
import Wrapper from './Helpers/Wrapper'

const Form = (props) => {

  const [openForm, setOpenForm] = useState(false);

  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  const [userInfo, setUserInfo] = useState({
    id: '',
    title: '',
    body: ''
  })

  const [error, setError] = useState()

  const addTitle = (e) => {
    // e.preventDefault();
    setUserInfo((oldUserInfo) => {
      return {
        ...oldUserInfo,
        title: e.target.value
      }
    })
  }

  const addBody = (e) => {

    setUserInfo((oldUserInfo) => {
      return {
        ...oldUserInfo,
        body: e.target.value
      }
    })
  }


  const captureInfo = (e) => {
    e.preventDefault()
    // console.log(nameInputRef.current.value);

    if (userInfo.title.trim().length < 1 || userInfo.body.trim().length < 1) {
      // console.log('nothing entered');
      setError({
        title: "Nothing entered",
        message: "Please enter some information"
      })
      return
    }

    let userInfoLength = props.userInfo.length

    props.userInfo({
      id: userInfoLength,
      title: userInfo.title,
      body: userInfo.body
    })

    setUserInfo(() => {
      return {
        id: '',
        title: '',
        body: ''
      }
    })
  }

  const errorHandler = () => {
    setError(null)
  }

  const showForm = (e) => {
    // console.log(e.currentTarget);
    setOpenForm((oldOpenForm) => {
      return !oldOpenForm
    })
  }

  // To make controlled component, add 'value' to input field and equal it to state

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <div className='add-details-container'>
        {openForm && <div className='form'>
          {/* <div><h2>Add a user</h2></div> */}
          <form onSubmit={captureInfo}>
            {/* <label htmlFor='name'>Name</label> */}
            <input id="title" /*ref={nameInputRef}*/ /*rows="5" cols="40"*/ placeholder="Title here" value={userInfo.title} type="text" onChange={addTitle}></input>
            {/* <label htmlFor='age'>Age (Years)</label> */}
            <textarea id="body" /*ref={ageInputRef}*/ placeholder="Note here" value={userInfo.body} type="textarea" onChange={addBody}></textarea>
            <Button type="submit">Add User</Button>
          </form>
        </div>}
        <div onClick={showForm}>{!openForm && '+ Note'}</div>
      </div>
    </Wrapper>
  )
}

export default Form
