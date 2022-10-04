import styles from './PostForm.module.scss'

const PostForm = () => {

     return(

          <form>
               <textarea className={styles.formContenido}></textarea>
               <button className={styles.formBoton}> Agregar Post</button>
          </form>
     
     )
}

export default PostForm