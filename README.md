# データベースの設計

## テーブル名一覧

|テーブル名|テーブルの内容|
|-|-|
|Characters|キャラクターの基本情報|
|Names|キャラクターの基本情報|
|Stars|レアリティの情報|
|Visions|元素タイプの情報|
|WeaponTypes|武器種の情報|
|AscensionStatus|突破ステータスの情報|
|AscensionStatusValues4|突破ステータスの星4の数値情報|
|AscensionStatusValues5|突破ステータスの星5の数値情報|

## 各テーブルのカラム一覧
### Characters
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names_id|int|名前|
|Stars_id|int|レアリティ|
|Visions_id|int|元素タイプ|
|WeaponTypes_id|int|武器種|
|AscensionStatus_id|int|突破ステータス|

### Names
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### Stars
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Text|varchar|テキスト表記|
|Number|int|数値|

### Visions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Text|varchar|テキスト表記|

### WeaponTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Text|varchar|テキスト表記|

### AscensionStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Name|varchar|名前|
|Text|varchar|テキスト表記|
|Value|int|数値|

### AscensionStatusValues4
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Number|float|数値|

### AscensionStatusValues5
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Number|float|数値|