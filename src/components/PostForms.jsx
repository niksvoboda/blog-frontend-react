import React, {useState} from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) =>{
    
    const [post, setPost] = useState({title:'', body:''})


    const adNewPost =(e) =>{
        e.preventDefault();
     
        const newPost = {
        title: post.title,
        body: post.body};  

        create(newPost);
        
        setPost({title:'', body: ''});
        
       
        console.log(post.title);
        console.log(post.body);
      
    }


    return(
        <form>
        <MyInput 
        value = {post.title}
        onChange ={e =>setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста"
        />
      
        <MyInput 
        value ={post.body}
        onChange = {e=>setPost({...post, body:e.target.value})}
        type="text" 
        placeholder="Описание поста"
        />

        <MyButton onClick={adNewPost}>Создать пост</MyButton>

      </form>
    );
}

export default PostForm;