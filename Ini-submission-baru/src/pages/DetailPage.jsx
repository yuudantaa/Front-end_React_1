import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/data';
import DeleteButton from '../components/DeleteButton';
import ArchiveButton from '../components/ArchiveButton';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const note = getNote(id);

    if (!note) {
        return (
            <section>
                <h2>Catatan tidak ditemukan</h2>
                <Link to="/">Kembali ke daftar</Link>
            </section>
        );
    }

    const onDelete = () => {
        deleteNote(id);
        navigate('/');
    };

    const onArchive = () => {
        archiveNote(id);
        navigate('/');
    };

    const onUnarchive = () => {
        unarchiveNote(id);
        navigate('/');
    };

    return (
        <section className="detail-page">
            <h2 className="detail-page__title">{note.title}</h2>
            <p className="detail-page__createdAt">{new Date(note.createdAt).toLocaleString()}</p>
            <p className="detail-page__body">{note.body}</p>
            <div className="detail-page__actions">
                {note.archived ? (
                    <ArchiveButton id={id} onUnarchive={onUnarchive} label="Batal Arsip" />
                ) : (
                    <ArchiveButton id={id} onArchive={onArchive} label="Arsip" />
                )}
                <DeleteButton id={id} onDelete={onDelete} />
                <Link to="/" className="detail-page__back">Kembali</Link>
            </div>
        </section>
    );
}

export default DetailPage;