# Imagen base liviana
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /app

COPY pocketbase .

# ✅ Aseguramos permisos de ejecución
RUN chmod +x ./pocketbase

EXPOSE 10000

CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]