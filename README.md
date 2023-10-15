# データベースの設計

## テーブル名一覧
|テーブル名|テーブルの内容|
|-|-|

## NamesテーブルのIDについて
|0|000|0000|
|-|-|-|
|大枠の識別番号|内容の識別番号|各テーブルのid|

### 大枠の割り振り
|id|内容|
|-|-|
|1|characters|
|2|weapons|
|3|artifacts|

### weaponsの割り振り
|id|内容|
|-|-|

### charactersの割り振り
|id|内容|
|-|-|

## 各テーブルのカラム一覧

### Characters
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|CharacterNamesのid|
|WeaponTypes|int|CharacterWeaponTypesのid|
|Genders|int|Gendersのid|
|Stars|int|CharacterStarsのid|
|NormalAttackTitles|int|NormalAttackTitlesのid|
|NormalAttackStatusTableNames|varchar|各キャラのNormalAttackStatusのテーブル名|
|ElementalSkillTitles|int|ElementalSkillTitlesのid|
|ElementalSkillStatusTableNames|varchar|各キャラのElementalSkillStatusのテーブル名|
|ElementalSkillMaxQty|int|元素スキルの個数|
|ElementalBurstTitles|int|ElementalBurstTitlesのid|
|ElementalBurstStatusTableNames|varchar|各キャラのElementalBurstStatusのテーブル名|
|ElementalBurstMaxQty|int|元素爆発の個数|
|Element|int|のid|
|Birthday|int|のid|
|Location|int|のid|
|Vision|int|のid|
|ConstellationName|int|のid|
|Title|int|のid|
|Description|int|のid|
|Constellation|int|のid|

#### CharacterNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### CharacterWeaponTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### Genders
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### CharacterStars
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### NormalAttackTitles
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|NormalAttackTitleNamesのid|
|Descriptions|int|NormalAttackTitleDescriptionsのid|

##### NormalAttackTitleNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### NormalAttackTitleDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### NormalAttackStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|CharacterId|int|Charactersのid|
|Names|int|NormalAttackStatusNamesのid|
|Values|int|NormalAttackStatusValuesのid|
|ElementTypes|int|NormalAttackStatusElementTypesのid|
|AttackingTypes|int|NormalAttackStatusAttackingTypesのid|

##### NormalAttackStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### NormalAttackStatusValues
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|天賦レベル|
|ValueText|varchar|天賦倍率のテキスト表記|
|Number|decimal(8,3)|天賦倍率の数値|

##### NormalAttackStatusElementTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### NormalAttackStatusAttackingTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### ElementalSkillTitles
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|ElementalSkillTitleNamesのid|
|Descriptions|int|ElementalSkillTitleDescriptionsのid|

##### ElementalSkillTitleNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalSkillTitleDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### ElementalSkillStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|CharacterId|int|Charactersのid|
|Names|int|ElementalSkillStatusNamesのid|
|Values|int|ElementalSkillStatusValuesのid|
|ElementTypes|int|ElementalSkillStatusElementTypesのid|
|AttackingTypes|int|ElementalSkillStatusAttackingTypesのid|

##### ElementalSkillStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalSkillStatusValues
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|天賦レベル|
|ValueText|varchar|天賦倍率のテキスト表記|
|Number|decimal(8,3)|天賦倍率の数値|

##### ElementalSkillStatusElementTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalSkillStatusAttackingTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### ElementalBurstTitles
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Names|int|ElementalBurstNamesのid|
|Descriptions|int|ElementalBurstDescriptionsのid|

##### ElementalBurstTitleNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalBurstTitleDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### ElementalBurstStatus
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|CharacterId|int|Charactersのid|
|Names|int|ElementalBurstStatusNamesのid|
|Values|int|ElementalBurstStatusValuesのid|
|ElementTypes|int|ElementalBurstStatusElementTypesのid|
|AttackingTypes|int|ElementalBurstStatusAttackingTypesのid|

##### ElementalBurstStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalBurstStatusValues
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|天賦レベル|
|ValueText|varchar|天賦倍率のテキスト表記|
|Number|decimal(8,3)|天賦倍率の数値|

##### ElementalBurstStatusElementTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### ElementalBurstStatusAttackingTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|




#### PassiveTalents
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|CharacterId|int|Charactersのid|
|Names|int|PassiveTalentNamesのid|
|Descriptions|int|PassiveTalentDescriptionsのid|

##### PassiveTalentNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### PassiveTalentDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|






**charactersの正規化をする**

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
|RefinementNames|int|RefinementNamesのid|
|RefinementValueTableName|varchar|RefinementValueのテーブル名|

#### WeaponsNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### WeaponsTypes
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記の名前|
|English|varchar|英語表記の名前|

#### WeaponSubStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### WeaponSubStatus
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

#### WeaponBaseAttacks
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Level|int|レベル|
|Type_38|int|Lv1時点で基礎攻撃力38の基礎攻撃力数値|
|:|:|:|
|Type_49|int|Lv1時点で基礎攻撃力49の基礎攻撃力数値|

#### WeaponStars
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Number|int|数値|
|Text|varchar|テキスト表記|

#### WeaponAscensionStages
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Star_3|int|星3の突破ボーナス値|
|Star_4|int|星4の突破ボーナス値|
|Star_5|int|星5の突破ボーナス値|
|UnlockMaxLevel|int|突破後のレベル上限|

#### RefinementNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

#### RefinementValue(n) [^2]
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Rank|int|精錬ランク|
|Descriptions|int|RefinementDescriptionsのid|
|StatusNames|int|RefinementStatusNamesのid|
|StatusNumber|decimal(8,3)|武器効果の各数値|

##### RefinementDescriptions
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

##### RefinementStatusNames
|カラム名|型|内容|
|-|-|-|
|id|int|primary key|
|Japanese|varchar|日本語表記|
|English|varchar|英語表記|

[^2]:n=>Charactersテーブルのid