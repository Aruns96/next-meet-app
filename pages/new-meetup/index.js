import React from 'react'
import NewMeetupForm from  "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetupHandler = (newMeetupData)=>{
           
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage