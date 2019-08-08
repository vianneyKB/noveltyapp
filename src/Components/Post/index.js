import React, { Component } from 'react';
import "./Post.css";

class Post extends React.Component
{
    render()
    {
        return <article className="Post" ref= "Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="" alt="user"/>
                    </div>
                    <div className = "Post-user-nickname">
                        <span>User</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image=bg">
                    <img alt="Icon Living" src=""/>
                </div>
            </div>
            <div className="Post-caption">
                <strong>User</strong> I am a User!
            </div>
        </article>
    }
}
export default Post;