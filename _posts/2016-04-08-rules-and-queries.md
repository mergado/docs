---
layout: page
title: "Rules and Queries"
category: apps
date: 2016-04-08 15:02:14
active_item: ""
order: 1
---

Rules are probably the most useful feature in Mergado. With queries, it provides a tool for fast and easy modification of products' data.

## Queries

Queries are used to filter products by values of their elements. For this purpose, we implemented our own language abbreviated as MQL (Mergado Query Language). MQL helps to describe how to filter a set of products, similarly as SELECT statements in SQL. And in fact, all MQLs are always translated into SQL. For example, a query returning all products with price lower than 100 EUR looks like this in MQL:

```
PRICE_VAT < 100
```

In the above query, `PRICE_VAT` is the name of an element in a project (which is often also the name in the project's input XML feed, however, elements can also be created manually in Mergado UI by users or in the API). Anyway, it's possible to create queries using a bit more advanced conditions. Here is a list of all possible operators:

* `>`, `<`, `>=`, `<=`, `=`, `!=` -- comparison of values
* `~`, `!~` -- comparison by regular expression
* `IN`, `NOT IN` -- comparison with a list of values (surrounded by parenthesis)
* `OR`, `AND` -- logical operators

Names of elements can be escaped using square brackets, i.e. `[` and `]`. For example, the element `PARAM|color` can be used in MQL like this: `[PARAM|color] = 'red'`.

## Rules

All manipulation of products' data happens in rules. Rules transform _input_ data (provided mostly by administrators in eshops or by marketing agencies) to _output_ data (usually consumed by services like Heureka.cz, Google Merchant and Zboží.cz). The simplest rule is called `rewriting` which does nothing else than that it fills the output value of a product's element with a value. For instance, imagine you have a product like ThinkPad T440 and you want to lower its price. The rule `rewriting` is one way to do it and this is the action it performs:

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

You usually don't want to lower prices of all products in your feed and that is where queries come into play as they are used to select only a portion of products in a feed.

### Instantiation and definition

When we say _instantiate_ a rule, what we mean is that someone creates a rule that performs bulk modification of products in an XML feed. This modification is done in a way that the user intents by an instantiation, for example, a rule's instance might lower prices of all products by 100 EUR. Such rule is probably not very useful but it shows what rule instances do: modify a project's (export's) products.

Another term we use is rule _definition_. Rule definitions are actually like classes in object-oriented programming, while rule instances are like objects. A rule definition represents what a particular rule does and what parameters it requires in order to be instantiated.

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

As we mentioned previously, this rule rewrites the current value with a new one usually chosen by the user (or by an app). When you want an app to instantiate a new rule using [our API](http://docs.mergado.apiary.io/#reference/rules), you must provide the following information:

- `type` -- The type of rule to instantiate.
- `data` -- A list of objects in case of `1:N` relationship or an object in case of `1:1` relationship. Each object represents a rule-specific data for the rule instantiation. The field `fields` defines the name, type and other information of each field of the object for instantiation.

In the case of the `rewriting` rule, a user or an app provides the `new_content` field -- the value with which the output value of each selected product is replaced.

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
