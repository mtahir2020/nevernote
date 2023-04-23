import React from "react";
import classes from './ErrorModal.module.css'
import styles from '../Button.module.css'
// import Button from "../Button";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ErrorModal = ( { showDeleteModal, noteToDisplay, removePerson }) => {

  const deleteNote = () => {
    const noteToDelete = noteToDisplay;
    // console.log(noteToDelete);
    showDeleteModal()
    removePerson(noteToDelete)
  }

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <FontAwesomeIcon icon={faTrash} size="2xl" />
          <h5>DELETE NOTE</h5>
        </header>
        <div className={classes.content}>
          <p style={{fontSize: '2rem', fontWeight: 300}}>Are you sure you want to delete <b>'{noteToDisplay.title}'</b> ?</p>
        </div>
        <footer className={classes.actions}>
          <button className={styles['button-cancel']} onClick={() => showDeleteModal()}>Cancel</button>
          <button style={{ marginLeft: '10px' }} onClick={deleteNote}>Delete</button>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default ErrorModal
