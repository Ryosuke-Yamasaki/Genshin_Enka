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
|Names|int|WeaponNamesのid|
|Types|int|WeaponTypesのid|
|SubStatusNames|int|SubStatusNamesのid|
|SubStatus|int|SubStatusのid|
|BaseAttacks|int|BaseAttacksのid|
|Stars|int|WeaponStarsのid|
|AscensionStages|int|AscensionStagesのid|
|Level|int|レベル|
|Refinements|int||

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

### SubStatus
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

### BaseAttacks
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

### AscensionStages
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Star3|int|Star3の突破ボーナス値|
|Star4|int|Star4の突破ボーナス値|
|Star5|int|Star5の突破ボーナス値|
|UnlockMaxLevel|int|突破後のレベル上限|

### Refinements
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Rank|int|精錬ランクの数値|
|Names|int|RefinementNamesのid|
|Descriptions|int|RefinementDescriptionsのid|
|Status|int|RefinementStatusのid|

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

### RefinementStatus(n)[^1]
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|
|Number|decimal(8,3)|武器効果の各数値|







### Names
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

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

[^1]:nに入るのはWeaponsのid