
import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"


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
  const client = await MongoClient.connect("mongodb+srv://arun509577:wsnoxAMV45YyMeWQ@cluster0.uzzlxdg.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster")
  const db = client.db()

  const meetupCollection =  db.collection('meetups');
  const result = await meetupCollection.find().toArray()
  //console.log(result)
  client.close();
  return {
    props:{
      meetups : result.map(m=>({
        title:m.title,
        image:m.image,
        address:m.address,
        description:m.description,
        id:m._id.toString()
      }))
    },
    revalidate:1
  }
}

export default HomePage