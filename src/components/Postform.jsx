import React, { useState } from "react";

function Postform ({create}) {

    const [post, setPost] = useState({tittle: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {...post, id: Date.now()
        }
        create(newPost)
        setPost({tittle: '', body: '' });
      }

    return (
        <form className="flex justify-center flex-col items-center
        gap-3 py-10">
        <input
          className="h-12 widd shadow-sm borderb" 
          value={post.tittle}
          onChange={e => setPost({...post, tittle: e.target.value})}
          type="text"
          placeholder=" Твое имя"
        />
          <input 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          className="h-12 widd borderb" 
          placeholder=" Отзыв"/>
          <button onClick={addNewPost}
          className="h-12 w-36 rounded-sm bg-white borderb
          shadow-black shadow-sm hover:bg-[#ebe4e4]"> LEAVE A POST </button>
        </form>
    )
}

export default Postform;