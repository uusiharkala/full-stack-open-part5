import React from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ({
  addBlog,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url
}) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
                title:
        <input
          value={title}
          onChange={handleTitleChange}
        />
        <br/>
        author:
        <input
          value={author}
          onChange={handleAuthorChange}
        />
        <br/>
        url:
        <input
          value={url}
          onChange={handleUrlChange}
        />
        <br/>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

NewBlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired
}

export default NewBlogForm