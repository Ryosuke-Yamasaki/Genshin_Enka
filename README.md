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

## NamesテーブルのIDについて
|0|000|0000|
|-|-|-|
|大枠の識別番号|内容の識別番号|各テーブルのid|

|id|内容|
|-|-|
|1|characters|
|2|weapons|

**weaponsの割り振り**
|id|内容|
|-|-|
|001|WeaponNames|
|002|SubStatusNames|
|003|RefinementNames|
|004|RefinementDescriptions|
|005|RefinementPropertyNames|

**charactersの割り振り**
|id|内容|
|-|-|

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
|Names|int|WeaponNamesのid|
|Types|int|WeaponTypesのid|
|SubStatusNames|int|SubStatusNamesのid|
|SubStatus|int|SubStatusのid|
|BaseAttacks|int|BaseAttacksのid|
|Stars|int|WeaponStarsのid|
|AscensionStages|int|AscensionStagesのid|
|Level|int|レベル|
|RefinementTextValues|int|RefinementTextValuesのid|
|RefinementPropertyTableNames|varchar|各武器のRefinementPropertyのテーブル名|

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
|Japanese|varchar|日本語表記の名前|
|English|varchar|英語表記の名前|

### WeaponSubStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### WeaponSubStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|BaseAttacks|int|BaseAttacksのid|
|AttackPercent|decimal(8,3)|攻撃力%の数値|
|DefensePercent|decimal(8,3)|防御力%の数値|
|HPPercent|decimal(8,3)|HP%の数値|
|CritRate|decimal(8,3)|会心率の数値|
|CritDMG|decimal(8,3)|会心ダメージの数値|
|EnergyRecharge|decimal(8,3)|元素チャージ効率の数値|
|ElementalMastery|decimal(8,3)|元素熟知の数値|
|PyroDMGBonus|decimal(8,3)|炎元素バフの数値|
|HydroDMGBonus|decimal(8,3)|水元素バフの数値|
|CryoDMGBonus|decimal(8,3)|氷元素バフの数値|
|ElectroDMGBonus|decimal(8,3)|雷元素バフの数値|
|AnemoDMGBonus|decimal(8,3)|風元素バフの数値|
|GeoDMGBonus|decimal(8,3)|岩元素バフの数値|
|DendroDMGBonus|decimal(8,3)|草元素バフの数値|
|PhysicalDMGBonus|decimal(8,3)|物理バフの数値|

### WeaponBaseAttacks
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|レベル|
|Type38|int|Type38の基礎攻撃力数値|
|:|:|:|
|Type49|int|Type49の基礎攻撃力数値|

### WeaponStars
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Number|int|数値|
|Text|varchar|テキスト表記|

### WeaponAscensionStages
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Star3|int|Star3の突破ボーナス値|
|Star4|int|Star4の突破ボーナス値|
|Star5|int|Star5の突破ボーナス値|
|UnlockMaxLevel|int|突破後のレベル上限|

### RefinementTextValues
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Rank|int|精錬ランクの数値|
|Names|int|RefinementNamesのid|
|Descriptions|int|RefinementDescriptionsのid|

### RefinementNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### RefinementDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

### RefinementProperty(n)[^1]
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|RefinementPropertyNamesのid|
|Number|decimal(8,3)|武器効果の各数値|

### RefinementPropertyNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

[^1]:nに入るのはWeaponsのid