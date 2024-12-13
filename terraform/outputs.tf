output "instance_ip" {
  value = aws_instance.citas_instance.public_ip
}

output "db_endpoint" {
  value = aws_db_instance.citas_db.endpoint
}