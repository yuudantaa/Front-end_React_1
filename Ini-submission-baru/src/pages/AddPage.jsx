import React from 'react';
import { addNote } from '../utils/data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate();
    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }

    return (
        <section>
            <h2>Tambah catatan</h2>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;