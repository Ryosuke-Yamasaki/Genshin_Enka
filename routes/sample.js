const express = require("express");
const router = express.Router();

const { EnkaClient, DetailedGenshinUser, ArtifactSet, TextAssets, DynamicTextAssets, WeaponData } = require("enka-network-api");
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







  let character = enka.getCharacterById(10000037);

  console.log(convertObjectToJson(enka.getAllCharacters().map(c => c.id)));

  console.log(convertObjectToJson(character));


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
    let skillAttributes = Json.getSkillAttributes(level).map(attribute => attribute.getAttributeData());
    return skillAttributes;
  }
}
module.exports = router;