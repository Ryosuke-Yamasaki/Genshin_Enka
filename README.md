# データベースの設計

## テーブル名一覧

|テーブル名|テーブルの内容|
|-|-|
|Characters|キャラクター基本情報|
|Weapons|武器基本情報|
|Names|名前情報|
|Stars|レアリティ情報|
|Visions|元素タイプ情報|
|WeaponTypes|武器種情報|
|AscensionStatus|突破ステータス情報|
|WeaponStatus|武器ステータス情報|

## 各テーブルのカラム一覧
### Characters
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|名前|
|Stars|int|レアリティ|
|Visions|int|元素タイプ|
|WeaponTypes|int|武器種|
|AscensionStatus|int|突破ステータス|

### Weapons
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|WeaponNames|int|名前|
|WeaponTypes|int|武器種|
|SubStatusNames|int|サブステータス名|
|SubStatus|int|サブステータス|
|BaseAttacks|int|基礎攻撃力|
|Stars|int|レアリティ|
|Level|int|武器レベル|
|AscensionStages|int|限界突破段階|
|Refinements|int|精錬ランク|

### WeaponsNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### WeaponsTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|JapaneseName|int|日本語表記の名前|
|EnglishName|int|英語表記の名前|

### SubStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### BaseAttacks(x)[^1]
[^1]:に入るのはLv.1時点での基礎攻撃力 $1\leq2$

|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|レベル|
|Type(x)|int|Type(x)の基礎攻撃力数値|

### SubStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|レベル|
|BaseAttacks|int|基礎攻撃力|
|Number|int|数値|









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
|Number|int|数値|
|Text|varchar|テキスト表記|

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
|Names|int|名前|
|Star4|decimal(8,3)|星4の数値|
|Star5|decimal(8,3)|星5の数値|

### WeaponStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|武器レベル|
|AscensionStages|int|限界突破段階|
|BaseAttacks|int|基礎攻撃力|
|SubStatus|int|サブステータス|

### AscensionStages
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|MaxLevel|int|レベル上限|

### BaseAttacks
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|レベル|
|Number|int|基礎攻撃力の数値|

### SubStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|