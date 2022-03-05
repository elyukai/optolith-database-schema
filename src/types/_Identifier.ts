export namespace Identifier {
  export namespace Tagged {
    export type Attribute = {
      tag: "Attribute"

      /**
       * The attribute's numeric identifier.
       * @integer
       * @minimum 1
       * @maximum 8
       */
      value: number
    }

    export type Skill = {
      tag: "Skill"

      /**
       * The skill's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type CloseCombatTechnique = {
      tag: "CloseCombatTechnique"

      /**
       * The close combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type RangedCombatTechnique = {
      tag: "RangedCombatTechnique"

      /**
       * The ranged combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type Spell = {
      tag: "Spell"

      /**
       * The spell's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type Ritual = {
      tag: "Ritual"

      /**
       * The ritual's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type LiturgicalChant = {
      tag: "LiturgicalChant"

      /**
       * The liturgical chant's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }

    export type Ceremony = {
      tag: "Ceremony"

      /**
       * The ceremony's numeric identifier.
       * @integer
       * @minimum 1
       */
      value: number
    }
  }

  export namespace Group {
    export type Rated =
      | Tagged.Attribute
      | Tagged.Skill
      | Tagged.CloseCombatTechnique
      | Tagged.RangedCombatTechnique
      | Tagged.Spell
      | Tagged.Ritual
      | Tagged.LiturgicalChant
      | Tagged.Ceremony
  }
}
