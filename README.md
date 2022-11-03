# Blog-App
App creada con Angular 12 y json-server para guardar los datos.

Para ejecutar, clonar el repositorio, correr npm install desde la consola y luego npm start.

CREDENCIALES: -Editor: username: abbandando
                       password: genco
              
              -Writer: username: tessio
                       password: salvatore
                       
                       username: clemenza
                       password: peter

COMPONENTES: <br>
-login-form: formulario de carga de credenciales
-posts: vista general de la lista de posts, con detalle y comentarios
-post-form: formulario de carga de nuevos posts y edicion

SERVICIOS: <br>
-login: para contrastar las credenciales ingresadas con las guardadas en la base y setear el usuario activo
-posts: para realizar todas las requests para traer los posts segun distintos parametros
           
INTERFACES: 

Post {
    title: string;
    content: string;
    publishDate?: string;
    author: string;
    id: number;
    pending: boolean;
    rejected?: boolean;
    comments?: PostComment[];
}

PostComment {
    user: string;
    content: string;
    date: string;
}

User {
    username: string;
    password: string;
    isEditor: boolean;
}
