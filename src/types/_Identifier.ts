export namespace Identifier {
  export namespace Tag {
    export enum Activatable {
      Advantage = "Advantage",
      Disadvantage = "Disadvantage",
      GeneralSpecialAbility = "GeneralSpecialAbility",
      FatePointSpecialAbility = "FatePointSpecialAbility",
      CombatSpecialAbility = "CombatSpecialAbility",
      MagicalSpecialAbility = "MagicalSpecialAbility",
      StaffEnchantment = "StaffEnchantment",
      FamiliarSpecialAbility = "FamiliarSpecialAbility",
      KarmaSpecialAbility = "KarmaSpecialAbility",
      ProtectiveWardingCircleSpecialAbility = "ProtectiveWardingCircleSpecialAbility",
      CombatStyleSpecialAbility = "CombatStyleSpecialAbility",
      AdvancedCombatSpecialAbility = "AdvancedCombatSpecialAbility",
      CommandSpecialAbility = "CommandSpecialAbility",
      MagicStyleSpecialAbility = "MagicStyleSpecialAbility",
      AdvancedMagicalSpecialAbility = "AdvancedMagicalSpecialAbility",
      SpellSwordEnchantment = "SpellSwordEnchantment",
      DaggerRitual = "DaggerRitual",
      InstrumentEnchantment = "InstrumentEnchantment",
      AttireEnchantment = "AttireEnchantment",
      OrbEnchantment = "OrbEnchantment",
      WandEnchantment = "WandEnchantment",
      BrawlingSpecialAbility = "BrawlingSpecialAbility",
      AncestorGlyph = "AncestorGlyph",
      CeremonialItemSpecialAbility = "CeremonialItemSpecialAbility",
      Sermon = "Sermon",
      LiturgicalStyleSpecialAbility = "LiturgicalStyleSpecialAbility",
      AdvancedKarmaSpecialAbility = "AdvancedKarmaSpecialAbility",
      Vision = "Vision",
      MagicalTradition = "MagicalTradition",
      BlessedTradition = "BlessedTradition",
      PactGift = "PactGift",
      SikaryanDrainSpecialAbility = "SikaryanDrainSpecialAbility",
      LycantropicGift = "LycantropicGift",
      SkillStyleSpecialAbility = "SkillStyleSpecialAbility",
      AdvancedSkillSpecialAbility = "AdvancedSkillSpecialAbility",
      ArcaneOrbEnchantment = "ArcaneOrbEnchantment",
      CauldronEnchantment = "CauldronEnchantment",
      FoolsHatEnchantment = "FoolsHatEnchantment",
      ToyEnchantment = "ToyEnchantment",
      BowlEnchantment = "BowlEnchantment",
      FatePointSexSpecialAbility = "FatePointSexSpecialAbility",
      SexSpecialAbility = "SexSpecialAbility",
      WeaponEnchantment = "WeaponEnchantment",
      SickleRitual = "SickleRitual",
      RingEnchantment = "RingEnchantment",
      ChronicleEnchantment = "ChronicleEnchantment",
    }

    export enum Rated {
      Attribute = "Attribute",
      Skill = "Skill",
      CloseCombatTechnique = "CloseCombatTechnique",
      RangedCombatTechnique = "RangedCombatTechnique",
      Spell = "Spell",
      Ritual = "Ritual",
      LiturgicalChant = "LiturgicalChant",
      Ceremony = "Ceremony",
    }

    export enum AdvancedSpecialAbilityRestrictedOption {
      General = "General",
      Element = "Element",
    }

    export enum CombatTechnique {
      CloseCombatTechnique = "CloseCombatTechnique",
      RangedCombatTechnique = "RangedCombatTechnique",
    }
  }

  export type Tagged<Tag> = {
    tag: Tag

    /**
     * The referenced entry's numeric identifier.
     * @integer
     * @minimum 1
     * @maximum 8
     */
    value: number
  }

  export namespace Group {
    export type Activatable = Tagged<Tag.Activatable>
    export type Rated = Tagged<Tag.Rated>
    export type AdvancedSpecialAbilityRestrictedOption = Tagged<Tag.AdvancedSpecialAbilityRestrictedOption>
    export type CombatTechnique = Tagged<Tag.CombatTechnique>
  }
}
