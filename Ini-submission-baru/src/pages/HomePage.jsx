import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { deleteNote, getAllNotes, archiveNote, unarchiveNote } from '../utils/data';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => ({
            notes: getAllNotes(),
        }));
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.setState(() => ({
            notes: getAllNotes(),
        }));
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setState(() => ({
            notes: getAllNotes(),
        }));
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Catatan</h2>
                {filteredNotes.length === 0 ? (
                    <p className="note-list__empty">Tidak ada catatan</p>
                ) : (
                    <NoteList
                        notes={filteredNotes}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                        onUnarchive={this.onUnarchiveHandler}
                    />
                )}
            </section>
        )
    }
}

export default HomePageWrapper;