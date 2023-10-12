# データベースの設計

## テーブル名一覧

|テーブル名|テーブルの内容|
|-|-|
|characters|キャラクターの基本情報|
|names|キャラクターの基本情報|
|stars|レアリティの情報|
|visions|元素タイプの情報|
|weaponTypes|武器種の情報|
|ascensionStatus|突破ステータスの情報|

## 各テーブルのカラム一覧
### characters
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|names_id|varchar|名前|
|stars_id|int|レアリティ|
|visions_id|int|元素タイプ|
|weaponTypes_id|int|武器種|
|ascensionStatus_id|int|突破ステータス|

### names
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|japanese|varchar|日本語表記|
|english|varchar|英語表記|

### stars
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|text|varchar|テキスト表記|
|number|int|数値|

### visions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|text|varchar|テキスト表記|

### weaponTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|text|varchar|テキスト表記|

### ascensionStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|name|varchar|名前|
|text|varchar|テキスト表記|
|values|int|数値|

### ascensionStatusValue4
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|number|float|数値|

### ascensionStatusValue5
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|number|float|数値|