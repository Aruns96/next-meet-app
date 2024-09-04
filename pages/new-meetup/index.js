import React from 'react'
import Head from 'next/head'
import NewMeetupForm from  "../../components/meetups/NewMeetupForm"
import { useRouter } from 'next/router'

const NewMeetupPage = () => {
    const router = useRouter()
    const addMeetupHandler = async(newMeetupData)=>{
          console.log(newMeetupData)
           const response = await fetch("/api/new-meetup",{
            method:'POST',
            body:JSON.stringify(newMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
           })
           const data = await response.json()
           console.log(data)
           router.push("/")
    }
  return (
    <>
    <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="add new meetups" />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage