import React from 'react'

const users = [
    {
        name: "Kabe Taiijin",
        image: "https://avatars.githubusercontent.com/u/113106676?v=4",
        course: "BS Information Technology",
        year: "3rd Year"
    },
    {
        name: "Generose Morales",
        image: "https://avatars.githubusercontent.com/u/171112152?v=4",
        course: "BS Computer Science",
        year: "3rd Year"
    },

]

const UserProfile = () => {

  return (
    <div>
      {users.map(user => (
        <div key={user.name}>
            <img src={user.image} alt="" width={200} height={200} />
            <h1>{user.name}</h1>
            <h2>{user.course}</h2>
            <p>{user.year}</p>
        </div>
      ))}
    </div>
  )
}

export default UserProfile
