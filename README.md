<!-- Subir cambios  -->

1. git add . : Tomar los cambios y reparar el escenario para guardar o tomar la fotografia.
2. git commit -m "aqui va el mensaje con el que queremos subir el cambio" : le toma una fotografia.
3. git push: se sube por defecto depues de haberlo hecho antes. 


git checkout -b nombre-de-la-rama
git commit -m "Descripción de los cambios realizados"

Antes de subir tus cambios, es una buena práctica asegurarte de que tu rama esté actualizada con la última versión del repositorio remoto:    
git pull origin main

git push origin nombre-de-la-rama
