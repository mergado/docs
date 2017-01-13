---
layout: page
title: "Mergado XML"
category: developers
date: 2017-01-13 09:41:41
active_item: ""
order: 2
---

**Current Version**: **1.3**

The goal of Mergado XML is to create a standard for transmission of product data between eshops and shopping services for advertising goods. This document explains the specification of Mergado XML, supported elements and their meaning.

## Why support Mergado XML

Minimal lost of information when transfering data from eshops to Mergado ensures better management in shopping services. Developers also save time by tracking only one XML specification instead of several that change all the time.

## Elements

The specification of Mergado XML is depicted in the following table. Note that names of all elements are in upper case notation.

Explanation of the column `Values`:

- Text - Any string of characters.
- ID - A string of characters matching `0-9a-zA-Z_-`.
- Date - A date in the format `dd-mm-yyyy`.
- Enum - A string from a set of possible values.
- URL - Valid URL address.
- Bool - `0` representing `False` or `1` representing `True`.

Element | Description | Values | Required | Repeatable
--------|-------------|--------|----------|-----------
CHANNEL | Root element at the beggining and and of the file. | - | Yes | -
ITEM    | Represents one product and contains the product's data. | - | Yes | Yes
ITEM_ID | Unique identifier of one product. | - | Yes | -
ACCESSORY | Accessory. Links to an ITEM_ID of one product. | ID | - | Yes
ADULT   | Whether the product is for adults. | Bool | - | -
AVAILABILITY | Availability of the product in stock. Possible values are preorder, in stock, out of stock | Enum | - | -
BENEFIT | Benefit or a gift for the customer when they purchase the product. | Text | - | -
BRAND | Brand of the product. For example, Sony, Panasonic and so on. | Text | - | -
BRAND_URL | URL of the web of the brand in the eshop. | URL | - | -
CATEGORY | Category of the product. | Text | - | -
CATEGORY_ID | ID of the category. | ID | - | -
CATEGORY_URL | URL of the category. | URL | - | -
CPC | Cost per click. | Number | - | -
CPC_FULLTEXT | Cost per click in fulltext. | Number | - | -
CONDITION | Condition of the peroduct. Possible values are new, refurbished, used | Enum | - | -
CUSTOM_LABEL | Optional label of the product. | Text | - | Yes
DELIVERY_DAYS | Number of days to deliver the product. „0“ means the product is in stock. | Number | - | -
DELIVERY | Type of delivery service. Contains subelements ID, PRICE and PRICE_COD while ID and one of the others is required. | - | - | Yes
&nbsp;&nbsp;&nbsp;&nbsp;ID | Abbreviation of the delivery service. Possible values are `CESKA_POSTA`, `CESKA_POSTA_NA_POSTU`, `CESKA_POSTA_DOPORUCENA_ZASILKA`, `CSAD_LOGISTIK_OSTRAVA`, `DPD`, `DHL`, `DSV`, `FOFR`, `GEBRUDER_WEISS`, `GEIS`, `GLS`, `HDS`, `HEUREKAPOINT`, `INTIME`, `PPL`, `SEEGMULLER`, `TNT`, `TOPTRANS`, `UPS`, `FEDEX`, `RABEN_LOGISTICS`, `VLASTNI_PREPRAVA` | Enum | - | -
&nbsp;&nbsp;&nbsp;&nbsp;PRICE | Price of the delivery service when the payment is made by bank transfer. | Number | - | -
&nbsp;&nbsp;&nbsp;&nbsp;PRICE_COD | Price of the delivery service when paid on delivery. | Number | - | -
DESCRIPTION | Description of the product. | Text | - | -
DESCRIPTION_SHORT | Short description of the product. | Text | - | -
DUES | Additional fee not included in the price of the product. | Number | - | -
EAN | The International Article Number of the product, supported is EAN-8 and EAN-13. | Number | - | -
ENERGY_CLASS | Engergy class of the product. Possible values are: G, F, E, D, C, B, A, A+, A++, A+++ | Enum | - | -
EXTRA_MESSAGE | Benefit as defined by Zboží.cz. Supported values are `extended_warranty`, `free_accessories`, `free_case`, `free_delivery`, `free_gift`, `free_installation`, `free_store_pickup`, `voucher` | Enum | - | -
HIGHLIGHT | The product can be highlighted. | Bool | - | -
ISBN | The International Standard Book Number of the product. Supported is ISBN-10 and ISBN-13 | Number | - | -
IMAGE | URL of the product's image. | URL | - | -
IMAGE_ALTERNATIVE | Additional URL of the product's image. | URL | - | Yes
ITEMGROUP_ID | Variant or group of the product. Contains an ITEM_ID of another product. | ID | - | -
NAME_EXACT | Name of the product. This element is often used to pair products with product cards and categories. | Text | - | -
NAME_COMMERCIAL | Commercial name of the product. May contain benefits, gifts and so on. | Text | - | -
PARAM | Parameter of the product. Contains subelements NAME and VALUE. | - | - | Yes
&nbsp;&nbsp;&nbsp;&nbsp;NAME | Name of the parameter. For example, „Color“. | Text | - | -
&nbsp;&nbsp;&nbsp;&nbsp;VALUE | Value of the parameter. For example, red. | Text | - | -
PRIORITY | Decimal number between 0 and 1. Describes significance of the product. | Number | - | -
PRODUCER | Producer of the product. If the brand is Panasonic, it might be the producer Matsushita. | Text | - | -
PRODUCTNO | Product number. | Text | - | -
RELEASE_DATE | The date of official release of the product. | Date | - | -
URL | A URL of the product in eshop. | URL | Yes | -
URL_ADWORDS | A URL of the product that includes tracking parameters for AdWords. | URL | - | -
URL_MOBILE | A URL of mobile version of the product in eshop. | URL | - | -
PRICE | Price of the product without VAT. | Number | - | -
PRICE_VAT | Price of the product with VAT. | Number | - | -
PRICE_RETAIL | Retail price of the product without VAT. | Number | - | -
PRICE_RETAIL_VAT | Retail price of the product with VAT. | Number | - | -
SHIPPING_LABEL | Optional label for the delivery. | Text | - | -
SHIPPING_SIZE | Dimensions of the product in the format: length x width x height. Units: in, ft, cm, m. | Text | - | -
SHIPPING_WEIGHT | Weight of the product. Units are lb, oz, g, kg. | Number | - | -
VAT | Value added tax, absolute number. | Number | - | -
VIDEO | A URL of a video of the product. | URL | - | -
VIDEO_ALTERNATIVE | Additional URL of a video of the product. | URL | - | Yes
WARRANTY | Warranty length in months. | Number | - | -

## Example


```xml
<?xml version="1.0" encoding="utf-8"?>
<CHANNEL xmlns="http://www.mergado.com/ns/1.2">
<LINK>http://www.mergadoshop.com/</LINK>
<GENERATOR>mergado.prestashop.modulemergadoxml.2_64</GENERATOR>
...
<ITEM>
    <ITEM_ID>83724</ITEM_ID>
    <NAME_EXACT>Victorinox Spartan</NAME_EXACT>
    <NAME_COMMERCIAL>Victorinox Spartan + brousek zdarma</NAME_COMMERCIAL>
    <BENEFIT>Brousek zdarma</BENEFIT>
    <CATEGORY>Outdoorové vybavení / nože / zavírací nože</CATEGORY>
    <DESCRIPTION>Univerzální nůž do přírody a pro volný čas.
    Text dále pokračuje, velmi chytře...</DESCRIPTION>
    <DELIVERY_DAYS>2</DELIVERY_DAYS>
    <HIGHLIGHT>1</HIGHLIGHT>
    <CURRENCY>CZK</CURRENCY>
    <EXTRA_MESSAGE>free_accessories</EXTRA_MESSAGE>
    <IMAGE>http://www.mergadoshop.com/images/img-123.jpg</IMAGE>
    <IMAGE_ALTERNATIVE>http://www.mergadoshop.com/images/img-456.jpg</IMAGE_ALTERNATIVE>
    <IMAGE_ALTERNATIVE>http://www.mergadoshop.com/images/img-789.jpg</IMAGE_ALTERNATIVE>
    <BRAND>Victorinox</BRAND>
    <PRODUCER>Victorinox</PRODUCER>
    <URL>http://www.mergadoshop.com/victorinox-spartan.html</URL>
    <PRICE_VAT>300</PRICE_VAT>
    <CUSTOM_LABEL_0>Výprodej</CUSTOM_LABEL_0>
    <WARRANTY>24</WARRANTY> 
    <AVAILABILITY>in stock</AVAILABILITY>
    <ADULT>0</ADULT>
    <CONDITION>new</CONDITION>
    <PARAM>
        <NAME>Barva</NAME>
        <VALUE>Červená</VALUE>
    </PARAM>
    <DELIVERY>
        <ID>PPL</ID>
        <PRICE>100</PRICE>
        <PRICE_COD>120</PRICE_COD>
    </DELIVERY>
    <DELIVERY>
        <ID>DHL</ID>
        <PRICE>80</PRICE>
        <PRICE_COD>115</PRICE_COD>
    </DELIVERY>
</ITEM>
...
</CHANNEL>
```
