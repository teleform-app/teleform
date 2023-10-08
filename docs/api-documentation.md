---
outline: deep
---

# API Documentation


::: details `GET /getForm`

Get form by ID.

#### Query parameters

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `form_id` | `uuid` | **Required**. The ID of the form to retrieve. |

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