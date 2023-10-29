const express = require("express");
const router = express.Router();

const { EnkaClient, DetailedGenshinUser, ArtifactSet, TextAssets, DynamicTextAssets, CharacterData, WeaponRefinements, fightProps } = require("enka-network-api");
const enka = new EnkaClient({ defaultLanguage: "jp" });

router.get("/", (req, res, next) => {
  res.render("index", {
    text: "<color=#FFD780FF>通常攻撃</color>\n最大6段の連続射撃を行う。\n\n<color=#FFD780FF>重撃</color>\nダメージがより高く、より精確な<color=#FFD780FF>狙い撃ち</color>を発動する。\n照準時、氷寒の気が矢先に集まり、攻撃と共に発射される。チャージの時間により、異なる効果を発動する。\n·1段チャージ：氷寒の気が集まった矢を放ち、<color=#99FFFFFF>氷元素ダメージ</color>を与える。\n·2段チャージ：霜華の矢を放ち、<color=#99FFFFFF>氷元素ダメージ</color>を与える。命中後、霜華満開が発生し、さらに<color=#99FFFFFF>氷元素範囲ダメージ</color>を与える。\n\n<color=#FFD780FF>落下攻撃</color>\n空中から矢の雨を放ち、凄まじいスピードで落下し地面に衝撃を与え、落下時に範囲ダメージを与える。",
    id: enka.getAllCharacters().map(c => c.elementalSkill)
  })
});

//JSON変換

function convertObjectToJson(obj) {
  if (typeof obj !== "object" || obj === null || obj === undefined) return obj;
  const entries = Object.entries(obj)
    .filter(([key, value]) => !key.startsWith("_") && !(value instanceof EnkaClient)) // filter out private properties and EnkaClient instance, which has circular object
    .map(([key, value]) => [key, convertObjectToJson(value)]);
  if (obj instanceof TextAssets) {
    entries.push(["text", obj instanceof DynamicTextAssets ? obj.getNullableReplacedText() : obj.getNullable()]); // convert TextAssets to string
  }
  return Object.fromEntries(entries);
}





let weapons = []

weapons[0] = enka.getWeaponById(13303)
weapons[1] = enka.getWeaponById(11301)
weapons[2] = enka.getWeaponById(11412)
weapons[3] = enka.getWeaponById(13302)
weapons[4] = enka.getWeaponById(11414)
weapons[5] = enka.getWeaponById(15425)
weapons[6] = enka.getWeaponById(11511)
weapons[7] = enka.getWeaponById(11425)
weapons[8] = enka.getWeaponById(11504)
weapons[9] = enka.getWeaponById(13416)
weapons[10] = enka.getWeaponById(14501)
weapons[11] = enka.getWeaponById(13507)

for (const weapon of weapons) {
  let stat = ["FIGHT_PROP_ATTACK_PERCENT", "FIGHT_PROP_HP_PERCENT"]
  let row = ""
  for (let i = 1; i < 21; i++) {
    let data = weapon.getStats(0, i)
      .filter(d => stat.includes(d.fightProp))
      .map(d => {
        row += `${d.value.toFixed(3)},`
      })
  }
  console.log(row);
}



//スコア計算

//run();

async function run() {
  const uid = 859889403;
  /** @type {DetailedGenshinUser} */
  const user = await enka.fetchUser(uid);

  const characters = user.characters;

  if (characters.length === 0) {
    console.log("This user has no detailed characters on the profile.");
    return;
  }


  // get artifacts stats and set bonuses from this character.
  const target = characters[0];
  const artifacts = target.artifacts;
  const description = target.characterData.maxCharge;
  const level = target.level;
  const maxLevel = target.maxLevel;
  const statsList = target.stats.statProperties;








  let character = []



  character[0] = enka.getCharacterById(10000005, 504)
  character[1] = enka.getCharacterById(10000005, 506)
  character[35] = enka.getCharacterById(10000005, 507)
  character[53] = enka.getCharacterById(10000005, 508)
  character[71] = enka.getCharacterById(10000005, 503)
  character[2] = enka.getCharacterById(10000003)
  character[3] = enka.getCharacterById(10000016)
  character[4] = enka.getCharacterById(10000041)
  character[5] = enka.getCharacterById(10000042)
  character[6] = enka.getCharacterById(10000035)
  character[7] = enka.getCharacterById(10000032)
  character[8] = enka.getCharacterById(10000015)
  character[9] = enka.getCharacterById(10000020)
  character[10] = enka.getCharacterById(10000034)
  character[11] = enka.getCharacterById(10000014)
  character[12] = enka.getCharacterById(10000043)
  character[13] = enka.getCharacterById(10000006)
  character[14] = enka.getCharacterById(10000021)
  character[15] = enka.getCharacterById(10000031)
  character[16] = enka.getCharacterById(10000025)
  character[17] = enka.getCharacterById(10000024)
  character[18] = enka.getCharacterById(10000036)
  character[19] = enka.getCharacterById(10000023)
  character[20] = enka.getCharacterById(10000027)
  character[21] = enka.getCharacterById(10000022)
  character[22] = enka.getCharacterById(10000029)
  character[23] = enka.getCharacterById(10000033)
  character[24] = enka.getCharacterById(10000039)
  character[25] = enka.getCharacterById(10000030)
  character[26] = enka.getCharacterById(10000044)
  character[27] = enka.getCharacterById(10000038)
  character[28] = enka.getCharacterById(10000037)
  character[29] = enka.getCharacterById(10000026)
  character[30] = enka.getCharacterById(10000046)
  character[31] = enka.getCharacterById(10000045)
  character[32] = enka.getCharacterById(10000048)
  character[33] = enka.getCharacterById(10000051)
  character[34] = enka.getCharacterById(10000047)
  character[36] = enka.getCharacterById(10000002)
  character[37] = enka.getCharacterById(10000049)
  character[38] = enka.getCharacterById(10000053)
  character[39] = enka.getCharacterById(10000062)
  character[40] = enka.getCharacterById(10000052)
  character[41] = enka.getCharacterById(10000056)
  character[42] = enka.getCharacterById(10000054)
  character[43] = enka.getCharacterById(10000050)
  character[44] = enka.getCharacterById(10000057)
  character[45] = enka.getCharacterById(10000055)
  character[46] = enka.getCharacterById(10000063)
  character[47] = enka.getCharacterById(10000064)
  character[48] = enka.getCharacterById(10000058)
  character[49] = enka.getCharacterById(10000066)
  character[50] = enka.getCharacterById(10000060)
  character[51] = enka.getCharacterById(10000065)
  character[52] = enka.getCharacterById(10000059)
  character[54] = enka.getCharacterById(10000069)
  character[55] = enka.getCharacterById(10000067)
  character[56] = enka.getCharacterById(10000068)
  character[57] = enka.getCharacterById(10000071)
  character[58] = enka.getCharacterById(10000072)
  character[59] = enka.getCharacterById(10000070)
  character[60] = enka.getCharacterById(10000073)
  character[61] = enka.getCharacterById(10000074)
  character[62] = enka.getCharacterById(10000075)
  character[63] = enka.getCharacterById(10000076)
  character[64] = enka.getCharacterById(10000078)
  character[65] = enka.getCharacterById(10000077)
  character[66] = enka.getCharacterById(10000079)
  character[67] = enka.getCharacterById(10000080)
  character[68] = enka.getCharacterById(10000082)
  character[69] = enka.getCharacterById(10000081)
  character[70] = enka.getCharacterById(10000061)
  character[72] = enka.getCharacterById(10000084)
  character[73] = enka.getCharacterById(10000083)
  character[74] = enka.getCharacterById(10000085)
  character[75] = enka.getCharacterById(10000087)
  character[76] = enka.getCharacterById(10000086)

  for (const characters of character) {
    let data = characters

    //console.log(convertObjectToJson(data.getAscensionData(6).addProps));

    //突破ステータスの数値
    let stat = ["FIGHT_PROP_BASE_HP", "FIGHT_PROP_BASE_ATTACK", "FIGHT_PROP_BASE_DEFENSE"]
    data = data.getAscensionData(2).addProps
      .filter(s => !stat.includes(s.fightProp))
      .map(s => {
        //console.log(`${s.valueText}`);
      })

    /* //基礎ステータスの数値
    let row = ""
    for (let i = 80; i < 91; i++) {
      row += `${data.getStats(6, i)[2].value.toFixed(0)},`
    }
    console.log(row);
*/


    /*  //固有天賦の数値
        data.map(p => {
          let name = p.name
          p._data.paramList.map(para => {
            if (para != 0) console.log(`${name.get()}, ${para.toFixed(4)}`);
          })
        })
        */


    /*  //各天賦の数値
      data = data.map(d => {
        let name = d.name
        let valueText = d.valueText
        d.usedNumbers.map(s => {
          if (Number.isInteger(s)) {
            s = s.toFixed(0);
          } else if (s > 50) {
            s = s.toFixed(0);
          } else {
            s = s.toFixed(4);
          }
          console.log(valueText)
        })
      })
  */

  }


  //武器 一心伝名刀をあとで消す
  enka.getAllWeapons().map(c => {
    if (c.stars > 2) {

      let stat = ["FIGHT_PROP_ATTACK_PERCENT", "FIGHT_PROP_HP_PERCENT"]

      let data = c.getStats(6, 90)
        //基礎攻撃力
        .filter(d => d.fightProp == "FIGHT_PROP_BASE_ATTACK")
        .map(d => {
          //console.log(`${c.id}, ${d.valueText}`)
        })



      /*
              //サブステ
              .filter(d => stat.includes(d.fightProp))
              .map(d => {
                //console.log(`${c.id}, ${c.getStats(6, 90).filter(d => d.fightProp == 'FIGHT_PROP_BASE_ATTACK').map(d => d.valueText)}, ${d.valueText}`)
              })
      */
    }
  })

  let weapons = []

  weapons[0] = enka.getWeaponById(11306)
  weapons[1] = enka.getWeaponById(11301)
  weapons[2] = enka.getWeaponById(11412)
  weapons[3] = enka.getWeaponById(11303)
  weapons[4] = enka.getWeaponById(11401)
  weapons[5] = enka.getWeaponById(11402)
  weapons[6] = enka.getWeaponById(11505)
  weapons[7] = enka.getWeaponById(11406)
  weapons[8] = enka.getWeaponById(11502)
  weapons[9] = enka.getWeaponById(11410)
  weapons[10] = enka.getWeaponById(11501)
  weapons[11] = enka.getWeaponById(12503)

  for (const weapon of weapons) {
    let row = ""
    for (let i = 50; i < 61; i++) {
      let data = weapon.getStats(3, i)
        .filter(d => d.fightProp == "FIGHT_PROP_BASE_ATTACK")
        .map(d => {
          row += `${d.value.toFixed(0)},`
        })
    }
    //console.log(row);
  }





  let weapon = enka.getWeaponById(11421); //11419,11420,11421
  let artifact = enka.getArtifactById(23700);

  //console.log(convertObjectToJson(weapon));

  //enka.getAllCharacters().map(c => console.log(convertObjectToJson(c.name.get()), convertObjectToJson(c.id)));
  //enka.getAllWeapons().map(c => console.log(convertObjectToJson(c.id), convertObjectToJson(c.name.get())));
  //enka.getAllArtifactSets().map(c => console.log(convertObjectToJson(c.id), convertObjectToJson(c.maxCharge)));

  let characterss = enka.getCharacterById(10000037)

  //console.log(convertObjectToJson(characterss.getStats(6, 90)));



  //console.log(convertObjectToJson(weapon.getStats(6, 90)))
  //console.log(convertObjectToJson(artifact))


  let talent_lvl = {
    "elementalSkill": target.skillLevels[0].level.value,
    "elementalSkill": target.skillLevels[1].level.value,
    "elementalBurst": target.skillLevels[2].level.value,
  }

  let talentJson = target.characterData;

  let data = {}

  for (const key in talent_lvl) {
    if (Object.hasOwnProperty.call(talent_lvl, key)) {
      data[key] = talentvaluenumber(talentJson[key], talent_lvl[key])
    }
  }

  let source = ["霜華の矢の命中ダメージ", "霜華の矢·霜華満開ダメージ"]

  let artifact_bonus = {}

  const setBonuses = ArtifactSet.getActiveSetBonus(artifacts);
  const activeBonuses = setBonuses
    .filter(set => set.activeBonus.length > 0)
    .flatMap(set => set.activeBonus
      /*.map(bonus => bonus.paramList)*/);

  let CUR_ATK = statsList
    .filter(stat => stat.fightProp == "FIGHT_PROP_CUR_ATTACK")
    .map(stat => stat.value)
    .reduce(a => a)
  //console.log(CUR_ATK);

  let DMG_source = data["elementalSkill"]
    .filter(total => source.includes(total.description))
    .flatMap(total => total.valueText)
  //.reduce((a, b) => a + b)
  //console.log(DMG_source);

  let DMG_bonus = statsList[33].value
    + 1 //基礎分
    + 0.15 //聖遺物のセット効果分 
    + 0.52 //アモス分
  //console.log(DMG_bonus);

  let crit_rate = statsList
    .filter(stat => stat.fightProp == "FIGHT_PROP_CRITICAL")
    .map(stat => stat.value)
    .reduce(a => a)
    + 0.2//固有天賦分
    //+ 0.15
    + 0.36
  //console.log(crit_rate);

  let crit_DMG = statsList
    .filter(stat => stat.fightProp == "FIGHT_PROP_CRITICAL_HURT")
    .map(stat => stat.value)
    .reduce(a => a)
  //console.log(crit_DMG);

  let crit_value = 1 + (crit_rate * crit_DMG)
  //console.log(crit_value);



  let a = damage(CUR_ATK, DMG_source, 1, 0, DMG_bonus, crit_value, 1, 0.5, 0.9)

  //console.log(a);

  function damage(a, b, c, d, e, f, g, h, i) {
    let damage = (a * b * c + d) * e * f * g * h * i;
    return damage.toFixed(0);
  }

  function talentvaluenumber(Json, level) {
    let skillAttributes = Json.getSkillAttributes(level).flatMap(attribute => attribute.getAttributeData());
    return skillAttributes;
  }
}
module.exports = router;