# Exchange app

Az appban elõre definiált valuták árfolyamát lehet megjeleníteni kártyákon. Listázzuk a felhasználónak hogy milyen 
valutákat követhet (`/currencies` endpoint), majd amelyiket kiválasztja ahhoz megjelenik egy kártya az oldalon. A
kártyán láthatja a valuta órás, napi, havi és évi átlag értékét forintban. A kártyák mindegyikén van egy X gomb amivel 
el is tudja õket távolítani. Ezen felül tudjuk szūrni azokat a pénznemeket amik túlléptek egy bizonyos határt. Egy 
input mezõben meg lehet adni egy számértéket (pl 400) és ilyenkor csak azok a kártyák jelennek meg amiknek az órás 
átlagértek meghaladta azt. Az átlagok folyamatosan változnak amit kettõ féle képpen lehet nyomon követni:

## A
Pollingal minden másodpercben lekérjük az aktuális értéket az `/exchange-rates` endpointról.

## B
WebSocket kapcsolaton kereszül feliratkozunk a változásra, amit a server másodpercenként elküld.



### Wireframe
![wireframe](https://github.com/kasznar/exchange-rates/blob/main/wireframe.png?raw=true)
