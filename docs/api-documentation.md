---
outline: deep
---

# API Documentation

[[toc]]

## `GET /getForm`

### Query parameters

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