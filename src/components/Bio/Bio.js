import styles from './Bio.module.scss'

const Bio = ( { headshot, name, tagline, role} ) => {
     return(
          <div className={styles.bio}>
               <div className={styles.bioImagen}>
                    <img src={headshot} alt={`Imagen de ${name}`} />
               </div>
               <div className={styles.bioContenido}>
                    <p className={styles.bioContenidoNombre}>
                         {name}
                    </p>
                    <p className={styles.bioContenidoRol}>
                         {role}
                    </p>

                    <p className={styles.bioContenidoTag}>
                         {tagline}
                    </p>
               </div>
          </div>
          
     )
}

export default Bio;

