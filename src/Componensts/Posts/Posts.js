import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id, title, body} = props.post
    const history = useHistory();
    const showComments = id =>{
        const url =`posts/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>Title : {title}</h2>
            <h4>Body: {body}</h4>
            <h5>ID : {id}</h5>
            <button onClick={()=> {showComments(id)}}>Show Comments</button>
        </div>
    );
};

export default Posts;