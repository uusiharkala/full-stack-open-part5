import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders title, author and likes', () => {
  const blog = {
    title: 'Testattava blogi',
    author: 'Arto Hellas',
    url: 'www.blog.fi',
    likes: 3
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Testattava blogi'
  )

  expect(component.container).toHaveTextContent(
    'Arto Hellas'
  )

  expect(component.container).toHaveTextContent(
    3
  )
})

test('clicking like button twice calls event handler twice', async () => {
  const blog = {
    title: 'Testattava blogi',
    author: 'Arto Hellas',
    url: 'www.blog.fi',
    likes: 3
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})