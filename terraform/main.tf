provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "citas_api" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "JOBDIGITAL-API"
  }
}

resource "aws_db_instance" "default" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "12.3"
  instance_class       = "db.t2.micro"
  name                 = "citas_db"
  username             = "citas_user"
  password             = "citas_password"
  parameter_group_name = "default.postgres12"
  skip_final_snapshot  = true
}