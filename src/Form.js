import React, { useRef, useState } from 'react'
import './UserBox.css'
import ErrorModal from './UI/ErrorModal'
import Button from './Button'
import Wrapper from './Helpers/Wrapper'

const Form = (props) => {

  const [openForm, setOpenForm] = useState(false);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    age: ''
  })

  const [error, setError] = useState()

  const addName = (e) => {
    // e.preventDefault();
    setUserInfo((oldUserInfo) => {
      return {
        ...oldUserInfo,
        name: e.target.value
      }
    })
  }

  const addAge = (e) => {

    setUserInfo((oldUserInfo) => {
      return {
        ...oldUserInfo,
        age: e.target.value
      }
    })
  }


  const captureInfo = (e) => {
    e.preventDefault()
    // console.log(nameInputRef.current.value);

    if (userInfo.name.trim().length < 1 || userInfo.age.trim().length < 1) {
      // console.log('nothing entered');
      setError({
        title: "Nothing entered",
        message: "Please enter some information"
      })
      return
    }

    // adding '+' in front of variable turns it into number
    if (+userInfo.age < 0) {
      // console.log('age must be 0 or over');
      setError({
        title: "Age invalid",
        message: "Must be greater than 0"
      })
      return
    }

    let userInfoLength = props.userInfo.length

    props.userInfo({
      id: userInfoLength,
      name: userInfo.name,
      age: +userInfo.age
    })

    setUserInfo(() => {
      return {
        id: '',
        name: '',
        age: ''
      }
    })
  }

  const errorHandler = () => {
    setError(null)
  }

  const showForm = (e) => {
    console.log(e.currentTarget);
    setOpenForm((oldOpenForm) => {
      return !oldOpenForm
    })
  }

  // To make controlled component, add 'value' to input field and equal it to state

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <div className='add-details-container'>
        {openForm && <form onSubmit={captureInfo}>
          <div><h2>Add a user</h2></div>
          <label htmlFor='name'>Name</label>
          <input id="name" ref={nameInputRef} value={userInfo.name} type="text" onChange={addName}></input>
          <label htmlFor='age'>Age (Years)</label>
          <input id="age" ref={ageInputRef} value={userInfo.age} type="number" onChange={addAge}></input>
          <Button type="submit">Add User</Button>
        </form>}
        <div onClick={showForm}>{!openForm && /*<span className="material-symbols-outlined">note_add</span>}*/ 'Add note'}</div>
        {openForm && <div onClick={showForm}>Hide Note</div>}
      </div>
    </Wrapper>
  )
}

export default Form
