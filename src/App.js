import React, { useMemo, useState, useEffect, Fragment } from 'react';
import styles from './User.module.css'
import TitlesList from './TitlesList';
import Header from './Header'
import MainNote from './MainNote';
import EmptyNotes from './EmptyNotes'
import ErrorModal from './UI/ErrorModal'
import { format } from 'date-fns'


function App() {

  const [userInfo, setUserInfo] = useState(
    () => JSON.parse(localStorage.getItem('notes'))
  )

  const [query, setQuery] = useState('')
  const [selectedNoteId, setSelectedNoteId] = useState()
  const [readyToDelete, setReadyToDelete] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(userInfo))
  }, [userInfo])

  // filtered users list
  const filteredUsers = userInfo.filter((item) => {
    return item['title'].toLowerCase().indexOf(query.toLowerCase()) !== -1
  })

  const formattedDate = format(new Date(Date.now()), 'dd/MM/yy, kk:mm (b)')

  const showDeleteModal = () => {
    // console.log(hello);
    setReadyToDelete(oldState => !oldState)
  }


  const longerTitle = bigString => bigString.split('\n')[0];

  // When adding a new item to top of the list, the id will break if if it's trying to take the last item from the array
  const finalUserInfo = (info) => {
    setUserInfo((oldUserInfo) => {
      return [
        {
          id: userInfo.length > 0 ? Math.max(...oldUserInfo.map(item => item.id)) + 1 : 1,
          timestamp: formattedDate,
          title: longerTitle(info.body),
          body: info.body
        },
        ...oldUserInfo
      ]
    })
  }

  const removePerson = (user) => {
    // console.log(user);
    setUserInfo((oldFilteredUsers) => {
      const updatedUsers = oldFilteredUsers.filter((person) => {
        return person.id !== user.id
      })
      return updatedUsers
    })
    setSelectedNoteId(undefined)
  }



  const onModification = (mod, newInput) => {
    // Updating the notes list so a freshly modified note goes to the top of the list
    // If the id doesn't match, it simply gets pushed to the end part of the array
    setUserInfo((oldNotes) => {
      const updatedArray = []
      for (let i = 0; i < oldNotes.length ; i++) {
        const oldNote = oldNotes[i]
        if (oldNote.id === mod.id) {
          updatedArray.unshift({...mod, timestamp: formattedDate, title: longerTitle(newInput), body: newInput})
        } else {
          updatedArray.push(oldNote)
        }
      }
      return updatedArray
    })
  }

  const noteClicked = (note) => {
    // console.log(noteClicked);
    setSelectedNoteId(note.id)
  }

  const resetMemo = () => {
    setSelectedNoteId()
  }


  // when selectedNoteId changes, it matches that id with the right note from userInfo
// to find the object with the note id
  const noteToDisplay = useMemo(() => {
    return userInfo.find((oneNote) => {
      return selectedNoteId === oneNote.id
    })
  }, [selectedNoteId, userInfo])


  return (
    <Fragment >
      {
        readyToDelete ? <ErrorModal showDeleteModal={showDeleteModal} noteToDisplay={noteToDisplay} selectedNoteId={selectedNoteId} removePerson={removePerson} title={userInfo.title} /> :
        <div className='main'>
          <Header query={query} setQuery={setQuery}/>
          <div className={styles['card-container']}>
            { userInfo.length < 1 ? <EmptyNotes /> :
            <TitlesList showDeleteModal={showDeleteModal} setQuery={setQuery} resetMemo={resetMemo} selectedNoteId={selectedNoteId} noteClicked={noteClicked} userData={userInfo} filteredUsers={filteredUsers} onModification={onModification} onRemovePerson={removePerson}/>
            }
            <MainNote showDeleteModal={showDeleteModal} resetMemo={resetMemo} selectedNote={noteToDisplay} userData={userInfo} filteredUsers={filteredUsers} onModification={onModification} onRemovePerson={removePerson} finalUserInfo={finalUserInfo} />
          </div>
        </div>
      }
    </Fragment>
  );
}

export default App;
