import { useDispatch } from 'react-redux';
import { Button } from './Button';
import './EditModal.css'

import { Heading } from "./Heading";
import { Input } from './Input';
import { Textarea } from './Textarea';
import { useAppSelector } from '../Hooks';
import { setEditingId, setNewContent, setNewTitle } from '../redux/editing/EditingSlice';
import { editPost } from '../redux/post/PostSlice';

export function EditModal() {
  const dispatch = useDispatch()
  const { editingId, newTitle, newContent } = useAppSelector(state => state.editing)

  return (
    <div className="modal-container">
      <div className="edit-modal">
        <Heading color="black" title="Edit item" />

        <Input
          placeholder='Hello world'
          label='Content here'
          value={newTitle}
          onChange={(e: { target: { value: any; }; }) => dispatch(setNewTitle(e.target.value))}
        />
        <Textarea
          placeholder='Hello world'
          label='Content here'
          value={newContent}
          onChange={(e: { target: { value: any; }; }) => dispatch(setNewContent(e.target.value))}
        />

        <div className="edit-modal-buttons">
          <Button
            theme="white"
            type='button'
            title='Cancel'
            onClick={() => {
              dispatch(setNewTitle(""))
              dispatch(setNewContent(""))
              dispatch(setEditingId(""))
            }}
          />
          <Button
            theme="green"
            type='button'
            title='Save'
            onClick={() => {
              dispatch(editPost({
                editingId,
                newTitle,
                newContent
              }))
              dispatch(setNewTitle(""))
              dispatch(setNewContent(""))
              dispatch(setEditingId(""))
            }}
          />
        </div>
      </div>
    </div>
  )
}