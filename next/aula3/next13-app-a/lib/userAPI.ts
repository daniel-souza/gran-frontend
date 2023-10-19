const userAPI = {
  getUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return users
  },
  getUser: async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await response.json()
    return user
  },
  getUserPosts: async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    const posts = await response.json()
    return posts
  },
  getUserPost: async (userId: string, postId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?userId=${userId}`)
    const post = await response.json()
    return post
  }
}
export default userAPI;