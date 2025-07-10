---
layout: page
title: "Mergado Product XML"
category: developers
date: 2021-01-30 09:41:41
active_item: ""
order: 2
---

The goal of Mergado Product XML is to set a standard for data transfer of product campaigns in e-commerce.

{: .message.info}
**Note:** You can always find the most **recent version** of Mergado XML specification [here](https://www.mergado.com/product_xml_specification.pdf).

## Why support Mergado XML

Minimum data loss during transfer from an online store to Mergado app enables a superb data conversion and advertising management on comparison shopping sites and marketplaces. Moreover, developers need to follow changes of only one data file specification instead of dozens. This saves their time that can be devoted to online store development.

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
      <DESCRIPTION>All-purpose knife for outdoor and leisure time activities.</DESCRIPTION>
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
