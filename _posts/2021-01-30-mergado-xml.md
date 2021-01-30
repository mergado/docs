---
layout: page
title: "Mergado Product XML"
category: developers
date: 2021-01-30 09:41:41
active_item: ""
order: 2
---

**Current Version**: **1.10**

The goal of Mergado Product XML is to set a standard for data transfer of product campaigns in e-commerce. This document lists supported elements and
describes their purpose.

## Why support Mergado XML

Minimum data loss during transfer from an online store to Mergado app enables a superb data conversion and advertising management on comparison shopping sites and marketplaces. Moreover, developers need to follow changes of only one data file specification instead of dozens. This saves their time that
can be devoted to online store development.

## Elements

Element names are in CAPITAL LETTERS

Explanatory notes:
• „Text“ values describe regular text. We recommend avoiding control characters such as `"# $ ^ & *` etc.
• „ID“ values support `0-9a-zA-Z_-`characters. No differentiation between upper and lower case while processing.
• „URL“ values describe a file address according to this standard, that is with `http://` at the beginning, without diacritics, spaces etc.
• Date values are in the following order: `dd-mm-yyyy`, e.g. 31-12-2019.
• Embedded elements are in the table placed below the parent element and indented to the right.
• “Number” values are a sequence of numbers without spaces or other characters. Decimal numbers are separated by a decimal point.

See example of an XML feed below the table.

Element | Description | Values | Compulsory | Can repeat
-- | -- | -- | -- | --
CHANNEL | Root tag. At the begging and at the end of XML file. | - | YES | -
LINK | URL address of the online store | URL | - | -
GENERATOR | Tag at the beginning of the XML. It defines system and version that created the XML. Please contact Mergado to be assigned the ID. |   |   |  
ITEM | Marks a product item. Same as e.g. SHOPITEM from Heureka or Zboží.cz. | - | YES | YES
ITEM_ID | Unique product item identifier. | ID | YES | -
ACCESSORY | Accessory. Refers to ITEM_ID of one accessory item. | ID | - | YES
ADULT | Marks a product intended exclusively to adults. | 0 or 1 | - | -
AVAILABILITY | Product availability in stock. | preorder / in stock / out of stock | - | -
BENEFIT | Bonus, gift, benefit motivating customers to buy. | Text | - | YES
BRAND | Product brand. E.g. Sony, Panasonic etc. | Text | - | -
BRAND_URL | A brand page URL on store’s website. | URL | - | -
CATEGORY | Product category | Text | - | -
CATEGORY_DESCRIPTION | Category text description | Text | - | -
CATEGORY_ID | Page ID of product category on store’s website. | ID | - | -
CATEGORY_MAX_PRICE_VAT | Price of the most expensive product item in a category. | Number | - | -
CATEGORY_MIN_PRICE_VAT | Price of the cheapest product item in a category. | Number | - | -
CATEGORY_NAME | Short category name without embedding. | Text | - | -
CATEGORY_QUANTITY | Number of product items in CATEGORY element. | Number | - | -
CATEGORY_URL | Page URL of product category on store’s website. | URL | - | -
CPC | CPC bid | Number | - | -
CPC_FULLTEXT | CPC bid in fulltext search | Number | - | -
COLOR | Color, used for fashion advertising formats. | Text | - | -
CONDITION | Product condition. New / refurbished / used. | new / refurbished / used | - | -
COST | Product’s purchase price excl. VAT. Including storage costs etc. It is used to calculate margin. | Number | - | -
COST_VAT | Product’s purchase price incl. VAT. Including storage costs etc. It is used to calculate margin. | Number | - | -
CURRENCY | A system of money in general use in a particular country. | Text | - | -
CUSTOM_LABEL | Custom product label. More than one label possible, custom_label_1, custom_label_2, custom_label_3 | Text | - | YES
DELIVERY_DAYS | Delivery time in days. „0“ means in stock. | Number | - | -
DELIVERY | Delivery type. Parent to ID, PRICE, PRICE_COD subattributes, where ID is compulsory, followed by one of the price elements. | - | - | YES
ID | Delivery type | e.g. PPL, DPD, etc. | - | -
PRICE | Shipping cost when paying by bank transfer. | Number | - | -
PRICE_COD | Shipping cost when paying by cash on delivery. | Number | - | -
DESCRIPTION | Product text description. | Text | - | -
DESCRIPTION_SHORT | Short product text description. | Text | - | -
DUES | Fees that are not included in the product price. | Number | - | -
EAN | Product EAN code. Can be found e.g. on barcodes. Supported standards are EAN-8 and EAN-13. | Number, max 13 characters | - | -
ENERGY_CLASS | Energy class of product. One of the values on the right. | G, F, E, D, C, B, A, A+, A++, A+++ | - | -
EXTRA_MESSAGE | Other benefits. Allowed values: extended_warranty, free_accessories, free_case, free_delivery, free_gift, free_installation, free_store_pickup, voucher | See description | - | -
GENDER | Gender, used for fashion advertising formats. | Text | - | -
HIGHLIGHT | Highlight of a product | 0 or 1 | - | -
IDENTIFIER_EXISTS | Use if your product does not have a unique product identifier, such as:  - GTIN and brand, or  - MPN and brand (used for facebook and google formats) | True / false | - | -
ISBN | Product ISBN code. Supported standards are ISBN-10 and ISBN-13. | Numbers, max. 13 numbers | - | -
IMAGE | Image URL. | URL | - | -
IMAGE_ALTERNATIVE | Alternative image URL. This element can appear more than once. | URL | - | YES
ITEMGROUP_ID | Other product option. Contains item_id of another item. | ID | - | -
MATERIAL | Material, used for fashion advertising formats. | Text | - | -
NAME_EXACT | Exact product name. Used for pairing to product cards | Text | - | -
NAME_COMMERCIAL | Extended product name. Including benefits etc. | Text | - | -
PARAM | Parameter. Parent to NAME and VALUE subelements. | - | - | YES
NAME | Parameter name. E.g. „Colour“. | Text | - | -
VALUE | Parameter value. E.g. “red”. | Text | - | -
PRIORITY | Decimal from 0 to 1. Defines importance of a product item. 1 means highest importance, 0 means lowest importance. | Number | - | -
PRODUCER | Product manufacturer. E.g. in case of Panasonic brand products the manufacturer is Matsushita. | Text | - | -
PRODUCTNO | Product code given by manufacturer. | Text | - | -
PRODUCT_TYPE | Category of your product, as defined by you (used for facebook and google formats) | Text | - | -
RELEASE_DATE | Official release date, if the product is new to the market. | Date | - | -
SIZE | Size, used for fashion advertising formats. | Text | - | -
URL | Product page URL address on the store’s website. | URL | YES | -
URL_ADWORDS | URL intended for attendance from AdWords. Corresponds to element adwords_redirect. | URL | - | -
URL_MOBILE | URL address of product page mobile version | URL | - | -
PRICE | Product price excl. VAT | Number | - | -
PRICE_VAT | Product price incl. VAT | Number | YES | -
PRICE_RETAIL | Retail price, recommended by manufacturer, excl VAT. | Number | - | -
PRICE_RETAIL_VAT | Retail price, recommended by manufacturer, incl VAT. | Number | - | -
PRICE_DISCOUNT | Discounted price excl. VAT | Number | - | -
PRICE_DISCOUNT_VAT | Discounted price incl. VAT | Number | - | -
SHIPPING_LABEL | Special shipping label | Text | - | -
SHIPPING_SIZE | Product dimensions: length x width x height. Units: in, ft, cm, m. | Text | - | -
SHIPPING_WEIGHT | Product weight. Units lb, oz, g, kg. | Number unit | - | -
SHOP_PAIRING_ID | Unique product identifier that can be used to update product information in online store, e.g. via API. | Text | - | -
SHOP_PAIRING_PARENT_ID | If the given product is a variant, here is where the SHOP_PAIRING_ID of the parent product should be mentioned. | Text | - | -
STOCK_QUANTITY | Stock quantity of each product/variant. | Number | - | -
VAT | VAT rate. E.g. <VAT>21</VAT> represents 21 % rate. | Number | - | -
VIDEO | Product videos. | URL | - | -
VIDEO_ALTERNATIVE | Alternative product videos URL. | URL | - | YES
WARRANTY | Warranty in months. | Number | - | -

## Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<CHANNEL xmlns="http://www.mergado.com/ns/1.10"> 
<LINK>http://www.mergadoshop.com/</LINK>
<GENERATOR>mergado.woocommerce.marketingpack.2_2_0</GENERATOR>
... 
<ITEM> 
   <ITEM_ID>83724</ITEM_ID> 
   <NAME_EXACT>Victorinox Spartan</NAME_EXACT> 
   <NAME_COMMERCIAL>Victorinox Spartan + free whetstone</NAME_COMMERCIAL> 
   <BENEFIT>Free whetstone</BENEFIT> 
   <CATEGORY>Outdoor equipment / knives / jackknives</CATEGORY> 
   <DESCRIPTION>All-purpose knife for outdoor and leisure time activities. The description continues...</DESCRIPTION> 
   <DELIVERY_DAYS>2</DELIVERY_DAYS> 
   <HIGHLIGHT>1</HIGHLIGHT> 
   <CURRENCY>USD</CURRENCY> 
   <EXTRA_MESSAGE>free_accessories</EXTRA_MESSAGE> 
   <IMAGE>http://www.mergadoshop.com/images/img-123.jpg</IMAGE> 
   <IMAGE_ALTERNATIVE>http://www.mergadoshop.com/images/img-456.jpg</IMAGE_ALTERNATIVE> 
   <IMAGE_ALTERNATIVE>http://www.mergadoshop.com/images/img-789.jpg</IMAGE_ALTERNATIVE> 
   <BRAND>Victorinox</BRAND> 
   <PRODUCER>Victorinox</PRODUCER> 
   <URL>http://www.mergadoshop.com/victorinox-spartan.html</URL> 
   <PRICE_VAT>300</PRICE_VAT> 
   <CUSTOM_LABEL_0>Sellout</CUSTOM_LABEL_0> 
   <WARRANTY>24</WARRANTY> 
   <AVAILABILITY>in stock</AVAILABILITY> 
   <ADULT>0</ADULT> 
   <CONDITION>new</CONDITION> 
   <STOCK_QUANTITY>1000</STOCK_QUANTITY>

   <PARAM> 
      <NAME>Colour</NAME> 
      <VALUE>Red</VALUE> 
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
