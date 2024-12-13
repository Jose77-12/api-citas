# API de Gestión de Citas

Este proyecto es un módulo API HTTP para gestionar citas, desarrollado en Node.js utilizando Express y Terraform para la infraestructura.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
api-citas
├── src
│   ├── app.js                  # Punto de entrada de la aplicación
│   ├── controllers
│   │   └── citasController.js   # Controlador para manejar operaciones CRUD de citas
│   ├── routes
│   │   └── citasRoutes.js       # Definición de rutas HTTP para las citas
│   └── models
│       └── cita.js              # Modelo que define la estructura de una cita
├── terraform
│   ├── main.tf                  # Configuración principal de Terraform
│   ├── variables.tf             # Definición de variables para Terraform
│   └── outputs.tf               # Especificación de salidas de la configuración de Terraform
├── package.json                 # Configuración de npm y dependencias
├── .gitignore                   # Archivos y carpetas a ignorar por Git
└── README.md                    # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd api-citas
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la API, ejecuta el siguiente comando:
```
npm start
```

La API estará disponible en `http://localhost:3000`.

## Uso

Puedes realizar operaciones CRUD sobre las citas utilizando las siguientes rutas:

- `POST /citas` - Crear una nueva cita
- `GET /citas` - Obtener todas las citas
- `PUT /citas/:id` - Actualizar una cita existente
- `DELETE /citas/:id` - Eliminar una cita

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.