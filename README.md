# vueQuery-crud

An experimental crud with vueQuery (a library from tanstack)

## Run Locally

Clone the project

```bash
  git clone https://github.com/afandilham/coverpost.git
```

Go to the project directory

```bash
  cd coverpost
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
---
## API specification

### Create bio

Request :

- Method : POST
- Endpoint : `/api/bio`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body/Response :

```json
{
  "id": "string, unique",
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```

### Get bio

Request :

- Method : get
- Endpoint : `/api/bio`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Response :

```json
{
  "id": "string, unique",
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```

### Get bio by id

Request :

- Method : get
- Endpoint : `/api/bio/{bio_id}`
- Header :
  - Accept: application/json
- Response :

```json
{
  "id": "string, unique",
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```

### Update bio

Request :

- Method : PUT
- Endpoint : `/api/bio/{id_product}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```

Response :

```json
{
  "id": "string, unique",
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```

### Delete bio

Request :

- Method : DELETE
- Endpoint : `/api/bio/{id_product}`
- Header :
  - Accept: application/json

Response :

```json
{
  "id": "string, unique",
  "name": "string",
  "email": "string, unique",
  "phone": "string",
  "gender": "string"
}
```
