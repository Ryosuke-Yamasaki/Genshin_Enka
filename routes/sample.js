const express = require("express");
const router = express.Router();

const { EnkaClient, DetailedGenshinUser, ArtifactSet, TextAssets, DynamicTextAssets, WeaponData, WeaponRefinements } = require("enka-network-api");
const enka = new EnkaClient({ defaultLanguage: "jp" });

router.get("/", (req, res, next) => {
  res.render("index", {
    text: convertObjectToJson(enka.getAllCharacters()),
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

//スコア計算

run();

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
  const name = target.characterData.name.get();
  const level = target.level;
  const maxLevel = target.maxLevel;
  const statsList = target.stats.statProperties;








  let character = []


  character[1] = enka.getCharacterById(10000003).stars;
  character[2] = enka.getCharacterById(10000016).stars;
  character[3] = enka.getCharacterById(10000041).stars;
  character[4] = enka.getCharacterById(10000042).stars;
  character[5] = enka.getCharacterById(10000035).stars;
  character[6] = enka.getCharacterById(10000032).stars;
  character[7] = enka.getCharacterById(10000015).stars;
  character[8] = enka.getCharacterById(10000020).stars;
  character[9] = enka.getCharacterById(10000034).stars;
  character[10] = enka.getCharacterById(10000014).stars;
  character[11] = enka.getCharacterById(10000043).stars;
  character[12] = enka.getCharacterById(10000006).stars;
  character[13] = enka.getCharacterById(10000021).stars;
  character[14] = enka.getCharacterById(10000031).stars;
  character[15] = enka.getCharacterById(10000025).stars;
  character[16] = enka.getCharacterById(10000024).stars;
  character[17] = enka.getCharacterById(10000036).stars;
  character[18] = enka.getCharacterById(10000023).stars;
  character[19] = enka.getCharacterById(10000027).stars;
  character[20] = enka.getCharacterById(10000022).stars;
  character[21] = enka.getCharacterById(10000029).stars;
  character[22] = enka.getCharacterById(10000033).stars;
  character[23] = enka.getCharacterById(10000039).stars;
  character[24] = enka.getCharacterById(10000030).stars;
  character[25] = enka.getCharacterById(10000044).stars;
  character[26] = enka.getCharacterById(10000038).stars;
  character[27] = enka.getCharacterById(10000037).stars;
  character[28] = enka.getCharacterById(10000026).stars;
  character[29] = enka.getCharacterById(10000046).stars;
  character[30] = enka.getCharacterById(10000045).stars;
  character[31] = enka.getCharacterById(10000048).stars;
  character[32] = enka.getCharacterById(10000051).stars;
  character[33] = enka.getCharacterById(10000047).stars;
  character[34] = enka.getCharacterById(10000002).stars;
  character[35] = enka.getCharacterById(10000049).stars;
  character[36] = enka.getCharacterById(10000053).stars;
  character[37] = enka.getCharacterById(10000062).stars;
  character[38] = enka.getCharacterById(10000052).stars;
  character[39] = enka.getCharacterById(10000056).stars;
  character[40] = enka.getCharacterById(10000054).stars;
  character[41] = enka.getCharacterById(10000050).stars;
  character[42] = enka.getCharacterById(10000057).stars;
  character[43] = enka.getCharacterById(10000055).stars;
  character[44] = enka.getCharacterById(10000063).stars;
  character[45] = enka.getCharacterById(10000064).stars;
  character[46] = enka.getCharacterById(10000058).stars;
  character[47] = enka.getCharacterById(10000066).stars;
  character[48] = enka.getCharacterById(10000060).stars;
  character[49] = enka.getCharacterById(10000065).stars;
  character[50] = enka.getCharacterById(10000059).stars;
  character[51] = enka.getCharacterById(10000069).stars;
  character[52] = enka.getCharacterById(10000067).stars;
  character[53] = enka.getCharacterById(10000068).stars;
  character[54] = enka.getCharacterById(10000071).stars;
  character[55] = enka.getCharacterById(10000072).stars;
  character[56] = enka.getCharacterById(10000070).stars;
  character[57] = enka.getCharacterById(10000073).stars;
  character[58] = enka.getCharacterById(10000074).stars;
  character[59] = enka.getCharacterById(10000075).stars;
  character[60] = enka.getCharacterById(10000076).stars;
  character[61] = enka.getCharacterById(10000078).stars;
  character[62] = enka.getCharacterById(10000077).stars;
  character[63] = enka.getCharacterById(10000079).stars;
  character[64] = enka.getCharacterById(10000080).stars;
  character[65] = enka.getCharacterById(10000082).stars;
  character[66] = enka.getCharacterById(10000081).stars;
  character[67] = enka.getCharacterById(10000061).stars;
  character[68] = enka.getCharacterById(10000084).stars;
  character[69] = enka.getCharacterById(10000083).stars;
  character[70] = enka.getCharacterById(10000085).stars;
  character[71] = enka.getCharacterById(10000087).stars;
  character[72] = enka.getCharacterById(10000086).stars;

  for (let i = 0; i < character.length; i++) {
    const element = character[i];
    //console.log(element);
  }



  let weapon = enka.getWeaponById(15502);
  let artifact = enka.getArtifactById(23700);





  //enka.getAllCharacters().map(c => console.log(convertObjectToJson(c.id), convertObjectToJson(c.name.get())));
  //enka.getAllWeapons().map(c => console.log(convertObjectToJson(c.id), convertObjectToJson(c.name.get())));
  //enka.getAllArtifactSets().map(c => console.log(convertObjectToJson(c.id), convertObjectToJson(c.name.get())));

  let characterss = enka.getCharacterById(10000007)

  console.log(convertObjectToJson(characterss.details))








  //console.log(convertObjectToJson(weapon.getStats(6, 90)))
  //console.log(convertObjectToJson(artifact))


  let talent_lvl = {
    "normalAttack": target.skillLevels[0].level.value,
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

  let DMG_source = data["normalAttack"]
    .filter(total => source.includes(total.name))
    .flatMap(total => total.usedNumbers)
    .reduce((a, b) => a + b)
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