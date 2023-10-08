FROM golang:1.21-alpine AS builder
WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

# This mount speeds up re-builds significantly
RUN --mount=type=cache,target="/root/.cache/go-build",rw \
    CGO_ENABLED=0 GOOS=linux go build -o server .

FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /app

COPY --from=builder /app/server .

EXPOSE 8080
RUN chmod +x ./server
CMD ["./server"]