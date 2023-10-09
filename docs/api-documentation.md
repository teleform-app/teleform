---
outline: deep
---

# API Documentation

Backend of Teleform is written in Go and uses [Gin](https://github.com/gin-gonic/gin) as a web framework. It provides a simple JSON REST API for frontend application.

## Autorization

To authorize, just pass [**signed init data**](https://docs.twa.dev/docs/launch-params/init-data) in `X-Init-Data` HTTP header:
```http request
X-Init-Data: query_id=AAHdF6IQAAAAAN0XohDhrOrc&...
```

If you set environment variable `SKIP_INIT_DATA_VALIDATION` to `true`, backend will trust this data without checking signature.

## Methods

::: details `GET /api/getForm`

Get form by ID.

#### Example Request

```http request
GET /api/getForm?form_id=123e4567-e89b-12d3-a456-426614174000
```

#### Example Response

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "title": "My Form",
    "created_at": "2023-10-08T18:55:24.096845335Z",
    
    "author": 63121552,
    
    "questions": [
        {
            "id": "123e4567-e89b-12d3-a456-426614174001",
            "type": "regular_input",
            "mandatory": true,
            "content": {
                "text": "What is your name?",
                "placeholder": "John Doe"
            }
        },
        {
            "id": "123e4567-e89b-12d3-a456-426614174002",
            "type": "T-Shirt Size",
            "content": {
                "text": "What is your T-Shirt size?",
                "multichoice": true,
                "options": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ]
            }
        }
    ] 
}
```

:::

::: details `GET /api/getMyForms`

Get all forms created by the current user.

#### Example Request

```http request
GET /api/getMyForms
```

#### Example Response

```json
[
    {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        
        "emoji": "📝",
        "title": "My Form",
        "created_at": "2023-10-08T18:55:24.096845335Z",
        
        "author": 63121552,
        
        "questions": [
            {
                "id": "123e4567-e89b-12d3-a456-426614174001",
                "type": "regular_input",
                "mandatory": true,
                "content": {
                    "text": "What is your name?",
                    "placeholder": "John Doe"
                }
            },
            {
                "id": "123e4567-e89b-12d3-a456-426614174002",
                "type": "T-Shirt Size",
                "content": {
                    "text": "What is your T-Shirt size?",
                    "multichoice": true,
                    "options": [
                        "S",
                        "M",
                        "L",
                        "XL"
                    ]
                }
            }
        ] 
    }
]
```

:::


::: details `POST /api/createForm`

Create new form.

#### Example Request

```http request
POST /api/createForm

{
   "title": "My Form",
}
```

#### Example Response

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "title": "My Form",
    "created_at": "2023-10-08T18:55:24.096845335Z",
    
    "author": 63121552,
    
    "questions": [] 
}
```

:::


::: details `POST /api/editForm`

Edit your form.

#### Example Request

```http request
POST /api/editForm

{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "title": "My Form",
    "created_at": "2023-10-08T18:55:24.096845335Z",
    
    "questions": [
        {
            "id": "123e4567-e89b-12d3-a456-426614174001",
            "type": "regular_input",
            "mandatory": true,
            "content": {
                "text": "What is your name?",
                "placeholder": "John Doe"
            }
        }
    ] 
}
```

#### Example Response

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",

    "emoji": "📝",
    "title": "My Form",
    "created_at": "2023-10-08T18:55:24.096845335Z",

    "author": 63121552,

    "questions": [
        {
            "id": "123e4567-e89b-12d3-a456-426614174001",
            "type": "regular_input",
            "mandatory": true,
            "content": {
                "text": "What is your name?",
                "placeholder": "John Doe"
            }
        }
    ]
}
```

:::


::: details `POST /api/respondToForm`

Create new form.

#### Example Request

```http request
POST /api/respondToForm

{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "answers": [
        {
            "id": "123e4567-e89b-12d3-a456-426614174001",
            "content": ["John Doe"]
        },
        {
            "id": "123e4567-e89b-12d3-a456-426614174002",
            "content": ["S", "XL"]
        }
    ] 
}
```

#### Example Response

```json
{
    "status": "OK"
}
```

:::