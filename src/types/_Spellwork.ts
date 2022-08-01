import { MagicalTraditionIdentifier } from "./_Identifier.js"

/**
 * The tradition(s) the ritual is available for. It may be *generally*
 * available to all traditions or it may be only familiar in specific
 * traditions.
 */
export type Traditions =
  | { tag: "General"; general: {} }
  | { tag: "Specific"; specific: SpecificTraditions }

/**
 * A list of specific traditions.
 * @minItems 1
 */
export type SpecificTraditions = MagicalTraditionIdentifier[]
