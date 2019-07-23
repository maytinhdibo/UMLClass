var rq = [
    {
      "class_requirement_id": 1,
      "name": "Animal",
      "node_id": 2,
      "abstract": 1,
      "final": 1,
      "modifier": 1,
      "static": 1,
      "interface": 1,
      "qualified_name": "kethua.Animal",
      "problem_id": 1,
      "field_requirements": [
        {
          "name": "name",
          "node_id": 3,
          "final": 1,
          "modifier": 1, //public|private
          "static": 1,
          "type": 1,
          "value": 1
        }
      ],
      "method_requirements": [
        {
          "name": "setName",
          "node_id": 8,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "String",
              "node_id": 9,
              "final": 1,
              "value": 1
            }
          ]
        },
        {
          "name": "getAnimalName",
          "node_id": 10,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "getName",
          "node_id": 7,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "Animal",
          "node_id": 4,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "Animal",
          "node_id": 5,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "String",
              "node_id": 6,
              "final": 1,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "class_requirement_id": 2,
      "name": "Cat",
      "node_id": 11,
      "abstract": 1,
      "final": 1,
      "modifier": 1,
      "static": 1,
      "interface": 1,
      "qualified_name": "kethua.Cat",
      "problem_id": 1,
      "field_requirements": [
        {
          "name": "height",
          "node_id": 13,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "value": 1
        },
        {
          "name": "age",
          "node_id": 12,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "value": 1
        }
      ],
      "method_requirements": [
        {
          "name": "setAge",
          "node_id": 22,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "int",
              "node_id": 23,
              "final": 1,
              "value": 1
            }
          ]
        },
        {
          "name": "getAnimalName",
          "node_id": 27,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "getAge",
          "node_id": 21,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "Cat",
          "node_id": 17,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "String",
              "node_id": 18,
              "final": 1,
              "value": 1
            },
            {
              "type": "int",
              "node_id": 20,
              "final": 1,
              "value": 1
            },
            {
              "type": "int",
              "node_id": 19,
              "final": 1,
              "value": 1
            }
          ]
        },
        {
          "name": "getHeight",
          "node_id": 24,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": []
        },
        {
          "name": "Cat",
          "node_id": 14,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "int",
              "node_id": 15,
              "final": 1,
              "value": 1
            },
            {
              "type": "int",
              "node_id": 16,
              "final": 1,
              "value": 1
            }
          ]
        },
        {
          "name": "setHeight",
          "node_id": 25,
          "abstract": 1,
          "final": 1,
          "modifier": 1,
          "static": 1,
          "type": 1,
          "parameters": [
            {
              "type": "int",
              "node_id": 26,
              "final": 1,
              "value": 1
            }
          ]
        }
      ]
    }
  ];

var nodedata = [
    {
        "fields": [
            {
                "visibility": "private",
                "id": 3,
                "name": "name",
                "is_static": false,
                "is_final": false,
                "type": "String",
                "value": null
            }
        ],
        "methods": [
            {
                "visibility": "public",
                "id": 4,
                "name": "Animal",
                "is_static": false,
                "return_type": "",
                "is_constructor": true,
                "is_abstract": false,
                "is_final": false,
                "parameters": []
            },
            {
                "visibility": "public",
                "id": 5,
                "name": "Animal",
                "is_static": false,
                "return_type": "",
                "is_constructor": true,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "String"
                ]
            },
            {
                "visibility": "public",
                "id": 7,
                "name": "getName",
                "is_static": false,
                "return_type": "String",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": []
            },
            {
                "visibility": "public",
                "id": 8,
                "name": "setName",
                "is_static": false,
                "return_type": "void",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "String"
                ]
            },
            {
                "visibility": "public",
                "id": 10,
                "name": "getAnimalName",
                "is_static": false,
                "return_type": "String",
                "is_constructor": false,
                "is_abstract": true,
                "is_final": false,
                "parameters": []
            }
        ],
        "key": 2,
        "name": "Animal",
        "parent_class": null,
        "interface_list": [],
        "qualified_name": "kethua.Animal",
        "is_interface": false,
        "is_abstract": true,
        "visibility": "public",
        "is_static": false
    },
    {
        "fields": [
            {
                "visibility": "private",
                "id": 12,
                "name": "age",
                "is_static": false,
                "is_final": false,
                "type": "int",
                "value": null
            },
            {
                "visibility": "private",
                "id": 13,
                "name": "height",
                "is_static": false,
                "is_final": false,
                "type": "int",
                "value": null
            }
        ],
        "methods": [
            {
                "visibility": "private",
                "id": 14,
                "name": "Cat",
                "is_static": false,
                "return_type": "",
                "is_constructor": true,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "int",
                    "int"
                ]
            },
            {
                "visibility": "public",
                "id": 17,
                "name": "Cat",
                "is_static": false,
                "return_type": "",
                "is_constructor": true,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "String",
                    "int",
                    "int"
                ]
            },
            {
                "visibility": "public",
                "id": 21,
                "name": "getAge",
                "is_static": false,
                "return_type": "int",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": []
            },
            {
                "visibility": "public",
                "id": 22,
                "name": "setAge",
                "is_static": false,
                "return_type": "void",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "int"
                ]
            },
            {
                "visibility": "public",
                "id": 24,
                "name": "getHeight",
                "is_static": false,
                "return_type": "int",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": []
            },
            {
                "visibility": "public",
                "id": 25,
                "name": "setHeight",
                "is_static": false,
                "return_type": "void",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": [
                    "int"
                ]
            },
            {
                "visibility": "public",
                "id": 27,
                "name": "getAnimalName",
                "is_static": false,
                "return_type": "String",
                "is_constructor": false,
                "is_abstract": false,
                "is_final": false,
                "parameters": []
            }
        ],
        "key": 11,
        "name": "Cat",
        "parent_class": "kethua.Animal",
        "interface_list": [],
        "qualified_name": "kethua.Cat",
        "is_interface": false,
        "is_abstract": false,
        "visibility": "public",
        "is_static": false
    }
];
var linkdata = [
    {
        "from": 11,
        "to": 2,
        "relationship": "extends"
    }
];