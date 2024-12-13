provider "aws" {
  region = var.region
}

resource "aws_instance" "citas_api" {
  ami           = var.ami
  instance_type = var.instance_type

  tags = {
    Name = "CitasAPI"
  }
}

resource "aws_db_instance" "citas_db" {
  allocated_storage    = 20
  engine             = "mysql"
  engine_version     = "8.0"
  instance_class     = "db.t2.micro"
  name               = "citasdb"
  username           = var.db_username
  password           = var.db_password
  skip_final_snapshot = true

  tags = {
    Name = "CitasDB"
  }
}

output "api_instance_ip" {
  value = aws_instance.citas_api.public_ip
}

output "db_instance_endpoint" {
  value = aws_db_instance.citas_db.endpoint
}