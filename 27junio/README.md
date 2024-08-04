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
MAC: touch nombre-archivo
  WINDOWS: type null > nombre-archivo
  #Posibles opciones para crear archivos en windows
  type null > nomnre-archivo.ecct
  echo. > nombre_archivo.txt
  #En powershell
  New-Item -Path . -Name "no,bre_del_archivo.text"

#Movimiento entre carpetas
cd nombre-carpeta
  # en windows me muevo entre discos dando C:,  D:, X: ...

#Ir a la raíz de nuestro sistema
 cd / 


#Volver una o varias carpetas
cd . #me quedo en la misma carpeta. sirve para refrerenciar la carpeta actual (como en ./ )
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

NODE PACKAGE MANAGER es el administrador de paquetes por defecto en Node. Los paquetes son módulos de código que se pueden instalar y usar en nuestros proyectos.
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

# Flag -D instala dependencias de desarrollador
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

  // CUANDO ESTE CÓDIGO SE ABRE DE NUEVO, HAY QUE INSTALAR NODE MODULES
  // 1. cd carpeta 27junio
  // 2. npm install
  // 3. npm run dev    o    npm run start