# Architecture Diagram

```mermaid
graph TD
    Browser -->|HTTP| ClientService
    ClientService -->|API| ServerService
    ServerService -->|ORM| MySQL
    ServerService --> SwaggerUI
```
