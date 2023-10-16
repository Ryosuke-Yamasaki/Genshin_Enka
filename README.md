# データベースの設計

## テーブル名一覧
| テーブル名 | テーブルの内容 |
| ---------- | -------------- |

## NamesテーブルのIDについて
| 0              | 0000           |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | characters |
| 2   | weapons    |
| 3   | artifacts  |

## status_namesテーブルのIDについて
| id  | 日本語                   | 英語                     |
| --- | ------------------------ | ------------------------ |
| 1   | 基礎HP                   | base_hp                  |
| 2   | 基礎攻撃力               | base_attack              |
| 3   | 基礎防御力               | base_defense             |
| 4   | HP実数                   | hp_flat                  |
| 5   | HP%                      | hp_percent               |
| 6   | 攻撃力実数               | attack_flat              |
| 7   | 攻撃力%                  | attack_percent           |
| 8   | 防御力実数               | defense_flat             |
| 9   | 防御力%                  | defense_percent          |
| 10  | 基礎スピード             | base_speed               |
| 11  | スピード%                | speed_percent            |
| 12  | 会心率                   | crit_rate                |
| 13  | 会心率(通常)             | normal_attack_CritRate   |
| 14  | 会心率(重撃)             | ChargedAttack_CritRate   |
| 15  | 会心率(落下)             | PlungingAttack_CritRate  |
| 16  | 会心率(元素スキル)       | ElementalSkill_CritRate  |
| 17  | 会心率(元素爆発)         | ElementalBurst_CritRate  |
| 18  | 会心率(燃焼)             | Burning_CritRate         |
| 19  | 会心率(開花)             | Bloom_CritRate           |
| 20  | 会心率(超開花)           | HyperBloom_CritRate      |
| 21  | 会心率(烈開花)           | Burgeon_CritRate         |
| 22  | 会心ダメージ             | CritDMG                  |
| 23  | 会心ダメージ(通常)       | normal_attack_CritDMG    |
| 24  | 会心ダメージ(重撃)       | ChargedAttack_CritDMG    |
| 25  | 会心ダメージ(落下)       | PlungingAttack_CritDMG   |
| 26  | 会心ダメージ(元素スキル) | ElementalSkill_CritDMG   |
| 27  | 会心ダメージ(元素爆発)   | ElementalBurst_CritDMG   |
| 28  | 会心ダメージ(燃焼)       | Burning_CritDMG          |
| 29  | 会心ダメージ(開花)       | Bloom_CritDMG            |
| 30  | 会心ダメージ(超開花)     | HyperBloom_CritDMG       |
| 31  | 会心ダメージ(烈開花)     | Burgeon_CritDMG          |
| 32  | 元素熟知                 | ElementalMastery         |
| 33  | 元素チャージ効率         | EnergyRecharge           |
| 34  | ダメージバフ             | DMG_Bonus                |
| 35  | 受ける治療効果           | Incoming_HealingBonus    |
| 36  | 与える治療効果           | HealingBonus             |
| 37  | 炎元素ダメージバフ       | Pyro_DMG_Bonus           |
| 38  | 水元素ダメージバフ       | Hydro_DMG_Bonus          |
| 39  | 氷元素ダメージバフ       | Cryo_DMG_Bonus           |
| 40  | 雷元素ダメージバフ       | Electro_DMG_Bonus        |
| 41  | 風元素ダメージバフ       | Anemo_DMG_Bonus          |
| 42  | 岩元素ダメージバフ       | Geo_DMG_Bonus            |
| 43  | 草元素ダメージバフ       | Dendro_DMG_Bonus         |
| 44  | 物理ダメージバフ         | Physical_DMG_Bonus       |
| 45  | 通常攻撃バフ             | normal_attack_DMG_Bonus  |
| 46  | 重撃バフ                 | ChargedAttack_DMG_Bonus  |
| 47  | 落下攻撃バフ             | PlungingAttack_DMG_Bonus |
| 48  | 元素スキルバフ           | ElementalSkill_DMG_Bonus |
| 49  | 元素爆発バフ             | ElementalBurst_DMG_Bonus |
| 50  | 炎元素耐性UP             | Pyro_RES                 |
| 51  | 水元素耐性UP             | Hydro_RES                |
| 52  | 氷元素耐性UP             | Cryo_RES                 |
| 53  | 雷元素耐性UP             | Electro_RES              |
| 54  | 風元素耐性UP             | Anemo_RES                |
| 55  | 岩元素耐性UP             | Geo_RES                  |
| 56  | 草元素耐性UP             | Dendro_RES               |
| 57  | 物理耐性UP               | Physical_RES             |
| 58  | 炎元素耐性DOWN           | Pyro_RES_Down            |
| 59  | 水元素耐性DOWN           | Hydro_RES_Down           |
| 60  | 氷元素耐性DOWN           | Cryo_RES_Down            |
| 61  | 雷元素耐性DOWN           | Electro_RES_Down         |
| 62  | 風元素耐性DOWN           | Anemo_RES_Down           |
| 63  | 岩元素耐性DOWN           | Geo_RES_Down             |
| 64  | 草元素耐性DOWN           | Dendro_RES_Down          |
| 65  | 物理耐性DOWN             | Physical_RES_Down        |
| 66  | クールタイム短縮         | CD_Reduction             |
| 67  | シールド強化             | ShieldStrength           |

## WeaponTypesテーブルのIDについて
| id  | 内容     |
| --- | -------- |
| 1   | 片手剣   |
| 2   | 両手剣   |
| 3   | 長柄武器 |
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
| id  | 内容 |
| --- | ---- |
| 1   | 炎   |
| 2   | 水   |
| 3   | 氷   |
| 4   | 雷   |
| 5   | 風   |
| 6   | 岩   |
| 7   | 草   |

## gendersテーブルのIDについて
| id  | 内容 |
| --- | ---- |
| 1   | 男   |
| 2   | 女   |

## regionsテーブルのIDについて
| id  | 内容         |
| --- | ------------ |
| 1   | モンド       |
| 2   | 璃月         |
| 3   | 稲妻         |
| 4   | スメール     |
| 5   | フォンテーヌ |

## AscensionsテーブルのIDについて
| 0              | 0              |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | characters |
| 2   | weapons    |

## LevelTextsテーブルのIDについて
| 0              | 0              |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | characters |
| 2   | weapons    |

## 各テーブルのカラム一覧

### names
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### stars
| カラム名 | 型      | 内容         |
| -------- | ------- | ------------ |
| id       | int     | primary key  |
| number   | int     | 数値         |
| text     | varchar | テキスト表記 |

### visions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### weapon_types
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### genders
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### regions
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### locations
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

### characters
| カラム名            | 型      | 内容                 |
| ------------------- | ------- | -------------------- |
| id                  | int     | primary key          |
| name                | varchar | キャラ名             |
| title               | varchar | 称号                 |
| description         | varchar | キャラクターの説明文 |
| star                | int     | レアリティ           |
| vision_id           | int     | 元素タイプ           |
| weapon_type_id      | int     | 武器タイプ           |
| gender_id           | int     | 性別                 |
| region_id           | int     | 出身国               |
| location            | varchar | 所属                 |
| constellation_title | varchar | 星座名               |
| status_name         | int     | 突破ステータス       |

#### birthdays
| カラム名     | 型  | 内容          |
| ------------ | --- | ------------- |
| id           | int | primary key   |
| character_id | int | characterのid |
| month        | int | 誕生月        |
| day          | int | 誕生日        |

#### normal_attacks
| カラム名          | 型      | 内容               |
| ----------------- | ------- | ------------------ |
| id                | int     | primary key        |
| title_name        | varchar | 通常攻撃のタイトル |
| title_description | varchar | 通常攻撃の説明文   |

#### normal_attack_data
| カラム名          | 型           | 内容               |
| ----------------- | ------------ | ------------------ |
| id                | int          | primary key        |
| character_id      | int          | characterのid      |
| name              | varchar      | 攻撃名             |
| elemental_type_id | int          | どの元素攻撃なのか |
| attacking_type_id | int          | どの攻撃扱いなのか |
| aoe               | boolean      | 範囲攻撃かどうか   |
| level1            | decimal(8,3) | Lv.1天賦倍率       |
| level2            | decimal(8,3) | Lv.2天賦倍率       |
| level3            | decimal(8,3) | Lv.3天賦倍率       |
| level4            | decimal(8,3) | Lv.4天賦倍率       |
| level5            | decimal(8,3) | Lv.5天賦倍率       |
| level6            | decimal(8,3) | Lv.6天賦倍率       |
| level7            | decimal(8,3) | Lv.7天賦倍率       |
| level8            | decimal(8,3) | Lv.8天賦倍率       |
| level9            | decimal(8,3) | Lv.9天賦倍率       |
| level10           | decimal(8,3) | Lv.10天賦倍率      |
| level11           | decimal(8,3) | Lv.11天賦倍率      |
| level12           | decimal(8,3) | Lv.12天賦倍率      |
| level13           | decimal(8,3) | Lv.13天賦倍率      |
| level14           | decimal(8,3) | Lv.14天賦倍率      |
| level15           | decimal(8,3) | Lv.15天賦倍率      |

#### normal_attack_text_data
| カラム名              | 型      | 内容                          |
| --------------------- | ------- | ----------------------------- |
| id                    | int     | primary key                   |
| normal_attack_data_id | int     | normal_attack_dataのid        |
| level1                | varchar | Lv.1天賦倍率のテキストデータ  |
| level2                | varchar | Lv.2天賦倍率のテキストデータ  |
| level3                | varchar | Lv.3天賦倍率のテキストデータ  |
| level4                | varchar | Lv.4天賦倍率のテキストデータ  |
| level5                | varchar | Lv.5天賦倍率のテキストデータ  |
| level6                | varchar | Lv.6天賦倍率のテキストデータ  |
| level7                | varchar | Lv.7天賦倍率のテキストデータ  |
| level8                | varchar | Lv.8天賦倍率のテキストデータ  |
| level9                | varchar | Lv.9天賦倍率のテキストデータ  |
| level10               | varchar | Lv.10天賦倍率のテキストデータ |
| level11               | varchar | Lv.11天賦倍率のテキストデータ |
| level12               | varchar | Lv.12天賦倍率のテキストデータ |
| level13               | varchar | Lv.13天賦倍率のテキストデータ |
| level14               | varchar | Lv.14天賦倍率のテキストデータ |
| level15               | varchar | Lv.15天賦倍率のテキストデータ |

#### elemental_skills
| カラム名          | 型      | 内容                 |
| ----------------- | ------- | -------------------- |
| id                | int     | primary key          |
| title_name        | varchar | 元素スキルのタイトル |
| title_description | varchar | 元素スキルの説明文   |
| max_qty           | int     | 元素スキルの個数     |

#### elemental_skill_data
| カラム名          | 型           | 内容               |
| ----------------- | ------------ | ------------------ |
| id                | int          | primary key        |
| character_id      | int          | characterのid      |
| name              | varchar      | 攻撃名             |
| elemental_type_id | int          | どの元素攻撃なのか |
| attacking_type_id | int          | どの攻撃扱いなのか |
| aoe               | boolean      | 範囲攻撃かどうか   |
| level1            | decimal(8,3) | Lv.1天賦倍率       |
| level2            | decimal(8,3) | Lv.2天賦倍率       |
| level3            | decimal(8,3) | Lv.3天賦倍率       |
| level4            | decimal(8,3) | Lv.4天賦倍率       |
| level5            | decimal(8,3) | Lv.5天賦倍率       |
| level6            | decimal(8,3) | Lv.6天賦倍率       |
| level7            | decimal(8,3) | Lv.7天賦倍率       |
| level8            | decimal(8,3) | Lv.8天賦倍率       |
| level9            | decimal(8,3) | Lv.9天賦倍率       |
| level10           | decimal(8,3) | Lv.10天賦倍率      |
| level11           | decimal(8,3) | Lv.11天賦倍率      |
| level12           | decimal(8,3) | Lv.12天賦倍率      |
| level13           | decimal(8,3) | Lv.13天賦倍率      |
| level14           | decimal(8,3) | Lv.14天賦倍率      |
| level15           | decimal(8,3) | Lv.15天賦倍率      |

#### elemental_skill_text_data
| カラム名                | 型      | 内容                          |
| ----------------------- | ------- | ----------------------------- |
| id                      | int     | primary key                   |
| elemental_skill_data_id | int     | elemental_skill_dataのid      |
| level1                  | varchar | Lv.1天賦倍率のテキストデータ  |
| level2                  | varchar | Lv.2天賦倍率のテキストデータ  |
| level3                  | varchar | Lv.3天賦倍率のテキストデータ  |
| level4                  | varchar | Lv.4天賦倍率のテキストデータ  |
| level5                  | varchar | Lv.5天賦倍率のテキストデータ  |
| level6                  | varchar | Lv.6天賦倍率のテキストデータ  |
| level7                  | varchar | Lv.7天賦倍率のテキストデータ  |
| level8                  | varchar | Lv.8天賦倍率のテキストデータ  |
| level9                  | varchar | Lv.9天賦倍率のテキストデータ  |
| level10                 | varchar | Lv.10天賦倍率のテキストデータ |
| level11                 | varchar | Lv.11天賦倍率のテキストデータ |
| level12                 | varchar | Lv.12天賦倍率のテキストデータ |
| level13                 | varchar | Lv.13天賦倍率のテキストデータ |
| level14                 | varchar | Lv.14天賦倍率のテキストデータ |
| level15                 | varchar | Lv.15天賦倍率のテキストデータ |

#### elemental_bursts
| カラム名          | 型      | 内容               |
| ----------------- | ------- | ------------------ |
| id                | int     | primary key        |
| title_name        | varchar | 元素爆発のタイトル |
| title_description | varchar | 元素爆発の説明文   |
| cost              | int     | 必要エネルギー     |

#### elemental_burst_data
| カラム名          | 型           | 内容               |
| ----------------- | ------------ | ------------------ |
| id                | int          | primary key        |
| character_id      | int          | characterのid      |
| name              | varchar      | 攻撃名             |
| elemental_type_id | int          | どの元素攻撃なのか |
| attacking_type_id | int          | どの攻撃扱いなのか |
| aoe               | boolean      | 範囲攻撃かどうか   |
| level1            | decimal(8,3) | Lv.1天賦倍率       |
| level2            | decimal(8,3) | Lv.2天賦倍率       |
| level3            | decimal(8,3) | Lv.3天賦倍率       |
| level4            | decimal(8,3) | Lv.4天賦倍率       |
| level5            | decimal(8,3) | Lv.5天賦倍率       |
| level6            | decimal(8,3) | Lv.6天賦倍率       |
| level7            | decimal(8,3) | Lv.7天賦倍率       |
| level8            | decimal(8,3) | Lv.8天賦倍率       |
| level9            | decimal(8,3) | Lv.9天賦倍率       |
| level10           | decimal(8,3) | Lv.10天賦倍率      |
| level11           | decimal(8,3) | Lv.11天賦倍率      |
| level12           | decimal(8,3) | Lv.12天賦倍率      |
| level13           | decimal(8,3) | Lv.13天賦倍率      |
| level14           | decimal(8,3) | Lv.14天賦倍率      |
| level15           | decimal(8,3) | Lv.15天賦倍率      |

#### elemental_burst_text_data
| カラム名                | 型      | 内容                          |
| ----------------------- | ------- | ----------------------------- |
| id                      | int     | primary key                   |
| elemental_burst_data_id | int     | elemental_burst_dataのid      |
| level1                  | varchar | Lv.1天賦倍率のテキストデータ  |
| level2                  | varchar | Lv.2天賦倍率のテキストデータ  |
| level3                  | varchar | Lv.3天賦倍率のテキストデータ  |
| level4                  | varchar | Lv.4天賦倍率のテキストデータ  |
| level5                  | varchar | Lv.5天賦倍率のテキストデータ  |
| level6                  | varchar | Lv.6天賦倍率のテキストデータ  |
| level7                  | varchar | Lv.7天賦倍率のテキストデータ  |
| level8                  | varchar | Lv.8天賦倍率のテキストデータ  |
| level9                  | varchar | Lv.9天賦倍率のテキストデータ  |
| level10                 | varchar | Lv.10天賦倍率のテキストデータ |
| level11                 | varchar | Lv.11天賦倍率のテキストデータ |
| level12                 | varchar | Lv.12天賦倍率のテキストデータ |
| level13                 | varchar | Lv.13天賦倍率のテキストデータ |
| level14                 | varchar | Lv.14天賦倍率のテキストデータ |
| level15                 | varchar | Lv.15天賦倍率のテキストデータ |

#### passive_talents
| カラム名     | 型      | 内容             |
| ------------ | ------- | ---------------- |
| id           | int     | primary key      |
| character_id | int     | characterのid    |
| name         | varchar | 固有天賦名       |
| description  | varchar | 固有天賦の説明文 |

#### passive_talent_data
| カラム名          | 型           | 内容               |
| ----------------- | ------------ | ------------------ |
| id                | int          | primary key        |
| passive_talent_id | int          | passive_talentのid |
| status_name_id    | int          | status_nameのid    |
| number            | decimal(8,3) | 数値               |

#### constellation(n)[^5]
| カラム名     | 型      | 内容          |
| ------------ | ------- | ------------- |
| id           | int     | primary key   |
| character_id | int     | characterのid |
| name         | varchar | n凸の名前     |
| Description  | varchar | n凸の説明文   |

#### constellation_status
| カラム名         | 型           | 内容              |
| ---------------- | ------------ | ----------------- |
| id               | int          | primary key       |
| constellation_id | int          | constellationのid |
| status_name_id   | int          | status_nameのid   |
| number           | decimal(8,3) | 数値              |

#### ascend_level
| カラム名  | 型  | 内容         |
| --------- | --- | ------------ |
| id        | int | primary key  |
| level     | int | レベル       |
| ascension | int | 限界突破段階 |

#### character_status[^4]
| カラム名        | 型           | 内容             |
| --------------- | ------------ | ---------------- |
| id              | int          | primary key      |
| ascend_level_id | int          | ascend_levelのid |
| base_hp         | decimal(8,3) | 基礎HP           |
| base_attack     | decimal(8,3) | 基礎攻撃力       |
| base_defense    | decimal(8,3) | 基礎防御力       |
| ascension_data  | decimal(8,3) | 突破ステータス   |












### Weapons
| カラム名            | 型      | 内容                     |
| ------------------- | ------- | ------------------------ |
| id                  | int     | primary key              |
| Names               | int     | WeaponNamesのid          |
| Types               | int     | WeaponTypesのid          |
| SubstatusNames      | int     | WeaponSubstatusNamesのid |
| statusTableName     | varchar | Weaponstatusのテーブル名 |
| Stars               | int     | WeaponStarsのid          |
| Ascensions          | int     | Ascensionのid            |
| LevelTexts          | int     | WeaponLevelTextsのid     |
| RefinementNames     | int     | RefinementNamesのid      |
| RefinementTableName | varchar | Refinementsのテーブル名  |

#### WeaponNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

#### WeaponTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

#### WeaponSubstatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

#### WeaponLevelTexts
| カラム名       | 型  | 内容         |
| -------------- | --- | ------------ |
| id             | int | primary key  |
| Level          | int | 武器レベル   |
| AscensionStage | int | 限界突破段階 |

#### Weaponstatus(n)[^3]
| カラム名           | 型           | 内容                   |
| ------------------ | ------------ | ---------------------- |
| id                 | int          | primary key            |
| WeaponLevelTexts   | int          | WeaponLevelTextsのid   |
| Base_Attack        | decimal(8,3) | 基礎攻撃力             |
| Attack_Percent     | decimal(8,3) | 攻撃力%の数値          |
| Defense_Percent    | decimal(8,3) | 防御力%の数値          |
| HP_Percent         | decimal(8,3) | HP%の数値              |
| CritRate           | decimal(8,3) | 会心率の数値           |
| CritDMG            | decimal(8,3) | 会心ダメージの数値     |
| ElementalMastery   | decimal(8,3) | 元素熟知の数値         |
| EnergyRecharge     | decimal(8,3) | 元素チャージ効率の数値 |
| Physical_DMG_Bonus | decimal(8,3) | 物理バフの数値         |

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
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

#### Refinement(n)[^2]
| カラム名     | 型      | 内容             |
| ------------ | ------- | ---------------- |
| Rank         | int     | 精錬ランク       |
| Descriptions | varchar | 武器効果の説明文 |

#### Refinementstatus
| カラム名     | 型           | 内容                      |
| ------------ | ------------ | ------------------------- |
| id           | int          | primary key               |
| RefinementId | int          | Refinementsのid           |
| Names        | int          | RefinementstatusNamesのid |
| Number       | decimal(8,3) | 数値                      |

##### RefinementstatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |






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
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

##### ArtifactTypes
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

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
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |

#### ArtifactSetBonus
| カラム名     | 型      | 内容                           |
| ------------ | ------- | ------------------------------ |
| id           | int     | primary key                    |
| Needcounts   | int     | セット効果発動のための必要個数 |
| Descriptions | varchar | セット効果の説明文             |

#### ArtifactSetBonusstatus
| カラム名           | 型           | 内容                            |
| ------------------ | ------------ | ------------------------------- |
| id                 | int          | primary key                     |
| ArtifactSetBonusId | int          | ArtifactSetBonusのid            |
| Names              | int          | ArtifactSetBonusstatusNamesのid |
| Numbers            | decimal(8,3) | セット効果の数値                |

##### ArtifactSetBonusstatusNames
| カラム名 | 型      | 内容        |
| -------- | ------- | ----------- |
| id       | int     | primary key |
| japanese | varchar | 日本語表記  |
| english  | varchar | 英語表記    |







### Targets
| カラム名        | 型  | 内容           |
| --------------- | --- | -------------- |
| id              | int | primary key    |
| Characters      | int | Charactersのid |
| CharacterLevels | int | Charactersのid |


[^1]:n=>Charactersテーブルのid
[^2]:n=>Weaponsテーブルのid
[^3]:Lv.1時点での基礎攻撃力
[^4]:character=>characterの英語名
[^5]:n=>凸数