import styles from './PostForm.module.scss'

const PostForm = ({ onSubmit }) => {

     function handleOnSubmit(e){
          const { currentTarget } = e

          const fields = Array.from(currentTarget.elements)
          const data = {}

          fields.forEach((field)=>{
               if (!field.name) return
               data[field.name] = field.value
          })

          if (typeof onSubmit === 'function'){
               onSubmit(data, e)
          }
     }

     return(

          <form onSubmit={handleOnSubmit}>
               <textarea name='content' className={styles.formContenido}></textarea>
               <button className={styles.formBoton}> Agregar Post</button>
          </form>
     
     )
}

export default PostForm