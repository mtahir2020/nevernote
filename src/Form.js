import React, { useRef, useState } from 'react'
import './UserBox.css'
import ErrorModal from './UI/ErrorModal'
import Button from './Button'
import Wrapper from './Helpers/Wrapper'

const Form = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [userInfo, setUserInfo] = useState({
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
    console.log(nameInputRef.current.value);

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

    props.userInfo({
      name: userInfo.name,
      age: userInfo.age
    })
    setUserInfo(() => {
      return {
        name: '',
        age: ''
      }
    })
  }

  const errorHandler = () => {
    setError(null)
  }

  // To make controlled component, add 'value' to input field and equal it to state

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <form onSubmit={captureInfo}>
      <div><h2>Add a user</h2></div>
        <label htmlFor='name'>Name</label>
        <input id="name" ref={nameInputRef} value={userInfo.name} type="text" className='input' onChange={addName}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id="age" ref={ageInputRef} value={userInfo.age} type="number" className='input' onChange={addAge}></input>
        {/* <button type="submit">Add User</button> */}
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  )
}

export default Form
