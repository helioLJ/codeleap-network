import { Trash, NotePencil } from 'phosphor-react'

import './Post.css'

import { Heading } from './Heading'
import { DeleteModal } from './DeleteModal'

import { useAppSelector } from '../Hooks'
import { useDispatch } from 'react-redux'

import { setDeletingId } from '../redux/deleting/DeletingSlice'
import { EditModal } from './EditModal'
import { setEditingId, setNewContent, setNewTitle } from '../redux/editing/EditingSlice'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PostProps {
  title: string
  username: string
  created_datetime: string
  content: string
  id: string
}

export function Post(props: PostProps) {
  const deletingId = useAppSelector(state => state.deleting.deletingId)
  const editingId = useAppSelector(state => state.editing.editingId)
  const user = useAppSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const now = new Date()
  const postCreatedAt = new Date(props.created_datetime)
  const diffMs = now.getTime() - postCreatedAt.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const pastTime = diffMins

  return (
    <div className="post-container">
      <header>
        <Heading color='white' title={props.title} />
        {props.username === user && (
          <div className="buttons">
            <button onClick={() => dispatch(setDeletingId(props.id))}>
              <Trash size={22} color="#FFFFFF" weight="bold" />
            </button>

            <TransitionGroup>
              {deletingId !== "" && (
                <CSSTransition classNames="modal" timeout={300}>
                  <DeleteModal />
                </CSSTransition>
              )}
            </TransitionGroup>

            <button onClick={() => {
              dispatch(setNewTitle(props.title))
              dispatch(setNewContent(props.content))
              dispatch(setEditingId(props.id))
            }}
            >
              <NotePencil size={22} color="#FFFFFF" weight="bold" />
            </button>

            <TransitionGroup>
              {editingId !== "" && (
                <CSSTransition classNames="modal" timeout={300}>
                  <EditModal />
                </CSSTransition>
              )}
            </TransitionGroup>

          </div>
        )}
      </header>

      <div className="post-content">
        <div className="info">
          <span>@{props.username}</span>
          <small>
            {pastTime >= 60 ?
              `${diffHours} hours ago` :
              `${pastTime} minutes ago`}
          </small>
        </div>

        <p>
          {props.content}
        </p>
      </div>
    </div>
  )
}