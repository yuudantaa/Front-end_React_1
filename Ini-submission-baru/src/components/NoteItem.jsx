import React from 'react';
import { Link } from 'react-router-dom';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';   
import PropTypes from 'prop-types';

function NoteItem({ title, body, archived, createdAt, id, onDelete, onArchive, onUnarchive }) {

    const handleLinkClick = (e) => {
 
        if (e.target.closest('button')) {
            e.preventDefault();
        }
    };

    return (
        <div className="note-item">
            <Link to={`/notes/${id}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }} onClick={handleLinkClick}>
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </Link>
            <div style={{ display: 'flex', gap: '8px' }}>
                {archived ? (
                    <ArchiveButton id={id} onUnarchive={onUnarchive} label="Batal Arsip" />
                ) : (
                    <ArchiveButton id={id} onArchive={onArchive} label="Arsip" />
                )}
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,          
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
};

export default NoteItem;