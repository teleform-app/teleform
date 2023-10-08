---
outline: deep
---

# API Documentation


::: details `GET /getForm`

Get form by ID.

#### Example Request

```http request
GET /getForm?form_id=123e4567-e89b-12d3-a456-426614174000
```

#### Example Response

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "name": "My Form",
    
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

::: details `GET /getMyForms`

Get all forms created by the current user.

#### Example Request

```http request
GET /getMyForms
```

#### Example Response

```json
[
    {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        
        "emoji": "📝",
        "name": "My Form",
        
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


::: details `POST /createForm`

Create new form.

#### Example Request

```http request
POST /createForm

{
   "title": "My Form",
}
```

#### Example Response

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "name": "My Form",
    
    "author": 63121552,
    
    "questions": [] 
}
```

:::


::: details `POST /editForm`

Edit your form.

#### Example Request

```http request
POST /editForm

{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    
    "emoji": "📝",
    "name": "My Form",
    
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
    "name": "My Form",

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


::: details `POST /respondToForm`

Create new form.

#### Example Request

```http request
POST /respondToForm

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