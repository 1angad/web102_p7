import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client.js";
import Card from "./Card.jsx"

const Gallery = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const {data} = await supabase
            .from('crewmates')
            .select()

            // set state of posts
            setPosts(data);
        }
        fetchPosts();
      }
      ,[]);
    
      return (
        <>
          <h1>Your Crewmate Gallery!</h1>
          {
            posts && posts.length > 0 ? (
              <div className="crewmate-container">
                {posts.map((post, index) => 
                  <Card idfr = {post.idfr} name={post.name} speed={post.speed} color={post.color} key={index} />
                )}
              </div>
            ) : (
              <h2>You have no crewmates yet!</h2>
            )
          }
        </>
      );
}

export default Gallery;