import React from 'react';

const Comments = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h2>Comments By : {name}</h2>
            <h2>Comments By : {email}</h2>
        </div>
    );
};

export default Comments;