import * as DB from "tsondb/schema/dsl"

export const Locale = DB.Entity(import.meta.url, {
  name: "Locale",
  namePlural: "Locales",
  comment:
    "A supported locale. The locale is used to identify the language and region of the content.",
  type: () =>
    DB.Object({
      name: DB.Required({
        comment: "Name of the language in its language.",
        type: DB.String({ minLength: 1 }),
      }),
      region: DB.Required({
        comment: "Region in which the language is spoken in its language.",
        type: DB.String({ minLength: 1 }),
      }),
      is_missing_implementation: DB.Required({
        comment:
          "The language is not (fully) implemented and thus needs to be excluded from stable releases.",
        type: DB.Boolean(),
      }),
      translations: DB.Optional({
        // TODO: Make Required again once translations are added for all locales
        comment: "The translations strings for the locale.",
        // prettier-ignore
        type: DB.TranslationObject({
          // Menu
          "About {$app}": null,
          "Preferences …": null,
          "Services": null,
          "Hide {$app}": null,
          "Hide Others": null,
          "Show All": null,
          "Quit {$app}": null,
          ".input {$os :string} {{File}}": null,
          "Close": null,
          "Quit": null,
          "Edit": null,
          "Undo": null,
          "Redo": null,
          "Cut": null,
          "Copy": null,
          "Paste": null,
          "Delete": null,
          "Select All": null,
          "View": null,
          "Toggle Full Screen": null,
          "Window": null,
          "Minimize": null,
          "Zoom": null,
          "Main Window": null,
          "Bring All to Front": null,

          // Settings Window
          "Settings": null,
          "Main Language": null,
          "System Language": null,
          "Fallback Language": null,
          "No fallback language": null,
          "Appearance": null,
          "Auto": null,
          "Light": null,
          "Dark": null,
          "Edit characters after creation": null,
          "Show animations": null,
          "Check for updates": null,

          // Updater Window
          "Updater": null,
          "Checking for updates …": null,
          "New version available": null,
          /**
           * - `0`: Version number
           */
          "Version {$version} is available! Do you wish to download and install?": null,
          "Download": null,
          "Download Later": null,
          "Downloading update …": null,
          "Update downloaded": null,
          "Quit and Install": null,
          "Install Later": null,
          "No update available": null,
          "You're running the latest version available.": null,

          // Main Window
          "Characters": null,
          "Groups": null,
          "Library": null,
          "FAQ": null,
          "About": null,
          "Imprint": null,
          "Third-Party Licenses": null,
          "Last Changes": null,
          "Profile": null,
          "Overview": null,
          "Personal Data": null,
          "Character Sheet": null,
          "Pact": null,
          "Rules": null,
          "Race, Culture & Profession": null,
          "Race": null,
          "Culture": null,
          "Profession": null,
          "Attributes": null,
          "Advantages & Disadvantages": null,
          "Advantages": null,
          "Disadvantages": null,
          "Abilities": null,
          "Skills": null,
          "Combat Techniques": null,
          "Special Abilities": null,
          "Spells": null,
          "Liturgical Chants": null,
          "Belongings": null,
          "Equipment": null,
          "Hit Zone Armor": null,
          "Pets": null,
          /**
           * - `0`: AP left
           */
          "{$value} AP Remaining": null,
          "Save": null,
          "Show Settings": null,
          "Toggle DevTools": null,

          // Adventure Points
          "Adventure Points": null,
          "AP": null,
          /**
           * - `0`: AP value
           */
          ".input {$value :number} {{{$value} Adventure Points}}": null,
          "{$value} Adventure Points": null,
          /**
           * - `0`: AP value
           */
          "{$value} AP": null,
          /**
           * - `0`: AP Total
           */
          "{$value} Total AP": null,
          /**
           * - `0`: AP Spent
           */
          "{$value} AP Spent": null,
          /**
           * - `0`: Current AP spent on advantages
           * - `1`: Maximum possible AP spent on advantages
           */
          "{$value}/{$max} AP spent on advantages": null,
          /**
           * - `0`: Current AP spent on magic advantages
           * - `1`: Maximum possible AP spent on magic advantages
           */
          "Thereof {$value}/{$max} on magic advantages": null,
          /**
           * - `0`: Current AP spent on blessed advantages
           * - `1`: Maximum possible AP spent on blessed advantages
           */
          "Thereof {$value}/{$max} on blessed advantages": null,
          /**
           * - `0`: Current AP spent on disadvantages
           * - `1`: Maximum possible AP spent on disadvantages
           */
          "{$value}/{$max} AP received from disadvantages": null,
          /**
           * - `0`: Current AP spent on magic disadvantages
           * - `1`: Maximum possible AP spent on magic disadvantages
           */
          "Thereof {$value}/{$max} from magic disadvantages": null,
          /**
           * - `0`: Current AP spent on blessed disadvantages
           * - `1`: Maximum possible AP spent on blessed disadvantages
           */
          "Thereof {$value}/{$max} from blessed disadvantages": null,
          /**
           * - `0`: AP spent on race
           */
          "{$value} AP spent on race": null,
          /**
           * - `0`: AP spent on profession
           */
          "{$value} AP spent on profession": null,
          /**
           * - `0`: AP spent on attributes
           */
          "{$value} AP spent on attributes": null,
          /**
           * - `0`: AP spent on skills
           */
          "{$value} AP spent on skills": null,
          /**
           * - `0`: AP spent on combat techniques
           */
          "{$value} AP spent on combat techniques": null,
          /**
           * - `0`: AP spent on spells
           */
          "{$value} AP spent on spells": null,
          /**
           * - `0`: AP spent on cantrips
           */
          "{$value} AP spent on cantrips": null,
          /**
           * - `0`: AP spent on liturgical chants
           */
          "{$value} AP spent on liturgical chants": null,
          /**
           * - `0`: AP spent on blessings
           */
          "{$value} AP spent on blessings": null,
          /**
           * - `0`: AP spent on special abilities
           */
          "{$value} AP spent on special abilities": null,
          /**
           * - `0`: AP spent on energies (LP/AE/KP)
           */
          "{$value} AP spent on improving/buying back LP/AE/KP": null,

          "header.dialogs.herosaved": null,
          "header.dialogs.allsaved": null,
          "header.dialogs.everythingelsesaved": null,
          "header.dialogs.saveconfigerror.title": null,
          "header.dialogs.saveconfigerror.message": null,
          "header.dialogs.saveheroeserror.title": null,
          "header.dialogs.saveheroeserror.message": null,

          /**
           * - `0`: Weight in kg
           */
          "general.weightvalue": null,
          /**
           * - `0`: Price in silverthalers
           */
          "general.pricevalue": null,
          /**
           * - `0`: Length in cm
           */
          "general.lengthvalue": null,
          /**
           * As in *2D6*.
           */
          "D": null,
          "general.none": null,
          "general.or": null,
          "general.and": null,
          "general.error": null,
          "general.errorcode": null,
          "general.emptylistplaceholder": null,
          "general.emptylistnoresultsplaceholder": null,
          "No Results": null,

          "Search": null,
          "Sort By": null,
          "Name": null,
          "Date Modified": null,
          "Group": null,
          "Property": null,
          "general.filters.sort.bylocation": null,
          "general.filters.sort.bycost": null,
          "general.filters.sort.byweight": null,
          "general.filters.showactivatedentries": null,

          "Done": null,
          "OK": null,
          "Cancel": null,
          "Create": null,
          "Apply": null,
          "Add": null,
          "Not enough AP": null,
          ".input {$value :number} {{You are missing {$value} Adventure Points to do this.}}": null,
          "Exceeding Adventure Points limit for advantages": null,
          "You cannot spend more than {$max} AP on advantages. You would exceed this limit by {$over} AP.": null,
          "Exceeding Adventure Points limit for magical advantages": null,
          "You cannot spend more than {$max} AP on magical advantages. You would exceed this limit by {$over} AP.": null,
          "Exceeding Adventure Points limit for blessed advantages": null,
          "You cannot spend more than {$max} AP on blessed advantages. You would exceed this limit by {$over} AP.": null,
          "Exceeding Adventure Points limit for disadvantages": null,
          "You cannot receive more than {$max} AP from disadvantages. You would exceed this limit by {$over} AP.": null,
          "Exceeding Adventure Points limit for magical disadvantages": null,
          "You cannot receive more than {$max} AP from magical disadvantages. You would exceed this limit by {$over} AP.": null,
          "Exceeding Adventure Points limit for blessed disadvantages": null,
          "You cannot receive more than {$max} AP from blessed disadvantages. You would exceed this limit by {$over} AP.": null,

          "heroes.filters.origin.allheroes": null,
          "heroes.filters.origin.ownheroes": null,
          "heroes.filters.origin.sharedheroes": null,
          "Import": null,
          "New Character": null,
          "Duplicate Character": null,
          "Export Character as OPTLC file": null,
          "Delete Character": null,
          "Open Character": null,
          "heroes.saveherobtn": null,
          "heroes.unsavedhero.name": null,
          "heroes.list.adventurepoints": null,
          "heroes.dialogs.herosaved": null,
          "heroes.dialogs.importheroerror.title": null,
          "heroes.dialogs.importheroerror.message": null,
          "heroes.dialogs.heroexportsavelocation.title": null,
          "heroes.dialogs.herojsonsaveerror.title": null,
          "heroes.dialogs.herojsonsaveerror.message": null,
          "heroes.dialogs.unsavedactions.title": null,
          "heroes.dialogs.unsavedactions.message": null,
          "heroes.dialogs.unsavedactions.quit": null,
          "heroes.dialogs.unsavedactions.saveandquit": null,
          /**
           * - `0`: Name of the hero to delete
           */
          "heroes.dialogs.deletehero.title": null,
          "heroes.dialogs.deletehero.message": null,
          "heroes.dialogs.herocreation.title": null,
          "heroes.dialogs.herocreation.nameofhero": null,
          "heroes.dialogs.herocreation.sex.placeholder": null,
          "heroes.dialogs.herocreation.sex.male": null,
          "heroes.dialogs.herocreation.sex.female": null,
          "heroes.dialogs.herocreation.experiencelevel.placeholder": null,
          "heroes.dialogs.herocreation.startbtn": null,

          "wiki.chooseacategory": null,
          "wiki.chooseacategorytodisplayalist": null,
          "wiki.filters.races": null,
          "wiki.filters.cultures": null,
          "wiki.filters.professions": null,
          "wiki.filters.advantages": null,
          "wiki.filters.disadvantages": null,
          "wiki.filters.skills": null,
          "wiki.filters.skills.all": null,
          "wiki.filters.combattechniques": null,
          "wiki.filters.combattechniques.all": null,
          "wiki.filters.magic": null,
          "wiki.filters.magic.all": null,
          "wiki.filters.liturgicalchants": null,
          "wiki.filters.liturgicalchants.all": null,
          "wiki.filters.specialabilities": null,
          "wiki.filters.specialabilities.all": null,
          "wiki.filters.itemtemplates": null,
          "wiki.filters.itemtemplates.all": null,

          "Edit Name": null,
          "Change Name": null,
          "Edit Profession Name": null,
          "Change Profession Name": null,
          "Add AP": null,
          "Add Adventure Points": null,
          "How many Adventure Points do you want to add?": null,
          "Finish Character Creation": null,
          "Select New Avatar": null,
          "Delete Avatar": null,
          "profile.dialogs.changeheroavatar.title": null,
          "profile.dialogs.changeheroavatar.selectfilebtn": null,
          "profile.dialogs.changeheroavatar.imagefiletype": null,
          "profile.dialogs.changeheroavatar.invalidfilewarning": null,

          // Personal Data
          "Male": null,
          "Female": null,
          "Bal’Thani": null,
          "Tsajana": null,
          "Family": null,
          "Place of Birth": null,
          "Date of Birth": null,
          "Age": null,
          "Hair Color": null,
          "Eye Color": null,
          "Size": null,
          "Weight": null,
          "Title": null,
          "Social Status": null,
          "Characteristics": null,
          "Other Information": null,
          "Reroll Eye Color": null,
          "Reroll Hair Color": null,
          "Reroll Size": null,
          "Reroll Weight": null,
          "personaldata.cultureareaknowledge": null,
          "You can save up no more than 10 AP to use later during the game, and you cannot begin the game with a negative AP balance.": null,

          "sheets.printtopdfbtn": null,
          "sheets.dialogs.pdfexportsavelocation.title": null,
          "sheets.dialogs.pdfsaved": null,
          "sheets.dialogs.pdfsaveerror.title": null,
          "sheets.dialogs.pdfsaveerror.message": null,
          "sheets.dialogs.pdfcreationerror.title": null,
          "sheets.dialogs.pdfcreationerror.message": null,
          "sheets.showattributevalues": null,
          "sheets.useparchment": null,
          "sheets.zoomfactor": null,
          "sheets.charactersheet": null,
          "sheets.attributemodifiers.title": null,

          "sheets.mainsheet.title": null,
          "sheets.mainsheet.name": null,
          "sheets.mainsheet.family": null,
          "sheets.mainsheet.placeofbirth": null,
          "sheets.mainsheet.dateofbirth": null,
          "sheets.mainsheet.age": null,
          "sheets.mainsheet.sex": null,
          "sheets.mainsheet.race": null,
          "sheets.mainsheet.size": null,
          "sheets.mainsheet.weight": null,
          "sheets.mainsheet.haircolor": null,
          "sheets.mainsheet.eyecolor": null,
          "sheets.mainsheet.culture": null,
          "sheets.mainsheet.socialstatus": null,
          "sheets.mainsheet.profession": null,
          "sheets.mainsheet.rank": null,
          "sheets.mainsheet.characteristics": null,
          "sheets.mainsheet.otherinfo": null,
          "sheets.mainsheet.experiencelevellabel": null,
          "sheets.mainsheet.totalaplabel": null,
          "sheets.mainsheet.apcollectedlabel": null,
          "sheets.mainsheet.apspentlabel": null,
          "sheets.mainsheet.avatarlabel": null,
          "sheets.mainsheet.advantages": null,
          "sheets.mainsheet.disadvantages": null,
          "sheets.mainsheet.generalspecialabilites": null,
          "sheets.mainsheet.fatepoints": null,
          "sheets.mainsheet.derivedcharacteristics.labels.value": null,
          "sheets.mainsheet.derivedcharacteristics.labels.bonuspenalty": null,
          "sheets.mainsheet.derivedcharacteristics.labels.bonus": null,
          "sheets.mainsheet.derivedcharacteristics.labels.bought": null,
          "sheets.mainsheet.derivedcharacteristics.labels.max": null,
          "sheets.mainsheet.derivedcharacteristics.labels.current": null,
          "sheets.mainsheet.derivedcharacteristics.labels.basestat": null,
          "sheets.mainsheet.derivedcharacteristics.labels.permanentlylostboughtback": null,

          "sheets.gamestatssheet.title": null,
          "sheets.gamestatssheet.skillstable.title": null,
          "sheets.gamestatssheet.skillstable.labels.skill": null,
          "sheets.gamestatssheet.skillstable.labels.check": null,
          "sheets.gamestatssheet.skillstable.labels.encumbrance": null,
          "sheets.gamestatssheet.skillstable.labels.improvementcost": null,
          "sheets.gamestatssheet.skillstable.labels.skillrating": null,
          "sheets.gamestatssheet.skillstable.labels.routinechecks": null,
          "sheets.gamestatssheet.skillstable.labels.notes": null,
          "sheets.gamestatssheet.skillstable.encumbrance.yes": null,
          "sheets.gamestatssheet.skillstable.encumbrance.no": null,
          "sheets.gamestatssheet.skillstable.encumbrance.maybe": null,
          "sheets.gamestatssheet.skillstable.groups.pages": null,
          "sheets.gamestatssheet.languages.title": null,
          "sheets.gamestatssheet.languages.nativetongue": null,
          "sheets.gamestatssheet.knownscripts.title": null,
          "sheets.gamestatssheet.routinechecks.title": null,
          "sheets.gamestatssheet.routinechecks.textRow1": null,
          "sheets.gamestatssheet.routinechecks.textRow2": null,
          "sheets.gamestatssheet.routinechecks.textRow3": null,
          "sheets.gamestatssheet.routinechecks.textRow4": null,
          "sheets.gamestatssheet.routinechecks.labels.checkmod": null,
          "sheets.gamestatssheet.routinechecks.labels.neededsr": null,
          "sheets.gamestatssheet.routinechecks.from3on": null,
          "sheets.gamestatssheet.qualitylevels.title": null,
          "sheets.gamestatssheet.qualitylevels.labels.skillpoints": null,
          "sheets.gamestatssheet.qualitylevels.labels.qualitylevel": null,

          "sheets.combatsheet.title": null,
          "sheets.combatsheet.combattechniquestable.title": null,
          "sheets.combatsheet.combattechniquestable.labels.combattechnique": null,
          "sheets.combatsheet.combattechniquestable.labels.primaryattribute": null,
          "sheets.combatsheet.combattechniquestable.labels.improvementcost": null,
          "sheets.combatsheet.combattechniquestable.labels.combattechniquerating": null,
          "sheets.combatsheet.combattechniquestable.labels.attackrangecombat": null,
          "sheets.combatsheet.combattechniquestable.labels.parry": null,
          "sheets.combatsheet.lifepoints.title": null,
          "sheets.combatsheet.lifepoints.max": null,
          "sheets.combatsheet.lifepoints.current": null,
          "sheets.combatsheet.lifepoints.pain1": null,
          "sheets.combatsheet.lifepoints.pain2": null,
          "sheets.combatsheet.lifepoints.pain3": null,
          "sheets.combatsheet.lifepoints.pain4": null,
          "sheets.combatsheet.lifepoints.dying": null,
          "sheets.combatsheet.closecombatweapons": null,
          "sheets.combatsheet.closecombatweapons.labels.weapon": null,
          "sheets.combatsheet.closecombatweapons.labels.combattechnique": null,
          "sheets.combatsheet.closecombatweapons.labels.damagebonus": null,
          "sheets.combatsheet.closecombatweapons.labels.damagepoints": null,
          "sheets.combatsheet.closecombatweapons.labels.attackparrymodifier": null,
          "sheets.combatsheet.closecombatweapons.labels.reach": null,
          "sheets.combatsheet.closecombatweapons.labels.breakingpointrating": null,
          "sheets.combatsheet.closecombatweapons.labels.damaged": null,
          "sheets.combatsheet.closecombatweapons.labels.attack": null,
          "sheets.combatsheet.closecombatweapons.labels.parry": null,
          "sheets.combatsheet.closecombatweapons.labels.weight": null,
          "sheets.combatsheet.rangedcombatweapons": null,
          "sheets.combatsheet.rangedcombatweapons.labels.weapon": null,
          "sheets.combatsheet.rangedcombatweapons.labels.combattechnique": null,
          "sheets.combatsheet.rangedcombatweapons.labels.reloadtime": null,
          "sheets.combatsheet.rangedcombatweapons.labels.damagepoints": null,
          "sheets.combatsheet.rangedcombatweapons.labels.ammunition": null,
          "sheets.combatsheet.rangedcombatweapons.labels.rangebrackets": null,
          "sheets.combatsheet.rangedcombatweapons.labels.breakingpointrating": null,
          "sheets.combatsheet.rangedcombatweapons.labels.damaged": null,
          "sheets.combatsheet.rangedcombatweapons.labels.rangedcombat": null,
          "sheets.combatsheet.rangedcombatweapons.labels.weight": null,
          "sheets.combatsheet.armors.title": null,
          "sheets.combatsheet.armors.labels.armor": null,
          "sheets.combatsheet.armors.labels.sturdinessrating": null,
          "sheets.combatsheet.armors.labels.wear": null,
          "sheets.combatsheet.armors.labels.protection": null,
          "sheets.combatsheet.armors.labels.encumbrance": null,
          "sheets.combatsheet.armors.labels.movementinitiative": null,
          "sheets.combatsheet.armors.labels.carriedwhereexamples": null,
          "sheets.combatsheet.armors.labels.head": null,
          "sheets.combatsheet.armors.labels.torso": null,
          "sheets.combatsheet.armors.labels.leftarm": null,
          "sheets.combatsheet.armors.labels.rightarm": null,
          "sheets.combatsheet.armors.labels.leftleg": null,
          "sheets.combatsheet.armors.labels.rightleg": null,
          "sheets.combatsheet.armors.labels.weight": null,
          "sheets.combatsheet.shieldparryingweapon.title": null,
          "sheets.combatsheet.shieldparryingweapon.labels.shieldparryingweapon": null,
          "sheets.combatsheet.shieldparryingweapon.labels.structurepoints": null,
          "sheets.combatsheet.shieldparryingweapon.labels.breakingpointrating": null,
          "sheets.combatsheet.shieldparryingweapon.labels.damaged": null,
          "sheets.combatsheet.shieldparryingweapon.labels.attackparrymodifier": null,
          "sheets.combatsheet.shieldparryingweapon.labels.weight": null,
          "sheets.combatsheet.actions": null,
          "sheets.combatsheet.combatspecialabilities": null,
          "sheets.combatsheet.conditions": null,
          "sheets.combatsheet.states": null,

          "sheets.belongingssheet.title": null,
          "sheets.belongingssheet.equipmenttable.title": null,
          "sheets.belongingssheet.equipmenttable.labels.item": null,
          "sheets.belongingssheet.equipmenttable.labels.number": null,
          "sheets.belongingssheet.equipmenttable.labels.price": null,
          "sheets.belongingssheet.equipmenttable.labels.weight": null,
          "sheets.belongingssheet.equipmenttable.labels.carriedwhere": null,
          "sheets.belongingssheet.equipmenttable.labels.total": null,
          "sheets.belongingssheet.purse.title": null,
          "sheets.belongingssheet.purse.ducats": null,
          "sheets.belongingssheet.purse.silverthalers": null,
          "sheets.belongingssheet.purse.halers": null,
          "sheets.belongingssheet.purse.kreutzers": null,
          "sheets.belongingssheet.purse.gems": null,
          "sheets.belongingssheet.purse.jewelry": null,
          "sheets.belongingssheet.purse.other": null,
          "sheets.belongingssheet.carryingcapacity.title": null,
          "sheets.belongingssheet.carryingcapacity.calc": null,
          "sheets.belongingssheet.carryingcapacity.label": null,
          "sheets.belongingssheet.animal.title": null,
          "sheets.belongingssheet.animal.name": null,
          "sheets.belongingssheet.animal.sizecategory": null,
          "sheets.belongingssheet.animal.type": null,
          "sheets.belongingssheet.animal.ap": null,
          "sheets.belongingssheet.animal.protection": null,
          "sheets.belongingssheet.animal.attackname": null,
          "sheets.belongingssheet.animal.attack": null,
          "sheets.belongingssheet.animal.parry": null,
          "sheets.belongingssheet.animal.damagepoints": null,
          "sheets.belongingssheet.animal.reach": null,
          "sheets.belongingssheet.animal.actions": null,
          "sheets.belongingssheet.animal.skills": null,
          "sheets.belongingssheet.animal.specialabilities": null,
          "sheets.belongingssheet.animal.notes": null,

          "sheets.spellssheet.title": null,
          "sheets.spellssheet.header.labels.aemax": null,
          "sheets.spellssheet.header.labels.aecurrent": null,
          "sheets.spellssheet.spellstable.title": null,
          "sheets.spellssheet.spellstable.labels.spellorritual": null,
          "sheets.spellssheet.spellstable.labels.check": null,
          "sheets.spellssheet.spellstable.labels.skillrating": null,
          "sheets.spellssheet.spellstable.labels.cost": null,
          "sheets.spellssheet.spellstable.labels.castingtime": null,
          "sheets.spellssheet.spellstable.labels.range": null,
          "sheets.spellssheet.spellstable.labels.duration": null,
          "sheets.spellssheet.spellstable.labels.property": null,
          "sheets.spellssheet.spellstable.labels.improvementcost": null,
          "sheets.spellssheet.spellstable.labels.effect": null,
          "sheets.spellssheet.spellstable.labels.pages": null,
          "sheets.spellssheet.spellstable.unfamiliarspell": null,
          "sheets.spellssheet.primaryattribute": null,
          "sheets.spellssheet.properties": null,
          "sheets.spellssheet.tradition": null,
          "sheets.spellssheet.magicalspecialabilities": null,
          "sheets.spellssheet.cantrips": null,

          "sheets.chantssheet.title": null,
          "sheets.chantssheet.header.labels.kpmax": null,
          "sheets.chantssheet.header.labels.kpcurrent": null,
          "sheets.chantssheet.chantstable.title": null,
          "sheets.chantssheet.chantstable.labels.chant": null,
          "sheets.chantssheet.chantstable.labels.check": null,
          "sheets.chantssheet.chantstable.labels.skillrating": null,
          "sheets.chantssheet.chantstable.labels.cost": null,
          "sheets.chantssheet.chantstable.labels.castingtime": null,
          "sheets.chantssheet.chantstable.labels.range": null,
          "sheets.chantssheet.chantstable.labels.duration": null,
          "sheets.chantssheet.chantstable.labels.aspect": null,
          "sheets.chantssheet.chantstable.labels.improvementcost": null,
          "sheets.chantssheet.chantstable.labels.effect": null,
          "sheets.chantssheet.chantstable.labels.pages": null,
          "sheets.chantssheet.primaryattribute": null,
          "sheets.chantssheet.aspects": null,
          "sheets.chantssheet.tradition": null,
          "sheets.chantssheet.blessedspecialabilities": null,
          "sheets.chantssheet.blessings": null,

          "pacts.pactcategory": null,
          "pacts.nopact": null,
          "pacts.pactlevel": null,
          "pacts.fairytype": null,
          "pacts.domain": null,
          "pacts.userdefined": null,
          "pacts.demontype": null,
          "pacts.circleofdamnation": null,
          "pacts.minorpact": null,
          "pacts.pactisincompletehint": null,
          "pacts.name": null,

          // Rules
          "Rule Sources": null,
          "Use all publications": null,
          "Focus Rules": null,
          "Optional Rules": null,
          "rules.manualherodatarepair": null,
          "rules.manualherodatarepairexplanation": null,

          "inlinewiki.complementarysources": null,

          "race.header.name": null,
          "race.header.adventurepoints": null,
          "race.header.adventurepoints.tooltip": null,

          "inlinewiki.apvalue": null,
          "inlinewiki.adventurepoints": null,
          "inlinewiki.lifepointbasevalue": null,
          "inlinewiki.spiritbasevalue": null,
          "inlinewiki.toughnessbasevalue": null,
          "inlinewiki.movementbasevalue": null,
          "inlinewiki.attributeadjustments": null,
          "inlinewiki.automaticadvantages": null,
          "inlinewiki.stronglyrecommendedadvantages": null,
          "inlinewiki.stronglyrecommendeddisadvantages": null,
          "inlinewiki.commoncultures": null,
          "inlinewiki.commonadvantages": null,
          "inlinewiki.commondisadvantages": null,
          "inlinewiki.uncommonadvantages": null,
          "inlinewiki.uncommondisadvantages": null,

          "culture.filters.common.allcultures": null,
          "culture.filters.common.commoncultures": null,
          "culture.header.name": null,

          "inlinewiki.language": null,
          "inlinewiki.script": null,
          "inlinewiki.areaknowledge": null,
          "inlinewiki.socialstatus": null,
          "inlinewiki.commonprofessions": null,
          "inlinewiki.commonprofessions.mundane": null,
          "inlinewiki.commonprofessions.magic": null,
          "inlinewiki.commonprofessions.blessed": null,
          "inlinewiki.commonskills": null,
          "inlinewiki.uncommonskills": null,
          "inlinewiki.commonnames": null,
          /**
           * - `0`: Name of cultural package
           * - `1`: AP cost of the cultural package
           */
          "inlinewiki.culturalpackage": null,

          "profession.ownprofession": null,
          "profession.variants.novariant": null,
          "profession.filters.common.allprofessions": null,
          "profession.filters.common.commonprofessions": null,
          "profession.filters.groups.allprofessiongroups": null,
          "profession.filters.groups.mundaneprofessions": null,
          "profession.filters.groups.magicalprofessions": null,
          "profession.filters.groups.blessedprofessions": null,
          "profession.header.name": null,
          "profession.header.adventurepoints": null,
          "profession.header.adventurepoints.tooltip": null,

          "inlinewiki.prerequisites": null,
          "inlinewiki.race": null,
          "inlinewiki.specialabilities": null,
          /**
           * - `0`: AP given
           */
          "inlinewiki.languagesandliteracytotalingap": null,
          /**
           * - `0`: Skill name(s)
           */
          "inlinewiki.skillspecialization": null,
          /**
           * - `0`: AP given
           * - `1`: Skill group
           */
          "inlinewiki.skillsselection": null,
          "inlinewiki.combattechniques": null,
          /**
           * - `0`: Amount of combat techniques to choose
           * - `1`: CtR of the selected combat techniques after application
           * - `2`: List of possible combat techniques
           */
          "inlinewiki.combattechniqueselection": null,
          "inlinewiki.combattechnique.one": null,
          "inlinewiki.combattechnique.two": null,
          /**
           * - `0`: Amount of combat techniques to choose
           * - `1`: CtR of the selected combat techniques after application
           * - `2`: Amount of combat techniques to choose in a second selection
           * - `3`: CtR of the selected combat techniques from second selection after application
           * - `4`: List of possible combat techniques
           */
          "inlinewiki.combattechniquesecondselection": null,
          "inlinewiki.skills": null,
          "inlinewiki.spells": null,
          /**
           * - `0`: AP given
           */
          "inlinewiki.cursestotalingap": null,
          /**
           * - `0`: Amount of cantrips to choose
           * - `1`: List of possible cantrips
           */
          "inlinewiki.cantripsfromlist": null,
          "inlinewiki.cantrip.one": null,
          "inlinewiki.cantrip.two": null,
          "inlinewiki.liturgicalchants": null,
          "inlinewiki.thetwelveblessings": null,
          /**
           * - `0`: name of first excluded blessing
           * - `1`: name of second excluded blessing
           * - `2`: name of third excluded blessing
           */
          "inlinewiki.thetwelveblessingsexceptions": null,
          "inlinewiki.sixblessings": null,
          "inlinewiki.suggestedadvantages": null,
          "inlinewiki.suggesteddisadvantages": null,
          "inlinewiki.unsuitableadvantages": null,
          "inlinewiki.unsuitabledisadvantages": null,
          "inlinewiki.variants": null,
          "inlinewiki.insteadof": null,

          "rcpselectoptions.race": null,
          "rcpselectoptions.culture": null,
          "rcpselectoptions.profession": null,
          /**
           * - `0`: Amount of cantrips to choose
           */
          "rcpselectoptions.cantripsfromlist": null,
          "rcpselectoptions.cantrip.one": null,
          "rcpselectoptions.cantrip.two": null,
          /**
           * - `0`: Amount of combat techniques to choose
           * - `1`: CtR of the selected combat techniques after application
           */
          "rcpselectoptions.combattechniqueselection": null,
          "rcpselectoptions.combattechnique.one": null,
          "rcpselectoptions.combattechnique.two": null,
          "rcpselectoptions.selectattributeadjustment": null,
          "rcpselectoptions.buyculturalpackage": null,
          "rcpselectoptions.nativetongue.placeholder": null,
          "rcpselectoptions.buyscript": null,
          "rcpselectoptions.script.placeholder": null,
          /**
           * - `0`: Amount of combat techniques to choose in a second selection
           * - `1`: CtR of the selected combat techniques from second selection after application
           */
          "rcpselectoptions.combattechniquesecondselection": null,
          /**
           * - `0`: AP given
           * - `1`: AP left
           */
          "rcpselectoptions.cursestotalingapleft": null,
          /**
           * - `0`: AP given
           * - `1`: AP left
           */
          "rcpselectoptions.languagesandliteracytotalingapleft": null,
          "rcpselectoptions.applicationforskillspecialization": null,
          /**
           * - `0`: Skill group
           * - `1`: AP given
           * - `2`: AP left
           */
          "rcpselectoptions.skillselectionap": null,
          /**
           * - `0`: Skill name(s)
           */
          "rcpselectoptions.skillspecialization": null,
          "rcpselectoptions.completebtn": null,
          "rcpselectoptions.unfamiliarspells": null,
          "rcpselectoptions.unfamiliarspellselectionfortraditionguildmage": null,
          "rcpselectoptions.unfamiliarspell.placeholder": null,
          "rcpselectoptions.unfamiliarspell": null,

          // Attributes
          "Total Points": null,
          "Increment": null,
          "Decrement": null,
          "Activate": null,
          "Attribute Adjustment Selection": null,
          "Modifier": null,
          "Bought": null,
          "Lost Total": null,
          "Bought Back": null,
          "Buy Back Permanently Lost Point": null,
          "Permanently Lost Life Points": null,
          "pLP": null,
          "Permanently Lost Arcane Energy": null,
          "pAE": null,
          "Permanently Lost Karma Points": null,
          "pKP": null,
          "Loose Permanent Points": null,
          "How many points do you want to remove?": null,
          "Remove": null,
          "Permanently Spent": null,

          "Common Advantages": null,
          "Common Disadvantages": null,
          "Custom AP Cost": null,
          /**
           * - `0`: Entry name
           */
          "AP Cost for {$category}": null,
          "Custom option": null,

          "specialabilities.nativetonguelevel": null,
          "Advanced Combat Special Abilities": null,
          "Advanced Karma Special Abilities": null,
          "Advanced Magical Special Abilities": null,
          "Advanced Skill Special Abilities": null,
          "Ancestor Glyphs": null,
          "Arcane Orb Enchantments": null,
          "Attire Enchantments": null,
          "Blessed Traditions": null,
          "Bowl Enchantments": null,
          "Brawling Special Abilities": null,
          "Cauldron Enchantments": null,
          "Ceremonial Item Special Abilities": null,
          "Chronicle Enchantments": null,
          "Combat Special Abilities": null,
          "Combat Style Special Abilities": null,
          "Command Special Abilities": null,
          "Dagger Rituals": null,
          "Familiar Special Abilities": null,
          "Fate Point Sex Special Abilities": null,
          "Fate Point Special Abilities": null,
          "Fools Hat Enchantments": null,
          "General Special Abilities": null,
          "Instrument Enchantments": null,
          "Karma Special Abilities": null,
          "Krallenkettenzauber": null,
          "Liturgical Style Special Abilities": null,
          "Lycantropic Gifts": null,
          "Magical Signs": null,
          "Magical Special Abilities": null,
          "Magical Traditions": null,
          "Magic Style Special Abilities": null,
          "Orb Enchantments": null,
          "Pact Gifts": null,
          "Protective/Warding Circle Special Abilities": null,
          "Ring Enchantments": null,
          "Sermons": null,
          "Sex Special Abilities": null,
          "Sickle Rituals": null,
          "Sikaryan Drain Special Abilities": null,
          "Skill Style Special Abilities": null,
          "Spell Sword Enchantments": null,
          "Staff Enchantments": null,
          "Toy Enchantments": null,
          "Trinkhornzauber": null,
          "Vampiric Gifts": null,
          "Visions": null,
          "Wand Enchantments": null,
          "Weapon Enchantments": null,

          "inlinewiki.rule": null,
          "inlinewiki.effect": null,
          "inlinewiki.extendedcombatspecialabilities": null,
          "inlinewiki.extendedmagicalspecialabilities": null,
          "inlinewiki.extendedblessedspecialabilities": null,
          "inlinewiki.extendedskillspecialabilities": null,
          "inlinewiki.penalty": null,
          "inlinewiki.level": null,
          "inlinewiki.perlevel": null,
          "inlinewiki.volume": null,
          "inlinewiki.aspect": null,
          "inlinewiki.bindingcost": null,
          "inlinewiki.protectivecircle": null,
          "inlinewiki.wardingcircle": null,
          "inlinewiki.actions": null,
          /**
           * - `0`: Entry name
           * - `1`: category (advantage, disadvantage, …)
           */
          "inlinewiki.racecultureorprofessionrequiresautomaticorsuggested": null,
          "inlinewiki.advantage": null,
          "inlinewiki.disadvantage": null,
          "inlinewiki.primaryattributeofthetradition": null,
          "inlinewiki.knowledgeofspell": null,
          "inlinewiki.knowledgeofliturgicalchant": null,
          "inlinewiki.appropriatecombatstylespecialability": null,
          "inlinewiki.appropriatemagicalstylespecialability": null,
          "inlinewiki.appropriateblessedstylespecialability": null,
          "inlinewiki.appropriateskillstylespecialability": null,
          "inlinewiki.sex": null,
          "inlinewiki.sex.male": null,
          "inlinewiki.sex.female": null,
          "inlinewiki.combattechniques.groups.all": null,
          "inlinewiki.combattechniques.groups.allmeleecombattechniques": null,
          "inlinewiki.combattechniques.groups.allrangedcombattechniques": null,
          "inlinewiki.combattechniques.groups.allmeleecombattechniqueswithparry": null,
          "inlinewiki.combattechniques.groups.allmeleecombattechniquesforonehandedweapons": null,
          /**
           * - `0`: Minimum social status
           */
          "inlinewiki.socialstatusxorhigher": null,

          "Common Skills": null,
          "SR": null,
          "Skill Rating": null,
          "IC": null,
          "New Applications": null,
          "Uses": null,

          "Strongly Recommended": null,
          "Common": null,
          "Uncommon": null,
          "Unfamiliar Spells": null,

          "CTR": null,
          "Combat Technique Rating": null,
          "P": null,
          "Primary Attribute(s)": null,
          "AT": null,
          "Attack": null,
          "PA": null,
          "Parry": null,
          "Close Combat": null,
          "Ranged Combat": null,

          "Special": null,
          "Primary Attribute": null,

          "Cantrips": null,
          "Rituals": null,
          "Curses": null,
          "Elven Magical Songs": null,
          "Domination Rituals": null,
          "Magical Dances": null,
          "Magical Melodies": null,
          "Jester Tricks": null,
          "Animist Powers": null,
          "Geode Rituals": null,
          "Zibilja Rituals": null,
          "Mod": null,
          "Check Modifier": null,
          "spells.traditions.general": null,
          "magicalactions.animistforces.tribes.general": null,

          // Skill check modifiers
          " (modified by {$modifier})": null,
          " (−{$modifier})": null,
          "{$first} or {$second}, depending on which value is higher": null,
          "Invocation Difficulty": null,
          "ID": null,
          "Creation Difficulty": null,
          "CD": null,
          "Object": null,

          "Effect": null,
          "Casting Time": null,
          "Ritual Time": null,
          "Liturgical Time": null,
          "Ceremonial Time": null,
          "AE Cost": null,
          "KP Cost": null,
          "Range": null,
          "Duration": null,
          "Target Category": null,
          "Traditions": null,
          " (you cannot use a modification on this spell’s casting time)": null,
          " (you cannot use a modification on this spell’s cost)": null,
          " (you cannot use a modification on this spell’s range)": null,
          " (you cannot use a modification on this ritual’s ritual time)": null,
          " (you cannot use a modification on this ritual’s cost)": null,
          " (you cannot use a modification on this ritual’s range)": null,
          " (you cannot use a modification on this chant’s liturgical time)": null,
          " (you cannot use a modification on this chant’s cost)": null,
          " (you cannot use a modification on this chant’s range)": null,
          " (you cannot use a modification on this ceremony’s ceremonial time)": null,
          " (you cannot use a modification on this ceremony’s cost)": null,
          " (you cannot use a modification on this ceremony’s range)": null,
          " (cannot modify)": null,
          "{$value} act": null,
          "act": null,
          ".input {$value :number} {{{$value} actions}}": null,
          "{$value} actions": null,
          "actions": null,
          "{$value} s": null,
          "s": null,
          ".input {$value :number} {{{$value} seconds}}": null,
          "{$value} seconds": null,
          "seconds": null,
          "{$value} min": null,
          "min": null,
          ".input {$value :number} {{{$value} minutes}}": null,
          "{$value} minutes": null,
          "minutes": null,
          "{$value} h": null,
          "h": null,
          ".input {$value :number} {{{$value} hours}}": null,
          "{$value} hours": null,
          "hours": null,
          "{$value} d": null,
          "d": null,
          ".input {$value :number} {{{$value} days}}": null,
          "{$value} days": null,
          "days": null,
          ".input {$value :number} {{{$value} wks.}}": null,
          "{$value} wks.": null,
          "wks.": null,
          ".input {$value :number} {{{$value} weeks}}": null,
          "{$value} weeks": null,
          "weeks": null,
          ".input {$value :number} {{{$value} mos.}}": null,
          "{$value} mos.": null,
          "mos.": null,
          ".input {$value :number} {{{$value} months}}": null,
          "{$value} months": null,
          "months": null,
          ".input {$value :number} {{{$value} yrs.}}": null,
          "{$value} yrs.": null,
          "yrs.": null,
          ".input {$value :number} {{{$value} years}}": null,
          "{$value} years": null,
          "years": null,
          "{$value} cent.": null,
          "cent.": null,
          ".input {$value :number} {{{$value} centuries}}": null,
          "{$value} centuries": null,
          "centuries": null,
          "{$value} SA": null,
          ".input {$value :number} {{{$value} seduction actions}}": null,
          "{$value} seduction actions": null,
          "{$value} rnds": null,
          ".input {$value :number} {{{$value} rounds}}": null,
          "{$value} rounds": null,
          "{$value} CR": null,
          "CR": null,
          ".input {$value :number} {{{$value} combat rounds}}": null,
          "{$value} combat rounds": null,
          "combat rounds": null,
          "{$value} AE": null,
          "{$value} KP": null,
          "min. ": null,
          "at least ": null,
          "min. {$value}": null,
          "at least {$value}": null,
          "/{$value}": null,
          " per {$value}": null,
          ", minimum of {$value}": null,
          " ({$value} perm.)": null,
          ".input {$value :number} {{, {$value} of which are permanent}}": null,
          ", {$value} of which are permanent": null,
          "half of the activation cost": null,
          " and ": null,
          " + ": null,
          " or ": null,
          " / ": null,
          " for ": null,
          " (no more than {$value})": null,
          " (max. {$value})": null,
          "no more than {$value}": null,
          "max. {$value}": null,
          "Immediate": null,
          "Permanent": null,
          "no more than ": null,
          "max. ": null,
          "Quality Levels": null,
          "QL": null,
          "QL {$value}": null,
          "Skill Points": null,
          "SP": null,
          "Sustained": null,
          "(S)": null,
          ".input {$value :number} {{{$value} yards}}": null,
          "{$value} yards": null,
          "{$value} yd": null,
          ".input {$value :number} {{{$value} miles}}": null,
          "{$value} miles": null,
          "{$value} mi.": null,
          "Sight": null,
          "Self": null,
          "Global": null,
          "Touch": null,
          "Radius": null,
          " (casting)": null,

          // Target Category
          "Zone": null,
          "Liturgical Chants and Ceremonies": null,
          "Spellworks": null,
          "General": null,
          "Note": null,
          "all": null,

          "none": null,
          "State": null,
          "Social Status {$minStatus} or higher": null,
          "Person with {$sexualCharacteristic}": null,
          "Penis": null,
          "Vagina": null,
          "the SR for {$skill} combined must add up to at least {$minRating}": null,
          ".input {$minRating :number} {{{$count} on at least SR {$minRating}: {$list}}}": null,
          ".input {$count :number} .input {$minRating :number} {{{$count} arcane works with the property {$property} at SR {$minRating} or higher}}": null,
          ".input {$count :number} .input {$minRating :number} {{{$count} liturgical chants and ceremonies with the aspect {$aspect} at SR {$minRating} or higher}}": null,
          ".input {$count :number} {{{$count} of the following skills}}": null,
          ".input {$count :number} {{{$count} combat techniques}}": null,
          ".input {$count :number} {{{$count} close combat techniques}}": null,
          ".input {$count :number} {{{$count} ranged combat techniques}}": null,
          "special ability": null,
          "no special ability": null,
          "Tradition": null,
          "Tradition ({$tradition})": null,
          "Church": null,
          "Shaman": null,
          "Tradition must be able to use rituals": null,
          "Tradition must be able to bind familiars": null,
          "spell enhancement": null,
          "liturgical enhancement": null,
          "for": null,
          "no other ancestor blood advantage": null,
          "Race, culture, or profession must have {$entry} as an automatic or suggested {$itemOfCategory}": null,
          "advantage": null,
          "disadvantage": null,
          "domain {$domain}": null,
          "{$pact} level {$pactLevel}": null,

          // Personality Trait prerequisite
          "Level {$level}": null,
          "cannot be chosen at the same time as {$trait}": null,
          "must have {$trait}": null,

          "inlinewiki.castingtime": null,
          "inlinewiki.ritualtime": null,
          "inlinewiki.aecost": null,
          "inlinewiki.range": null,
          "inlinewiki.duration": null,
          "inlinewiki.targetcategory": null,
          "inlinewiki.property": null,
          "inlinewiki.traditions": null,
          "inlinewiki.skill": null,
          "inlinewiki.lengthoftime": null,
          "inlinewiki.musictradition": null,
          "inlinewiki.youcannotuseamodificationonthisspellscastingtime": null,
          "inlinewiki.youcannotuseamodificationonthisspellsritualtime": null,
          "inlinewiki.youcannotuseamodificationonthisspellscost": null,
          "inlinewiki.youcannotuseamodificationonthisspellsrange": null,
          "inlinewiki.youcannotuseamodificationonthisspellsduration": null,
          "inlinewiki.spellenhancements": null,
          /**
           * - `0`: Enhancement name
           * - `1`: DB.Required Skill Rating
           * - `2`: AP value
           * - `3`: Description
           */
          "inlinewiki.spellenhancements.title": null,
          "inlinewiki.tribaltraditions": null,
          "inlinewiki.brew": null,
          "inlinewiki.spirithalf": null,
          "inlinewiki.spirithalf.short": null,
          "inlinewiki.spiritortoughness": null,
          "inlinewiki.spiritortoughness.short": null,
          "inlinewiki.note": null,

          "Blessings": null,
          "Ceremonies": null,
          "liturgicalchants.addbtn": null,
          "liturgicalchants.header.name": null,
          "liturgicalchants.header.traditions": null,
          "liturgicalchants.header.group": null,
          "liturgicalchants.header.skillrating": null,
          "liturgicalchants.header.skillrating.tooltip": null,
          "liturgicalchants.header.check": null,
          "liturgicalchants.header.checkmodifier": null,
          "liturgicalchants.header.checkmodifier.tooltip": null,
          "liturgicalchants.header.improvementcost": null,
          "liturgicalchants.header.improvementcost.tooltip": null,
          "liturgicalchants.groups.blessing": null,
          "liturgicalchants.aspects.general": null,

          "inlinewiki.liturgicaltime": null,
          "inlinewiki.ceremonialtime": null,
          "inlinewiki.kpcost": null,
          "inlinewiki.youcannotuseamodificationonthischantsliturgicaltime": null,
          "inlinewiki.youcannotuseamodificationonthischantsceremonialtime": null,
          "inlinewiki.youcannotuseamodificationonthischantscost": null,
          "inlinewiki.youcannotuseamodificationonthischantsrange": null,
          "inlinewiki.youcannotuseamodificationonthischantsduration": null,
          "inlinewiki.liturgicalchantenhancements": null,
          /**
           * - `0`: Enhancement name
           * - `1`: DB.Required Skill Rating
           * - `2`: AP value
           * - `3`: Description
           */
          "inlinewiki.liturgicalchantenhancements.title": null,

          "equipment.header.name": null,
          "equipment.header.group": null,
          "equipment.addbtn": null,
          "equipment.createbtn": null,
          "equipment.filters.allcombattechniques": null,

          "equipment.purse.title": null,
          "equipment.purse.ducats": null,
          "equipment.purse.silverthalers": null,
          "equipment.purse.halers": null,
          "equipment.purse.kreutzers": null,
          "equipment.purse.carryingcapacity": null,
          "equipment.purse.initialstartingwealthandcarryingcapacity": null,
          "equipment.purse.earnpay": null,
          "equipment.purse.earn": null,
          "equipment.purse.pay": null,
          "equipment.purse.notefirst": null,
          "equipment.purse.notesecond": null,
          "equipment.purse.currentcredit": null,
          "equipment.purse.amount": null,

          "equipment.dialogs.addedit.damage": null,
          "equipment.dialogs.addedit.length": null,
          "equipment.dialogs.addedit.range": null,
          "equipment.dialogs.addedit.edititem": null,
          "equipment.dialogs.addedit.createitem": null,
          "equipment.dialogs.addedit.number": null,
          "equipment.dialogs.addedit.name": null,
          "equipment.dialogs.addedit.price": null,
          "equipment.dialogs.addedit.weight": null,
          "equipment.dialogs.addedit.carriedwhere": null,
          "equipment.dialogs.addedit.itemgroup": null,
          "equipment.dialogs.addedit.itemgrouphint": null,
          "equipment.dialogs.addedit.improvisedweapon": null,
          "equipment.dialogs.addedit.improvisedweapongroup": null,
          "equipment.dialogs.addedit.template": null,
          "equipment.dialogs.addedit.combattechnique": null,
          "equipment.dialogs.addedit.primaryattributeanddamagethreshold": null,
          "equipment.dialogs.addedit.primaryattribute": null,
          "equipment.dialogs.addedit.primaryattribute.short": null,
          "equipment.dialogs.addedit.damagethreshold": null,
          "equipment.dialogs.addedit.separatedamagethresholds": null,
          "equipment.dialogs.addedit.breakingpointratingmodifier": null,
          "equipment.dialogs.addedit.damaged": null,
          "equipment.dialogs.addedit.reach": null,
          "equipment.dialogs.addedit.attackparrymodifier": null,
          "equipment.dialogs.addedit.structurepoints": null,
          "equipment.dialogs.addedit.lengthwithunit": null,
          "equipment.dialogs.addedit.parryingweapon": null,
          "equipment.dialogs.addedit.twohandedweapon": null,
          "equipment.dialogs.addedit.reloadtime": null,
          "equipment.dialogs.addedit.rangeclose": null,
          "equipment.dialogs.addedit.rangemedium": null,
          "equipment.dialogs.addedit.rangefar": null,
          "equipment.dialogs.addedit.ammunition": null,
          "equipment.dialogs.addedit.protection": null,
          "equipment.dialogs.addedit.encumbrance": null,
          "equipment.dialogs.addedit.armortype": null,
          "equipment.dialogs.addedit.sturdinessmodifier": null,
          "equipment.dialogs.addedit.wear": null,
          "equipment.dialogs.addedit.hitzonearmoronly": null,
          "equipment.dialogs.addedit.movementmodifier": null,
          "equipment.dialogs.addedit.initiativemodifier": null,
          "equipment.dialogs.addedit.additionalpenalties": null,

          "hitzonearmors.header.name": null,
          "hitzonearmors.createbtn": null,
          "hitzonearmors.dialogs.addedit.name": null,
          "hitzonearmors.dialogs.addedit.edithitzonearmor": null,
          "hitzonearmors.dialogs.addedit.createhitzonearmor": null,
          "hitzonearmors.dialogs.addedit.head": null,
          "hitzonearmors.dialogs.addedit.torso": null,
          "hitzonearmors.dialogs.addedit.leftarm": null,
          "hitzonearmors.dialogs.addedit.rightarm": null,
          "hitzonearmors.dialogs.addedit.leftleg": null,
          "hitzonearmors.dialogs.addedit.rightleg": null,
          "hitzonearmors.dialogs.addedit.wear": null,

          "inlinewiki.equipment.weight": null,
          "inlinewiki.equipment.price": null,
          "inlinewiki.equipment.ammunition": null,
          "inlinewiki.equipment.combattechnique": null,
          "inlinewiki.equipment.damage": null,
          "inlinewiki.equipment.primaryattributeanddamagethreshold": null,
          "inlinewiki.equipment.attackparrymodifier": null,
          "inlinewiki.equipment.reach": null,
          "inlinewiki.equipment.length": null,
          "inlinewiki.equipment.reloadtime": null,
          "inlinewiki.equipment.range": null,
          /**
           * - `0`: Number of actions
           */
          "inlinewiki.equipment.actionsvalue": null,
          "inlinewiki.equipment.protection": null,
          "inlinewiki.equipment.encumbrance": null,
          "inlinewiki.equipment.additionalpenalties": null,
          "inlinewiki.equipment.note": null,
          "inlinewiki.equipment.rules": null,
          "inlinewiki.equipment.weaponadvantage": null,
          "inlinewiki.equipment.weapondisadvantage": null,
          "inlinewiki.equipment.armoradvantage": null,
          "inlinewiki.equipment.armordisadvantage": null,

          "pets.dialogs.addedit.deleteavatarbtn": null,
          "pets.dialogs.addedit.name": null,
          "pets.dialogs.addedit.sizecategory": null,
          "pets.dialogs.addedit.type": null,
          "pets.dialogs.addedit.apspent": null,
          "pets.dialogs.addedit.totalap": null,
          "pets.dialogs.addedit.protection": null,
          "pets.dialogs.addedit.attackname": null,
          "pets.dialogs.addedit.attack": null,
          "pets.dialogs.addedit.parry": null,
          "pets.dialogs.addedit.damagepoints": null,
          "pets.dialogs.addedit.reach": null,
          "pets.dialogs.addedit.actions": null,
          "pets.dialogs.addedit.skills": null,
          "pets.dialogs.addedit.specialabilities": null,
          "pets.dialogs.addedit.notes": null,
          "pets.dialogs.addedit.addbtn": null,
          "pets.dialogs.addedit.savebtn": null,

          // Inline Library
          "Show details": null,

          // Experience Level
          "Maximum Attribute Value": null,
          "Maximum Skill Value": null,
          "Maximum Combat Technique": null,
          "Maximum Attribute Total": null,
          "Number of Spells/Liturgical Chants": null,
          "Number from other Traditions": null,

          // Skill
          "Check": null,
          "Applications": null,
          "Encumbrance": null,
          "Yes": null,
          "No": null,
          "Maybe": null,
          "Tools": null,
          "Quality": null,
          "Failed Check": null,
          "Critical Success": null,
          "Botch": null,
          "Improvement Cost": null,

          // Source References
          "Front Cover Inside": null,
          "Back Cover Inside": null,
          ".input {$printing :number} {{since the {$printing}. printing}}": null,
          ".input {$printing :number} {{removed in {$printing}. printing}}": null,

          // Derived Characteristics Calculation
          "Base Value": null,
          "Base {$name} from Race": null,
          "Race Base {$abbreviation}": null,
          "Primary attribute for the magic user’s Tradition": null,
          "Primary attribute for the Blessed One’s Tradition": null,

          // Focus Rules
          "The following rule is a Level {$level} focus rule for the topic {$topic}.": null,

          // Special Abilities
          "Protective Circle": null,
          "Warding Circle": null,
          "Prerequisites": null,
          "AP Value": null,
          ".input {$value :number} {{{$value} Adventure Points per level}}": null,
          "tiny": null,
          "small": null,
          "medium": null,
          "large": null,
          "huge": null,
          "{$values} AP for size category {$labels} (per level)": null,
          "A/B/C/D skill": null,
          "A/B/C/D spell": null,
          "A/B/C/D ritual": null,
          "A/B/C/D liturgical chant": null,
          "A/B/C/D ceremony": null,
          "A/B/C/D spellwork": null,
          "A/B/C/D liturgical chant or ceremony": null,
          "A/B/C/D ability": null,
          "B/C/D combat technique": null,
          "depending on the trade secret": null,
          "{$values} Adventure Points for the {$labels} purchase": null,
          "{$values}/and so on Adventure Points for the {$labels}/and so on purchase": null,
          ".input {$value :number} {{{$value} Adventure Points with {$name}}}": null,
          "Half the chosen disease’s level in adventure points": null,
          "The chosen disease’s level in adventure points": null,
          "Half the chosen poison’s level in adventure points": null,
          "The chosen poison’s level in adventure points": null,
          "{$values} adventure points for a {$sized} animal shape": null,
          "Aspect": null,
          "As chosen": null,
          "Passive": null,
          "Basic Maneuver": null,
          "Special Maneuver": null,
          "Volume": null,
          "Penalty": null,
          "Binding Cost": null,
        }, { allKeysAreRequired: true }),
      }),
    }),
  uniqueConstraints: [
    [
      {
        keyPath: "name",
      },
      {
        keyPath: "region",
      },
    ],
  ],
})

export const NestedTranslationMap = <
  Name extends string,
  T extends Record<string, DB.MemberDecl>,
  R extends boolean,
>(
  MemberDeclCreator: <T extends DB.Type>(options: {
    comment?: string
    isDeprecated?: boolean
    type: T
  }) => DB.MemberDecl<T, R>,
  entityName: Name,
  type: DB.Object<T>,
) =>
  MemberDeclCreator({
    comment: "All translations for the entry, identified by IETF language tag (BCP47).",
    type: DB.NestedEntityMap({
      name: `${entityName}Translation`,
      namePlural: `${entityName}Translations`,
      secondaryEntity: Locale,
      type,
      minProperties: 1,
    }),
  })

// /**
//  * Any type that can be converted to a string via a `toString` method.
//  */
// interface Stringable {
//   toDB.String(): string
// }

// type Whitespace = " " | "\n" | "\t" | "\r"

// /**
//  * Removes leading and trailing whitespace from a string literal type.
//  */
// type Trim<L extends string> = L extends `${Whitespace}${infer Rest}`
//   ? Trim<Rest>
//   : L extends `${infer Rest}${Whitespace}`
//     ? Trim<Rest>
//     : L

// /**
//  * Maps the type function string to the actual TypeScript type.
//  */
// type ActualType<F extends string> = F extends "number" | "integer"
//   ? number
//   : F extends "string"
//     ? string
//     : F extends "datetime" | "date" | "time"
//       ? Date
//       : Stringable

// /**
//  * Makes the parameter types readable by removing any TypeScript-specific constructs.
//  */
// type ReadableParams<P extends object> = {
//   [K in keyof P]: P[K]
// }

// /**
//  * Extracts parameter names and their types from a simple message string. It also works for complex messages, but is not designed for that.
//  */
// type ParamsFromSimpleMessage<L extends string> = L extends `${infer Start}}${infer Rest}`
//   ? Start extends `${string}{$${infer Name} :${infer TypeFunction}`
//     ? { [K in Name]: ActualType<TypeFunction> } & Omit<ParamsFromSimpleMessage<Rest>, Name>
//     : Start extends `${string}{$${infer Name}`
//       ? ParamsFromSimpleMessage<Rest> extends { [K in Name]: Stringable }
//         ? ParamsFromSimpleMessage<Rest>
//         : { [K in Name]: Stringable } & ParamsFromSimpleMessage<Rest>
//       : ParamsFromSimpleMessage<Rest>
//   : object

// /**
//  * Extracts parameter names and their types from an Unicode MessageFormat 2.0 (MF2) string.
//  */
// export type ExtractParamsFromMessage<Msg extends string> = ReadableParams<
//   ParamsFromSimpleMessage<Msg>
// >
