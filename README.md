# Blog-App
App creada con Angular 12 y json-server para guardar los datos.

Para ejecutar, clonar el repositorio, correr npm install desde la consola y luego npm start.

CREDENCIALES: 
              
              -Writer: username: tessio
                       password: salvatore
                       
                       username: clemenza
                       password: peter
                       
              -Editor: username: abbandando
                       password: genco

COMPONENTES: 

-login-form: formulario de carga de credenciales
-posts: vista general de la lista de posts, con detalle y comentarios
-post-form: formulario de carga de nuevos posts y edicion

SERVICIOS: 

-login: para contrastar las credenciales ingresadas con las guardadas en la base y setear el usuario activo
-posts: para realizar todas las requests para traer los posts segun distintos parametros
           
INTERFACES: 

Post <br>
{<br>
    title: string;<br>
    content: string;<br>
    publishDate?: string;<br>
    author: string;<br>
    id: number;<br>
    pending: boolean;<br>
    rejected?: boolean;<br>
    comments?: PostComment[];<br>
}<br>

PostComment <br>
{<br>
    user: string;<br>
    content: string;<br>
    date: string;<br>
}<br>

User <br>
{<br>
    username: string;<br>
    password: string;<br>
    isEditor: boolean;<br>
}
