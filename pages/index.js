
import MeetupList from "../components/meetups/MeetupList"
import {useEffect,useState} from "react"

const DUMMY_MEETUPS = [
  {id:1,title:"1 meetup",image:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg",address:"address 1"
    ,description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
  },
  {
    id:2,title:"2 meetup",image:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg",address:"address 2"
    ,description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
  }
]
const HomePage = () => {
  const[loadedMeetups,setLoadMeetups] =  useState([])
  useEffect(() => {
     
    setLoadMeetups(DUMMY_MEETUPS)
    
  }, [])

  
  return (
   
   <MeetupList meetups={loadedMeetups}/>
  
  )
}

export default HomePage