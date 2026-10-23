import React from 'react';
import PropTypes from 'prop-types';

function NoteItemBody({ title,createdAt, body ,archived }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{title}</h3>
    <p className="note-item__isi">@{body}</p>
    <h2 className="note-item__buat">@{createdAt}</h2>
   </div>
 );
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItemBody;