import React from "react";
import PostService from "../API/PostService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";

const Post = ()=>{
    const link = useParams();
    const [post, setPost] = useState('');
    const [fetchPost, isPostLoading, postError] = useFetching(async()=>{
        const response= await PostService.getPost(link.id);
        setPost(response.data)
                  
      })  

    const [comments, setComments] = useState([]);
    const [fetchСomments, isCommentsLoading, commentsError] = useFetching(async()=>{
          const response= await PostService.getComments(link.id);
          console.log(response.data);
          setComments(response.data);
                    
        })  

    useEffect(()=>{
        fetchPost();
        fetchСomments();
      },[])

 

    return(
        <div>
           
            <h1>{link.id}. {post.title}</h1>
            <div>
            {post.body}
            </div>
            <h1>Комментарии</h1>
            <div>
            {comments.map(com =>
                    <p key={com.id}
                    
                    >{com.id}. {com.body}</p>)}
            </div>
        </div>
    )
}

export default Post;