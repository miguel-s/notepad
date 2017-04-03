import React from 'react';
import { findNote, checkActive } from './utils';

// Header
export const Header = (props) => {
  return (
    <div className="header">
      <span className="add-note" onClick={props.handleAddNote}><a href="#">+</a></span>
      <span className="header-text">My awesome notepad</span>
    </div>
  );
};

Header.propTypes = {
  handleAddNote: React.PropTypes.func.isRequired,
};

// Content
export const Content = (props) => {
  return (
    <div className="content">
      <NoteList handleClickNote={props.handleClickNote} {...props} />
      <NoteBody {...findNote(props.notes, props.selectedNoteId)} />
    </div>
  );
};

Content.propTypes = {
  notes: React.PropTypes.array.isRequired,
  selectedNoteId: React.PropTypes.number,
  handleClickNote: React.PropTypes.func.isRequired,
};

// NoteItem
export const NoteItem = (props) => {
  return (
    <li className={["note-item", checkActive(props.id, props.selectedNoteId)].concat(' ')}
        onClick={() => props.handleClickNote(props.id)}>
      <a href="#">{props.body.slice(0, 15)}</a>
    </li>
  );
};

NoteItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  body: React.PropTypes.string.isRequired,
  selectedNoteId: React.PropTypes.number,
  handleClickNote: React.PropTypes.func.isRequired,
};

// NoteList
export const NoteList = (props) => {
  return (
    <div className="note-list">
      <ul>
        {props.notes.map((todo) => (
          <NoteItem key={todo.id}
                    selectedNoteId={props.selectedNoteId}
                    handleClickNote={props.handleClickNote}
                    {...todo} />
        ))}
      </ul>
    </div>
  );
};

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  selectedNoteId: React.PropTypes.number,
  handleClickNote: React.PropTypes.func.isRequired,
};

// NoteBody
export const NoteBody = (props) => {
  return (
    <div className="note-body">
      <textarea className="note-body-text" value={props.body}></textarea>
    </div>
  );
}

NoteBody.propTypes = {
  body: React.PropTypes.string,
};
