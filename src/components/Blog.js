import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const Blog = ({ blog, currentUser, refresh }) => {
  const [showBig, setShowBig] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = () => {
    const updatedBlog = {
      user: blog.user,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }

    blogService
      .update(blog.id, updatedBlog)
      .then(() => {
        refresh()
      })
  }

  const handleRemove = () => {
    const ok = window.confirm(`remove blog ${blog.title} by ${blog.author}`)
    if (ok) {
      blogService
        .remove(blog.id)
        .then(() => {
          refresh()
        })
    }
  }

  const removeButton = () => {
    if (currentUser !== undefined && currentUser.username === blog.user.username) {
      return (
        <div>
          <button onClick={() => handleRemove()}>remove</button>
        </div>
      )
    }
  }

  if (showBig) {
    return (
      <div style={blogStyle}>
        <div onClick={() => setShowBig(!showBig)}>
          {blog.title}<br/>
        </div>
        {blog.url}<br/>
        {blog.likes} <button onClick={() => handleLike()}>like</button><br/>
        added by {blog.author}
        {removeButton()}
      </div>
    )
  }
  return (
    <div style={blogStyle}>
      <div onClick={() => setShowBig(!showBig)} className='clickableTitle'>
        {blog.title} {blog.author}
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog