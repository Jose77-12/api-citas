# API de Gestión de Citas

Este proyecto es un módulo API HTTP para gestionar citas, desarrollado en Node.js utilizando Express y Terraform para la infraestructura.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```bash
api-citas
├── src
│   ├── app.js                  # Punto de entrada de la aplicación
│   ├── controllers
│   │   └── citasORM.js          # Controlador ORM para manejar comunicación con la base de datos
│   │   └── citasController.js   # Controlador para manejar operaciones CRUD de citas
│   │   └── db.js                # Controllador para la la conexión con la base de datos
│   ├── routes
│   │   └── citasRoutes.js       # Definición de rutas HTTP para las citas
│   └── models
│       └── cita.js              # Modelo que define la estructura de una cita
├── terraform
│   ├── main.tf                  # Configuración principal de Terraform
├── package.json                 # Configuración de npm y dependencias
├── .gitignore                   # Archivos y carpetas a ignorar por Git
└── README.md                    # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Jose77-12/api-citas
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd api-citas
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Para iniciar la API, ejecuta el siguiente comando:

   ```bash
   npm start
   ```

La API estará disponible en `http://localhost:3000`.

## Uso

Puedes realizar operaciones CRUD sobre las citas utilizando las siguientes rutas:

- `POST /appointments` - Crear una nueva cita
- `GET /appointments/:id` - Obtener una cita específica
- `PUT /appointments/:id` - Actualizar detalles de una cita
- `DELETE /appointments/:id` - Eliminar una cita
- `GET /appointments` - Listar todas las citas

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
