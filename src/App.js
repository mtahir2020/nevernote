import React, { useState } from 'react';
import UserBox from './UserBox';
import UserCard from './UserCard'
import SearchBar from './SearchBar'
import styles from './User.module.css'
import Header from './Header'

function App() {

  const [userInfo, setUserInfo] = useState(
    [
      {id: 1, name: 'Jeff', age: 32},
      {id: 2, name: 'Hank', age: 16},
      {id: 3, name: 'Mahatma', age: 54},
      {id: 4, name: 'Mahandas', age: 41}
    ]
  )

  const [query, setQuery] = useState('')

  // filtered users list
  const filteredUsers = userInfo.filter((item) => {
    return item['name'].toLowerCase().indexOf(query.toLowerCase()) !== -1
  })


  const finalUserInfo = (info) => {
    // const usersLength = userInfo.length;
    console.log(userInfo[userInfo.length - 1].id + 1);
    setUserInfo((oldUserInfo) => {
      return [...oldUserInfo,
              { id: userInfo[userInfo.length - 1].id + 1,
                name: info.name,
                age: info.age
              }
            ]
    })
  }
  console.log(userInfo);

  const removePerson = (user) => {
    // why is user that is passed up rendering with a completely different ID?
    // console.log(user);
    // console.log(filteredUsers);
    setUserInfo((oldFilteredUsers) => {
      const updatedUsers = oldFilteredUsers.filter((person) => {
        return person.id !== user.id
        // return person.age !== user.age && person.name !== user.name
      })
      return updatedUsers
    })
  }

  // Need to replace here and not ADD the information ???????

  const onModification = (mod) => {
    // console.log(mod);

    setUserInfo((oldUserInfo) => {
      const updatedInfo = oldUserInfo.map((oldItem) => {
        return oldItem.id === mod.id ? {...oldItem, name: mod.title, age: mod.body} : oldItem
      })
      return updatedInfo
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
