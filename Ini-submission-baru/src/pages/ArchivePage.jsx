import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/data';

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState({ notes: getArchivedNotes() });
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setState({ notes: getArchivedNotes() });
    }

    render() {
        const { notes } = this.state;
        return (
            <section>
                <h2>Daftar Arsip</h2>
                {notes.length === 0 ? (
                    <p className="note-list__empty">Arsip kosong</p>
                ) : (
                    <NoteList
                        notes={notes}
                        onDelete={this.onDeleteHandler}
                        onUnarchive={this.onUnarchiveHandler}
                    />
                )}
            </section>
        );
    }
}

export default ArchivePage;
