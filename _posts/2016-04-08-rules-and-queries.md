---
layout: page
title: "Rules and Queries"
category: apps
date: 2016-04-08 15:02:14
active_item: ""
order: 4
---

Rules are probably the most useful feature in Mergado. With queries, it provides a tool for fast and easy modification of products' data.

## Queries

Queries are used to filter products by values of their elements. In Mergado, we implemented our own language called MQL (Mergado Query Language) which describes in what way to filter products in our database. For example, a query returning all products with price lower than 100 EUR looks like this in MQL:

```
PRICE_VAT < 100
```

In this query, `PRICE_VAT` is the name of the element in a project (or its XML feed). It is also possible to create more advanced queries. Here is a list of all possible operators:

* `>`, `<`, `>=`, `<=`, `=`, `!=` – comparison
* `~`, `!~` – comparison by regular expression
* `IN`, `NOT IN` – comparison with a list of values (surrounded by parenthesis)
* `OR`, `AND` – logical operators

Names of elements can be escaped by square brackets, i.e. `[` and `]`. For example, the element `PARAM|color` can be used in MQL like this: `[PARAM|color] = 'red'`.

## Rules

All manipulation of products' data happens in rules. Rules allow the transformation from input data provided by eshop to output data sent to shopping services. The simplest rule is called `rewriting` which does nothing else than that it fills the output value of a product's element with a value. For instance, imagine you have a product like ThinkPad T440 and you want to lower its price. The rule `rewriting` is one way to do it and this is the action it performs:

```
        input                      output

    +------------+             +------------+
    |  product   |             |  product   |
    +------------+             +------------+
    | NAME:      |             | NAME:      |
    |   ThinkPad |  rewriting  |   ThinkPad |
    |            | +---------> |            |
    | PRICE:     |             | PRICE:     |
    |   999 EUR  |             |   819 EUR  |
    +------------+             +------------+
```

The thing is that you don't want to lower prices of all products in your feed. That's where queries come into play as they are used to select only a portion of products in a feed.

### Instantiation and definition

When we say _instantiate_ a rule, what we mean is that someone creates a rule that performs bulk modification of products in an XML feeds. This modification is done in a way that the user intends, for example, a rule's instance might lower prices of all products by 100 EUR. Such rule is probably not very useful but it shows what rule instances do: modify a project's or export's products.

Another term we use is rule _definition_. Rule definitions are like classes in object-oriented programming while rule instances are like objects. A rule definition represents what a particular rule does and what parameters it requires in order to be instantiated.

For example, the definition of the rule `rewriting` looks like this:

```json
{
    "type": "rewriting",
    "relationship": "1:1",
    "fields": [
        {
            "required": false,
            "type": "STRING",
            "name": "new_content"
        }
    ]
}
```

As we mentioned previously, this rule rewrites the current value with a new one usually chosen by the user (or by an app). When you want an app to instantiate a new rule using [our API](http://docs.mergado.apiary.io/#reference/rules), you are required to provide the following information:

- `type` -- The type of rule to instantiate.
- `data` -- A list of objects in case of `1:N` relationship or an object in case of `1:1` relationship. Each object represents a rule-specific data for the rule instantiation. The field `fields` defines the name, type and other information of each field of the object for instantiation.

In the case of the `rewriting` rule, a user or an app is required to provide the `new_content` field which is the value by which the output value of each selected product will be replaced.

### Creating new rules by application

Mergado provides a list of predefined rules, which can be used to manipulate products' data. This is useful if you want to create a set of rules according to the eshops feed, the current day, the weather etc. In many cases it is very useful to define your own rule which can be instantiated by the user or even by another app.

Each application can define one rule or several rules by exposing a URL. This URL can be set in the Developers center and will be periodically called by Mergado's backend with product's data on each rule application. The backend sends the data in the following format by a HTTP POST request:

```json
{
    "rule_id": "12",
    "project_id": "1",
    "data": [
        {
            "id": "123",
            "data": {
                    "ITEM_ID": "890",
                    "PRODUCTNAME": "Amazon Kindle Paperwhite 3",
                    "DELIVERY_DATE": "0",
                    "EAN": "0848719006099",
                    "PRICE": "2525.10",
                    "IMGURL": "https://app.mergado.com/img/890.jpg"
            }
        },
        {
            "id": "234",
            "data": {
                "ITEM_ID": "530",
                "PRODUCTNAME": "Epson LX 100 EPS",
                "DELIVERY_DATE": "3",
                "EAN": "0010313601581",
                "PRICE": "185.10",
                "IMGURL": "https://app.mergado.com/img/530.jpg"
            }
        }
    ]
}
```

The request is considered to be a success if the server replies with a `200 OK` HTTP status code and the body of the response contains products' data in the same format. The application is not required to return all products, it is required to return only the products and elements that were processed and should be changed in some way. For example, the server's response might be:

```json
{
    "rule_id": "12",
    "project_id": "1",
    "data": [
        {
            "id": "234",
            "data": {
                "DELIVERY_DATE": "0"
            }
        }
    ]
}
```

This minimalistic version is highly recommended as it is more efficient for both, the application and for Mergado's backend.

{: .info}
**Note:** If you want to hide a product's element value, return its value set to an empty string `""` or to a `null`, both values are treated the same in Mergado.

### Instantiating app-defined rules

Defining new rules makes it possible for end-users to create (or instantiate) new application-defined rules (if the application enables this). Now you might be wondering why shouldn't it be possible to instantiate application-defined rules in the Mergado REST API. This is of course possible, although it may seem a bit tricky at first. All application-defined rules have the same definition, which looks like this:

```json
{
    "fields": [
        {
            "required": true,
            "type": "STRING",
            "name": "app_rule_type"
        }
    ],
    "type": "app",
    "relationship": "1:1"
}
```

Each app can define several rules (with unique names), the definition above says that before an app instantiate a new rule in a project, it is required to provide an `app_rule_type`. This fields is a unique ID of the application-defined rule generated in the developers center from the name of the app and the name of the rule.
