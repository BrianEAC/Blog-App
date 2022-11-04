# Blog-App
App creada con Angular 12 y json-server para guardar los datos.

Para ejecutar, clonar el repositorio, entrar a la carpeta blog-app, correr npm install desde la consola, y luego npm install concurrently y npm install json-server. Una vez se instalen la aplicacion comienza con npm start.
El front corre en localhost:4200 y el server en localhost:3001

CREDENCIALES: 
              
              -Writer: username: tessio
                       password: salvatore
                       
                       username: clemenza
                       password: peter
                       
              -Editor: username: abbandando
                       password: genco

COMPONENTES: 

-login-form: formulario de carga de credenciales <br> 
-posts: vista general de la lista de posts, con detalle y comentarios <br>
-post-form: formulario de carga de nuevos posts y edicion <br>

SERVICIOS: 

-login: para contrastar las credenciales ingresadas con las guardadas en la base y setear el usuario activo <br>
-posts: para realizar todas las requests para traer los posts segun distintos parametros
           
INTERFACES: 

Post <br>
```json
{
    title: string;
    content: string;
    publishDate?: string;
    author: string;
    id: number;
    pending: boolean;
    rejected?: boolean;
    comments?: PostComment[];
}
```

PostComment <br>
```json
{
    user: string;
    content: string;
    date: string;
}
```
User <br>
```json
{
    username: string;
    password: string;
    isEditor: boolean;
}
```
