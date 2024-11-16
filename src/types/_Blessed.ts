import { AspectReference, BlessedTraditionReference } from "./_SimpleReferences.js"

export type SkillTradition =
  | { tag: "GeneralAspect"; general_aspect: AspectReference }
  | { tag: "Tradition"; tradition: SkillTraditionWithAspects }

export type SkillTraditionWithAspects = {
  /**
   * The blessed tradition.
   */
  tradition: BlessedTraditionReference

  /**
   * The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
   * @minItems 1
   * @maxItems 2
   */
  aspects?: AspectReference[]
}
