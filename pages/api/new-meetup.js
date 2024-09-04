import {MongoClient } from 'mongodb'


const handler = async(req,res) =>{
       if(req.method === 'POST'){
          const data  = req.body;
          const {title,image,address,description} = data
        
         const client = await MongoClient.connect("mongodb+srv://arun509577:WbXAE_ba-8g8B5z@cluster0.uzzlxdg.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster")
          const db = client.db()

          const meetupCollection =  db.collection('meetups');
          const result = await meetupCollection.insertOne({title,image,address,description})
          console.log(result)
          client.close();
          res.status(201).json({message:"meetup inserted"})
       }
}

export default handler