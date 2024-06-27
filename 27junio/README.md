# Terminal y NPM

```bash
#Listar archivos y carpetas
ls
dir

#Crear un directorio
mkdir nombre-carpeta
mkdir es make directory

# Cambiar diretorio
cd (change directory) nombre-carpeta

#Crear nuevo archivo
MAC touch nombre-archivo
WINDOWS type null > nombre-archivo
#Posibles opciones para crear archivos en windows
type null > nomnre-archivo.ecct
echo. > nombre_archivo.txt

#En powershell
New-Item -Path . -Name "no,bre_del_archivo.text"

#ovimiento entre carpetas
cd nombre-carpeta

# ir a la raiz de nuestro sostema
 cd / 

# en windows me muevo entre discos sando C:,  D:, X: ...

#Volver una o varias carpetas
cd . #me queso en la misma carpeta. sirve para refrerenciar la carpeta actual (como en ./ )
cd ..
cd ../../../..
cd ../usuarios/ejemplo/mi-carpeta


#Limpiar la terminal
clear
o command + K
#

#

#

#

```html
```

# 

# Qué es NODE ?

Node.js es un 

```bash
# ver la version
con node -v





# Ejecutar un archivo de JS

node mi-script.js
```

# ¿Qué es un NPM?

NODE PACKAGE MANAGER es el administrador de paruqetes por defecto en Node. Lps àquertes son modulos de codigo que se pieden instalar y usar en nuestros proyectos.
Por ejemplo `EXPRESS`, `AXIOS`, `NODEMON`, `CHALK`, `MOMENT`, etc

```bash
#crear mi archivo package.json
npm init 
npm -y # con -y te lo crea automático con sí a todo (yes to all). un menos (-) es una FLAG (banderita)

#Instalar un paquete nuevo
npm install nombre-paquete
npm i nombre-paquete
npm i nombre-paquete@1.0.0 #definir la version que queremos : 1j 1.0.0


#Desinstalar
npm uninstall nombre-paquete

#Acualizar los paquetes a su última versión al añadir ^
    "cowsay": "^1.6.0"

````
# Flag -g instala Globalmente en todo mi servidor y proyectos
npm i nombre-paquete -g

# Flag -g instala dependencias de desarrollador

npm i nombre-paquete --save-dev
npm i nombre-paquete -D

#Acualizar los paquetes a su última versión
npm update
npm update nombre-paquete
```

```js
// package.json
{
  "name": "mi-primer-proyecto",
  },
  "scripts": {
    "start": "node mi-script.js",
    "dev": "nodemon mi-script.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // y se ejecuta con "npm run start" o "npm run dev"