
### Notes

http://themeforest.net/popular_item/by_category?category=wordpress > themeforest_topsellers.html

```
echo '{ "products": [' > themeforest-popular-20160309.json
grep data-item-name themeforest_topsellers.html | sed -e 's/.*<a href=".*\(\/item\/[^\/]*\)\/\([^"]*\)".*data-item-cost="\([^"]*\)".*data-item-name="\([^"]*\)".*data-preview-url="\([^"]*\).*/{ "link": "http:\/\/themeforest.net\1\/\2?ref=laconic", "previewlink":"http:\/\/themeforest.net\1\/full_screen_preview\/\2?ref=laconic", "cost": "\3", "title": "\4", "featureimg": "\5", "type": "theme", "source": "themeforest" },/' >> themeforest-popular-20160309.json
sed '$ s/.$//' themeforest-popular-20160309.json > themeforest-popular-20160309b.json
echo ']}' >> themeforest-popular-20160309b.json
```
