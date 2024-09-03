
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = (props) => {
  return (
     <MeetupDetail
      image="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg" 
      title="1 meetup" 
      address="address 1" 
      description="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal." />
  )
}

export async function getStaticPaths() {
  return {
   
    paths:[
      {
        params:{
          meetupId :"m1",
        },
        params:{
          meetupId :"m2",
        }
      }
    ],
    fallback:false
  }
}
export async function getStaticProps(context) {
      
  const meetupId = context.params.meetupId;
   console.log(meetupId)

  return {
    props:{
      meetUpData:{
        id:meetupId,
        image:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg" ,
        title:"1 meetup",
         address:"address 1" ,
         description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal." 
      }
    }
  }
}

export default MeetupDetails