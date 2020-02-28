---
layout: page
title: "Rules and Queries"
category: apps
date: 2016-04-08 15:02:14
active_item: ""
order: 1
---

Rules are probably the most useful feature in Mergado. With queries, it provides a tool for fast and easy modification of products' data.

# Queries

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

# Rules

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

When we say _instantiate_ a rule, what we mean is that someone creates a rule that performs bulk modification of products in a feed. This modification is done in a way that the user intents by an instantiation, for example, a rule's instance might lower prices of all products by 100 EUR. Such rule is probably not very useful but it shows what rule instances do: modify a project's (export's) products.

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

## Application rules

Mergado provides a list of predefined rules, which can be used to manipulate products' data. This is useful if you want to create a set of rules according to the eshops feed, the current day, the weather etc. In many cases it is very useful to define your own rule which can be instantiated by app.

### Creating application rule

Each application can define rules by exposing a URL. First you need to create such rule in the [Mergado Developers](https://app.mergado.com/developres/) center. In your App select `Rules` in left menu. You must provide:

Parameter | Description
------ | -----------
`Title`| Description of your rule.
`ID` | ID you specify here will be converted into `app_rule_type` you use in API to instantiate new rule. It will be in format `apps.<your-app-name>.<ID>`. <br><br>Note: Stages (`dev` and `production`) have different type. 
`URL` | URLs for your rules. Stages (`dev` and `prodution`) can have different URLs.

### Instantiating new rule via Mergado API

Send `HTTP POST` request on `https://api.mergado.com/projects/<project-id>/rules/` URL.

with body:

```json
{
	"name": "Rule name",
	"type": "app",
	"data": {
		"app_rule_type": "apps.appname.dev.processing",
	},
	"...Some data skipped, see Mergado API doc for more info...",
}
```

Explanation of the fields:

* `name` - Rule name as it will apear in Mergado UI for users
* `type` - This is type of the rule
* `data.app_rule_type` - This is `app_rule_type` you can find in Mergado Developers center

### Processing of application rule

The backend sends the data on URL you specified in Mergado Developers center in the following format by a `HTTP POST` request:

```json
{
    "rule_id": "12",
    "project_id": "1",
    "apply_log_id": "501",
    "request_id": "1BAC92",
    "current_format": "heureka.cz",
    "data": [
        {
            "id": "123",
            "created_at": "2016-03-27T17:18:45+00:00",
            "updated_at": "2016-04-28T17:18:50+00:00",
            "output_changed_at": null,
            "data": {
                "ITEM_ID": "890",
                "PRODUCTNAME": "Amazon Kindle Paperwhite 3",
                "DELIVERY_DATE": "0",
                "EAN": "0848719006099",
                "PRICE": "2525.10",
                "IMGURL": "https://app.mergado.com/img/890.jpg"
            },
            "metadata": {
                "..."
            }
        },
        {
            "id": "234",
            "created_at": "2016-01-07T13:56:42+00:00",
            "updated_at": "2016-04-28T17:18:50+00:00",
            "output_changed_at": null,
            "data": {
                "ITEM_ID": "530",
                "PRODUCTNAME": "Epson LX 100 EPS",
                "DELIVERY_DATE": "3",
                "EAN": "0010313601581",
                "PRICE": "185.10",
                "IMGURL": "https://app.mergado.com/img/530.jpg"
            },
            "metadata": {
                "..."
            }
        }
    ]
}
```

Explanation of the fields:

* `project_id` - ID of the project. Changes in products by rules are applied to this project.
* `rule_id` - ID of the rule in Mergado, each rule is represented by one row in the UI.
* `apply_log_id` - ID of the rule application's log.
* `request_id` - ID of the request different for each request. Note that the ID doesn't change when the request is retried (see Retrying on Errors bellow).
* `current_format` - Name of the format in which the products are represented when this rule is applied.
* `data` - A list of products.
    + `id` - ID of the product.
    + `created_at` - When the product has been imported in Mergado.
    + `updated_at` - The last time the product changed.
    + `output_changed_at` - The last time the product changed its output values.
    + `data` - A key-value paires containing elements, their names and values. These values are altered by rules with higher priority (applied sooner in the chain of rules).
    + `metadata` - Cached data for the whole application procces that you send before in response for this particular product in another rule.

The request is considered to be a success if the server replies with a `200 OK` HTTP status code and the body of the response contains products' data in the same format. The application is not required to return all products, it is required to return only the products and elements that were processed and should be changed in some way. For example, the server's response might be:

```json
{
    "data": [
        {
            "id": "234",
            "data": {
                "DELIVERY_DATE": "0"
            },
            "metadata": {
                "..."
            }
        }
    ]
}
```

This minimalistic version is highly recommended as it is more efficient for both, the application and for Mergado's backend.

{: .info}
**Note:** If you want to hide a product's element value, return its value set to an empty string `""` or to a `null`, both values are treated the same in Mergado.

#### Retrying on Errors and Delaying Requests

Whenever your app returns 4xx or 5xx HTTP status code, the application of rules fails and the whole project's rebuild is interrupted. Users than see this error in the UI.

Our server attempts retrying (5 times at most) when the app returns a 502, 503, 504 or 429 status code on an app's rule application. The retry can be affected when the app responses with a `429` status code with a `Retry-After` header. For more information on this header, see [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After).

To delay another request (to prevent application overload) pass `Mergado-Please-Slow-Down: true` header. The delay will increase with every such response.