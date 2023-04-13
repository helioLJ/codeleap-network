import { useDispatch } from 'react-redux';
import { Button } from './Button';
import './DeleteModal.css'

import { Heading } from "./Heading";
import { setDeletingId } from '../redux/deleting/DeletingSlice';
import { deletePost } from '../redux/post/PostSlice';
import { useAppSelector } from '../Hooks';

export function DeleteModal() {
  const deletingId = useAppSelector(state => state.deleting.deletingId)
  const dispatch = useDispatch()

  return (
    <div className="modal-container">
      <div className="delete-modal">
        <Heading color="black" title="Are you sure you want to delete this item?" />
        <div className="delete-modal-buttons">
          <Button
            theme="white"
            type='button'
            title='Cancel'
            onClick={() => dispatch(setDeletingId(""))}
          />
          <Button
            theme="red"
            type='button'
            title='Delete'
            onClick={() => {
              dispatch(deletePost(deletingId))
              dispatch(setDeletingId(""))
            }}
          />
        </div>
      </div>
    </div>
  )
}