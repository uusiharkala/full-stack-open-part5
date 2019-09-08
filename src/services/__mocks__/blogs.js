const blogs = [
  {
    id: '5a451df7571c224a31b5c8ce',
    title: 'Blogi1',
    author: 'Author1',
    url: 'www.blog.fi',
    likes: 1,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e21e0b8b04a45638211',
    title: 'Blogi2',
    author: 'Author2',
    url: 'www.blog.fi',
    likes: 2,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e30b5ffd44a58fa79ab',
    title: 'Blogi3',
    author: 'Author3',
    url: 'www.blog.fi',
    likes: 3,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  }
]



const setToken = () => {

}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, setToken }