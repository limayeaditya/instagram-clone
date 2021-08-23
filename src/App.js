import React,{ useState, useEffect } from 'react';
import './App.css';
import Post  from './Post';
import {db} from './firebase'
function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()})))
    })
  },[])

  return (
    <div className="app">
      <div class="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          ></img>
          
      </div>
      {/* Header */}
      <h2>Aditya here</h2>


      {
        posts.map(({id,post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>

        ))
      }
      
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
