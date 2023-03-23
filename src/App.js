import React, { useState } from 'react';
import UserBox from './UserBox';
import UserCard from './UserCard'
import SearchBar from './SearchBar'
import styles from './User.module.css'
import Header from './Header'

function App() {

  const [userInfo, setUserInfo] = useState(
    [
      {name: 'Jeff', age: 32},
      {name: 'Hank', age: 16},
      {name: 'Mahatma', age: 54},
      {name: 'Mahandas', age: 41}
    ]
  )

  const [query, setQuery] = useState('')

  // filtered users list
  const filteredUsers = userInfo.filter((item) => {
    return item['name'].toLowerCase().indexOf(query.toLowerCase()) !== -1
  })


  const finalUserInfo = (info) => {
    setUserInfo((oldUserInfo) => {
      return [...oldUserInfo, info]
    })
  }

  const removePerson = (user) => {
    // console.log(user);
    // console.log(filteredUsers);
    setUserInfo((oldFilteredUsers) => {
      const updatedUsers = oldFilteredUsers.filter((person) => {
        return person.age !== user.age && person.name !== user.name
      })
      return updatedUsers
    })
  }

  // Need to replace here and not ADD the information

  const onModification = (mod) => {
    console.log(mod);
    setUserInfo((oldInfo) => {
      return [...oldInfo, { name: mod.title, age: mod.body}]
    })
  }

  return (
    <div className='main'>
      <Header />
      <div className='search-add-container'>
        <SearchBar query={query} setQuery={setQuery} />
        <UserBox finalUserInfo={finalUserInfo}/>
      </div>
      <div className={styles['card-container']}>
        <UserCard userData={userInfo} filteredUsers={filteredUsers} onModification={onModification} onRemovePerson={removePerson}/>
      </div>
    </div>
  );
}

export default App;
