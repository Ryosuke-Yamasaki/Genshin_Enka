# データベースの設計

## テーブル名一覧
| テーブル名 | テーブルの内容 |
| ---------- | -------------- |

## StatusNamesテーブルのIDについて
| id  | 日本語                   | 英語                   |
| --- | ------------------------ | ---------------------- |
| 1   | 基礎HP                   | BaseHP                 |
| 2   | 基礎攻撃力               | BaseAttack             |
| 3   | 基礎防御力               | BaseDefense            |
| 4   | HP実数                   | HP                     |
| 5   | HP%                      | HPPercent              |
| 6   | 攻撃力実数               | Attack                 |
| 7   | 攻撃力%                  | AttackPercent          |
| 8   | 防御力実数               | Defense                |
| 9   | 防御力%                  | DefensePercent         |
| 10  | 基礎スピード             | BaseSpeed              |
| 11  | スピード%                | SpeedPercent           |
| 12  | 会心率                   | CritRate               |
| 13  | 会心率(通常)             | NormalAttackCritRate   |
| 14  | 会心率(重撃)             | ChargedAttackCritRate  |
| 15  | 会心率(落下)             | PlungingAttackCritRate |
| 16  | 会心率(元素スキル)       | ElementalSkillCritRate |
| 17  | 会心率(元素爆発)         | ElementalBurstCritRate |
| 18  | 会心率(燃焼)             | BurningCritRate        |
| 19  | 会心率(開花)             | BloomCritRate          |
| 20  | 会心率(超開花)           | HyperBloomCritRate     |
| 21  | 会心率(烈開花)           | BurgeonCritRate        |
| 22  | 会心ダメージ             | CritDMG                |
| 23  | 会心ダメージ(通常)       | NormalAttackCritDMG    |
| 24  | 会心ダメージ(重撃)       | ChargedAttackCritDMG   |
| 25  | 会心ダメージ(落下)       | PlungingAttackCritDMG  |
| 26  | 会心ダメージ(元素スキル) | ElementalSkillCritDMG  |
| 27  | 会心ダメージ(元素爆発)   | ElementalBurstCritDMG  |
| 28  | 会心ダメージ(燃焼)       | BurningCritDMG         |
| 29  | 会心ダメージ(開花)       | BloomCritDMG           |
| 30  | 会心ダメージ(超開花)     | HyperBloomCritDMG      |
| 31  | 会心ダメージ(烈開花)     | BurgeonCritDMG         |
| 32  | 元素熟知                 | ElementalMastery       |
| 33  | 元素チャージ効率         | EnergyRecharge         |
| 34  | ダメージバフ             | DMGBonus               |
| 35  | 受ける治療効果           | IncomingHealingBonus   |
| 36  | 与える治療効果           | HealingBonus           |
| 37  | 炎元素ダメージバフ       | PyroDMGBonus           |
| 38  | 水元素ダメージバフ       | HydroDMGBonus          |
| 39  | 氷元素ダメージバフ       | CryoDMGBonus           |
| 40  | 雷元素ダメージバフ       | ElectroDMGBonus        |
| 41  | 風元素ダメージバフ       | AnemoDMGBonus          |
| 42  | 岩元素ダメージバフ       | GeoDMGBonus            |
| 43  | 草元素ダメージバフ       | DendroDMGBonus         |
| 44  | 物理ダメージバフ         | PhysicalDMGBonus       |
| 45  | 通常攻撃バフ             | NormalAttackBonus      |
| 46  | 重撃バフ                 | ChargedAttackBonus     |
| 47  | 落下攻撃バフ             | PlungingAttackBonus    |
| 48  | 元素スキルバフ           | ElementalSkillBonus    |
| 49  | 元素爆発バフ             | ElementalBurstBonus    |
| 50  | 炎元素耐性UP             | PyroRES                |
| 51  | 水元素耐性UP             | HydroRES               |
| 52  | 氷元素耐性UP             | CryoRES                |
| 53  | 雷元素耐性UP             | ElectroRES             |
| 54  | 風元素耐性UP             | AnemoRES               |
| 55  | 岩元素耐性UP             | GeoRES                 |
| 56  | 草元素耐性UP             | DendroRES              |
| 57  | 物理耐性UP               | PhysicalRES            |
| 58  | 炎元素耐性DOWN           | PyroRESDown            |
| 59  | 水元素耐性DOWN           | HydroRESDown           |
| 60  | 氷元素耐性DOWN           | CryoRESDown            |
| 61  | 雷元素耐性DOWN           | ElectroRESDown         |
| 62  | 風元素耐性DOWN           | AnemoRESDown           |
| 63  | 岩元素耐性DOWN           | GeoRESDown             |
| 64  | 草元素耐性DOWN           | DendroRESDown          |
| 65  | 物理耐性DOWN             | PhysicalRESDown        |
| 66  | クールタイム短縮         | CDReduction            |
| 67  | シールド強化             | ShieldStrength         |

## WeaponTypesテーブルのIDについて
| id  | 内容     |
| --- | -------- |
| 1   | 片手剣   |
| 2   | 両手剣   |
| 3   | 長衛武器 |
| 4   | 法器     |
| 5   | 弓       |

## ElementalTypesテーブルのIDについて
| id  | 内容   |
| --- | ------ |
| 1   | 炎元素 |
| 2   | 水元素 |
| 3   | 氷元素 |
| 4   | 雷元素 |
| 5   | 風元素 |
| 6   | 岩元素 |
| 7   | 草元素 |
| 8   | 物理   |

## AttackingTypesテーブルのIDについて
| id  | 内容       |
| --- | ---------- |
| 1   | 通常       |
| 2   | 重撃       |
| 3   | 落下       |
| 4   | 元素スキル |
| 5   | 元素爆発   |

## VisionsテーブルのIDについて
| id  | 内容   |
| --- | ------ |
| 1   | 炎元素 |
| 2   | 水元素 |
| 3   | 氷元素 |
| 4   | 雷元素 |
| 5   | 風元素 |
| 6   | 岩元素 |
| 7   | 草元素 |

## AscensionsテーブルのIDについて
| 0              | 0              |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | Characters |
| 2   | Weapons    |

## LevelTextsテーブルのIDについて
| 0              | 0              |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | Characters |
| 2   | Weapons    |

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
| NormalAttackTitleDescriptions      | varchar | 通常攻撃の説明文                       |
| NormalAttackStatusNames            | int     | NormalAttackStatusNamesのid            |
| NormalAttackStatusTableNames       | varchar | NormalAttackStatusValuesのテーブル名   |
| NormalAttackStatusElementalTypes   | int     | NormalAttackStatusElementalTypesのid   |
| NormalAttackStatusAttackingTypes   | int     | NormalAttackStatusAttackingTypesのid   |
| ElementalSkillTitleNames           | int     | ElementalSkillTitleNamesのid           |
| ElementalSkillTitleDescriptions    | varchar | 元素スキルの説明文                     |
| ElementalSkillStatusNames          | int     | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | varchar | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementalTypes | int     | ElementalSkillStatusElementalTypesのid |
| ElementalSkillStatusAttackingTypes | int     | ElementalSkillStatusAttackingTypesのid |
| ElementalSkillMaxQty               | int     | 元素スキルの個数                       |
| ElementalBurstTitleNames           | int     | ElementalBurstTitleNamesのid           |
| ElementalBurstTitleDescriptions    | varchar | 元素爆発の説明文                       |
| ElementalBurstStatusNames          | int     | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | varchar | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementalTypes | int     | ElementalBurstStatusElementalTypesのid |
| ElementalBurstStatusAttackingTypes | int     | ElementalBurstStatusAttackingTypesのid |
| ElementalBurstMaxQty               | int     | 元素爆発の個数                         |
| Visions                            | int     | Visionsのid                            |
| Birthdays                          | int     | Birthdaysのid                          |
| Regions                            | int     | Regionsのid                            |
| Locations                          | int     | Locationsのid                          |
| Titles                             | int     | Titlesのid                             |
| Descriptions                       | varchar | キャラクターの説明文                   |
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
| カラム名 | 型      | 内容         |
| -------- | ------- | ------------ |
| id       | int     | primary key  |
| Number   | int     | 数値         |
| Text     | varchar | テキスト表記 |

#### NormalAttackTitleNames
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
| NormalAttackStatusElementalTypes | int     | NormalAttackStatusElementalTypesのid |
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

##### NormalAttackStatusElementalTypes
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

#### ElementalSkillStatus
| カラム名                           | 型      | 内容                                   |
| ---------------------------------- | ------- | -------------------------------------- |
| id                                 | int     | primary key                            |
| ElementalSkillStatusNames          | int     | ElementalSkillStatusNamesのid          |
| ElementalSkillStatusTableNames     | varchar | ElementalSkillStatusValuesのテーブル名 |
| ElementalSkillStatusElementalTypes | int     | ElementalSkillStatusElementalTypesのid |
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

##### ElementalSkillStatusElementalTypes
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

#### ElementalBurstStatus
| カラム名                           | 型      | 内容                                   |
| ---------------------------------- | ------- | -------------------------------------- |
| id                                 | int     | primary key                            |
| ElementalBurstStatusNames          | int     | ElementalBurstStatusNamesのid          |
| ElementalBurstStatusTableNames     | varchar | ElementalBurstStatusValuesのテーブル名 |
| ElementalBurstStatusElementalTypes | int     | ElementalBurstStatusElementalTypesのid |
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

##### ElementalBurstStatusElementalTypes
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
| カラム名     | 型      | 内容                   |
| ------------ | ------- | ---------------------- |
| id           | int     | primary key            |
| CharacterId  | int     | Charactersのid         |
| Names        | int     | PassiveTalentNamesのid |
| Descriptions | varchar | 固有天賦の説明文       |

##### PassiveTalentNames
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

#### Visions
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

#### Locations
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

#### ConstellationTitles
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |






#### Constellation(n)[^1]
| カラム名    | 型      | 内容                   |
| ----------- | ------- | ---------------------- |
| id          | int     | primary key            |
| Rank        | int     | 凸数                   |
| Name        | int     | ConstellationNamesのid |
| Description | varchar | 命ノ星座の説明文       |

##### ConstellationNames
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
| BaseHP              | decimal(8,3) | 基礎HP                  |
| BaseAttack          | decimal(8,3) | 基礎攻撃力              |
| BaseDefense         | decimal(8,3) | 基礎防御力              |
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
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| Japanese | varchar | 日本語表記  |
| English  | varchar | 英語表記    |

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
| BaseAttack       | decimal(8,3) | 基礎攻撃力             |
| AttackPercent    | decimal(8,3) | 攻撃力%の数値          |
| DefensePercent   | decimal(8,3) | 防御力%の数値          |
| HPPercent        | decimal(8,3) | HP%の数値              |
| CritRate         | decimal(8,3) | 会心率の数値           |
| CritDMG          | decimal(8,3) | 会心ダメージの数値     |
| ElementalMastery | decimal(8,3) | 元素熟知の数値         |
| EnergyRecharge   | decimal(8,3) | 元素チャージ効率の数値 |
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
| カラム名     | 型      | 内容             |
| ------------ | ------- | ---------------- |
| Rank         | int     | 精錬ランク       |
| Descriptions | varchar | 武器効果の説明文 |

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
| カラム名     | 型      | 内容              |
| ------------ | ------- | ----------------- |
| id           | int     | primary key       |
| Names        | int     | ArtifactNamesのid |
| Descriptions | varchar | 聖遺物の説明文    |
| Types        | int     | ArtifactTypesのid |
| Stars        | int     | ArtifactStarsのid |

##### ArtifactNames
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
| カラム名 | 型      | 内容         |
| -------- | ------- | ------------ |
| id       | int     | primary key  |
| Number   | int     | 数値         |
| Text     | varchar | テキスト表記 |

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
| カラム名     | 型      | 内容                           |
| ------------ | ------- | ------------------------------ |
| id           | int     | primary key                    |
| Needcounts   | int     | セット効果発動のための必要個数 |
| Descriptions | varchar | セット効果の説明文             |

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