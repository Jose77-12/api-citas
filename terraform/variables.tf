variable "instance_name" {
  description = "Nombre de la instancia de servidor"
  type        = string
  default     = "api-citas-instance"
}

variable "region" {
  description = "Región donde se desplegará la infraestructura"
  type        = string
  default     = "us-central1"
}

variable "machine_type" {
  description = "Tipo de máquina para la instancia"
  type        = string
  default     = "f1-micro"
}

variable "database_name" {
  description = "Nombre de la base de datos"
  type        = string
  default     = "citas_db"
}