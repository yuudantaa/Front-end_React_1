import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive } from 'react-icons/fi';
import { MdUnarchive } from 'react-icons/md';

function ArchiveButton({ id, onArchive, onUnarchive, label }) {
    const handleClick = () => {
        if (onArchive) {
            onArchive(id);
        } else if (onUnarchive) {
            onUnarchive(id);
        }
    };

    return (
        <button className='note-item__archive' onClick={handleClick} title={label}>
            {onArchive ? <FiArchive /> : <MdUnarchive />}
        </button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
    label: PropTypes.string.isRequired,
};

export default ArchiveButton;