import React from 'react'
import { render,  waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )

    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )

    const loginForm = component.container.querySelector('.login')

    expect(loginForm).toBeDefined()

    const blogs = component.container.querySelectorAll('.clickableTitle')

    expect(blogs.length).toBe(0)
  })

  test('if user logged in, blogs are rendered', async () => {

    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }

    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))

    const component = render(
      <App />
    )

    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('blogs')
    )
    const blogs = component.container.querySelectorAll('.clickableTitle')

    expect(blogs.length).toBe(3)

    expect(component.container).toHaveTextContent(
      'Blogi1'
    )
    expect(component.container).toHaveTextContent(
      'Blogi2'
    )
    expect(component.container).toHaveTextContent(
      'Blogi3'
    )
  })
})