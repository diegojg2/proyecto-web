# Impulso: cursos deportivos

Proyecto **DEVOPS 00** de Diego J. Una web estática de cursos deportivos desarrollada con HTML, CSS y JavaScript, y preparada para publicarse en Amazon S3.

## Estructura

- `index.html`: contenido y estructura accesible.
- `css/styles.css`: diseño responsive y recursos visuales.
- `js/app.js`: interacción de los botones de cursos.
- `assets/`: carpeta reservada para imágenes u otros recursos.
- `main.tf`: infraestructura del bucket y su configuración de hosting.

## Conceptos de la práctica

**Terraform** permite describir la infraestructura como código. En este proyecto gestiona el bucket S3, la configuración de sitio web, el acceso público y la política de lectura.

**Amazon S3** almacena los archivos estáticos de la aplicación. Configurar website hosting es lo que permite servir `index.html` como una web, no solo guardar archivos.

**MCP (Model Context Protocol)** permite conectar un asistente de IA con herramientas y contexto externo. En la práctica facilita que la IA trabaje sobre los archivos del proyecto y compruebe operaciones relacionadas con el entorno.

## Despliegue

No guardes credenciales en este repositorio. Con las credenciales temporales de AWS Academy cargadas en PowerShell:

```powershell
aws sts get-caller-identity --region us-east-1
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
aws s3 sync . s3://devops-prueba-diegoj-2026 --exclude ".terraform/*" --exclude "*.tf" --exclude "terraform.tfstate*" --delete
terraform output -raw website_endpoint
```

Comprueba que Terraform gestiona el recurso con `terraform state list`. Para actualizar la web, vuelve a ejecutar el comando `aws s3 sync`.

## Restricciones de AWS Academy

La política pública del bucket puede ser bloqueada por un `AccessDenied` o por un `explicit deny in a service control policy`. No se deben saltar esas políticas. Documenta el comando, el servicio (`Amazon S3`), la operación, el mensaje de error y la causa en la entrega. Aunque el hosting público esté bloqueado, la sincronización de los archivos y su presencia en S3 siguen demostrando el resultado mínimo.

## URL

Si AWS Academy permite el hosting público, añade aquí la salida de `terraform output -raw website_endpoint`.
