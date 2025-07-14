# Imagen base liviana
FROM alpine:latest

# Instalamos certificados para conexiones seguras (https)
RUN apk --no-cache add ca-certificates

# Creamos una carpeta de trabajo
WORKDIR /app

# Copiamos el binario de PocketBase al contenedor
COPY pocketbase .

# Exponemos el puerto que usará PocketBase
EXPOSE 10000

# Comando para iniciar PocketBase
CMD ["./pocketbase.exe", "serve", "--http=0.0.0.0:10000"]
