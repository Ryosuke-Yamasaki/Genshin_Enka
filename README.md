# データベースの設計

## テーブル名一覧
| テーブル名 | テーブルの内容 |
| ---------- | -------------- |

## namesテーブルのIDについて
| 0              | 0000           |
| -------------- | -------------- |
| 大枠の識別番号 | 各テーブルのid |

### 大枠の割り振り
| id  | 内容       |
| --- | ---------- |
| 1   | characters |
| 2   | weapons    |
| 3   | artifacts  |

## stat_namesテーブルのIDについて
| id  | 日本語                   | 英語                          |
| --- | ------------------------ | ----------------------------- |
| 1   | 基礎HP                   | base_hp                       |
| 2   | 基礎攻撃力               | base_attack                   |
| 3   | 基礎防御力               | base_defense                  |
| 4   | HP実数                   | hp_flat                       |
| 5   | HP%                      | hp_percent                    |
| 6   | 攻撃力実数               | attack_flat                   |
| 7   | 攻撃力%                  | attack_percent                |
| 8   | 防御力実数               | defense_flat                  |
| 9   | 防御力%                  | defense_percent               |
| 10  | 基礎スピード             | base_speed                    |
| 11  | スピード%                | speed_percent                 |
| 12  | 会心率                   | critical_rate                 |
| 13  | 会心率(通常)             | normal_attack_critical_rate   |
| 14  | 会心率(重撃)             | charged_Attack_critical_rate  |
| 15  | 会心率(落下)             | plunging_Attack_critical_rate |
| 16  | 会心率(元素スキル)       | elemental_skill_critical_rate |
| 17  | 会心率(元素爆発)         | elemental_burst_critical_rate |
| 18  | 会心率(燃焼)             | burning_critical_rate         |
| 19  | 会心率(開花)             | bloom_critical_rate           |
| 20  | 会心率(超開花)           | hyperBloom_critical_rate      |
| 21  | 会心率(烈開花)           | burgeon_critical_rate         |
| 22  | 会心ダメージ             | critical_dmg                  |
| 23  | 会心ダメージ(通常)       | normal_attack_critical_dmg    |
| 24  | 会心ダメージ(重撃)       | charged_attack_critical_dmg   |
| 25  | 会心ダメージ(落下)       | plunging_attack_critical_dmg  |
| 26  | 会心ダメージ(元素スキル) | elemental_skill_critical_dmg  |
| 27  | 会心ダメージ(元素爆発)   | elemental_burst_critical_dmg  |
| 28  | 会心ダメージ(燃焼)       | burning_critical_dmg          |
| 29  | 会心ダメージ(開花)       | bloom_critical_dmg            |
| 30  | 会心ダメージ(超開花)     | hyperBloom_critical_dmg       |
| 31  | 会心ダメージ(烈開花)     | burgeon_critical_dmg          |
| 32  | 元素熟知                 | elemental_mastery             |
| 33  | 元素チャージ効率         | energy_recharge               |
| 34  | ダメージバフ             | dmg_bonus                     |
| 35  | 受ける治療効果           | incoming_healing_Bonus        |
| 36  | 与える治療効果           | Hhealing_bonus                |
| 37  | 炎元素ダメージバフ       | pyro_dmg_bonus                |
| 38  | 水元素ダメージバフ       | hydro_dmg_bonus               |
| 39  | 氷元素ダメージバフ       | cryo_dmg_bonus                |
| 40  | 雷元素ダメージバフ       | electro_dmg_bonus             |
| 41  | 風元素ダメージバフ       | anemo_dmg_bonus               |
| 42  | 岩元素ダメージバフ       | geo_dmg_bonus                 |
| 43  | 草元素ダメージバフ       | dendro_dmg_bonus              |
| 44  | 物理ダメージバフ         | physical_dmg_bonus            |
| 45  | 通常攻撃バフ             | normal_attack_dmg_bonus       |
| 46  | 重撃バフ                 | charged_attack_dmg_bonus      |
| 47  | 落下攻撃バフ             | plunging_attack_dmg_bonus     |
| 48  | 元素スキルバフ           | elemental_skill_dmg_bonus     |
| 49  | 元素爆発バフ             | elemental_burst_dmg_bonus     |
| 50  | 炎元素耐性UP             | pyro_res                      |
| 51  | 水元素耐性UP             | hydro_res                     |
| 52  | 氷元素耐性UP             | cryo_res                      |
| 53  | 雷元素耐性UP             | electro_res                   |
| 54  | 風元素耐性UP             | anemo_res                     |
| 55  | 岩元素耐性UP             | geo_res                       |
| 56  | 草元素耐性UP             | dendro_res                    |
| 57  | 物理耐性UP               | physical_res                  |
| 58  | 炎元素耐性DOWN           | pyro_res_Down                 |
| 59  | 水元素耐性DOWN           | hydro_res_Down                |
| 60  | 氷元素耐性DOWN           | cryo_res_Down                 |
| 61  | 雷元素耐性DOWN           | electro_res_Down              |
| 62  | 風元素耐性DOWN           | anemo_res_Down                |
| 63  | 岩元素耐性DOWN           | geo_res_Down                  |
| 64  | 草元素耐性DOWN           | dendro_res_Down               |
| 65  | 物理耐性DOWN             | physical_res_Down             |
| 66  | クールタイム短縮         | cd_reduction                  |
| 67  | シールド強化             | shield_strength               |

## weapon_typesテーブルのIDについて
| id  | 内容     |
| --- | -------- |
| 1   | 片手剣   |
| 2   | 両手剣   |
| 3   | 長柄武器 |
| 4   | 法器     |
| 5   | 弓       |

## elemental_typesテーブルのIDについて
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

## attacking_typesテーブルのIDについて
| id  | 内容       |
| --- | ---------- |
| 1   | 通常       |
| 2   | 重撃       |
| 3   | 落下       |
| 4   | 元素スキル |
| 5   | 元素爆発   |

## visionsテーブルのIDについて
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

## artifact_typesテーブルのIDについて
| id  | 内容 |
| --- | ---- |
| 1   | 花   |
| 2   | 羽   |
| 3   | 砂   |
| 4   | 杯   |
| 5   | 冠   |

## 各テーブルのカラム一覧

### characters
| カラム名            | 型      | 内容                 |
| ------------------- | ------- | -------------------- |
| id                  | int     | primary key          |
| name_japanese       | varchar | 日本語のキャラ名     |
| name_english        | varchar | 英語のキャラ名       |
| title               | varchar | 称号                 |
| description         | varchar | キャラクターの説明文 |
| star                | int     | レアリティ           |
| vision_id           | int     | 元素タイプ           |
| weapon_type_id      | int     | 武器タイプ           |
| gender_id           | int     | 性別                 |
| region_id           | int     | 出身国               |
| location            | varchar | 所属                 |
| constellation_title | varchar | 星座名               |
| stat_name_id        | int     | 突破ステータス       |

#### birthdays
| カラム名     | 型  | 内容          |
| ------------ | --- | ------------- |
| id           | int | primary key   |
| character_id | int | characterのid |
| month        | int | 誕生月        |
| day          | int | 誕生日        |

#### normal_attacks
| カラム名    | 型      | 内容               |
| ----------- | ------- | ------------------ |
| id          | int     | primary key        |
| name        | varchar | 通常攻撃のタイトル |
| description | varchar | 通常攻撃の説明文   |

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
| カラム名    | 型      | 内容                 |
| ----------- | ------- | -------------------- |
| id          | int     | primary key          |
| name        | varchar | 元素スキルのタイトル |
| description | varchar | 元素スキルの説明文   |
| max_qty     | int     | 元素スキルの個数     |

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
| カラム名    | 型      | 内容               |
| ----------- | ------- | ------------------ |
| id          | int     | primary key        |
| name        | varchar | 元素爆発のタイトル |
| description | varchar | 元素爆発の説明文   |
| cost        | int     | 必要エネルギー     |

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
| stat_name_id      | int          | stat_nameのid      |
| number            | decimal(8,3) | 数値               |

#### constellations
| カラム名     | 型      | 内容          |
| ------------ | ------- | ------------- |
| id           | int     | primary key   |
| character_id | int     | characterのid |
| rank1        | varchar | 1凸の名前     |
| rank2        | varchar | 2凸の名前     |
| rank3        | varchar | 3凸の名前     |
| rank4        | varchar | 4凸の名前     |
| rank5        | varchar | 5凸の名前     |

#### constellation_names
| カラム名           | 型      | 内容        |
| ------------------ | ------- | ----------- |
| id                 | int     | primary key |
| constellation_name | varchar | 星の名前    |
| description        | varchar | 凸の説明文  |

#### constellation_data
| カラム名              | 型           | 内容                   |
| --------------------- | ------------ | ---------------------- |
| id                    | int          | primary key            |
| constellation_name_id | int          | constellation_nameのid |
| stat_name_id          | int          | stat_nameのid          |
| number                | decimal(8,3) | 数値                   |

#### ascend_level
| カラム名  | 型  | 内容         |
| --------- | --- | ------------ |
| id        | int | primary key  |
| level     | int | レベル       |
| ascension | int | 限界突破段階 |

#### character_data[^4]
| カラム名        | 型           | 内容             |
| --------------- | ------------ | ---------------- |
| id              | int          | primary key      |
| ascend_level_id | int          | ascend_levelのid |
| base_hp         | decimal(8,3) | 基礎HP           |
| base_attack     | decimal(8,3) | 基礎攻撃力       |
| base_defense    | decimal(8,3) | 基礎防御力       |
| ascension_data  | decimal(8,3) | 突破ステータス   |












### weapons
| カラム名         | 型      | 内容                   |
| ---------------- | ------- | ---------------------- |
| id               | int     | primary key            |
| name_japanese    | varchar | 日本語の武器名         |
| name_english     | varchar | 英語の武器名           |
| weapon_type_id   | int     | 武器種                 |
| sub_stat_name_id | int     | サブステータスの名前   |
| base_attack_type | int     | Lv.1時点での基礎攻撃力 |
| star             | int     | レアリティ             |
| refinement_name  | varchar | 武器効果名             |

#### weapon_stat_data_type(n)[^3]
| カラム名           | 型           | 内容                   |
| ------------------ | ------------ | ---------------------- |
| id                 | int          | primary key            |
| ascend_level_id    | int          | ascend_levelのid       |
| base_attack        | decimal(8,3) | 基礎攻撃力             |
| attack_percent     | decimal(8,3) | 攻撃力%の数値          |
| defense_percent    | decimal(8,3) | 防御力%の数値          |
| hp_percent         | decimal(8,3) | HP%の数値              |
| critical_rate      | decimal(8,3) | 会心率の数値           |
| critical_dmg       | decimal(8,3) | 会心ダメージの数値     |
| elemental_mastery  | decimal(8,3) | 元素熟知の数値         |
| energy_recharge    | decimal(8,3) | 元素チャージ効率の数値 |
| physical_dmg_bonus | decimal(8,3) | 物理バフの数値         |

#### refinement_descriptions
| カラム名        | 型      | 内容                        |
| --------------- | ------- | --------------------------- |
| id              | int     | primary key                 |
| refinement_name | varchar | 武器効果名                  |
| rank1           | varchar | 精錬ランク1武器効果の説明文 |
| rank2           | varchar | 精錬ランク2武器効果の説明文 |
| rank3           | varchar | 精錬ランク3武器効果の説明文 |
| rank4           | varchar | 精錬ランク4武器効果の説明文 |
| rank5           | varchar | 精錬ランク5武器効果の説明文 |

#### refinement_stats
| カラム名       | 型           | 内容                       |
| -------------- | ------------ | -------------------------- |
| id             | int          | primary key                |
| description_id | int          | refinement_descriptionのid |
| stat_name_id   | int          | stat_nameのid              |
| rank1          | decimal(8,3) | 精錬ランク1時点での数値    |
| rank2          | decimal(8,3) | 精錬ランク2時点での数値    |
| rank3          | decimal(8,3) | 精錬ランク3時点での数値    |
| rank4          | decimal(8,3) | 精錬ランク4時点での数値    |
| rank5          | decimal(8,3) | 精錬ランク5時点での数値    |







### artifact_sets
| カラム名      | 型      | 内容             |
| ------------- | ------- | ---------------- |
| id            | int     | primary key      |
| name_japanese | varchar | 日本語のセット名 |
| name_english  | varchar | 英語のセット名   |
| star          | int     | レアリティ       |
| bonus2        | varchar | 2セット効果      |
| bonus4        | varchar | 4セット効果      |

### artifacts
| カラム名         | 型      | 内容              |
| ---------------- | ------- | ----------------- |
| id               | int     | primary key       |
| name             | varchar | 聖遺物の名前      |
| description      | varchar | 聖遺物の説明文    |
| artifact_type_id | int     | artifact_typeのid |
| artifact_set_id  | int     | artifact_setのid  |

#### artifact_set_bonuses
| カラム名        | 型      | 内容                |
| --------------- | ------- | ------------------- |
| id              | int     | primary key         |
| artifact_set_id | int     | artifact_setのid    |
| bonus2          | varchar | 2セット効果の説明文 |
| bonus4          | varchar | 4セット効果の説明文 |

#### artifact_set_bonus(n)_data[^1]
| カラム名        | 型           | 内容             |
| --------------- | ------------ | ---------------- |
| id              | int          | primary key      |
| artifact_set_id | int          | artifact_setのid |
| stat_name_id    | int          | stat_nameのid    |
| number          | decimal(8,3) | セット効果の数値 |








### targets
| カラム名                    | 型  | 内容        |
| --------------------------- | --- | ----------- |
| id                          | int | primary key |
| user_id                     | int |             |
| character_id                | int |             |
| character_ascend_level_id   | int |             |
| normal_attack_level         | int |             |
| elemental_skill_level       | int |             |
| elemental_burst_level       | int |             |
| constellation_rank          | int |             |
| weapon_id                   | int |             |
| weapon_ascend_level_id      | int |             |
| refinement_rank             | int |             |
| flower_artifact_manager_id  | int |             |
| plume_artifact_manager_id   | int |             |
| sands_artifact_manager_id   | int |             |
| goblet_artifact_manager_id  | int |             |
| circlet_artifact_manager_id | int |             |

### artifact_managers
| カラム名          | 型           | 内容        |
| ----------------- | ------------ | ----------- |
| id                | int          | primary key |
| user_id           | int          |             |
| artifact_id       | int          |             |
| main_stat_id      | int          |             |
| sub1_stat_name_id | int          |             |
| sub2_stat_name_id | int          |             |
| sub3_stat_name_id | int          |             |
| sub4_stat_name_id | int          |             |
| sub1_number       | decimal(8,3) |             |
| sub2_number       | decimal(8,3) |             |
| sub3_number       | decimal(8,3) |             |
| sub4_number       | decimal(8,3) |             |

### main_stats
| カラム名     | 型           | 内容        |
| ------------ | ------------ | ----------- |
| id           | int          | primary key |
| stat_name_id | int          |             |
| star4        | decimal(8,3) |             |
| star5        | decimal(8,3) |             |

[^1]:n=>セット効果の必要数
[^3]:Lv.1時点での基礎攻撃力
[^4]:character=>characterの英語名
