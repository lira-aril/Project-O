import React from "react";
import "./Posts.css";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return (
            <div className="posts__loading">
                <h2>Загрузка...</h2>
            </div>
        );
    }

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map(post => (
                    <li key={post.id} className="post__item">
                        <h3 className="post__title">{post.title}</h3>
                        <div className="post__text">{post.body}</div>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Posts;
