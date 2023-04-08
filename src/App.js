import React, { useMemo, useState, useEffect } from 'react';
// import UserBox from './UserBox';
import styles from './User.module.css'
import TitlesList from './TitlesList';
import Header from './Header'
import MainNote from './MainNote';

function App() {

  const [userInfo, setUserInfo] = useState(
    () => JSON.parse(localStorage.getItem('notes')) ||
    [
      {id: 4, title: 'Go to gym', body: 'do legs workout'},
      {id: 3, title: 'Holiday', body: 'withdraw holiday money'},
      {id: 2, title: 'Study React', body: 'do udemy course'},
      {id: 1, title: 'create portfolio', body: 'add all projects to portfolio'}
    ]
  )

  const [query, setQuery] = useState('')
  const [selectedNoteId, setSelectedNoteId] = useState()

  // useEffect?????
  // const reOrderList = () => {
  //   let currentNoteId = selectedNoteId
  //   // then listen to a click event (or useEffect) and..
  //   let newNoteId = selectedNoteId
  //   // userInfo set
  //   // dip into localStorage and replace each value individually

  // }

  console.log(userInfo);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(userInfo))
  }, [userInfo])

  // filtered users list
  const filteredUsers = userInfo.filter((item) => {
    return item['title'].toLowerCase().indexOf(query.toLowerCase()) !== -1
  })

  // When adding a new item to top of the list, the id will break if if it's trying to take the last item from the array
  const finalUserInfo = (info) => {
    setUserInfo((oldUserInfo) => {
      return [
        //...oldUserInfo,
        {
          id: userInfo.length > 0 ? userInfo[0].id + 1 : 1,
          title: info.body.split('\n')[0],
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
  }

  const onModification = (mod, newInput) => {

    // Updating the notes list so a freshly modified note goes to the top of the list
    // If the id doesn't match, it simply gets pushed to the end part of the array
    setUserInfo((oldNotes) => {
      const updatedArray = []
      for (let i = 0; i < oldNotes.length ; i++) {
        const oldNote = oldNotes[i]
        if (oldNote.id === mod.id) {
          updatedArray.unshift({...mod, title: newInput.split('\n')[0], body: newInput})
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

  const resetMemo = (toReset) => {
    // console.log(toReset);
    setSelectedNoteId(toReset.id)
  }


// to find the object with the note id
  const noteToDisplay = useMemo(() => {
    return userInfo.find((oneNote) => {
      return selectedNoteId === oneNote.id
    })
  }, [selectedNoteId, userInfo])

  return (
    <div className='main'>
      {/* {console.log(userInfo)} */}
      <Header query={query} setQuery={setQuery}/>
      {/* <div className='search-add-container'>
        <UserBox finalUserInfo={finalUserInfo}/>
      </div> */}
      <div className={styles['card-container']}>
        <TitlesList /*reOrder={reOrder}*/ noteClicked={noteClicked} userData={userInfo} filteredUsers={filteredUsers} onModification={onModification} onRemovePerson={removePerson}/>
        <MainNote resetMemo={resetMemo} selectedNote={noteToDisplay} userData={userInfo} filteredUsers={filteredUsers} onModification={onModification} onRemovePerson={removePerson} finalUserInfo={finalUserInfo} />
      </div>
    </div>
  );
}

export default App;

// when a note is open, have that selectednoteID
// make an 'oldnote' and 'newnoteid' variable
// when a new note is clicked, let it swap the id's
