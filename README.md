# PruebaBackEnd_NodeJS

Para correr el proyecto de NodeJs con Express
Requisitos
- Instalar cualquier version 18 de node
(en este proyecto se uso la version 18.18.0
instale esa version de preferencia)
Link de versiones, ahi contiene todas las versiones 18
no te engañes por la ruta, ahi viene

https://nodejs.org/en/download/archive/v18.20.8

- Instalar npm 9.8.1
Link de versiones:
https://www.npmjs.com/package/npm?activeTab=versions

- Instalar Docker, y la imagen MySQL(preferiblemente la version 9.6.0)

-Si desean usar un cliente para editar algo en la base de datos
utilicen Sql WorkBench

NOTA: Deben correr primero el docker-compose.yml del proyecto PruebaBackend-NodeJS para tener la base de datos disponible para usar los endpoints del proyecto

usuarios para utilizar en endpoint login: NombreUsuario: user1, Clave: clave1 o user2 y clave2

Instalacion y ejecucion de proyecto
1. Clona el repositorio con el siguiente comando

git clone https://github.com/usuario/proyecto-api.git
cd proyecto-api

o descargarlo el archivo ZIP en esta direccion de repositorio
y guardalo en la carpeta que desees 
 
2. Entra a la carpeta donde clonaste/guardaste el repositorio
3. Abre la terminal en la ruta, y corre el siguiente
comando para levantar el docker_compose.yml del repositorio
que levanta la base de datos MySQL, 

docker-compose up -d

NOTA: debes encontrarte donde esta el archivo (docker-compose), 
sino, no va funcionar

NOTA: En windows, si no te funciona este comando, 
puede ser porque nunca quito la extension txt
por si te llega a ocurrir que no encuentra el archivo,
hazlo con el siguiente comando 

docker compose -f docker-compose.yaml.txt up -d

5. Y listo, deberias tener la base de datos mysql ya disponible
desde el puerto 3307
6. En la terminal de la ruta, instala las dependencias del proyecto 
con el siguiente comando

npm install 

7. Corre los siguientes comandos antes de correr el proyecto

npm i typescript -g
npm i ts-node -g 
npm i nodemon -g (para que se recarge algún cambio hecho en el proyecto)

8. Y corre el proyecto
npm run dev


Endpoints de la aplicacion
GET	/alumnos	Listar todos los alumnos
GET	/alumnos/:id	Obtener alumno por ID
GET	/alumnos/buscar	Buscar por nombre/apellidos
POST	/alumnos	Crear nuevo alumno (genera matrícula)

Estructura del body de la peticion POST
{
  "matricula": "elcurp",
  "nombre": "juan",
  "apellido_paterno": "juan",
  "apellido_materno": "juan",
  "fecha_de_nacimiento": "2026-02-05"
  "estatus": "Activo" // o puede ignorarlo, de asigna un valor por defecto
  "genero": "M" // M Masculino , F Femenino u O Otro, 
  "id_grado": 1 // primero
}
