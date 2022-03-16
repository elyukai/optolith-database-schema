import { Attribute, validateSchema as validateAttributeSchema } from "./types/Attribute.js"
import { AnimistPower, validateSchema as validateAnimistPowerSchema } from "./types/magicalActions/AnimistPower.js"
import { Tribe, validateSchema as validateTribeSchema } from "./types/magicalActions/AnimistPower_Tribe.js"
import { Curse, validateSchema as validateCurseSchema } from "./types/magicalActions/Curse.js"
import { DominationRitual, validateSchema as validateDominationRitualSchema } from "./types/magicalActions/DominationRitual.js"
import { ElvenMagicalSong, validateSchema as validateElvenMagicalSongSchema } from "./types/magicalActions/ElvenMagicalSong.js"
import { GeodeRitual, validateSchema as validateGeodeRitualSchema } from "./types/magicalActions/GeodeRitual.js"
import { JesterTrick, validateSchema as validateJesterTrickSchema } from "./types/magicalActions/JesterTrick.js"
import { MagicalDance, validateSchema as validateMagicalDanceSchema } from "./types/magicalActions/MagicalDance.js"
import { MagicalMelody, validateSchema as validateMagicalMelodySchema } from "./types/magicalActions/MagicalMelody.js"
import { MagicalRune, validateSchema as validateMagicalRuneSchema } from "./types/magicalActions/MagicalRune.js"
import { validateSchema as validateZibiljaRitualSchema, ZibiljaRitual } from "./types/magicalActions/ZibiljaRitual.js"
import { Region, validateSchema as validateRegionSchema } from "./types/Region.js"
import { SchemaValidator } from "./validation/schema.js"

export type TypeMap = {
  animistPowers: AnimistPower
  animistPowerTribes: Tribe
  attributes: Attribute
  curses: Curse
  dominationRituals: DominationRitual
  elvenMagicalSongs: ElvenMagicalSong
  geodeRituals: GeodeRitual
  jesterTricks: JesterTrick
  magicalDances: MagicalDance
  magicalMelodies: MagicalMelody
  magicalRunes: MagicalRune
  regions: Region
  zibiljaRituals: ZibiljaRitual
}

export const schemaMap: { [K in keyof TypeMap]: SchemaValidator<TypeMap[K]> } = {
  animistPowers: validateAnimistPowerSchema,
  animistPowerTribes: validateTribeSchema,
  attributes: validateAttributeSchema,
  curses: validateCurseSchema,
  dominationRituals: validateDominationRitualSchema,
  elvenMagicalSongs: validateElvenMagicalSongSchema,
  geodeRituals: validateGeodeRitualSchema,
  jesterTricks: validateJesterTrickSchema,
  magicalDances: validateMagicalDanceSchema,
  magicalMelodies: validateMagicalMelodySchema,
  magicalRunes: validateMagicalRuneSchema,
  regions: validateRegionSchema,
  zibiljaRituals: validateZibiljaRitualSchema,
}
