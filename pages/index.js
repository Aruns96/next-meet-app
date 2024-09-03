
import MeetupList from "../components/meetups/MeetupList"


const DUMMY_MEETUPS = [
  {id:"m1",title:"1 meetup",image:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg",address:"address 1"
    ,description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
  },
  {
    id:"m2",title:"2 meetup",image:"https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg",address:"address 2"
    ,description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
  }
]
const HomePage = (props) => {
  
  
  return (
   
   <MeetupList meetups={props.meetups}/>
  
  )
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props:{
//       meetups : DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  return {
    props:{
      meetups : DUMMY_MEETUPS
    },
    revalidate:10
  }
}

export default HomePage