//
//  _IdentifierGroup.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public enum ActivatableIdentifier: EntitySubtype {
    case advantageIdentifier(AdvantageIdentifier)
    case disadvantageIdentifier(DisadvantageIdentifier)
    case advancedCombatSpecialAbilityIdentifier(AdvancedCombatSpecialAbilityIdentifier)
    case advancedKarmaSpecialAbilityIdentifier(AdvancedKarmaSpecialAbilityIdentifier)
    case advancedMagicalSpecialAbilityIdentifier(AdvancedMagicalSpecialAbilityIdentifier)
    case advancedSkillSpecialAbilityIdentifier(AdvancedSkillSpecialAbilityIdentifier)
    case ancestorGlyphIdentifier(AncestorGlyphIdentifier)
    case arcaneOrbEnchantmentIdentifier(ArcaneOrbEnchantmentIdentifier)
    case attireEnchantmentIdentifier(AttireEnchantmentIdentifier)
    case blessedTraditionIdentifier(BlessedTraditionIdentifier)
    case bowlEnchantmentIdentifier(BowlEnchantmentIdentifier)
    case brawlingSpecialAbilityIdentifier(BrawlingSpecialAbilityIdentifier)
    case cauldronEnchantmentIdentifier(CauldronEnchantmentIdentifier)
    case ceremonialItemSpecialAbilityIdentifier(CeremonialItemSpecialAbilityIdentifier)
    case chronicleEnchantmentIdentifier(ChronicleEnchantmentIdentifier)
    case combatSpecialAbilityIdentifier(CombatSpecialAbilityIdentifier)
    case combatStyleSpecialAbilityIdentifier(CombatStyleSpecialAbilityIdentifier)
    case commandSpecialAbilityIdentifier(CommandSpecialAbilityIdentifier)
    case daggerRitualIdentifier(DaggerRitualIdentifier)
    case familiarSpecialAbilityIdentifier(FamiliarSpecialAbilityIdentifier)
    case fatePointSexSpecialAbilityIdentifier(FatePointSexSpecialAbilityIdentifier)
    case fatePointSpecialAbilityIdentifier(FatePointSpecialAbilityIdentifier)
    case foolsHatEnchantmentIdentifier(FoolsHatEnchantmentIdentifier)
    case generalSpecialAbilityIdentifier(GeneralSpecialAbilityIdentifier)
    case instrumentEnchantmentIdentifier(InstrumentEnchantmentIdentifier)
    case karmaSpecialAbilityIdentifier(KarmaSpecialAbilityIdentifier)
    case krallenkettenzauberIdentifier(KrallenkettenzauberIdentifier)
    case liturgicalStyleSpecialAbilityIdentifier(LiturgicalStyleSpecialAbilityIdentifier)
    case lycantropicGiftIdentifier(LycantropicGiftIdentifier)
    case magicalSignIdentifier(MagicalSignIdentifier)
    case magicalSpecialAbilityIdentifier(MagicalSpecialAbilityIdentifier)
    case magicalTraditionIdentifier(MagicalTraditionIdentifier)
    case magicStyleSpecialAbilityIdentifier(MagicStyleSpecialAbilityIdentifier)
    case orbEnchantmentIdentifier(OrbEnchantmentIdentifier)
    case pactGiftIdentifier(PactGiftIdentifier)
    case protectiveWardingCircleSpecialAbilityIdentifier(ProtectiveWardingCircleSpecialAbilityIdentifier)
    case ringEnchantmentIdentifier(RingEnchantmentIdentifier)
    case sermonIdentifier(SermonIdentifier)
    case sexSpecialAbilityIdentifier(SexSpecialAbilityIdentifier)
    case sickleRitualIdentifier(SickleRitualIdentifier)
    case sikaryanDrainSpecialAbilityIdentifier(SikaryanDrainSpecialAbilityIdentifier)
    case skillStyleSpecialAbilityIdentifier(SkillStyleSpecialAbilityIdentifier)
    case spellSwordEnchantmentIdentifier(SpellSwordEnchantmentIdentifier)
    case staffEnchantmentIdentifier(StaffEnchantmentIdentifier)
    case toyEnchantmentIdentifier(ToyEnchantmentIdentifier)
    case trinkhornzauberIdentifier(TrinkhornzauberIdentifier)
    case vampiricGiftIdentifier(VampiricGiftIdentifier)
    case visionIdentifier(VisionIdentifier)
    case wandEnchantmentIdentifier(WandEnchantmentIdentifier)
    case weaponEnchantmentIdentifier(WeaponEnchantmentIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let advantageIdentifier = try? container.decode(AdvantageIdentifier.self) {
            self = .advantageIdentifier(advantageIdentifier)
        } else if let disadvantageIdentifier = try? container.decode(DisadvantageIdentifier.self) {
            self = .disadvantageIdentifier(disadvantageIdentifier)
        } else if let advancedCombatSpecialAbilityIdentifier = try? container.decode(AdvancedCombatSpecialAbilityIdentifier.self) {
            self = .advancedCombatSpecialAbilityIdentifier(advancedCombatSpecialAbilityIdentifier)
        } else if let advancedKarmaSpecialAbilityIdentifier = try? container.decode(AdvancedKarmaSpecialAbilityIdentifier.self) {
            self = .advancedKarmaSpecialAbilityIdentifier(advancedKarmaSpecialAbilityIdentifier)
        } else if let advancedMagicalSpecialAbilityIdentifier = try? container.decode(AdvancedMagicalSpecialAbilityIdentifier.self) {
            self = .advancedMagicalSpecialAbilityIdentifier(advancedMagicalSpecialAbilityIdentifier)
        } else if let advancedSkillSpecialAbilityIdentifier = try? container.decode(AdvancedSkillSpecialAbilityIdentifier.self) {
            self = .advancedSkillSpecialAbilityIdentifier(advancedSkillSpecialAbilityIdentifier)
        } else if let ancestorGlyphIdentifier = try? container.decode(AncestorGlyphIdentifier.self) {
            self = .ancestorGlyphIdentifier(ancestorGlyphIdentifier)
        } else if let arcaneOrbEnchantmentIdentifier = try? container.decode(ArcaneOrbEnchantmentIdentifier.self) {
            self = .arcaneOrbEnchantmentIdentifier(arcaneOrbEnchantmentIdentifier)
        } else if let attireEnchantmentIdentifier = try? container.decode(AttireEnchantmentIdentifier.self) {
            self = .attireEnchantmentIdentifier(attireEnchantmentIdentifier)
        } else if let blessedTraditionIdentifier = try? container.decode(BlessedTraditionIdentifier.self) {
            self = .blessedTraditionIdentifier(blessedTraditionIdentifier)
        } else if let bowlEnchantmentIdentifier = try? container.decode(BowlEnchantmentIdentifier.self) {
            self = .bowlEnchantmentIdentifier(bowlEnchantmentIdentifier)
        } else if let brawlingSpecialAbilityIdentifier = try? container.decode(BrawlingSpecialAbilityIdentifier.self) {
            self = .brawlingSpecialAbilityIdentifier(brawlingSpecialAbilityIdentifier)
        } else if let cauldronEnchantmentIdentifier = try? container.decode(CauldronEnchantmentIdentifier.self) {
            self = .cauldronEnchantmentIdentifier(cauldronEnchantmentIdentifier)
        } else if let ceremonialItemSpecialAbilityIdentifier = try? container.decode(CeremonialItemSpecialAbilityIdentifier.self) {
            self = .ceremonialItemSpecialAbilityIdentifier(ceremonialItemSpecialAbilityIdentifier)
        } else if let chronicleEnchantmentIdentifier = try? container.decode(ChronicleEnchantmentIdentifier.self) {
            self = .chronicleEnchantmentIdentifier(chronicleEnchantmentIdentifier)
        } else if let combatSpecialAbilityIdentifier = try? container.decode(CombatSpecialAbilityIdentifier.self) {
            self = .combatSpecialAbilityIdentifier(combatSpecialAbilityIdentifier)
        } else if let combatStyleSpecialAbilityIdentifier = try? container.decode(CombatStyleSpecialAbilityIdentifier.self) {
            self = .combatStyleSpecialAbilityIdentifier(combatStyleSpecialAbilityIdentifier)
        } else if let commandSpecialAbilityIdentifier = try? container.decode(CommandSpecialAbilityIdentifier.self) {
            self = .commandSpecialAbilityIdentifier(commandSpecialAbilityIdentifier)
        } else if let daggerRitualIdentifier = try? container.decode(DaggerRitualIdentifier.self) {
            self = .daggerRitualIdentifier(daggerRitualIdentifier)
        } else if let familiarSpecialAbilityIdentifier = try? container.decode(FamiliarSpecialAbilityIdentifier.self) {
            self = .familiarSpecialAbilityIdentifier(familiarSpecialAbilityIdentifier)
        } else if let fatePointSexSpecialAbilityIdentifier = try? container.decode(FatePointSexSpecialAbilityIdentifier.self) {
            self = .fatePointSexSpecialAbilityIdentifier(fatePointSexSpecialAbilityIdentifier)
        } else if let fatePointSpecialAbilityIdentifier = try? container.decode(FatePointSpecialAbilityIdentifier.self) {
            self = .fatePointSpecialAbilityIdentifier(fatePointSpecialAbilityIdentifier)
        } else if let foolsHatEnchantmentIdentifier = try? container.decode(FoolsHatEnchantmentIdentifier.self) {
            self = .foolsHatEnchantmentIdentifier(foolsHatEnchantmentIdentifier)
        } else if let generalSpecialAbilityIdentifier = try? container.decode(GeneralSpecialAbilityIdentifier.self) {
            self = .generalSpecialAbilityIdentifier(generalSpecialAbilityIdentifier)
        } else if let instrumentEnchantmentIdentifier = try? container.decode(InstrumentEnchantmentIdentifier.self) {
            self = .instrumentEnchantmentIdentifier(instrumentEnchantmentIdentifier)
        } else if let karmaSpecialAbilityIdentifier = try? container.decode(KarmaSpecialAbilityIdentifier.self) {
            self = .karmaSpecialAbilityIdentifier(karmaSpecialAbilityIdentifier)
        } else if let krallenkettenzauberIdentifier = try? container.decode(KrallenkettenzauberIdentifier.self) {
            self = .krallenkettenzauberIdentifier(krallenkettenzauberIdentifier)
        } else if let liturgicalStyleSpecialAbilityIdentifier = try? container.decode(LiturgicalStyleSpecialAbilityIdentifier.self) {
            self = .liturgicalStyleSpecialAbilityIdentifier(liturgicalStyleSpecialAbilityIdentifier)
        } else if let lycantropicGiftIdentifier = try? container.decode(LycantropicGiftIdentifier.self) {
            self = .lycantropicGiftIdentifier(lycantropicGiftIdentifier)
        } else if let magicalSignIdentifier = try? container.decode(MagicalSignIdentifier.self) {
            self = .magicalSignIdentifier(magicalSignIdentifier)
        } else if let magicalSpecialAbilityIdentifier = try? container.decode(MagicalSpecialAbilityIdentifier.self) {
            self = .magicalSpecialAbilityIdentifier(magicalSpecialAbilityIdentifier)
        } else if let magicalTraditionIdentifier = try? container.decode(MagicalTraditionIdentifier.self) {
            self = .magicalTraditionIdentifier(magicalTraditionIdentifier)
        } else if let magicStyleSpecialAbilityIdentifier = try? container.decode(MagicStyleSpecialAbilityIdentifier.self) {
            self = .magicStyleSpecialAbilityIdentifier(magicStyleSpecialAbilityIdentifier)
        } else if let orbEnchantmentIdentifier = try? container.decode(OrbEnchantmentIdentifier.self) {
            self = .orbEnchantmentIdentifier(orbEnchantmentIdentifier)
        } else if let pactGiftIdentifier = try? container.decode(PactGiftIdentifier.self) {
            self = .pactGiftIdentifier(pactGiftIdentifier)
        } else if let protectiveWardingCircleSpecialAbilityIdentifier = try? container.decode(ProtectiveWardingCircleSpecialAbilityIdentifier.self) {
            self = .protectiveWardingCircleSpecialAbilityIdentifier(protectiveWardingCircleSpecialAbilityIdentifier)
        } else if let ringEnchantmentIdentifier = try? container.decode(RingEnchantmentIdentifier.self) {
            self = .ringEnchantmentIdentifier(ringEnchantmentIdentifier)
        } else if let sermonIdentifier = try? container.decode(SermonIdentifier.self) {
            self = .sermonIdentifier(sermonIdentifier)
        } else if let sexSpecialAbilityIdentifier = try? container.decode(SexSpecialAbilityIdentifier.self) {
            self = .sexSpecialAbilityIdentifier(sexSpecialAbilityIdentifier)
        } else if let sickleRitualIdentifier = try? container.decode(SickleRitualIdentifier.self) {
            self = .sickleRitualIdentifier(sickleRitualIdentifier)
        } else if let sikaryanDrainSpecialAbilityIdentifier = try? container.decode(SikaryanDrainSpecialAbilityIdentifier.self) {
            self = .sikaryanDrainSpecialAbilityIdentifier(sikaryanDrainSpecialAbilityIdentifier)
        } else if let skillStyleSpecialAbilityIdentifier = try? container.decode(SkillStyleSpecialAbilityIdentifier.self) {
            self = .skillStyleSpecialAbilityIdentifier(skillStyleSpecialAbilityIdentifier)
        } else if let spellSwordEnchantmentIdentifier = try? container.decode(SpellSwordEnchantmentIdentifier.self) {
            self = .spellSwordEnchantmentIdentifier(spellSwordEnchantmentIdentifier)
        } else if let staffEnchantmentIdentifier = try? container.decode(StaffEnchantmentIdentifier.self) {
            self = .staffEnchantmentIdentifier(staffEnchantmentIdentifier)
        } else if let toyEnchantmentIdentifier = try? container.decode(ToyEnchantmentIdentifier.self) {
            self = .toyEnchantmentIdentifier(toyEnchantmentIdentifier)
        } else if let trinkhornzauberIdentifier = try? container.decode(TrinkhornzauberIdentifier.self) {
            self = .trinkhornzauberIdentifier(trinkhornzauberIdentifier)
        } else if let vampiricGiftIdentifier = try? container.decode(VampiricGiftIdentifier.self) {
            self = .vampiricGiftIdentifier(vampiricGiftIdentifier)
        } else if let visionIdentifier = try? container.decode(VisionIdentifier.self) {
            self = .visionIdentifier(visionIdentifier)
        } else if let wandEnchantmentIdentifier = try? container.decode(WandEnchantmentIdentifier.self) {
            self = .wandEnchantmentIdentifier(wandEnchantmentIdentifier)
        } else if let weaponEnchantmentIdentifier = try? container.decode(WeaponEnchantmentIdentifier.self) {
            self = .weaponEnchantmentIdentifier(weaponEnchantmentIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No ActivatableIdentifier type found")
        }
    }
}

public enum SpecialAbilityIdentifier: EntitySubtype {
    case advancedCombatSpecialAbilityIdentifier(AdvancedCombatSpecialAbilityIdentifier)
    case advancedKarmaSpecialAbilityIdentifier(AdvancedKarmaSpecialAbilityIdentifier)
    case advancedMagicalSpecialAbilityIdentifier(AdvancedMagicalSpecialAbilityIdentifier)
    case advancedSkillSpecialAbilityIdentifier(AdvancedSkillSpecialAbilityIdentifier)
    case ancestorGlyphIdentifier(AncestorGlyphIdentifier)
    case arcaneOrbEnchantmentIdentifier(ArcaneOrbEnchantmentIdentifier)
    case attireEnchantmentIdentifier(AttireEnchantmentIdentifier)
    case blessedTraditionIdentifier(BlessedTraditionIdentifier)
    case bowlEnchantmentIdentifier(BowlEnchantmentIdentifier)
    case brawlingSpecialAbilityIdentifier(BrawlingSpecialAbilityIdentifier)
    case cauldronEnchantmentIdentifier(CauldronEnchantmentIdentifier)
    case ceremonialItemSpecialAbilityIdentifier(CeremonialItemSpecialAbilityIdentifier)
    case chronicleEnchantmentIdentifier(ChronicleEnchantmentIdentifier)
    case combatSpecialAbilityIdentifier(CombatSpecialAbilityIdentifier)
    case combatStyleSpecialAbilityIdentifier(CombatStyleSpecialAbilityIdentifier)
    case commandSpecialAbilityIdentifier(CommandSpecialAbilityIdentifier)
    case daggerRitualIdentifier(DaggerRitualIdentifier)
    case familiarSpecialAbilityIdentifier(FamiliarSpecialAbilityIdentifier)
    case fatePointSexSpecialAbilityIdentifier(FatePointSexSpecialAbilityIdentifier)
    case fatePointSpecialAbilityIdentifier(FatePointSpecialAbilityIdentifier)
    case foolsHatEnchantmentIdentifier(FoolsHatEnchantmentIdentifier)
    case generalSpecialAbilityIdentifier(GeneralSpecialAbilityIdentifier)
    case instrumentEnchantmentIdentifier(InstrumentEnchantmentIdentifier)
    case karmaSpecialAbilityIdentifier(KarmaSpecialAbilityIdentifier)
    case krallenkettenzauberIdentifier(KrallenkettenzauberIdentifier)
    case liturgicalStyleSpecialAbilityIdentifier(LiturgicalStyleSpecialAbilityIdentifier)
    case lycantropicGiftIdentifier(LycantropicGiftIdentifier)
    case magicalSignIdentifier(MagicalSignIdentifier)
    case magicalSpecialAbilityIdentifier(MagicalSpecialAbilityIdentifier)
    case magicalTraditionIdentifier(MagicalTraditionIdentifier)
    case magicStyleSpecialAbilityIdentifier(MagicStyleSpecialAbilityIdentifier)
    case orbEnchantmentIdentifier(OrbEnchantmentIdentifier)
    case pactGiftIdentifier(PactGiftIdentifier)
    case protectiveWardingCircleSpecialAbilityIdentifier(ProtectiveWardingCircleSpecialAbilityIdentifier)
    case ringEnchantmentIdentifier(RingEnchantmentIdentifier)
    case sermonIdentifier(SermonIdentifier)
    case sexSpecialAbilityIdentifier(SexSpecialAbilityIdentifier)
    case sickleRitualIdentifier(SickleRitualIdentifier)
    case sikaryanDrainSpecialAbilityIdentifier(SikaryanDrainSpecialAbilityIdentifier)
    case skillStyleSpecialAbilityIdentifier(SkillStyleSpecialAbilityIdentifier)
    case spellSwordEnchantmentIdentifier(SpellSwordEnchantmentIdentifier)
    case staffEnchantmentIdentifier(StaffEnchantmentIdentifier)
    case toyEnchantmentIdentifier(ToyEnchantmentIdentifier)
    case trinkhornzauberIdentifier(TrinkhornzauberIdentifier)
    case vampiricGiftIdentifier(VampiricGiftIdentifier)
    case visionIdentifier(VisionIdentifier)
    case wandEnchantmentIdentifier(WandEnchantmentIdentifier)
    case weaponEnchantmentIdentifier(WeaponEnchantmentIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let advancedCombatSpecialAbilityIdentifier = try? container.decode(AdvancedCombatSpecialAbilityIdentifier.self) {
            self = .advancedCombatSpecialAbilityIdentifier(advancedCombatSpecialAbilityIdentifier)
        } else if let advancedKarmaSpecialAbilityIdentifier = try? container.decode(AdvancedKarmaSpecialAbilityIdentifier.self) {
            self = .advancedKarmaSpecialAbilityIdentifier(advancedKarmaSpecialAbilityIdentifier)
        } else if let advancedMagicalSpecialAbilityIdentifier = try? container.decode(AdvancedMagicalSpecialAbilityIdentifier.self) {
            self = .advancedMagicalSpecialAbilityIdentifier(advancedMagicalSpecialAbilityIdentifier)
        } else if let advancedSkillSpecialAbilityIdentifier = try? container.decode(AdvancedSkillSpecialAbilityIdentifier.self) {
            self = .advancedSkillSpecialAbilityIdentifier(advancedSkillSpecialAbilityIdentifier)
        } else if let ancestorGlyphIdentifier = try? container.decode(AncestorGlyphIdentifier.self) {
            self = .ancestorGlyphIdentifier(ancestorGlyphIdentifier)
        } else if let arcaneOrbEnchantmentIdentifier = try? container.decode(ArcaneOrbEnchantmentIdentifier.self) {
            self = .arcaneOrbEnchantmentIdentifier(arcaneOrbEnchantmentIdentifier)
        } else if let attireEnchantmentIdentifier = try? container.decode(AttireEnchantmentIdentifier.self) {
            self = .attireEnchantmentIdentifier(attireEnchantmentIdentifier)
        } else if let blessedTraditionIdentifier = try? container.decode(BlessedTraditionIdentifier.self) {
            self = .blessedTraditionIdentifier(blessedTraditionIdentifier)
        } else if let bowlEnchantmentIdentifier = try? container.decode(BowlEnchantmentIdentifier.self) {
            self = .bowlEnchantmentIdentifier(bowlEnchantmentIdentifier)
        } else if let brawlingSpecialAbilityIdentifier = try? container.decode(BrawlingSpecialAbilityIdentifier.self) {
            self = .brawlingSpecialAbilityIdentifier(brawlingSpecialAbilityIdentifier)
        } else if let cauldronEnchantmentIdentifier = try? container.decode(CauldronEnchantmentIdentifier.self) {
            self = .cauldronEnchantmentIdentifier(cauldronEnchantmentIdentifier)
        } else if let ceremonialItemSpecialAbilityIdentifier = try? container.decode(CeremonialItemSpecialAbilityIdentifier.self) {
            self = .ceremonialItemSpecialAbilityIdentifier(ceremonialItemSpecialAbilityIdentifier)
        } else if let chronicleEnchantmentIdentifier = try? container.decode(ChronicleEnchantmentIdentifier.self) {
            self = .chronicleEnchantmentIdentifier(chronicleEnchantmentIdentifier)
        } else if let combatSpecialAbilityIdentifier = try? container.decode(CombatSpecialAbilityIdentifier.self) {
            self = .combatSpecialAbilityIdentifier(combatSpecialAbilityIdentifier)
        } else if let combatStyleSpecialAbilityIdentifier = try? container.decode(CombatStyleSpecialAbilityIdentifier.self) {
            self = .combatStyleSpecialAbilityIdentifier(combatStyleSpecialAbilityIdentifier)
        } else if let commandSpecialAbilityIdentifier = try? container.decode(CommandSpecialAbilityIdentifier.self) {
            self = .commandSpecialAbilityIdentifier(commandSpecialAbilityIdentifier)
        } else if let daggerRitualIdentifier = try? container.decode(DaggerRitualIdentifier.self) {
            self = .daggerRitualIdentifier(daggerRitualIdentifier)
        } else if let familiarSpecialAbilityIdentifier = try? container.decode(FamiliarSpecialAbilityIdentifier.self) {
            self = .familiarSpecialAbilityIdentifier(familiarSpecialAbilityIdentifier)
        } else if let fatePointSexSpecialAbilityIdentifier = try? container.decode(FatePointSexSpecialAbilityIdentifier.self) {
            self = .fatePointSexSpecialAbilityIdentifier(fatePointSexSpecialAbilityIdentifier)
        } else if let fatePointSpecialAbilityIdentifier = try? container.decode(FatePointSpecialAbilityIdentifier.self) {
            self = .fatePointSpecialAbilityIdentifier(fatePointSpecialAbilityIdentifier)
        } else if let foolsHatEnchantmentIdentifier = try? container.decode(FoolsHatEnchantmentIdentifier.self) {
            self = .foolsHatEnchantmentIdentifier(foolsHatEnchantmentIdentifier)
        } else if let generalSpecialAbilityIdentifier = try? container.decode(GeneralSpecialAbilityIdentifier.self) {
            self = .generalSpecialAbilityIdentifier(generalSpecialAbilityIdentifier)
        } else if let instrumentEnchantmentIdentifier = try? container.decode(InstrumentEnchantmentIdentifier.self) {
            self = .instrumentEnchantmentIdentifier(instrumentEnchantmentIdentifier)
        } else if let karmaSpecialAbilityIdentifier = try? container.decode(KarmaSpecialAbilityIdentifier.self) {
            self = .karmaSpecialAbilityIdentifier(karmaSpecialAbilityIdentifier)
        } else if let krallenkettenzauberIdentifier = try? container.decode(KrallenkettenzauberIdentifier.self) {
            self = .krallenkettenzauberIdentifier(krallenkettenzauberIdentifier)
        } else if let liturgicalStyleSpecialAbilityIdentifier = try? container.decode(LiturgicalStyleSpecialAbilityIdentifier.self) {
            self = .liturgicalStyleSpecialAbilityIdentifier(liturgicalStyleSpecialAbilityIdentifier)
        } else if let lycantropicGiftIdentifier = try? container.decode(LycantropicGiftIdentifier.self) {
            self = .lycantropicGiftIdentifier(lycantropicGiftIdentifier)
        } else if let magicalSignIdentifier = try? container.decode(MagicalSignIdentifier.self) {
            self = .magicalSignIdentifier(magicalSignIdentifier)
        } else if let magicalSpecialAbilityIdentifier = try? container.decode(MagicalSpecialAbilityIdentifier.self) {
            self = .magicalSpecialAbilityIdentifier(magicalSpecialAbilityIdentifier)
        } else if let magicalTraditionIdentifier = try? container.decode(MagicalTraditionIdentifier.self) {
            self = .magicalTraditionIdentifier(magicalTraditionIdentifier)
        } else if let magicStyleSpecialAbilityIdentifier = try? container.decode(MagicStyleSpecialAbilityIdentifier.self) {
            self = .magicStyleSpecialAbilityIdentifier(magicStyleSpecialAbilityIdentifier)
        } else if let orbEnchantmentIdentifier = try? container.decode(OrbEnchantmentIdentifier.self) {
            self = .orbEnchantmentIdentifier(orbEnchantmentIdentifier)
        } else if let pactGiftIdentifier = try? container.decode(PactGiftIdentifier.self) {
            self = .pactGiftIdentifier(pactGiftIdentifier)
        } else if let protectiveWardingCircleSpecialAbilityIdentifier = try? container.decode(ProtectiveWardingCircleSpecialAbilityIdentifier.self) {
            self = .protectiveWardingCircleSpecialAbilityIdentifier(protectiveWardingCircleSpecialAbilityIdentifier)
        } else if let ringEnchantmentIdentifier = try? container.decode(RingEnchantmentIdentifier.self) {
            self = .ringEnchantmentIdentifier(ringEnchantmentIdentifier)
        } else if let sermonIdentifier = try? container.decode(SermonIdentifier.self) {
            self = .sermonIdentifier(sermonIdentifier)
        } else if let sexSpecialAbilityIdentifier = try? container.decode(SexSpecialAbilityIdentifier.self) {
            self = .sexSpecialAbilityIdentifier(sexSpecialAbilityIdentifier)
        } else if let sickleRitualIdentifier = try? container.decode(SickleRitualIdentifier.self) {
            self = .sickleRitualIdentifier(sickleRitualIdentifier)
        } else if let sikaryanDrainSpecialAbilityIdentifier = try? container.decode(SikaryanDrainSpecialAbilityIdentifier.self) {
            self = .sikaryanDrainSpecialAbilityIdentifier(sikaryanDrainSpecialAbilityIdentifier)
        } else if let skillStyleSpecialAbilityIdentifier = try? container.decode(SkillStyleSpecialAbilityIdentifier.self) {
            self = .skillStyleSpecialAbilityIdentifier(skillStyleSpecialAbilityIdentifier)
        } else if let spellSwordEnchantmentIdentifier = try? container.decode(SpellSwordEnchantmentIdentifier.self) {
            self = .spellSwordEnchantmentIdentifier(spellSwordEnchantmentIdentifier)
        } else if let staffEnchantmentIdentifier = try? container.decode(StaffEnchantmentIdentifier.self) {
            self = .staffEnchantmentIdentifier(staffEnchantmentIdentifier)
        } else if let toyEnchantmentIdentifier = try? container.decode(ToyEnchantmentIdentifier.self) {
            self = .toyEnchantmentIdentifier(toyEnchantmentIdentifier)
        } else if let trinkhornzauberIdentifier = try? container.decode(TrinkhornzauberIdentifier.self) {
            self = .trinkhornzauberIdentifier(trinkhornzauberIdentifier)
        } else if let vampiricGiftIdentifier = try? container.decode(VampiricGiftIdentifier.self) {
            self = .vampiricGiftIdentifier(vampiricGiftIdentifier)
        } else if let visionIdentifier = try? container.decode(VisionIdentifier.self) {
            self = .visionIdentifier(visionIdentifier)
        } else if let wandEnchantmentIdentifier = try? container.decode(WandEnchantmentIdentifier.self) {
            self = .wandEnchantmentIdentifier(wandEnchantmentIdentifier)
        } else if let weaponEnchantmentIdentifier = try? container.decode(WeaponEnchantmentIdentifier.self) {
            self = .weaponEnchantmentIdentifier(weaponEnchantmentIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No SpecialAbilityIdentifier type found")
        }
    }
}

public enum CombatRelatedSpecialAbilityIdentifier: EntitySubtype {
    case combatSpecialAbilityIdentifier(CombatSpecialAbilityIdentifier)
    case combatStyleSpecialAbilityIdentifier(CombatStyleSpecialAbilityIdentifier)
    case advancedCombatSpecialAbilityIdentifier(AdvancedCombatSpecialAbilityIdentifier)
    case commandSpecialAbilityIdentifier(CommandSpecialAbilityIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let combatSpecialAbilityIdentifier = try? container.decode(CombatSpecialAbilityIdentifier.self) {
            self = .combatSpecialAbilityIdentifier(combatSpecialAbilityIdentifier)
        } else if let combatStyleSpecialAbilityIdentifier = try? container.decode(CombatStyleSpecialAbilityIdentifier.self) {
            self = .combatStyleSpecialAbilityIdentifier(combatStyleSpecialAbilityIdentifier)
        } else if let advancedCombatSpecialAbilityIdentifier = try? container.decode(AdvancedCombatSpecialAbilityIdentifier.self) {
            self = .advancedCombatSpecialAbilityIdentifier(advancedCombatSpecialAbilityIdentifier)
        } else if let commandSpecialAbilityIdentifier = try? container.decode(CommandSpecialAbilityIdentifier.self) {
            self = .commandSpecialAbilityIdentifier(commandSpecialAbilityIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No CombatRelatedSpecialAbilityIdentifier type found")
        }
    }
}

public enum TraditionIdentifier: EntitySubtype {
    case magicalTraditionIdentifier(MagicalTraditionIdentifier)
    case blessedTraditionIdentifier(BlessedTraditionIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let magicalTraditionIdentifier = try? container.decode(MagicalTraditionIdentifier.self) {
            self = .magicalTraditionIdentifier(magicalTraditionIdentifier)
        } else if let blessedTraditionIdentifier = try? container.decode(BlessedTraditionIdentifier.self) {
            self = .blessedTraditionIdentifier(blessedTraditionIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No TraditionIdentifier type found")
        }
    }
}

public enum RatedIdentifier: EntitySubtype {
    case attributeIdentifier(AttributeIdentifier)
    case skillIdentifier(SkillIdentifier)
    case closeCombatTechniqueIdentifier(CloseCombatTechniqueIdentifier)
    case rangedCombatTechniqueIdentifier(RangedCombatTechniqueIdentifier)
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let attributeIdentifier = try? container.decode(AttributeIdentifier.self) {
            self = .attributeIdentifier(attributeIdentifier)
        } else if let skillIdentifier = try? container.decode(SkillIdentifier.self) {
            self = .skillIdentifier(skillIdentifier)
        } else if let closeCombatTechniqueIdentifier = try? container.decode(CloseCombatTechniqueIdentifier.self) {
            self = .closeCombatTechniqueIdentifier(closeCombatTechniqueIdentifier)
        } else if let rangedCombatTechniqueIdentifier = try? container.decode(RangedCombatTechniqueIdentifier.self) {
            self = .rangedCombatTechniqueIdentifier(rangedCombatTechniqueIdentifier)
        } else if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No RatedIdentifier type found")
        }
    }
}

public enum SkillishIdentifier: EntitySubtype {
    case skillIdentifier(SkillIdentifier)
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let skillIdentifier = try? container.decode(SkillIdentifier.self) {
            self = .skillIdentifier(skillIdentifier)
        } else if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No SkillishIdentifier type found")
        }
    }
}

public enum AdvancedSpecialAbilityRestrictedOptionIdentifier: EntitySubtype {
    case generalIdentifier(GeneralIdentifier)
    case skillIdentifier(SkillIdentifier)
    case elementIdentifier(ElementIdentifier)
    case aspectIdentifier(AspectIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let generalIdentifier = try? container.decode(GeneralIdentifier.self) {
            self = .generalIdentifier(generalIdentifier)
        } else if let skillIdentifier = try? container.decode(SkillIdentifier.self) {
            self = .skillIdentifier(skillIdentifier)
        } else if let elementIdentifier = try? container.decode(ElementIdentifier.self) {
            self = .elementIdentifier(elementIdentifier)
        } else if let aspectIdentifier = try? container.decode(AspectIdentifier.self) {
            self = .aspectIdentifier(aspectIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No AdvancedSpecialAbilityRestrictedOptionIdentifier type found")
        }
    }
}

public enum VolumePointsOptionReferenceIdentifier: EntitySubtype {
    case generalIdentifier(GeneralIdentifier)
    case animalShapeSizeIdentifier(AnimalShapeSizeIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let generalIdentifier = try? container.decode(GeneralIdentifier.self) {
            self = .generalIdentifier(generalIdentifier)
        } else if let animalShapeSizeIdentifier = try? container.decode(AnimalShapeSizeIdentifier.self) {
            self = .animalShapeSizeIdentifier(animalShapeSizeIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No VolumePointsOptionReferenceIdentifier type found")
        }
    }
}

public enum CombatTechniqueIdentifier: EntitySubtype {
    case closeCombatTechniqueIdentifier(CloseCombatTechniqueIdentifier)
    case rangedCombatTechniqueIdentifier(RangedCombatTechniqueIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let closeCombatTechniqueIdentifier = try? container.decode(CloseCombatTechniqueIdentifier.self) {
            self = .closeCombatTechniqueIdentifier(closeCombatTechniqueIdentifier)
        } else if let rangedCombatTechniqueIdentifier = try? container.decode(RangedCombatTechniqueIdentifier.self) {
            self = .rangedCombatTechniqueIdentifier(rangedCombatTechniqueIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No CombatTechniqueIdentifier type found")
        }
    }
}

public enum ExtensionRuleIdentifier: EntitySubtype {
    case focusRuleIdentifier(FocusRuleIdentifier)
    case optionalRuleIdentifier(OptionalRuleIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let focusRuleIdentifier = try? container.decode(FocusRuleIdentifier.self) {
            self = .focusRuleIdentifier(focusRuleIdentifier)
        } else if let optionalRuleIdentifier = try? container.decode(OptionalRuleIdentifier.self) {
            self = .optionalRuleIdentifier(optionalRuleIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No ExtensionRuleIdentifier type found")
        }
    }
}

public enum SkillWithEnhancementsIdentifier: EntitySubtype {
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No SkillWithEnhancementsIdentifier type found")
        }
    }
}

public enum SpellworkIdentifier: EntitySubtype {
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No SpellworkIdentifier type found")
        }
    }
}

public enum LiturgyIdentifier: EntitySubtype {
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No LiturgyIdentifier type found")
        }
    }
}

public enum MagicalActionIdentifier: EntitySubtype {
    case curseIdentifier(CurseIdentifier)
    case elvenMagicalSongIdentifier(ElvenMagicalSongIdentifier)
    case dominationRitualIdentifier(DominationRitualIdentifier)
    case magicalMelodyIdentifier(MagicalMelodyIdentifier)
    case magicalDanceIdentifier(MagicalDanceIdentifier)
    case jesterTrickIdentifier(JesterTrickIdentifier)
    case animistPowerIdentifier(AnimistPowerIdentifier)
    case geodeRitualIdentifier(GeodeRitualIdentifier)
    case zibiljaRitualIdentifier(ZibiljaRitualIdentifier)
    case magicalRuneIdentifier(MagicalRuneIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let curseIdentifier = try? container.decode(CurseIdentifier.self) {
            self = .curseIdentifier(curseIdentifier)
        } else if let elvenMagicalSongIdentifier = try? container.decode(ElvenMagicalSongIdentifier.self) {
            self = .elvenMagicalSongIdentifier(elvenMagicalSongIdentifier)
        } else if let dominationRitualIdentifier = try? container.decode(DominationRitualIdentifier.self) {
            self = .dominationRitualIdentifier(dominationRitualIdentifier)
        } else if let magicalMelodyIdentifier = try? container.decode(MagicalMelodyIdentifier.self) {
            self = .magicalMelodyIdentifier(magicalMelodyIdentifier)
        } else if let magicalDanceIdentifier = try? container.decode(MagicalDanceIdentifier.self) {
            self = .magicalDanceIdentifier(magicalDanceIdentifier)
        } else if let jesterTrickIdentifier = try? container.decode(JesterTrickIdentifier.self) {
            self = .jesterTrickIdentifier(jesterTrickIdentifier)
        } else if let animistPowerIdentifier = try? container.decode(AnimistPowerIdentifier.self) {
            self = .animistPowerIdentifier(animistPowerIdentifier)
        } else if let geodeRitualIdentifier = try? container.decode(GeodeRitualIdentifier.self) {
            self = .geodeRitualIdentifier(geodeRitualIdentifier)
        } else if let zibiljaRitualIdentifier = try? container.decode(ZibiljaRitualIdentifier.self) {
            self = .zibiljaRitualIdentifier(zibiljaRitualIdentifier)
        } else if let magicalRuneIdentifier = try? container.decode(MagicalRuneIdentifier.self) {
            self = .magicalRuneIdentifier(magicalRuneIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No MagicalActionIdentifier type found")
        }
    }
}

public enum SelectOptionIdentifier: EntitySubtype {
    case generalIdentifier(GeneralIdentifier)
    case blessingIdentifier(BlessingIdentifier)
    case cantripIdentifier(CantripIdentifier)
    case tradeSecretIdentifier(TradeSecretIdentifier)
    case scriptIdentifier(ScriptIdentifier)
    case animalShapeIdentifier(AnimalShapeIdentifier)
    case arcaneBardTraditionIdentifier(ArcaneBardTraditionIdentifier)
    case arcaneDancerTraditionIdentifier(ArcaneDancerTraditionIdentifier)
    case sexPracticeIdentifier(SexPracticeIdentifier)
    case raceIdentifier(RaceIdentifier)
    case cultureIdentifier(CultureIdentifier)
    case blessedTraditionIdentifier(BlessedTraditionIdentifier)
    case elementIdentifier(ElementIdentifier)
    case propertyIdentifier(PropertyIdentifier)
    case aspectIdentifier(AspectIdentifier)
    case diseaseIdentifier(DiseaseIdentifier)
    case poisonIdentifier(PoisonIdentifier)
    case languageIdentifier(LanguageIdentifier)
    case skillIdentifier(SkillIdentifier)
    case closeCombatTechniqueIdentifier(CloseCombatTechniqueIdentifier)
    case rangedCombatTechniqueIdentifier(RangedCombatTechniqueIdentifier)
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)
    case targetCategoryIdentifier(TargetCategoryIdentifier)
    case patronIdentifier(PatronIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let generalIdentifier = try? container.decode(GeneralIdentifier.self) {
            self = .generalIdentifier(generalIdentifier)
        } else if let blessingIdentifier = try? container.decode(BlessingIdentifier.self) {
            self = .blessingIdentifier(blessingIdentifier)
        } else if let cantripIdentifier = try? container.decode(CantripIdentifier.self) {
            self = .cantripIdentifier(cantripIdentifier)
        } else if let tradeSecretIdentifier = try? container.decode(TradeSecretIdentifier.self) {
            self = .tradeSecretIdentifier(tradeSecretIdentifier)
        } else if let scriptIdentifier = try? container.decode(ScriptIdentifier.self) {
            self = .scriptIdentifier(scriptIdentifier)
        } else if let animalShapeIdentifier = try? container.decode(AnimalShapeIdentifier.self) {
            self = .animalShapeIdentifier(animalShapeIdentifier)
        } else if let arcaneBardTraditionIdentifier = try? container.decode(ArcaneBardTraditionIdentifier.self) {
            self = .arcaneBardTraditionIdentifier(arcaneBardTraditionIdentifier)
        } else if let arcaneDancerTraditionIdentifier = try? container.decode(ArcaneDancerTraditionIdentifier.self) {
            self = .arcaneDancerTraditionIdentifier(arcaneDancerTraditionIdentifier)
        } else if let sexPracticeIdentifier = try? container.decode(SexPracticeIdentifier.self) {
            self = .sexPracticeIdentifier(sexPracticeIdentifier)
        } else if let raceIdentifier = try? container.decode(RaceIdentifier.self) {
            self = .raceIdentifier(raceIdentifier)
        } else if let cultureIdentifier = try? container.decode(CultureIdentifier.self) {
            self = .cultureIdentifier(cultureIdentifier)
        } else if let blessedTraditionIdentifier = try? container.decode(BlessedTraditionIdentifier.self) {
            self = .blessedTraditionIdentifier(blessedTraditionIdentifier)
        } else if let elementIdentifier = try? container.decode(ElementIdentifier.self) {
            self = .elementIdentifier(elementIdentifier)
        } else if let propertyIdentifier = try? container.decode(PropertyIdentifier.self) {
            self = .propertyIdentifier(propertyIdentifier)
        } else if let aspectIdentifier = try? container.decode(AspectIdentifier.self) {
            self = .aspectIdentifier(aspectIdentifier)
        } else if let diseaseIdentifier = try? container.decode(DiseaseIdentifier.self) {
            self = .diseaseIdentifier(diseaseIdentifier)
        } else if let poisonIdentifier = try? container.decode(PoisonIdentifier.self) {
            self = .poisonIdentifier(poisonIdentifier)
        } else if let languageIdentifier = try? container.decode(LanguageIdentifier.self) {
            self = .languageIdentifier(languageIdentifier)
        } else if let skillIdentifier = try? container.decode(SkillIdentifier.self) {
            self = .skillIdentifier(skillIdentifier)
        } else if let closeCombatTechniqueIdentifier = try? container.decode(CloseCombatTechniqueIdentifier.self) {
            self = .closeCombatTechniqueIdentifier(closeCombatTechniqueIdentifier)
        } else if let rangedCombatTechniqueIdentifier = try? container.decode(RangedCombatTechniqueIdentifier.self) {
            self = .rangedCombatTechniqueIdentifier(rangedCombatTechniqueIdentifier)
        } else if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else if let targetCategoryIdentifier = try? container.decode(TargetCategoryIdentifier.self) {
            self = .targetCategoryIdentifier(targetCategoryIdentifier)
        } else if let patronIdentifier = try? container.decode(PatronIdentifier.self) {
            self = .patronIdentifier(patronIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No SelectOptionIdentifier type found")
        }
    }
}

public enum RequirableSelectOptionIdentifier: EntitySubtype {
    case generalIdentifier(GeneralIdentifier)
    case skillIdentifier(SkillIdentifier)
    case closeCombatTechniqueIdentifier(CloseCombatTechniqueIdentifier)
    case rangedCombatTechniqueIdentifier(RangedCombatTechniqueIdentifier)
    case propertyIdentifier(PropertyIdentifier)
    case aspectIdentifier(AspectIdentifier)
    case languageIdentifier(LanguageIdentifier)
    case animalShapeIdentifier(AnimalShapeIdentifier)
    case liturgicalChantIdentifier(LiturgicalChantIdentifier)
    case ceremonyIdentifier(CeremonyIdentifier)
    case spellIdentifier(SpellIdentifier)
    case ritualIdentifier(RitualIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let generalIdentifier = try? container.decode(GeneralIdentifier.self) {
            self = .generalIdentifier(generalIdentifier)
        } else if let skillIdentifier = try? container.decode(SkillIdentifier.self) {
            self = .skillIdentifier(skillIdentifier)
        } else if let closeCombatTechniqueIdentifier = try? container.decode(CloseCombatTechniqueIdentifier.self) {
            self = .closeCombatTechniqueIdentifier(closeCombatTechniqueIdentifier)
        } else if let rangedCombatTechniqueIdentifier = try? container.decode(RangedCombatTechniqueIdentifier.self) {
            self = .rangedCombatTechniqueIdentifier(rangedCombatTechniqueIdentifier)
        } else if let propertyIdentifier = try? container.decode(PropertyIdentifier.self) {
            self = .propertyIdentifier(propertyIdentifier)
        } else if let aspectIdentifier = try? container.decode(AspectIdentifier.self) {
            self = .aspectIdentifier(aspectIdentifier)
        } else if let languageIdentifier = try? container.decode(LanguageIdentifier.self) {
            self = .languageIdentifier(languageIdentifier)
        } else if let animalShapeIdentifier = try? container.decode(AnimalShapeIdentifier.self) {
            self = .animalShapeIdentifier(animalShapeIdentifier)
        } else if let liturgicalChantIdentifier = try? container.decode(LiturgicalChantIdentifier.self) {
            self = .liturgicalChantIdentifier(liturgicalChantIdentifier)
        } else if let ceremonyIdentifier = try? container.decode(CeremonyIdentifier.self) {
            self = .ceremonyIdentifier(ceremonyIdentifier)
        } else if let spellIdentifier = try? container.decode(SpellIdentifier.self) {
            self = .spellIdentifier(spellIdentifier)
        } else if let ritualIdentifier = try? container.decode(RitualIdentifier.self) {
            self = .ritualIdentifier(ritualIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No RequirableSelectOptionIdentifier type found")
        }
    }
}

public enum CoreRuleDerivableContentIdentifier: EntitySubtype {
    case magicalTraditionIdentifier(MagicalTraditionIdentifier)
    case familiarSpecialAbilityIdentifier(FamiliarSpecialAbilityIdentifier)
    case magicalSpecialAbilityIdentifier(MagicalSpecialAbilityIdentifier)
    case blessedTraditionIdentifier(BlessedTraditionIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let magicalTraditionIdentifier = try? container.decode(MagicalTraditionIdentifier.self) {
            self = .magicalTraditionIdentifier(magicalTraditionIdentifier)
        } else if let familiarSpecialAbilityIdentifier = try? container.decode(FamiliarSpecialAbilityIdentifier.self) {
            self = .familiarSpecialAbilityIdentifier(familiarSpecialAbilityIdentifier)
        } else if let magicalSpecialAbilityIdentifier = try? container.decode(MagicalSpecialAbilityIdentifier.self) {
            self = .magicalSpecialAbilityIdentifier(magicalSpecialAbilityIdentifier)
        } else if let blessedTraditionIdentifier = try? container.decode(BlessedTraditionIdentifier.self) {
            self = .blessedTraditionIdentifier(blessedTraditionIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No CoreRuleDerivableContentIdentifier type found")
        }
    }
}

public enum EquipmentIdentifier: EntitySubtype {
    case ammunitionIdentifier(AmmunitionIdentifier)
    case animalIdentifier(AnimalIdentifier)
    case animalCareIdentifier(AnimalCareIdentifier)
    case armorIdentifier(ArmorIdentifier)
    case bandageOrRemedyIdentifier(BandageOrRemedyIdentifier)
    case bookIdentifier(BookIdentifier)
    case ceremonialItemIdentifier(CeremonialItemIdentifier)
    case clothesIdentifier(ClothesIdentifier)
    case containerIdentifier(ContainerIdentifier)
    case elixirIdentifier(ElixirIdentifier)
    case equipmentOfBlessedOnesIdentifier(EquipmentOfBlessedOnesIdentifier)
    case gemOrPreciousStoneIdentifier(GemOrPreciousStoneIdentifier)
    case illuminationLightSourceIdentifier(IlluminationLightSourceIdentifier)
    case illuminationRefillsOrSuppliesIdentifier(IlluminationRefillsOrSuppliesIdentifier)
    case jewelryIdentifier(JewelryIdentifier)
    case liebesspielzeugIdentifier(LiebesspielzeugIdentifier)
    case luxuryGoodIdentifier(LuxuryGoodIdentifier)
    case magicalArtifactIdentifier(MagicalArtifactIdentifier)
    case musicalInstrumentIdentifier(MusicalInstrumentIdentifier)
    case orienteeringAidIdentifier(OrienteeringAidIdentifier)
    case poisonIdentifier(PoisonIdentifier)
    case ropeOrChainIdentifier(RopeOrChainIdentifier)
    case stationaryIdentifier(StationaryIdentifier)
    case thievesToolIdentifier(ThievesToolIdentifier)
    case toolOfTheTradeIdentifier(ToolOfTheTradeIdentifier)
    case travelGearOrToolIdentifier(TravelGearOrToolIdentifier)
    case vehicleIdentifier(VehicleIdentifier)
    case weaponIdentifier(WeaponIdentifier)
    case weaponAccessoryIdentifier(WeaponAccessoryIdentifier)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let ammunitionIdentifier = try? container.decode(AmmunitionIdentifier.self) {
            self = .ammunitionIdentifier(ammunitionIdentifier)
        } else if let animalIdentifier = try? container.decode(AnimalIdentifier.self) {
            self = .animalIdentifier(animalIdentifier)
        } else if let animalCareIdentifier = try? container.decode(AnimalCareIdentifier.self) {
            self = .animalCareIdentifier(animalCareIdentifier)
        } else if let armorIdentifier = try? container.decode(ArmorIdentifier.self) {
            self = .armorIdentifier(armorIdentifier)
        } else if let bandageOrRemedyIdentifier = try? container.decode(BandageOrRemedyIdentifier.self) {
            self = .bandageOrRemedyIdentifier(bandageOrRemedyIdentifier)
        } else if let bookIdentifier = try? container.decode(BookIdentifier.self) {
            self = .bookIdentifier(bookIdentifier)
        } else if let ceremonialItemIdentifier = try? container.decode(CeremonialItemIdentifier.self) {
            self = .ceremonialItemIdentifier(ceremonialItemIdentifier)
        } else if let clothesIdentifier = try? container.decode(ClothesIdentifier.self) {
            self = .clothesIdentifier(clothesIdentifier)
        } else if let containerIdentifier = try? container.decode(ContainerIdentifier.self) {
            self = .containerIdentifier(containerIdentifier)
        } else if let elixirIdentifier = try? container.decode(ElixirIdentifier.self) {
            self = .elixirIdentifier(elixirIdentifier)
        } else if let equipmentOfBlessedOnesIdentifier = try? container.decode(EquipmentOfBlessedOnesIdentifier.self) {
            self = .equipmentOfBlessedOnesIdentifier(equipmentOfBlessedOnesIdentifier)
        } else if let gemOrPreciousStoneIdentifier = try? container.decode(GemOrPreciousStoneIdentifier.self) {
            self = .gemOrPreciousStoneIdentifier(gemOrPreciousStoneIdentifier)
        } else if let illuminationLightSourceIdentifier = try? container.decode(IlluminationLightSourceIdentifier.self) {
            self = .illuminationLightSourceIdentifier(illuminationLightSourceIdentifier)
        } else if let illuminationRefillsOrSuppliesIdentifier = try? container.decode(IlluminationRefillsOrSuppliesIdentifier.self) {
            self = .illuminationRefillsOrSuppliesIdentifier(illuminationRefillsOrSuppliesIdentifier)
        } else if let jewelryIdentifier = try? container.decode(JewelryIdentifier.self) {
            self = .jewelryIdentifier(jewelryIdentifier)
        } else if let liebesspielzeugIdentifier = try? container.decode(LiebesspielzeugIdentifier.self) {
            self = .liebesspielzeugIdentifier(liebesspielzeugIdentifier)
        } else if let luxuryGoodIdentifier = try? container.decode(LuxuryGoodIdentifier.self) {
            self = .luxuryGoodIdentifier(luxuryGoodIdentifier)
        } else if let magicalArtifactIdentifier = try? container.decode(MagicalArtifactIdentifier.self) {
            self = .magicalArtifactIdentifier(magicalArtifactIdentifier)
        } else if let musicalInstrumentIdentifier = try? container.decode(MusicalInstrumentIdentifier.self) {
            self = .musicalInstrumentIdentifier(musicalInstrumentIdentifier)
        } else if let orienteeringAidIdentifier = try? container.decode(OrienteeringAidIdentifier.self) {
            self = .orienteeringAidIdentifier(orienteeringAidIdentifier)
        } else if let poisonIdentifier = try? container.decode(PoisonIdentifier.self) {
            self = .poisonIdentifier(poisonIdentifier)
        } else if let ropeOrChainIdentifier = try? container.decode(RopeOrChainIdentifier.self) {
            self = .ropeOrChainIdentifier(ropeOrChainIdentifier)
        } else if let stationaryIdentifier = try? container.decode(StationaryIdentifier.self) {
            self = .stationaryIdentifier(stationaryIdentifier)
        } else if let thievesToolIdentifier = try? container.decode(ThievesToolIdentifier.self) {
            self = .thievesToolIdentifier(thievesToolIdentifier)
        } else if let toolOfTheTradeIdentifier = try? container.decode(ToolOfTheTradeIdentifier.self) {
            self = .toolOfTheTradeIdentifier(toolOfTheTradeIdentifier)
        } else if let travelGearOrToolIdentifier = try? container.decode(TravelGearOrToolIdentifier.self) {
            self = .travelGearOrToolIdentifier(travelGearOrToolIdentifier)
        } else if let vehicleIdentifier = try? container.decode(VehicleIdentifier.self) {
            self = .vehicleIdentifier(vehicleIdentifier)
        } else if let weaponIdentifier = try? container.decode(WeaponIdentifier.self) {
            self = .weaponIdentifier(weaponIdentifier)
        } else if let weaponAccessoryIdentifier = try? container.decode(WeaponAccessoryIdentifier.self) {
            self = .weaponAccessoryIdentifier(weaponAccessoryIdentifier)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No EquipmentIdentifier type found")
        }
    }
}

public enum OneOrManyNumericIdentifiers: EntitySubtype {
    case oneNumericIdentifier(OneNumericIdentifier)
    case manyNumericIdentifiers(ManyNumericIdentifiers)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let oneNumericIdentifier = try? container.decode(OneNumericIdentifier.self) {
            self = .oneNumericIdentifier(oneNumericIdentifier)
        } else if let manyNumericIdentifiers = try? container.decode(ManyNumericIdentifiers.self) {
            self = .manyNumericIdentifiers(manyNumericIdentifiers)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No OneOrManyNumericIdentifiers type found")
        }
    }
}

public typealias OneNumericIdentifier = Double

public typealias ManyNumericIdentifiers = [OneNumericIdentifier]
