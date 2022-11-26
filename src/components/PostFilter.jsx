import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) =>{
    return(
        <div>
               <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
                type="text"
                />
                <hr style={{margin:'15px 0',border: '1px solid teal',  width:'100%'}}/>
                <MySelect 
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
                options={[
                {type: 'title', name: 'По названию'},
                {type: 'body', name: 'По описанию'}
                ]} 
                
                defaultValue='Сортировка'
                />
        </div>
    )
}

export default PostFilter;