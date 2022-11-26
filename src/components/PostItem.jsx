import React from "react";
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props)=>{
  const navigate = useNavigate();
   // console.log(props);
    return(
        <div className="post">
            <div className="Post__content">
              <strong>{props.id}. {props.post.title}</strong>
              <div>
              {props.post.body}
              </div>
            </div>
            <div className="Post__button">
              <MyButton onClick={() =>navigate('/posts/'+props.id)}>Открыть</MyButton>
              <MyButton onClick={() => props.remove(props.idr)}>Удалить</MyButton>
            </div>
        </div>     
    )
}

export default PostItem;