import { auth } from "./auth"

export async function getAllPosts(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`)
  const { posts } = await response.json()
  return posts
}

export async function createPosts(data){
     console.log(data.content)

     if(data.content === undefined || data.content === '' || data.content === null){
          console.log('Estás debuggueando, ¿no? Picarón')
     } else {
          const user = auth.currentUser()
          await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
               Authorization: `Bearer ${user.token.access_token}`
          }
          })
          
     }
}