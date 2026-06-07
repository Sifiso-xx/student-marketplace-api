terraform {
  required_version = ">= 1.6.0"
}

variable "project_name" {
  type    = string
  default = "student-marketplace-api"
}

output "project_name" {
  value = var.project_name
}
