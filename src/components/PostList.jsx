import React from "react";
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove})=>{
    
    
        if(!posts.length){
        return(
            <div style={{textAlign: 'center'}}><h1>Посты не найдены</h1></div>
        )
        }   

        return(
            <div className="PostList">
                   <h1 style={{textAlign:'center'}}>{title}: {posts.length} штук</h1>
                <TransitionGroup>
                    {posts.map(post=>
                    <CSSTransition
                    classNames ="post"
                    timeout={1500}
                    key={posts.indexOf(post)} 
                    >
                        <PostItem  
                        post={post} 
                        remove={remove} 
                        idr={posts.indexOf(post)}
                        id={post.id}
                        />
                    </CSSTransition>
                    
                    )}
                </TransitionGroup>
                   
            </div>
        )

        
        
}


export default PostList;