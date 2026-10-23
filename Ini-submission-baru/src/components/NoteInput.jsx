import React from 'react';
import PropTypes from 'prop-types';
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      archived: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

    onArchivedChangeEventHandler(event) {
      this.setState(() => {
          return {
              archived: event.target.value,
          }
      });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
   return (
       <form className='note-input' onSubmit={this.onSubmitEventHandler}>
           <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
           <input type="text" placeholder="Isi" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
   )
 }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
