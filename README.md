# データベースの設計

## テーブル名一覧

|テーブル名|テーブルの内容|
|-|-|
|characters|キャラクターの基本情報|
|star|レアリティの情報|
|visions|元素タイプの情報|
|weaponType|武器種の情報|

## 各テーブルのカラム一覧
### characters
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|name_jp|varchar|日本語の名前|
|name_en|varchar|英語の名前|
|star|int|レアリティ|
|vision|int|元素タイプ|
|weapon_type|int|武器種|

### star
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|text|varchar|テキスト表記|
|value|int|数値|