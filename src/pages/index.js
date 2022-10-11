import { getAllPosts, createPosts } from '../lib/posts' 
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Head from 'next/head'
import Post from '../components/Post'
import PostForm from '../components/PostForm/PostForm'
import Bio from '../components/Bio/Bio'
import styles from '../styles/Home.module.scss'

export default function Home({ posts: defaultPosts }) {

  const [posts, updatePosts] = useState(defaultPosts)  

  const postsSorted = posts.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  });

  const { user, logIn, logOut } = useAuth()

  async function handleOnSubmit(data, e){
    e.preventDefault()

    await createPosts(data)

    const posts = await getAllPosts()
    updatePosts(posts)
  }

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { !user && (
          <p>
          <button onClick={logIn}>Iniciar Sesión</button>
          </p>
      )}
     
      { user && (
          <p>
          <button onClick={logOut}>Cerrar Sesión</button>
          </p>
      )}  

      <main className={styles.main}>
        <Bio
        headshot="https://i.imgur.com/j3Fs3w9.jpg"
        name="Miguel Angel Carrizo"
        role="Desarrollador React | Next JS"
        tagline="Anotaciones"
        />

        <ul className={styles.posts}>
          {postsSorted.map( post => {
            const { content, id, date } = post
            return (
              <li key={id}>
                <Post 
                content={content}
                date={new Intl.DateTimeFormat('es', {
                  dateStyle: 'short',
                  timeStyle: 'short'
                }).format(new Date(date))}
                />
              </li>
            )
          })}
        </ul>
        
        { !user && (
          <p>
            Logueate para poder postear
          </p>
      )}
        { user && (
            <PostForm onSubmit={handleOnSubmit} />
        )}



      </main>
    </div>
  )
}



export async function getStaticProps(){
  /* const posts = await getAllPosts() */

  return {
    props: {
      posts: []
    } 
  }
}