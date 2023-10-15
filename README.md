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
| カラム名                           | 型      | 内容                                   |
| ---------------------------------- | ------- | -------------------------------------- |
| id                                 | int     | primary key                            |
| Names                              | int     | CharacterNamesのid                     |
| WeaponTypes                        | int     | CharacterWeaponTypesのid               |
| Genders                            | int     | Gendersのid                            |
| Stars                              | int     | CharacterStarsのid                     |
| NormalAttackTitleNames             | int     | NormalAttackTitleNamesのid             |
| NormalAttackTitleDescriptions      | int     | NormalAttackTitleDescriptionsのid      |
| NormalAttackStatusNames            | int     | NormalAttackStatusNamesのid            |
| NormalAttackStatusTableNames       | varchar | NormalAttackStatusValuesのテーブル名   |
| NormalAttackStatusElementTypes     | int     | NormalAttackStatusElementTypesのid     |
| NormalAttackStatusAttackingTypes   | int     | NormalAttackStatusAttackingTypesのid   |
| ElementalSkillTitleNames           | int     | ElementalSkillTitleNamesのid           |
| ElementalSkillTitleDescriptions    | int     | ElementalSkillTitleDescriptionsのid    |
| ElementalSkillStatusNames          | int     | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | varchar | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementTypes   | int     | ElementalSkillStatusElementTypesのid   |
| ElementalSkillStatusAttackingTypes | int     | ElementalSkillStatusAttackingTypesのid |
| ElementalSkillMaxQty               | int     | 元素スキルの個数                       |
| ElementalBurstTitleNames           | int     | ElementalBurstTitleNamesのid           |
| ElementalBurstTitleDescriptions    | int     | ElementalBurstTitleDescriptionsのid    |
| ElementalBurstStatusNames          | int     | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | varchar | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementTypes   | int     | ElementalBurstStatusElementTypesのid   |
| ElementalBurstStatusAttackingTypes | int     | ElementalBurstStatusAttackingTypesのid |
| ElementalBurstMaxQty               | int     | 元素爆発の個数                         |
| Elements                           | int     | Elementsのid                           |
| Birthdays                          | int     | Birthdaysのid                          |
| Regions                            | int     | Regionsのid                            |
| Locations                          | int     | Locationsのid                          |
| Titles                             | int     | Titlesのid                             |
| Descriptions                       | int     | Descriptionsのid                       |
| ConstellationTitles                | int     | ConstellationTitlesのid                |

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
| カラム名                         | 型      | 内容                                 |
| -------------------------------- | ------- | ------------------------------------ |
| id                               | int     | primary key                          |
| NormalAttackStatusNames          | int     | NormalAttackStatusNamesのid          |
| NormalAttackStatusTableNames     | varchar | NormalAttackStatusValuesのテーブル名 |
| NormalAttackStatusElementTypes   | int     | NormalAttackStatusElementTypesのid   |
| NormalAttackStatusAttackingTypes | int     | NormalAttackStatusAttackingTypesのid |

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
| カラム名                           | 型      | 内容                                   |
| ---------------------------------- | ------- | -------------------------------------- |
| id                                 | int     | primary key                            |
| ElementalSkillStatusNames          | int     | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | varchar | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementTypes   | int     | ElementalSkillStatusElementTypesのid   |
| ElementalSkillStatusAttackingTypes | int     | ElementalSkillStatusAttackingTypesのid |

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
| カラム名                           | 型      | 内容                                   |
| ---------------------------------- | ------- | -------------------------------------- |
| id                                 | int     | primary key                            |
| ElementalBurstStatusNames          | int     | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | varchar | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementTypes   | int     | ElementalBurstStatusElementTypesのid   |
| ElementalBurstStatusAttackingTypes | int     | ElementalBurstStatusAttackingTypesのid |

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


#### CharacterLevelTexts
| カラム名       | 型  | 内容         |
| -------------- | --- | ------------ |
| id             | int | primary key  |
| Level          | int | 武器レベル   |
| AscensionStage | int | 限界突破段階 |

#### CharacterStatus(n)[^1] [^4]
| カラム名            | 型           | 内容                    |
| ------------------- | ------------ | ----------------------- |
| id                  | int          | primary key             |
| LevelTexts          | int          | CharacterLevelTextsのid |
| BaseHP              | int          | 基礎HP                  |
| BaseAttack          | int          | 基礎攻撃力              |
| BaseDefense         | int          | 基礎防御力              |
| AscensionStatusName | decimal(8,3) | 突破ステータス          |

#### CharacterAscensions
| カラム名         | 型  | 内容               |
| ---------------- | --- | ------------------ |
| id               | int | primary key        |
| Stage            | int | 限界突破段階       |
| UnlockedMaxLevel | int | 突破後のレベル上限 |











### Weapons
| カラム名            | 型      | 内容                     |
| ------------------- | ------- | ------------------------ |
| id                  | int     | primary key              |
| Names               | int     | WeaponNamesのid          |
| Types               | int     | WeaponTypesのid          |
| SubStatusNames      | int     | WeaponSubStatusNamesのid |
| StatusTableName     | varchar | WeaponStatusのテーブル名 |
| Stars               | int     | WeaponStarsのid          |
| Ascensions          | int     | Ascensionのid            |
| LevelTexts          | int     | WeaponLevelTextsのid     |
| RefinementNames     | int     | RefinementNamesのid      |
| RefinementTableName | varchar | Refinementsのテーブル名  |

#### WeaponNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### WeaponTypes
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

#### WeaponLevelTexts
| カラム名       | 型  | 内容         |
| -------------- | --- | ------------ |
| id             | int | primary key  |
| Level          | int | 武器レベル   |
| AscensionStage | int | 限界突破段階 |

#### WeaponStatus(n)[^3]
| カラム名         | 型           | 内容                   |
| ---------------- | ------------ | ---------------------- |
| id               | int          | primary key            |
| WeaponLevelTexts | int          | WeaponLevelTextsのid   |
| BaseAttack       | int          | 基礎攻撃力             |
| AttackPercent    | decimal(8,3) | 攻撃力%の数値          |
| DefensePercent   | decimal(8,3) | 防御力%の数値          |
| HPPercent        | decimal(8,3) | HP%の数値              |
| CritRate         | decimal(8,3) | 会心率の数値           |
| CritDMG          | decimal(8,3) | 会心ダメージの数値     |
| EnergyRecharge   | decimal(8,3) | 元素チャージ効率の数値 |
| ElementalMastery | decimal(8,3) | 元素熟知の数値         |
| PhysicalDMGBonus | decimal(8,3) | 物理バフの数値         |

#### WeaponStars
| カラム名 | 型      | 内容         |
| -------- | ------- | ------------ |
| id       | int     | primary key  |
| Number   | int     | 数値         |
| Text     | varchar | テキスト表記 |

#### WeaponAscensions
| カラム名         | 型  | 内容               |
| ---------------- | --- | ------------------ |
| id               | int | primary key        |
| Stage            | int | 限界突破段階       |
| UnlockedMaxLevel | int | 突破後のレベル上限 |

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






### Artifacts
| カラム名     | 型  | 内容                     |
| ------------ | --- | ------------------------ |
| id           | int | primary key              |
| Names        | int | ArtifactNamesのid        |
| Descriptions | int | ArtifactDescriptionsのid |
| Types        | int | ArtifactTypesのid        |
| Stars        | int | ArtifactStarsのid        |

##### ArtifactNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ArtifactDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ArtifactTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

##### ArtifactStars
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ArtifactSets
| カラム名 | 型  | 内容                              |
| -------- | --- | --------------------------------- |
| id       | int | primary key                       |
| Names    | int | ArtifactSetNamesのid              |
| Bonus2   | int | 2セット効果のArtifactSetBonusのid |
| Bonus4   | int | 4セット効果のArtifactSetBonusのid |

##### ArtifactSetNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ArtifactSetBonus
| カラム名     | 型  | 内容                             |
| ------------ | --- | -------------------------------- |
| id           | int | primary key                      |
| Needcounts   | int | セット効果発動のための必要個数   |
| Descriptions | int | ArtifactSetBonusDescriptionsのid |

##### ArtifactSetBonusDescriptions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

#### ArtifactSetBonusStatus
| カラム名           | 型           | 内容                            |
| ------------------ | ------------ | ------------------------------- |
| id                 | int          | primary key                     |
| ArtifactSetBonusId | int          | ArtifactSetBonusのid            |
| Names              | int          | ArtifactSetBonusStatusNamesのid |
| Numbers            | decimal(8,3) | セット効果の数値                |

##### ArtifactSetBonusStatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

[^1]:n=>Charactersテーブルのid
[^2]:n=>Weaponsテーブルのid
[^3]:Lv.1時点での基礎攻撃力
[^4]:AscensionStatusName=>突破ステータス名