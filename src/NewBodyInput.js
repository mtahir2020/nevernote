import React from 'react'
import styles from './User.module.css'

const NewBodyInput = (props) => {

  // may have to remove this ID
  const [updatedNotes, setUpdatedNotes] = React.useState({
    id:'', title: '', body: ''
  })


  // console.log(updatedNotes);

  const onModify = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    // const input = e.currentTarget.value;
    setUpdatedNotes((oldNotes) => {
      return {
        ...oldNotes,
        id: props.id,
        [e.target.name]: e.target.value
      }
    })
  }

  const addModdedData = (e) => {
    e.preventDefault()

    props.onModData(updatedNotes)
  }


  return (
    <div className={styles['body-modify-input']}>
      <form onSubmit={addModdedData}>
        <label>Update title</label>
        <input type="text" name="title" onChange={onModify}></input>
        <label>Update content</label>
        <input type="number" name="body" onChange={onModify}></input>
        <div>
          <button type='submit'>Update Note</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default NewBodyInput
