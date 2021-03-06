# Типы данных в Javascript

## Число «number»
```javascript
var n = 123;
n = 12.345;
```
Единый тип _число_ используется как для целых, так и для дробных чисел.

Существуют специальные числовые значения `Infinity` (бесконечность) и `NaN` (ошибка вычислений).

Например, бесконечность Infinity получается при делении на ноль:

```javascript
alert( 1 / 0 ); // Infinity
```
Ошибка вычислений NaN будет результатом некорректной математической операции, например:

```javascript
alert( "нечисло" * 2 ); // NaN, ошибка
```


## Строка «String»
```javascript
var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';
```

В JavaScript одинарные и двойные кавычки равноправны. Можно использовать или те или другие.


## Булевый «boolean»

```javascript
var checked = true; // поле формы помечено галочкой
checked = false;    // поле формы не содержит галочки
```

У него всего два значения: `true` (истина) и `false` (ложь).
Как правило, такой тип используется для хранения значения типа да/нет


## Объекты «object»
```javascript
var user = { name: "Вася" };
```

Используется для коллекций данных и для объявления более сложных сущностей.

Объявляются объекты при помощи фигурных скобок `{...}`


## Массивы «array»
```javascript
var fruits = ["Яблоко", "Апельсин", "Слива"];
```

`Массив` – разновидность объекта, которая предназначена для хранения пронумерованных значений и предлагает дополнительные методы для удобного манипулирования такой коллекцией.

Они обычно используются для хранения упорядоченных коллекций данных, например – списка товаров на странице, студентов в группе и т.п.


## Специальное значение «null»
```javascript
var age = null;
```

Значение `null` не относится ни к одному из типов выше, а образует свой отдельный тип, состоящий из единственного значения `null`:

В JavaScript `null` не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. Это просто специальное значение, которое имеет смысл «ничего» или «значение неизвестно».

В частности, код выше говорит о том, что возраст `age` неизвестен.


## Специальное значение «undefined»
```javascript
var x;
alert( x ); // выведет "undefined"
```

Значение `undefined`, как и `null`, образует свой собственный тип, состоящий из одного этого значения. Оно имеет смысл «значение не присвоено».

Если переменная объявлена, но в неё ничего не записано, то её значение как раз и есть `undefined`.

Можно присвоить undefined и в явном виде, хотя это делается редко:

```javascript
var x = 123;
x = undefined;
alert( x ); // "undefined"
```

В явном виде `undefined` обычно не присваивают, так как это противоречит его смыслу. Для записи в переменную «пустого» или «неизвестного» значения используется `null`.