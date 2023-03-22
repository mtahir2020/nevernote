import React, { useState } from "react";
import {createPortal} from 'react-dom'
import classes from './ErrorModal.module.css'
import Button from "../Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {/* <button>Okay</button> */}
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  )
}

const ErrorModal = (props) => {


  return (
    <React.Fragment>
      {/* {createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))} */}
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {/* <button>Okay</button> */}
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
      )
    </React.Fragment>
  )
}

export default ErrorModal
