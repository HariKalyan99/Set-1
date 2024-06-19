import {  useEffect, useState } from 'react';
import userData from '../userData.js';
import Widget from './components/Widget.jsx';
import UserTag from './components/UserTag.jsx';
import styles from './App.module.css'

function App() {

  const [getUserData, setUserData] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [noUser, setNoUser] = useState(false);
 
  
  useEffect(() => {
    let interval = setTimeout(() => {
      if(searchTerm){
        let newUserStream = getUserData.filter(x => x.name.first.toLowerCase().split(' ').join('') === searchTerm?.toLowerCase().split(' ').join('') || x.name.last.toLowerCase().split(' ').join('') === searchTerm?.toLowerCase().split(' ').join('') || x.name.first.toLowerCase().split(' ').join('') + x.name.last.toLowerCase().split(' ').join('') === searchTerm?.toLowerCase().split(' ').join(''));
        
  
        let filterUserByLocation = getUserData.filter(x =>  x.location.city?.toLowerCase().split(' ').join('') === searchTerm?.toLowerCase().split(' ').join('') || x.location.country?.toLowerCase().split(' ').join('') === searchTerm?.toLowerCase().split(' ').join(''))
        
        if(newUserStream?.length){
          setUserData(newUserStream)
          setNoUser(false)
        }else if(filterUserByLocation?.length){
          setUserData([...filterUserByLocation])
          setNoUser(false)
        }else{
          setNoUser(true)
        }
      }else{
        setUserData(userData);
        setNoUser(false)
      }

    }, 600);


    return () => {
      clearTimeout(interval)
    }
  }, [searchTerm])

  const searchUser = (value) => {
    setSearchTerm(value)
  }


  return (
    <section className={styles.app} >
      <Widget searchUser={searchUser}/>
      {noUser ? <div style={{textAlign: "center", padding: "10%"}}>
          <h1 >No users found for: <span style={{color: "#415ad2"}}>{searchTerm}</span></h1>
        </div> : 
        getUserData?.map((user) => <UserTag key={user.id} user={user}/>)}

    </section>
  )
}

export default App
