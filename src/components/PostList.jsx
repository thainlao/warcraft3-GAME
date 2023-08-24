import React from "react";
import Feedback from "./Freedback";

function PostList ({posts, title, remove}) {
    return (
        <div>
            <h1 className="flex justify-center text-3xl">
            {title}
            </h1>
            {posts.map((post, index) => <div><Feedback remove={remove}
            number={index + 1}
            post={post}
            key={post.id}/></div>)}
        </div>
    )
}

export default PostList;