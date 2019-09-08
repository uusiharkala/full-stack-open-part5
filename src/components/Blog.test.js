import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('By default, only title and author should be visible', async () => {
  const user = {
    username: 'hellas',
    name: 'Arto Hellas'
  }

  const blog = {
    title: 'Testattava blogi',
    author: 'Arto Hellas',
    url: 'www.blog.fi',
    likes: 3,
    user: user
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Testattava blogi'
  )

  expect(component.container).toHaveTextContent(
    'Arto Hellas'
  )

  expect(component.container).not.toHaveTextContent(
    'www.blog.fi'
  )

  expect(component.container).not.toHaveTextContent(
    3
  )
})

test('By clicking title also url and likes are shown', async () => {
  const user = {
    username: 'hellas',
    name: 'Arto Hellas'
  }

  const blog = {
    title: 'Testattava blogi',
    author: 'Arto Hellas',
    url: 'www.blog.fi',
    likes: 3,
    user: user
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} onClick={mockHandler}/>
  )

  const button = component.container.querySelector('.clickableTitle')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    'www.blog.fi'
  )

  expect(component.container).toHaveTextContent(
    3
  )
})