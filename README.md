# データベースの設計

## テーブル名一覧
| テーブル名 | テーブルの内容 |
| ---------- | -------------- |

## NamesテーブルのIDについて
| 0              | 000            | 0000           |
| -------------- | -------------- | -------------- |
| 大枠の識別番号 | 内容の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | characters |
| 2   | weapons    |
| 3   | artifacts  |

### weaponsの割り振り
| id  | 内容 |
| --- | ---- |

### charactersの割り振り
| id  | 内容 |
| --- | ---- |

## 各テーブルのカラム一覧

### Characters
| カラム名                           | 型  | 内容                                   |
| ---------------------------------- | --- | -------------------------------------- |
| id                                 | int | primary key                            |
| Names                              | int | CharacterNamesのid                     |
| WeaponTypes                        | int | CharacterWeaponTypesのid               |
| Genders                            | int | Gendersのid                            |
| Stars                              | int | CharacterStarsのid                     |
| NormalAttackTitleNames             | int | NormalAttackTitleNamesのid             |
| NormalAttackTitleDescriptions      | int | NormalAttackTitleDescriptionsのid      |
| NormalAttackStatusNames            | int | NormalAttackStatusNamesのid            |
| NormalAttackStatusTableNames       | var | NormalAttackStatusValuesのテーブル名   |
| NormalAttackStatusElementTypes     | int | NormalAttackStatusElementTypesのid     |
| NormalAttackStatusAttackingTypes   | int | NormalAttackStatusAttackingTypesのid   |
| ElementalSkillTitleNames           | int | ElementalSkillTitleNamesのid           |
| ElementalSkillTitleDescriptions    | int | ElementalSkillTitleDescriptionsのid    |
| ElementalSkillStatusNames          | int | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | var | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementTypes   | int | ElementalSkillStatusElementTypesのid   |
| ElementalSkillStatusAttackingTypes | int | ElementalSkillStatusAttackingTypesのid |
| ElementalSkillMaxQty               | int | 元素スキルの個数                       |
| ElementalBurstTitleNames           | int | ElementalBurstTitleNamesのid           |
| ElementalBurstTitleDescriptions    | int | ElementalBurstTitleDescriptionsのid    |
| ElementalBurstStatusNames          | int | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | var | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementTypes   | int | ElementalBurstStatusElementTypesのid   |
| ElementalBurstStatusAttackingTypes | int | ElementalBurstStatusAttackingTypesのid |
| ElementalBurstMaxQty               | int | 元素爆発の個数                         |
| Elements                           | int | Elementsのid                           |
| Birthdays                          | int | Birthdaysのid                          |
| Regions                            | int | Regionsのid                            |
| Locations                          | int | Locationsのid                          |
| Titles                             | int | Titlesのid                             |
| Descriptions                       | int | Descriptionsのid                       |
| ConstellationTitles                | int | ConstellationTitlesのid                |

#### CharacterNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### CharacterWeaponTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Genders
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### CharacterStars
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### NormalAttackTitleNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### NormalAttackTitleDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### NormalAttackStatus
| カラム名                         | 型  | 内容                                 |
| -------------------------------- | --- | ------------------------------------ |
| id                               | int | primary key                          |
| NormalAttackStatusNames          | int | NormalAttackStatusNamesのid          |
| NormalAttackStatusTableNames     | var | NormalAttackStatusValuesのテーブル名 |
| NormalAttackStatusElementTypes   | int | NormalAttackStatusElementTypesのid   |
| NormalAttackStatusAttackingTypes | int | NormalAttackStatusAttackingTypesのid |

##### NormalAttackStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### NormalAttackStatusValue(n)[^1]
| カラム名  | 型           | 内容                   |
| --------- | ------------ | ---------------------- |
| id        | int          | primary key            |
| Level     | int          | 天賦レベル             |
| ValueText | varchar      | 天賦倍率のテキスト表記 |
| Number    | decimal(8,3) | 天賦倍率の数値         |

##### NormalAttackStatusElementTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### NormalAttackStatusAttackingTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalSkillTitleNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalSkillTitleDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalSkillStatus
| カラム名                           | 型  | 内容                                   |
| ---------------------------------- | --- | -------------------------------------- |
| id                                 | int | primary key                            |
| ElementalSkillStatusNames          | int | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | var | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementTypes   | int | ElementalSkillStatusElementTypesのid   |
| ElementalSkillStatusAttackingTypes | int | ElementalSkillStatusAttackingTypesのid |

##### ElementalSkillStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ElementalSkillStatusValue(n)[^1]
| カラム名  | 型           | 内容                   |
| --------- | ------------ | ---------------------- |
| id        | int          | primary key            |
| Level     | int          | 天賦レベル             |
| ValueText | varchar      | 天賦倍率のテキスト表記 |
| Number    | decimal(8,3) | 天賦倍率の数値         |

##### ElementalSkillStatusElementTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ElementalSkillStatusAttackingTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalBurstTitleNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalBurstTitleDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ElementalBurstStatus
| カラム名                           | 型  | 内容                                   |
| ---------------------------------- | --- | -------------------------------------- |
| id                                 | int | primary key                            |
| ElementalBurstStatusNames          | int | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | var | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementTypes   | int | ElementalBurstStatusElementTypesのid   |
| ElementalBurstStatusAttackingTypes | int | ElementalBurstStatusAttackingTypesのid |

##### ElementalBurstStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ElementalBurstStatusValue(n)[^1]
| カラム名  | 型           | 内容                   |
| --------- | ------------ | ---------------------- |
| id        | int          | primary key            |
| Level     | int          | 天賦レベル             |
| ValueText | varchar      | 天賦倍率のテキスト表記 |
| Number    | decimal(8,3) | 天賦倍率の数値         |

##### ElementalBurstStatusElementTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ElementalBurstStatusAttackingTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### PassiveTalents
| カラム名     | 型  | 内容                          |
| ------------ | --- | ----------------------------- |
| id           | int | primary key                   |
| CharacterId  | int | Charactersのid                |
| Names        | int | PassiveTalentNamesのid        |
| Descriptions | int | PassiveTalentDescriptionsのid |

##### PassiveTalentNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### PassiveTalentDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### PassiveTalentStatus
| カラム名        | 型           | 内容                         |
| --------------- | ------------ | ---------------------------- |
| id              | int          | primary key                  |
| PassiveTalentId | int          | PassiveTalentsのid           |
| Names           | int          | PassiveTalentStatusNamesのid |
| Number          | decimal(8,3) | 数値                         |

##### PassiveTalentStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Elements
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Birthdays
| カラム名 | 型  | 内容        |
| -------- | --- | ----------- |
| id       | int | primary key |
| Month    | int | 誕生月      |
| day      | int | 誕生日      |

#### Regions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Location
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Regions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Titles
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Descriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |


#### ConstellationTitles
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |






#### Constellation(n)[^1]
| カラム名    | 型  | 内容                          |
| ----------- | --- | ----------------------------- |
| id          | int | primary key                   |
| Rank        | int | 凸数                          |
| Name        | int | ConstellationNamesのid        |
| Description | int | ConstellationDesctiptionsのid |

##### ConstellationNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ConstellationDesctiptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ConstellationStatus
| カラム名        | 型           | 内容                         |
| --------------- | ------------ | ---------------------------- |
| id              | int          | primary key                  |
| ConstellationId | int          | Constellationsのid           |
| Names           | int          | ConstellationStatusNamesのid |
| Number          | decimal(8,3) | 数値                         |

##### ConstellationStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |





#### CharacterStatus
| カラム名 | 型  | 内容        |
| -------- | --- | ----------- |
| id       | int | primary key |
| level    | int | レベル      |









**charactersの正規化をする**

### Weapons
| カラム名            | 型      | 内容                    |
| ------------------- | ------- | ----------------------- |
| id                  | int     | primary key             |
| Names               | int     | WeaponNamesのid         |
| Types               | int     | WeaponTypesのid         |
| SubStatusNames      | int     | SubStatusNamesのid      |
| SubStatus           | int     | SubStatusのid           |
| Stars               | int     | WeaponStarsのid         |
| AscensionStages     | int     | AscensionStagesのid     |
| Level               | int     | レベル                  |
| RefinementNames     | int     | RefinementNamesのid     |
| RefinementTableName | varchar | Refinementsのテーブル名 |

#### WeaponsNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### WeaponsTypes
| カラム名 | 型      | 内容             |
| -------- | ------- | ---------------- |
| id       | int     | primary key      |
| Japanese | varchar | 日本語表記の名前 |
| English  | varchar | 英語表記の名前   |

#### WeaponSubStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### WeaponSubStatus
| カラム名         | 型           | 内容                   |
| ---------------- | ------------ | ---------------------- |
| id               | int          | primary key            |
| BaseAttacks      | int          | BaseAttacksのid        |
| AttackPercent    | decimal(8,3) | 攻撃力%の数値          |
| DefensePercent   | decimal(8,3) | 防御力%の数値          |
| HPPercent        | decimal(8,3) | HP%の数値              |
| CritRate         | decimal(8,3) | 会心率の数値           |
| CritDMG          | decimal(8,3) | 会心ダメージの数値     |
| EnergyRecharge   | decimal(8,3) | 元素チャージ効率の数値 |
| ElementalMastery | decimal(8,3) | 元素熟知の数値         |
| PyroDMGBonus     | decimal(8,3) | 炎元素バフの数値       |
| HydroDMGBonus    | decimal(8,3) | 水元素バフの数値       |
| CryoDMGBonus     | decimal(8,3) | 氷元素バフの数値       |
| ElectroDMGBonus  | decimal(8,3) | 雷元素バフの数値       |
| AnemoDMGBonus    | decimal(8,3) | 風元素バフの数値       |
| GeoDMGBonus      | decimal(8,3) | 岩元素バフの数値       |
| DendroDMGBonus   | decimal(8,3) | 草元素バフの数値       |
| PhysicalDMGBonus | decimal(8,3) | 物理バフの数値         |

#### WeaponBaseAttacks
| カラム名 | 型  | 内容                                  |
| -------- | --- | ------------------------------------- |
| id       | int | primary key                           |
| Level    | int | レベル                                |
| Type_38  | int | Lv1時点で基礎攻撃力38の基礎攻撃力数値 |
| :        | :   | :                                     |
| Type_49  | int | Lv1時点で基礎攻撃力49の基礎攻撃力数値 |

#### WeaponStars
| カラム名 | 型      | 内容         |
| -------- | ------- | ------------ |
| id       | int     | primary key  |
| Number   | int     | 数値         |
| Text     | varchar | テキスト表記 |

#### WeaponAscensionStages
| カラム名       | 型  | 内容                |
| -------------- | --- | ------------------- |
| id             | int | primary key         |
| Star_3         | int | 星3の突破ボーナス値 |
| Star_4         | int | 星4の突破ボーナス値 |
| Star_5         | int | 星5の突破ボーナス値 |
| UnlockMaxLevel | int | 突破後のレベル上限  |

#### RefinementNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### Refinement(n)[^2]
| カラム名     | 型  | 内容                       |
| ------------ | --- | -------------------------- |
| Rank         | int | 精錬ランク                 |
| Descriptions | int | RefinementDescriptionsのid |

##### RefinementDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### RefinementStatus
| カラム名     | 型           | 内容                      |
| ------------ | ------------ | ------------------------- |
| id           | int          | primary key               |
| RefinementId | int          | Refinementsのid           |
| Names        | int          | RefinementStatusNamesのid |
| Number       | decimal(8,3) | 数値                      |

##### RefinementStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |



[^1]:n=>Charactersテーブルのid
[^2]:n=>Weaponsテーブルのid
[^3]:StatusNameのところは武器効果のステータス名