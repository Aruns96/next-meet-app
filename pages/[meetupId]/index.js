import { MongoClient,ObjectId } from "mongodb"
import MeetupDetail from "../../components/meetups/MeetupDetail"
import Head from "next/head"
const MeetupDetails = (props) => {
  return (
    <>
    <Head>
      <title>{props.meetUpData.title}</title>
      <meta name="description" content={props.meetUpData.description} />
    </Head>
     <MeetupDetail
      image={props.meetUpData.image} 
      title={props.meetUpData.title}
      address={props.meetUpData.address}
      description={props.meetUpData.description} />
      </>
  )
}

export async function getStaticPaths() {

  const client = await MongoClient.connect("mongodb+srv://arun509577:wsnoxAMV45YyMeWQ@cluster0.uzzlxdg.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster")
  const db = client.db()
  const meetupCollection =  db.collection('meetups');
  const meetups = await meetupCollection.find({},{_id:1}).toArray();
  client.close()

  return {
   
    paths:meetups.map(m=>({
      params:{
        meetupId:m._id.toString()
      }
    }))
    ,
    fallback:false
  }
}
export async function getStaticProps(context) {
      
  const meetupId = context.params.meetupId;
   console.log(meetupId)
   const client = await MongoClient.connect("mongodb+srv://arun509577:wsnoxAMV45YyMeWQ@cluster0.uzzlxdg.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster")
  const db = client.db()
  const meetupCollection =  db.collection('meetups');
  const selectedMeetup = await meetupCollection.findOne({_id:new ObjectId(meetupId)})

  return {
    props:{
      meetUpData:{
        id:selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        image:selectedMeetup.image,
        address:selectedMeetup.address,
        description:selectedMeetup.description
    }
  }
  }
}

export default MeetupDetails