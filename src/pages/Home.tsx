import './Home.css'

import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Input } from '../components/Input'
import { Post } from '../components/Post'
import { Textarea } from '../components/Textarea'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '../Hooks'

import { addNewPost } from '../redux/post/PostSlice'
import { setTitleValue } from '../redux/title/TitleSlice'
import { setContentValue } from '../redux/content/ContentSlice'

import { FormEvent, useEffect } from 'react'
import { fetchInitialData } from '../actions/dataExample'
import { SignOut } from 'phosphor-react'
import { toggleIsSignedValue } from '../redux/user/UserSlice'

export function Home() {
  const postsList = useAppSelector((state) => state.post)
  const newTitle = useAppSelector((state) => state.title)
  const newContent = useAppSelector((state) => state.content)
  const user = useAppSelector((state) => state.user.value)
  const dispatch = useDispatch<any>()
  const date = new Date()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    dispatch(addNewPost({
      username: user,
      newTitle: newTitle.value,
      newContent: newContent.value,
      now: date.toString()
    }))

    dispatch(setTitleValue(""))
    dispatch(setContentValue(""))
  }

  // useEffect caso queria carregar os posts do back-end
  // useEffect(() => {
  //   dispatch(fetchInitialData());
  // }, []);

  return (
    <div className="container">
      <header>
        <Heading title="CodeLeap Network" color="white" />
        <button
          title='Sign Out'
          onClick={() => dispatch(toggleIsSignedValue())}
        >
          <SignOut size={32} color="#FFF" weight="bold" /> 
        </button>
      </header>

      <div className="content" >
        <form onSubmit={(event) => handleSubmit(event)}>
          <Heading
            title="What's on your mind?"
            color="black"
          />
          <Input
            label="Title"
            placeholder="Hello world"
            onChange={(event: any) => dispatch(setTitleValue(event.target.value))}
            value={newTitle.value}
          />
          <Textarea
            label="Content"
            placeholder="Content here"
            onChange={(event: any) => dispatch(setContentValue(event.target.value))}
            value={newContent.value}
          />
          <Button
            type='submit'
            theme='blue'
            title='Create'
            formBtn='yes'
          />
        </form>

        {
          postsList && postsList.map(post => (
            <Post
              id={post.id}
              username={post.username}
              created_datetime={post.created_datetime}
              title={post.title}
              content={post.content}
              key={post.id}
            />
          ))
        }

      </div>
    </div>
  )
}