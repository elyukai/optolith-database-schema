import FileDB

@Model
public struct CommandSpecialAbility {
    /// Number of available levels.
    @Minimum(2)
    let levels: Int?

    /// The definition of how the combat special ability can be used in combat.
    let usage_type: CombatSpecialAbilityUsageType

    /// Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.
    ///
    /// Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.
    let select_options: SelectOptions?

    /// The number stating how often you can buy the entry. The **default** depends on the entry type:
    ///
    /// - **Advantage:** \`1\` in all cases (as specified in the **Core Rules**)
    /// - **Disadvantage:** \`1\` in all cases (as specified in the **Core Rules**)
    /// - **Special Abilities:** \`1\` if no options can be selected, otherwise the number of possible options
    ///
    /// The maximum is only set if it differs from the defaults specified above.
    @Minimum(1)
    let maximum: Int?

    let prerequisites: GeneralPrerequisites?

    /// The combat techniques the special ability is applicable to.
    let combat_techniques: ApplicableCombatTechniques

    /// The adventure points value.
    let ap_value: AdventurePointsValue

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // CommandSpecialAbilityTranslation
        /// Name of the activatable entry.
        @MinLength(1)
        let name: String

        /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
        @MinLength(1)
        let name_in_library: String?

        /// The rule text.
        @MinLength(1)
        @Markdown
        let rules: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
