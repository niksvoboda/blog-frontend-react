import React, { useState, useMemo, useEffect, useRef } from "react";
import '../styles/app.css';
import PostList from "../components/PostList.jsx";
import MyButton from "../components/UI/Button/MyButton.jsx";
import PostForm from "../components/PostForms.jsx";
import PostFilter from "../components/PostFilter.jsx";
import MyModal from "../components/UI/modal/MyModal.jsx";
import { usePosts } from "../hooks/usePosts.jsx";
import PostService from "../API/PostService.jsx";
import Loader from "../components/UI/Loader/Loader.jsx";
import { useFetching } from "../hooks/useFetching.jsx";
import getPageCount from '../utils/pages.jsx';
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/Select/MySelect";

function Posts() {

  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const lastElement = useRef();
 
  const [fetchPost, isPostLoading, postError] = useFetching(async()=>{
    const response = await PostService.getAll(limit, page);
    
    setTotalCount(response.headers['x-total-count']);
    setPosts(response.data);
    setTotalPage(getPageCount(response.headers['x-total-count'], limit));
      
  })  

  useEffect(()=>{
    fetchPost();
  },[page, limit])


  useObserver(lastElement, page<totalPage, isPostLoading, ()=>{
    setPage(page+1);
  })



  const createPagesArray = useMemo(()=>{
    let tempPagesArray = []
    for(let i=0 ; i<totalPage ; i++  ){
      tempPagesArray.push(i)
      }
    
      setPagesArray(tempPagesArray)
  }, [totalPage])

  //console.log(pagesArray);
 
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) =>{
    setPosts([...posts, {title: newPost.title, body: newPost.body}]);
    setModal(false);
  }

  const deletPost = (postId) =>{
    setPosts(posts.filter(p => posts.indexOf(p) != postId));
  }

  return (
    <div className="App">
        <MyButton style={{marginTop: '30px'}}
        onClick={e=>setModal(true)}>
          Создать пост в окне
        </MyButton>
    
        <MyModal 
        visible={modal}
        setVisible = {setModal}
        >
        <PostForm create={createPost}/> 
        </MyModal>
        <PostForm create={createPost}/> 
    
    <hr style={{margin:'15px 0',border: '1px solid teal',  width:'100%', boxSizing: 'border-box' }}/>
    <div className="page__wrapper">
      {pagesArray.map(p =>
        <span 
        onClick={()=> setPage(p+1)}
        key={p} 
        className={page === p+1? 'page page__current' : 'page'}>{p+1} </span>
      )}
    </div>
    
        <PostFilter
          filter ={filter}
          setFilter={setFilter}    
        />
        <MySelect
        value ={limit}
        onChange ={value => setLimit(value)}
        defaultValue ="Элементов на странице"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 15, name: '15'},
          {value: -1, name: 'Показать всё'},
        ]}/>
    {isPostLoading && <div style={{display: 'flex', justifyContent:'center'}}><Loader/></div>
    }
    <PostList remove={deletPost} posts={sortedAndSearchPost} title="Spisok postov!"/> 
    

    {postError
    ?<div style={{display: 'flex', justifyContent:'center'}}><h1>{postError}</h1></div>
    :<div style={{display: 'flex', justifyContent:'center'}}></div>
    }
     <div ref={lastElement} style={{height:'20px', background: 'red' }}></div>
    </div>
  ); 
}

export default Posts;
