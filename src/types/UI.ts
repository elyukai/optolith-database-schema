/**
 * @main UI
 */

import { Result } from "../helpers/result.js"
import { TypeConfig } from "../typeConfig.js"
import { validateLanguageFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenameAsStringId } from "../validation/filename.js"
import { PluralizationCategories, VaryBySystem } from "./_I18n.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title UI
 */
// prettier-ignore
export type UI = {
  // Menu
  "About {0}": NonEmptyString
  "Preferences …": NonEmptyString
  "Services": NonEmptyString
  "Hide {0}": NonEmptyString
  "Hide Others": NonEmptyString
  "Show All": NonEmptyString
  "Quit {0}": NonEmptyString
  "File": NonEmptyString | VaryBySystem
  "Close": NonEmptyString
  "Quit": NonEmptyString
  "Edit": NonEmptyString
  "Undo": NonEmptyString
  "Redo": NonEmptyString
  "Cut": NonEmptyString
  "Copy": NonEmptyString
  "Paste": NonEmptyString
  "Delete": NonEmptyString
  "Select All": NonEmptyString
  "View": NonEmptyString
  "Toggle Full Screen": NonEmptyString
  "Window": NonEmptyString
  "Minimize": NonEmptyString
  "Zoom": NonEmptyString
  "Main Window": NonEmptyString
  "Bring All to Front": NonEmptyString

  // Settings Window
  "Settings": NonEmptyString
  "Main Language": NonEmptyString
  "System Language": NonEmptyString
  "Fallback Language": NonEmptyString
  "No fallback language": NonEmptyString
  "Appearance": NonEmptyString
  "Auto": NonEmptyString
  "Light": NonEmptyString
  "Dark": NonEmptyString
  "Edit characters after creation": NonEmptyString
  "Show animations": NonEmptyString
  "Check for updates": NonEmptyString

  // Updater Window
  "Updater": NonEmptyString
  "Checking for updates …": NonEmptyString
  "New version available": NonEmptyString
  /**
   * - `0`: Version number
   */
  "Version {0} is available! Do you wish to download and install?": NonEmptyString
  "Download": NonEmptyString
  "Download Later": NonEmptyString
  "Downloading update …": NonEmptyString
  "Update downloaded": NonEmptyString
  "Quit and Install": NonEmptyString
  "Install Later": NonEmptyString
  "No update available": NonEmptyString
  "You're running the latest version available.": NonEmptyString

  // Main Window
  "Characters": NonEmptyString
  "Groups": NonEmptyString
  "Library": NonEmptyString
  "FAQ": NonEmptyString
  "About": NonEmptyString
  "Imprint": NonEmptyString
  "Third-Party Licenses": NonEmptyString
  "Last Changes": NonEmptyString
  "Profile": NonEmptyString
  "Overview": NonEmptyString
  "Personal Data": NonEmptyString
  "Character Sheet": NonEmptyString
  "Pact": NonEmptyString
  "Rules": NonEmptyString
  "Race, Culture & Profession": NonEmptyString
  "Race": NonEmptyString
  "Culture": NonEmptyString
  "Profession": NonEmptyString
  "Attributes": NonEmptyString
  "Advantages & Disadvantages": NonEmptyString
  "Advantages": NonEmptyString
  "Disadvantages": NonEmptyString
  "Abilities": NonEmptyString
  "Skills": NonEmptyString
  "Combat Techniques": NonEmptyString
  "Special Abilities": NonEmptyString
  "Spells": NonEmptyString
  "Liturgical Chants": NonEmptyString
  "Belongings": NonEmptyString
  "Equipment": NonEmptyString
  "Hit Zone Armor": NonEmptyString
  "Pets": NonEmptyString
  /**
   * - `0`: AP left
   */
  "{0} AP Remaining": NonEmptyString
  "Save": NonEmptyString
  "Show Settings": NonEmptyString
  "Toggle DevTools": NonEmptyString

  // Adventure Points
  "Adventure Points": NonEmptyString
  "AP": NonEmptyString
  /**
   * - `0`: AP value
   */
  "{0} Adventure Points": PluralizationCategories
  /**
   * - `0`: AP value
   */
  "{0} AP": NonEmptyString
  /**
   * - `0`: AP Total
   */
  "{0} Total AP": NonEmptyString
  /**
   * - `0`: AP Spent
   */
  "{0} AP Spent": NonEmptyString
  /**
   * - `0`: Current AP spent on advantages
   * - `1`: Maximum possible AP spent on advantages
   */
  "{0}/{1} AP spent on advantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic advantages
   * - `1`: Maximum possible AP spent on magic advantages
   */
  "Thereof {0}/{1} on magic advantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed advantages
   * - `1`: Maximum possible AP spent on blessed advantages
   */
  "Thereof {0}/{1} on blessed advantages": NonEmptyString
  /**
   * - `0`: Current AP spent on disadvantages
   * - `1`: Maximum possible AP spent on disadvantages
   */
  "{0}/{1} AP received from disadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic disadvantages
   * - `1`: Maximum possible AP spent on magic disadvantages
   */
  "Thereof {0}/{1} from magic disadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed disadvantages
   * - `1`: Maximum possible AP spent on blessed disadvantages
   */
  "Thereof {0}/{1} from blessed disadvantages": NonEmptyString
  /**
   * - `0`: AP spent on race
   */
  "{0} AP spent on race": NonEmptyString
  /**
   * - `0`: AP spent on profession
   */
  "{0} AP spent on profession": NonEmptyString
  /**
   * - `0`: AP spent on attributes
   */
  "{0} AP spent on attributes": NonEmptyString
  /**
   * - `0`: AP spent on skills
   */
  "{0} AP spent on skills": NonEmptyString
  /**
   * - `0`: AP spent on combat techniques
   */
  "{0} AP spent on combat techniques": NonEmptyString
  /**
   * - `0`: AP spent on spells
   */
  "{0} AP spent on spells": NonEmptyString
  /**
   * - `0`: AP spent on cantrips
   */
  "{0} AP spent on cantrips": NonEmptyString
  /**
   * - `0`: AP spent on liturgical chants
   */
  "{0} AP spent on liturgical chants": NonEmptyString
  /**
   * - `0`: AP spent on blessings
   */
  "{0} AP spent on blessings": NonEmptyString
  /**
   * - `0`: AP spent on special abilities
   */
  "{0} AP spent on special abilities": NonEmptyString
  /**
   * - `0`: AP spent on energies (LP/AE/KP)
   */
  "{0} AP spent on improving/buying back LP/AE/KP": NonEmptyString

  "header.dialogs.herosaved": NonEmptyString
  "header.dialogs.allsaved": NonEmptyString
  "header.dialogs.everythingelsesaved": NonEmptyString
  "header.dialogs.saveconfigerror.title": NonEmptyString
  "header.dialogs.saveconfigerror.message": NonEmptyString
  "header.dialogs.saveheroeserror.title": NonEmptyString
  "header.dialogs.saveheroeserror.message": NonEmptyString

  /**
   * - `0`: Weight in kg
   */
  "general.weightvalue": NonEmptyString
  /**
   * - `0`: Price in silverthalers
   */
  "general.pricevalue": NonEmptyString
  /**
   * - `0`: Length in cm
   */
  "general.lengthvalue": NonEmptyString
  /**
   * As in *2D6*.
   */
  "D": NonEmptyString
  "general.none": NonEmptyString
  "general.or": NonEmptyString
  "general.and": NonEmptyString
  "general.error": NonEmptyString
  "general.errorcode": NonEmptyString
  "general.emptylistplaceholder": NonEmptyString
  "general.emptylistnoresultsplaceholder": NonEmptyString
  "No Results": NonEmptyString

  "Search": NonEmptyString
  "Sort By": NonEmptyString
  "Name": NonEmptyString
  "Date Modified": NonEmptyString
  "Group": NonEmptyString
  "Property": NonEmptyString
  "general.filters.sort.bylocation": NonEmptyString
  "general.filters.sort.bycost": NonEmptyString
  "general.filters.sort.byweight": NonEmptyString
  "general.filters.showactivatedentries": NonEmptyString

  "Done": NonEmptyString
  "OK": NonEmptyString
  "Cancel": NonEmptyString
  "Create": NonEmptyString
  "Apply": NonEmptyString
  "Add": NonEmptyString
  "Not enough AP": NonEmptyString
  "You are missing {0} Adventure Points to do this.": PluralizationCategories
  "Exceeding Adventure Points limit for advantages": NonEmptyString
  "You cannot spend more than {0} AP on advantages. You would exceed this limit by {1} AP.": NonEmptyString
  "Exceeding Adventure Points limit for magical advantages": NonEmptyString
  "You cannot spend more than {0} AP on magical advantages. You would exceed this limit by {1} AP.": NonEmptyString
  "Exceeding Adventure Points limit for blessed advantages": NonEmptyString
  "You cannot spend more than {0} AP on blessed advantages. You would exceed this limit by {1} AP.": NonEmptyString
  "Exceeding Adventure Points limit for disadvantages": NonEmptyString
  "You cannot receive more than {0} AP from disadvantages. You would exceed this limit by {1} AP.": NonEmptyString
  "Exceeding Adventure Points limit for magical disadvantages": NonEmptyString
  "You cannot receive more than {0} AP from magical disadvantages. You would exceed this limit by {1} AP.": NonEmptyString
  "Exceeding Adventure Points limit for blessed disadvantages": NonEmptyString
  "You cannot receive more than {0} AP from blessed disadvantages. You would exceed this limit by {1} AP.": NonEmptyString

  "heroes.filters.origin.allheroes": NonEmptyString
  "heroes.filters.origin.ownheroes": NonEmptyString
  "heroes.filters.origin.sharedheroes": NonEmptyString
  "Import": NonEmptyString
  "New Character": NonEmptyString
  "Duplicate Character": NonEmptyString
  "Export Character as OPTLC file": NonEmptyString
  "Delete Character": NonEmptyString
  "Open Character": NonEmptyString
  "heroes.saveherobtn": NonEmptyString
  "heroes.unsavedhero.name": NonEmptyString
  "heroes.list.adventurepoints": NonEmptyString
  "heroes.dialogs.herosaved": NonEmptyString
  "heroes.dialogs.importheroerror.title": NonEmptyString
  "heroes.dialogs.importheroerror.message": NonEmptyString
  "heroes.dialogs.heroexportsavelocation.title": NonEmptyString
  "heroes.dialogs.herojsonsaveerror.title": NonEmptyString
  "heroes.dialogs.herojsonsaveerror.message": NonEmptyString
  "heroes.dialogs.unsavedactions.title": NonEmptyString
  "heroes.dialogs.unsavedactions.message": NonEmptyString
  "heroes.dialogs.unsavedactions.quit": NonEmptyString
  "heroes.dialogs.unsavedactions.saveandquit": NonEmptyString
  /**
   * - `0`: Name of the hero to delete
   */
  "heroes.dialogs.deletehero.title": NonEmptyString
  "heroes.dialogs.deletehero.message": NonEmptyString
  "heroes.dialogs.herocreation.title": NonEmptyString
  "heroes.dialogs.herocreation.nameofhero": NonEmptyString
  "heroes.dialogs.herocreation.sex.placeholder": NonEmptyString
  "heroes.dialogs.herocreation.sex.male": NonEmptyString
  "heroes.dialogs.herocreation.sex.female": NonEmptyString
  "heroes.dialogs.herocreation.experiencelevel.placeholder": NonEmptyString
  "heroes.dialogs.herocreation.startbtn": NonEmptyString

  "wiki.chooseacategory": NonEmptyString
  "wiki.chooseacategorytodisplayalist": NonEmptyString
  "wiki.filters.races": NonEmptyString
  "wiki.filters.cultures": NonEmptyString
  "wiki.filters.professions": NonEmptyString
  "wiki.filters.advantages": NonEmptyString
  "wiki.filters.disadvantages": NonEmptyString
  "wiki.filters.skills": NonEmptyString
  "wiki.filters.skills.all": NonEmptyString
  "wiki.filters.combattechniques": NonEmptyString
  "wiki.filters.combattechniques.all": NonEmptyString
  "wiki.filters.magic": NonEmptyString
  "wiki.filters.magic.all": NonEmptyString
  "wiki.filters.liturgicalchants": NonEmptyString
  "wiki.filters.liturgicalchants.all": NonEmptyString
  "wiki.filters.specialabilities": NonEmptyString
  "wiki.filters.specialabilities.all": NonEmptyString
  "wiki.filters.itemtemplates": NonEmptyString
  "wiki.filters.itemtemplates.all": NonEmptyString

  "Edit Name": NonEmptyString
  "Change Name": NonEmptyString
  "Edit Profession Name": NonEmptyString
  "Change Profession Name": NonEmptyString
  "Add AP": NonEmptyString
  "Add Adventure Points": NonEmptyString
  "How many Adventure Points do you want to add?": NonEmptyString
  "Finish Character Creation": NonEmptyString
  "Select New Avatar": NonEmptyString
  "Delete Avatar": NonEmptyString
  "profile.dialogs.changeheroavatar.title": NonEmptyString
  "profile.dialogs.changeheroavatar.selectfilebtn": NonEmptyString
  "profile.dialogs.changeheroavatar.imagefiletype": NonEmptyString
  "profile.dialogs.changeheroavatar.invalidfilewarning": NonEmptyString

  // Personal Data
  "Male": NonEmptyString
  "Female": NonEmptyString
  "Bal’Thani": NonEmptyString
  "Tsajana": NonEmptyString
  "Family": NonEmptyString
  "Place of Birth": NonEmptyString
  "Date of Birth": NonEmptyString
  "Age": NonEmptyString
  "Hair Color": NonEmptyString
  "Eye Color": NonEmptyString
  "Size": NonEmptyString
  "Weight": NonEmptyString
  "Title": NonEmptyString
  "Social Status": NonEmptyString
  "Characteristics": NonEmptyString
  "Other Information": NonEmptyString
  "Reroll Eye Color": NonEmptyString
  "Reroll Hair Color": NonEmptyString
  "Reroll Size": NonEmptyString
  "Reroll Weight": NonEmptyString
  "personaldata.cultureareaknowledge": NonEmptyString
  "You can save up no more than 10 AP to use later during the game, and you cannot begin the game with a negative AP balance.": NonEmptyString

  "sheets.printtopdfbtn": NonEmptyString
  "sheets.dialogs.pdfexportsavelocation.title": NonEmptyString
  "sheets.dialogs.pdfsaved": NonEmptyString
  "sheets.dialogs.pdfsaveerror.title": NonEmptyString
  "sheets.dialogs.pdfsaveerror.message": NonEmptyString
  "sheets.dialogs.pdfcreationerror.title": NonEmptyString
  "sheets.dialogs.pdfcreationerror.message": NonEmptyString
  "sheets.showattributevalues": NonEmptyString
  "sheets.useparchment": NonEmptyString
  "sheets.zoomfactor": NonEmptyString
  "sheets.charactersheet": NonEmptyString
  "sheets.attributemodifiers.title": NonEmptyString

  "sheets.mainsheet.title": NonEmptyString
  "sheets.mainsheet.name": NonEmptyString
  "sheets.mainsheet.family": NonEmptyString
  "sheets.mainsheet.placeofbirth": NonEmptyString
  "sheets.mainsheet.dateofbirth": NonEmptyString
  "sheets.mainsheet.age": NonEmptyString
  "sheets.mainsheet.sex": NonEmptyString
  "sheets.mainsheet.race": NonEmptyString
  "sheets.mainsheet.size": NonEmptyString
  "sheets.mainsheet.weight": NonEmptyString
  "sheets.mainsheet.haircolor": NonEmptyString
  "sheets.mainsheet.eyecolor": NonEmptyString
  "sheets.mainsheet.culture": NonEmptyString
  "sheets.mainsheet.socialstatus": NonEmptyString
  "sheets.mainsheet.profession": NonEmptyString
  "sheets.mainsheet.rank": NonEmptyString
  "sheets.mainsheet.characteristics": NonEmptyString
  "sheets.mainsheet.otherinfo": NonEmptyString
  "sheets.mainsheet.experiencelevellabel": NonEmptyString
  "sheets.mainsheet.totalaplabel": NonEmptyString
  "sheets.mainsheet.apcollectedlabel": NonEmptyString
  "sheets.mainsheet.apspentlabel": NonEmptyString
  "sheets.mainsheet.avatarlabel": NonEmptyString
  "sheets.mainsheet.advantages": NonEmptyString
  "sheets.mainsheet.disadvantages": NonEmptyString
  "sheets.mainsheet.generalspecialabilites": NonEmptyString
  "sheets.mainsheet.fatepoints": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.value": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.bonuspenalty": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.bonus": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.bought": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.max": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.current": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.basestat": NonEmptyString
  "sheets.mainsheet.derivedcharacteristics.labels.permanentlylostboughtback": NonEmptyString

  "sheets.gamestatssheet.title": NonEmptyString
  "sheets.gamestatssheet.skillstable.title": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.skill": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.check": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.encumbrance": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.improvementcost": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.skillrating": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.routinechecks": NonEmptyString
  "sheets.gamestatssheet.skillstable.labels.notes": NonEmptyString
  "sheets.gamestatssheet.skillstable.encumbrance.yes": NonEmptyString
  "sheets.gamestatssheet.skillstable.encumbrance.no": NonEmptyString
  "sheets.gamestatssheet.skillstable.encumbrance.maybe": NonEmptyString
  "sheets.gamestatssheet.skillstable.groups.pages": NonEmptyString
  "sheets.gamestatssheet.languages.title": NonEmptyString
  "sheets.gamestatssheet.languages.nativetongue": NonEmptyString
  "sheets.gamestatssheet.knownscripts.title": NonEmptyString
  "sheets.gamestatssheet.routinechecks.title": NonEmptyString
  "sheets.gamestatssheet.routinechecks.textRow1": NonEmptyString
  "sheets.gamestatssheet.routinechecks.textRow2": NonEmptyString
  "sheets.gamestatssheet.routinechecks.textRow3": NonEmptyString
  "sheets.gamestatssheet.routinechecks.textRow4": NonEmptyString
  "sheets.gamestatssheet.routinechecks.labels.checkmod": NonEmptyString
  "sheets.gamestatssheet.routinechecks.labels.neededsr": NonEmptyString
  "sheets.gamestatssheet.routinechecks.from3on": NonEmptyString
  "sheets.gamestatssheet.qualitylevels.title": NonEmptyString
  "sheets.gamestatssheet.qualitylevels.labels.skillpoints": NonEmptyString
  "sheets.gamestatssheet.qualitylevels.labels.qualitylevel": NonEmptyString

  "sheets.combatsheet.title": NonEmptyString
  "sheets.combatsheet.combattechniquestable.title": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.combattechnique": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.primaryattribute": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.improvementcost": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.combattechniquerating": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.attackrangecombat": NonEmptyString
  "sheets.combatsheet.combattechniquestable.labels.parry": NonEmptyString
  "sheets.combatsheet.lifepoints.title": NonEmptyString
  "sheets.combatsheet.lifepoints.max": NonEmptyString
  "sheets.combatsheet.lifepoints.current": NonEmptyString
  "sheets.combatsheet.lifepoints.pain1": NonEmptyString
  "sheets.combatsheet.lifepoints.pain2": NonEmptyString
  "sheets.combatsheet.lifepoints.pain3": NonEmptyString
  "sheets.combatsheet.lifepoints.pain4": NonEmptyString
  "sheets.combatsheet.lifepoints.dying": NonEmptyString
  "sheets.combatsheet.closecombatweapons": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.weapon": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.combattechnique": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.damagebonus": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.damagepoints": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.attackparrymodifier": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.reach": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.breakingpointrating": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.damaged": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.attack": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.parry": NonEmptyString
  "sheets.combatsheet.closecombatweapons.labels.weight": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.weapon": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.combattechnique": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.reloadtime": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.damagepoints": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.ammunition": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.rangebrackets": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.breakingpointrating": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.damaged": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.rangedcombat": NonEmptyString
  "sheets.combatsheet.rangedcombatweapons.labels.weight": NonEmptyString
  "sheets.combatsheet.armors.title": NonEmptyString
  "sheets.combatsheet.armors.labels.armor": NonEmptyString
  "sheets.combatsheet.armors.labels.sturdinessrating": NonEmptyString
  "sheets.combatsheet.armors.labels.wear": NonEmptyString
  "sheets.combatsheet.armors.labels.protection": NonEmptyString
  "sheets.combatsheet.armors.labels.encumbrance": NonEmptyString
  "sheets.combatsheet.armors.labels.movementinitiative": NonEmptyString
  "sheets.combatsheet.armors.labels.carriedwhereexamples": NonEmptyString
  "sheets.combatsheet.armors.labels.head": NonEmptyString
  "sheets.combatsheet.armors.labels.torso": NonEmptyString
  "sheets.combatsheet.armors.labels.leftarm": NonEmptyString
  "sheets.combatsheet.armors.labels.rightarm": NonEmptyString
  "sheets.combatsheet.armors.labels.leftleg": NonEmptyString
  "sheets.combatsheet.armors.labels.rightleg": NonEmptyString
  "sheets.combatsheet.armors.labels.weight": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.title": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.shieldparryingweapon": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.structurepoints": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.breakingpointrating": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.damaged": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.attackparrymodifier": NonEmptyString
  "sheets.combatsheet.shieldparryingweapon.labels.weight": NonEmptyString
  "sheets.combatsheet.actions": NonEmptyString
  "sheets.combatsheet.combatspecialabilities": NonEmptyString
  "sheets.combatsheet.conditions": NonEmptyString
  "sheets.combatsheet.states": NonEmptyString

  "sheets.belongingssheet.title": NonEmptyString
  "sheets.belongingssheet.equipmenttable.title": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.item": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.number": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.price": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.weight": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.carriedwhere": NonEmptyString
  "sheets.belongingssheet.equipmenttable.labels.total": NonEmptyString
  "sheets.belongingssheet.purse.title": NonEmptyString
  "sheets.belongingssheet.purse.ducats": NonEmptyString
  "sheets.belongingssheet.purse.silverthalers": NonEmptyString
  "sheets.belongingssheet.purse.halers": NonEmptyString
  "sheets.belongingssheet.purse.kreutzers": NonEmptyString
  "sheets.belongingssheet.purse.gems": NonEmptyString
  "sheets.belongingssheet.purse.jewelry": NonEmptyString
  "sheets.belongingssheet.purse.other": NonEmptyString
  "sheets.belongingssheet.carryingcapacity.title": NonEmptyString
  "sheets.belongingssheet.carryingcapacity.calc": NonEmptyString
  "sheets.belongingssheet.carryingcapacity.label": NonEmptyString
  "sheets.belongingssheet.animal.title": NonEmptyString
  "sheets.belongingssheet.animal.name": NonEmptyString
  "sheets.belongingssheet.animal.sizecategory": NonEmptyString
  "sheets.belongingssheet.animal.type": NonEmptyString
  "sheets.belongingssheet.animal.ap": NonEmptyString
  "sheets.belongingssheet.animal.protection": NonEmptyString
  "sheets.belongingssheet.animal.attackname": NonEmptyString
  "sheets.belongingssheet.animal.attack": NonEmptyString
  "sheets.belongingssheet.animal.parry": NonEmptyString
  "sheets.belongingssheet.animal.damagepoints": NonEmptyString
  "sheets.belongingssheet.animal.reach": NonEmptyString
  "sheets.belongingssheet.animal.actions": NonEmptyString
  "sheets.belongingssheet.animal.skills": NonEmptyString
  "sheets.belongingssheet.animal.specialabilities": NonEmptyString
  "sheets.belongingssheet.animal.notes": NonEmptyString

  "sheets.spellssheet.title": NonEmptyString
  "sheets.spellssheet.header.labels.aemax": NonEmptyString
  "sheets.spellssheet.header.labels.aecurrent": NonEmptyString
  "sheets.spellssheet.spellstable.title": NonEmptyString
  "sheets.spellssheet.spellstable.labels.spellorritual": NonEmptyString
  "sheets.spellssheet.spellstable.labels.check": NonEmptyString
  "sheets.spellssheet.spellstable.labels.skillrating": NonEmptyString
  "sheets.spellssheet.spellstable.labels.cost": NonEmptyString
  "sheets.spellssheet.spellstable.labels.castingtime": NonEmptyString
  "sheets.spellssheet.spellstable.labels.range": NonEmptyString
  "sheets.spellssheet.spellstable.labels.duration": NonEmptyString
  "sheets.spellssheet.spellstable.labels.property": NonEmptyString
  "sheets.spellssheet.spellstable.labels.improvementcost": NonEmptyString
  "sheets.spellssheet.spellstable.labels.effect": NonEmptyString
  "sheets.spellssheet.spellstable.labels.pages": NonEmptyString
  "sheets.spellssheet.spellstable.unfamiliarspell": NonEmptyString
  "sheets.spellssheet.primaryattribute": NonEmptyString
  "sheets.spellssheet.properties": NonEmptyString
  "sheets.spellssheet.tradition": NonEmptyString
  "sheets.spellssheet.magicalspecialabilities": NonEmptyString
  "sheets.spellssheet.cantrips": NonEmptyString

  "sheets.chantssheet.title": NonEmptyString
  "sheets.chantssheet.header.labels.kpmax": NonEmptyString
  "sheets.chantssheet.header.labels.kpcurrent": NonEmptyString
  "sheets.chantssheet.chantstable.title": NonEmptyString
  "sheets.chantssheet.chantstable.labels.chant": NonEmptyString
  "sheets.chantssheet.chantstable.labels.check": NonEmptyString
  "sheets.chantssheet.chantstable.labels.skillrating": NonEmptyString
  "sheets.chantssheet.chantstable.labels.cost": NonEmptyString
  "sheets.chantssheet.chantstable.labels.castingtime": NonEmptyString
  "sheets.chantssheet.chantstable.labels.range": NonEmptyString
  "sheets.chantssheet.chantstable.labels.duration": NonEmptyString
  "sheets.chantssheet.chantstable.labels.aspect": NonEmptyString
  "sheets.chantssheet.chantstable.labels.improvementcost": NonEmptyString
  "sheets.chantssheet.chantstable.labels.effect": NonEmptyString
  "sheets.chantssheet.chantstable.labels.pages": NonEmptyString
  "sheets.chantssheet.primaryattribute": NonEmptyString
  "sheets.chantssheet.aspects": NonEmptyString
  "sheets.chantssheet.tradition": NonEmptyString
  "sheets.chantssheet.blessedspecialabilities": NonEmptyString
  "sheets.chantssheet.blessings": NonEmptyString

  "pacts.pactcategory": NonEmptyString
  "pacts.nopact": NonEmptyString
  "pacts.pactlevel": NonEmptyString
  "pacts.fairytype": NonEmptyString
  "pacts.domain": NonEmptyString
  "pacts.userdefined": NonEmptyString
  "pacts.demontype": NonEmptyString
  "pacts.circleofdamnation": NonEmptyString
  "pacts.minorpact": NonEmptyString
  "pacts.pactisincompletehint": NonEmptyString
  "pacts.name": NonEmptyString

  // Rules
  "Rule Sources": NonEmptyString
  "Use all publications": NonEmptyString
  "Focus Rules": NonEmptyString
  "Optional Rules": NonEmptyString
  "rules.manualherodatarepair": NonEmptyString
  "rules.manualherodatarepairexplanation": NonEmptyString

  "inlinewiki.complementarysources": NonEmptyString

  "race.header.name": NonEmptyString
  "race.header.adventurepoints": NonEmptyString
  "race.header.adventurepoints.tooltip": NonEmptyString

  "inlinewiki.apvalue": NonEmptyString
  "inlinewiki.adventurepoints": NonEmptyString
  "inlinewiki.lifepointbasevalue": NonEmptyString
  "inlinewiki.spiritbasevalue": NonEmptyString
  "inlinewiki.toughnessbasevalue": NonEmptyString
  "inlinewiki.movementbasevalue": NonEmptyString
  "inlinewiki.attributeadjustments": NonEmptyString
  "inlinewiki.automaticadvantages": NonEmptyString
  "inlinewiki.stronglyrecommendedadvantages": NonEmptyString
  "inlinewiki.stronglyrecommendeddisadvantages": NonEmptyString
  "inlinewiki.commoncultures": NonEmptyString
  "inlinewiki.commonadvantages": NonEmptyString
  "inlinewiki.commondisadvantages": NonEmptyString
  "inlinewiki.uncommonadvantages": NonEmptyString
  "inlinewiki.uncommondisadvantages": NonEmptyString

  "culture.filters.common.allcultures": NonEmptyString
  "culture.filters.common.commoncultures": NonEmptyString
  "culture.header.name": NonEmptyString

  "inlinewiki.language": NonEmptyString
  "inlinewiki.script": NonEmptyString
  "inlinewiki.areaknowledge": NonEmptyString
  "inlinewiki.socialstatus": NonEmptyString
  "inlinewiki.commonprofessions": NonEmptyString
  "inlinewiki.commonprofessions.mundane": NonEmptyString
  "inlinewiki.commonprofessions.magic": NonEmptyString
  "inlinewiki.commonprofessions.blessed": NonEmptyString
  "inlinewiki.commonskills": NonEmptyString
  "inlinewiki.uncommonskills": NonEmptyString
  "inlinewiki.commonnames": NonEmptyString
  /**
   * - `0`: Name of cultural package
   * - `1`: AP cost of the cultural package
   */
  "inlinewiki.culturalpackage": NonEmptyString

  "profession.ownprofession": NonEmptyString
  "profession.variants.novariant": NonEmptyString
  "profession.filters.common.allprofessions": NonEmptyString
  "profession.filters.common.commonprofessions": NonEmptyString
  "profession.filters.groups.allprofessiongroups": NonEmptyString
  "profession.filters.groups.mundaneprofessions": NonEmptyString
  "profession.filters.groups.magicalprofessions": NonEmptyString
  "profession.filters.groups.blessedprofessions": NonEmptyString
  "profession.header.name": NonEmptyString
  "profession.header.adventurepoints": NonEmptyString
  "profession.header.adventurepoints.tooltip": NonEmptyString

  "inlinewiki.prerequisites": NonEmptyString
  "inlinewiki.race": NonEmptyString
  "inlinewiki.specialabilities": NonEmptyString
  /**
   * - `0`: AP given
   */
  "inlinewiki.languagesandliteracytotalingap": NonEmptyString
  /**
   * - `0`: Skill name(s)
   */
  "inlinewiki.skillspecialization": NonEmptyString
  /**
   * - `0`: AP given
   * - `1`: Skill group
   */
  "inlinewiki.skillsselection": NonEmptyString
  "inlinewiki.combattechniques": NonEmptyString
  /**
   * - `0`: Amount of combat techniques to choose
   * - `1`: CtR of the selected combat techniques after application
   * - `2`: List of possible combat techniques
   */
  "inlinewiki.combattechniqueselection": NonEmptyString
  "inlinewiki.combattechnique.one": NonEmptyString
  "inlinewiki.combattechnique.two": NonEmptyString
  /**
   * - `0`: Amount of combat techniques to choose
   * - `1`: CtR of the selected combat techniques after application
   * - `2`: Amount of combat techniques to choose in a second selection
   * - `3`: CtR of the selected combat techniques from second selection after application
   * - `4`: List of possible combat techniques
   */
  "inlinewiki.combattechniquesecondselection": NonEmptyString
  "inlinewiki.skills": NonEmptyString
  "inlinewiki.spells": NonEmptyString
  /**
   * - `0`: AP given
   */
  "inlinewiki.cursestotalingap": NonEmptyString
  /**
   * - `0`: Amount of cantrips to choose
   * - `1`: List of possible cantrips
   */
  "inlinewiki.cantripsfromlist": NonEmptyString
  "inlinewiki.cantrip.one": NonEmptyString
  "inlinewiki.cantrip.two": NonEmptyString
  "inlinewiki.liturgicalchants": NonEmptyString
  "inlinewiki.thetwelveblessings": NonEmptyString
  /**
   * - `0`: name of first excluded blessing
   * - `1`: name of second excluded blessing
   * - `2`: name of third excluded blessing
   */
  "inlinewiki.thetwelveblessingsexceptions": NonEmptyString
  "inlinewiki.sixblessings": NonEmptyString
  "inlinewiki.suggestedadvantages": NonEmptyString
  "inlinewiki.suggesteddisadvantages": NonEmptyString
  "inlinewiki.unsuitableadvantages": NonEmptyString
  "inlinewiki.unsuitabledisadvantages": NonEmptyString
  "inlinewiki.variants": NonEmptyString
  "inlinewiki.insteadof": NonEmptyString

  "rcpselectoptions.race": NonEmptyString
  "rcpselectoptions.culture": NonEmptyString
  "rcpselectoptions.profession": NonEmptyString
  /**
   * - `0`: Amount of cantrips to choose
   */
  "rcpselectoptions.cantripsfromlist": NonEmptyString
  "rcpselectoptions.cantrip.one": NonEmptyString
  "rcpselectoptions.cantrip.two": NonEmptyString
  /**
   * - `0`: Amount of combat techniques to choose
   * - `1`: CtR of the selected combat techniques after application
   */
  "rcpselectoptions.combattechniqueselection": NonEmptyString
  "rcpselectoptions.combattechnique.one": NonEmptyString
  "rcpselectoptions.combattechnique.two": NonEmptyString
  "rcpselectoptions.selectattributeadjustment": NonEmptyString
  "rcpselectoptions.buyculturalpackage": NonEmptyString
  "rcpselectoptions.nativetongue.placeholder": NonEmptyString
  "rcpselectoptions.buyscript": NonEmptyString
  "rcpselectoptions.script.placeholder": NonEmptyString
  /**
   * - `0`: Amount of combat techniques to choose in a second selection
   * - `1`: CtR of the selected combat techniques from second selection after application
   */
  "rcpselectoptions.combattechniquesecondselection": NonEmptyString
  /**
   * - `0`: AP given
   * - `1`: AP left
   */
  "rcpselectoptions.cursestotalingapleft": NonEmptyString
  /**
   * - `0`: AP given
   * - `1`: AP left
   */
  "rcpselectoptions.languagesandliteracytotalingapleft": NonEmptyString
  "rcpselectoptions.applicationforskillspecialization": NonEmptyString
  /**
   * - `0`: Skill group
   * - `1`: AP given
   * - `2`: AP left
   */
  "rcpselectoptions.skillselectionap": NonEmptyString
  /**
   * - `0`: Skill name(s)
   */
  "rcpselectoptions.skillspecialization": NonEmptyString
  "rcpselectoptions.completebtn": NonEmptyString
  "rcpselectoptions.unfamiliarspells": NonEmptyString
  "rcpselectoptions.unfamiliarspellselectionfortraditionguildmage": NonEmptyString
  "rcpselectoptions.unfamiliarspell.placeholder": NonEmptyString
  "rcpselectoptions.unfamiliarspell": NonEmptyString

  // Attributes
  "Total Points": NonEmptyString
  "Increment": NonEmptyString
  "Decrement": NonEmptyString
  "Activate": NonEmptyString
  "Attribute Adjustment Selection": NonEmptyString
  "Modifier": NonEmptyString
  "Bought": NonEmptyString
  "Lost Total": NonEmptyString
  "Bought Back": NonEmptyString
  "Buy Back Permanently Lost Point": NonEmptyString
  "Permanently Lost Life Points": NonEmptyString
  "pLP": NonEmptyString
  "Permanently Lost Arcane Energy": NonEmptyString
  "pAE": NonEmptyString
  "Permanently Lost Karma Points": NonEmptyString
  "pKP": NonEmptyString
  "Loose Permanent Points": NonEmptyString
  "How many points do you want to remove?": NonEmptyString
  "Remove": NonEmptyString
  "Permanently Spent": NonEmptyString

  "Common Advantages": NonEmptyString
  "Common Disadvantages": NonEmptyString
  "Custom AP Cost": NonEmptyString
  /**
   * - `0`: Entry name
   */
  "AP Cost for {0}": NonEmptyString
  "Custom option": NonEmptyString

  "specialabilities.nativetonguelevel": NonEmptyString
  "Advanced Combat Special Abilities": NonEmptyString
  "Advanced Karma Special Abilities": NonEmptyString
  "Advanced Magical Special Abilities": NonEmptyString
  "Advanced Skill Special Abilities": NonEmptyString
  "Ancestor Glyphs": NonEmptyString
  "Arcane Orb Enchantments": NonEmptyString
  "Attire Enchantments": NonEmptyString
  "Blessed Traditions": NonEmptyString
  "Bowl Enchantments": NonEmptyString
  "Brawling Special Abilities": NonEmptyString
  "Cauldron Enchantments": NonEmptyString
  "Ceremonial Item Special Abilities": NonEmptyString
  "Chronicle Enchantments": NonEmptyString
  "Combat Special Abilities": NonEmptyString
  "Combat Style Special Abilities": NonEmptyString
  "Command Special Abilities": NonEmptyString
  "Dagger Rituals": NonEmptyString
  "Familiar Special Abilities": NonEmptyString
  "Fate Point Sex Special Abilities": NonEmptyString
  "Fate Point Special Abilities": NonEmptyString
  "Fools Hat Enchantments": NonEmptyString
  "General Special Abilities": NonEmptyString
  "Instrument Enchantments": NonEmptyString
  "Karma Special Abilities": NonEmptyString
  "Krallenkettenzauber": NonEmptyString
  "Liturgical Style Special Abilities": NonEmptyString
  "Lycantropic Gifts": NonEmptyString
  "Magical Signs": NonEmptyString
  "Magical Special Abilities": NonEmptyString
  "Magical Traditions": NonEmptyString
  "Magic Style Special Abilities": NonEmptyString
  "Orb Enchantments": NonEmptyString
  "Pact Gifts": NonEmptyString
  "Protective/Warding Circle Special Abilities": NonEmptyString
  "Ring Enchantments": NonEmptyString
  "Sermons": NonEmptyString
  "Sex Special Abilities": NonEmptyString
  "Sickle Rituals": NonEmptyString
  "Sikaryan Drain Special Abilities": NonEmptyString
  "Skill Style Special Abilities": NonEmptyString
  "Spell Sword Enchantments": NonEmptyString
  "Staff Enchantments": NonEmptyString
  "Toy Enchantments": NonEmptyString
  "Trinkhornzauber": NonEmptyString
  "Vampiric Gifts": NonEmptyString
  "Visions": NonEmptyString
  "Wand Enchantments": NonEmptyString
  "Weapon Enchantments": NonEmptyString

  "inlinewiki.rule": NonEmptyString
  "inlinewiki.effect": NonEmptyString
  "inlinewiki.extendedcombatspecialabilities": NonEmptyString
  "inlinewiki.extendedmagicalspecialabilities": NonEmptyString
  "inlinewiki.extendedblessedspecialabilities": NonEmptyString
  "inlinewiki.extendedskillspecialabilities": NonEmptyString
  "inlinewiki.penalty": NonEmptyString
  "inlinewiki.level": NonEmptyString
  "inlinewiki.perlevel": NonEmptyString
  "inlinewiki.volume": NonEmptyString
  "inlinewiki.aspect": NonEmptyString
  "inlinewiki.bindingcost": NonEmptyString
  "inlinewiki.protectivecircle": NonEmptyString
  "inlinewiki.wardingcircle": NonEmptyString
  "inlinewiki.actions": NonEmptyString
  /**
   * - `0`: Entry name
   * - `1`: category (advantage, disadvantage, …)
   */
  "inlinewiki.racecultureorprofessionrequiresautomaticorsuggested": NonEmptyString
  "inlinewiki.advantage": NonEmptyString
  "inlinewiki.disadvantage": NonEmptyString
  "inlinewiki.primaryattributeofthetradition": NonEmptyString
  "inlinewiki.knowledgeofspell": NonEmptyString
  "inlinewiki.knowledgeofliturgicalchant": NonEmptyString
  "inlinewiki.appropriatecombatstylespecialability": NonEmptyString
  "inlinewiki.appropriatemagicalstylespecialability": NonEmptyString
  "inlinewiki.appropriateblessedstylespecialability": NonEmptyString
  "inlinewiki.appropriateskillstylespecialability": NonEmptyString
  "inlinewiki.sex": NonEmptyString
  "inlinewiki.sex.male": NonEmptyString
  "inlinewiki.sex.female": NonEmptyString
  "inlinewiki.combattechniques.groups.all": NonEmptyString
  "inlinewiki.combattechniques.groups.allmeleecombattechniques": NonEmptyString
  "inlinewiki.combattechniques.groups.allrangedcombattechniques": NonEmptyString
  "inlinewiki.combattechniques.groups.allmeleecombattechniqueswithparry": NonEmptyString
  "inlinewiki.combattechniques.groups.allmeleecombattechniquesforonehandedweapons": NonEmptyString
  /**
   * - `0`: Minimum social status
   */
  "inlinewiki.socialstatusxorhigher": NonEmptyString

  "Common Skills": NonEmptyString
  "SR": NonEmptyString
  "Skill Rating": NonEmptyString
  "IC": NonEmptyString
  "New Applications": NonEmptyString
  "Uses": NonEmptyString

  "Strongly Recommended": NonEmptyString
  "Common": NonEmptyString
  "Uncommon": NonEmptyString
  "Unfamiliar Spells": NonEmptyString

  "CTR": NonEmptyString
  "Combat Technique Rating": NonEmptyString
  "P": NonEmptyString
  "Primary Attribute(s)": NonEmptyString
  "AT": NonEmptyString
  "Attack": NonEmptyString
  "PA": NonEmptyString
  "Parry": NonEmptyString
  "Close Combat": NonEmptyString
  "Ranged Combat": NonEmptyString

  "Special": NonEmptyString
  "Primary Attribute": NonEmptyString

  "Cantrips": NonEmptyString
  "Rituals": NonEmptyString
  "Curses": NonEmptyString
  "Elven Magical Songs": NonEmptyString
  "Domination Rituals": NonEmptyString
  "Magical Dances": NonEmptyString
  "Magical Melodies": NonEmptyString
  "Jester Tricks": NonEmptyString
  "Animist Powers": NonEmptyString
  "Geode Rituals": NonEmptyString
  "Zibilja Rituals": NonEmptyString
  "Mod": NonEmptyString
  "Check Modifier": NonEmptyString
  "spells.traditions.general": NonEmptyString
  "magicalactions.animistforces.tribes.general": NonEmptyString

  " (modified by {0})": NonEmptyString
  " (− {0})": NonEmptyString
  "{0} or {1}, depending on which value is higher": NonEmptyString
  "Invocation Difficulty": NonEmptyString
  "ID": NonEmptyString
  "Creation Difficulty": NonEmptyString
  "CD": NonEmptyString
  "Effect": NonEmptyString
  "Casting Time": NonEmptyString
  "Ritual Time": NonEmptyString
  "Liturgical Time": NonEmptyString
  "Ceremonial Time": NonEmptyString
  "AE Cost": NonEmptyString
  "KP Cost": NonEmptyString
  "Range": NonEmptyString
  "Duration": NonEmptyString
  "Target Category": NonEmptyString
  "Traditions": NonEmptyString
  " (you cannot use a modification on this spell’s casting time)": NonEmptyString
  " (you cannot use a modification on this spell’s cost)": NonEmptyString
  " (you cannot use a modification on this spell’s range)": NonEmptyString
  " (you cannot use a modification on this ritual’s ritual time)": NonEmptyString
  " (you cannot use a modification on this ritual’s cost)": NonEmptyString
  " (you cannot use a modification on this ritual’s range)": NonEmptyString
  " (you cannot use a modification on this chant’s liturgical time)": NonEmptyString
  " (you cannot use a modification on this chant’s cost)": NonEmptyString
  " (you cannot use a modification on this chant’s range)": NonEmptyString
  " (you cannot use a modification on this ceremony’s ceremonial time)": NonEmptyString
  " (you cannot use a modification on this ceremony’s cost)": NonEmptyString
  " (you cannot use a modification on this ceremony’s range)": NonEmptyString
  " (cannot modify)": NonEmptyString
  "{0} act": NonEmptyString
  "act": NonEmptyString
  "{0} actions": PluralizationCategories
  "actions": NonEmptyString
  "{0} s": NonEmptyString
  "s": NonEmptyString
  "{0} seconds": PluralizationCategories
  "seconds": NonEmptyString
  "{0} min": NonEmptyString
  "min": NonEmptyString
  "{0} minutes": PluralizationCategories
  "minutes": NonEmptyString
  "{0} h": NonEmptyString
  "h": NonEmptyString
  "{0} hours": PluralizationCategories
  "hours": NonEmptyString
  "{0} d": NonEmptyString
  "d": NonEmptyString
  "{0} days": PluralizationCategories
  "days": NonEmptyString
  "{0} wks.": PluralizationCategories
  "wks.": NonEmptyString
  "{0} weeks": PluralizationCategories
  "weeks": NonEmptyString
  "{0} mos.": PluralizationCategories
  "mos.": NonEmptyString
  "{0} months": PluralizationCategories
  "months": NonEmptyString
  "{0} yrs.": PluralizationCategories
  "yrs.": NonEmptyString
  "{0} years": PluralizationCategories
  "years": NonEmptyString
  "{0} cent.": NonEmptyString
  "cent.": NonEmptyString
  "{0} centuries": PluralizationCategories
  "centuries": NonEmptyString
  "{0} SA": NonEmptyString
  "{0} seduction actions": PluralizationCategories
  "{0} rnds": NonEmptyString
  "{0} rounds": PluralizationCategories
  "{0} CR": NonEmptyString
  "CR": NonEmptyString
  "{0} combat rounds": PluralizationCategories
  "combat rounds": NonEmptyString
  "{0} AE": NonEmptyString
  "{0} KP": NonEmptyString
  "min. ": NonEmptyString
  "at least ": NonEmptyString
  "/{0}": NonEmptyString
  " per {0}": NonEmptyString
  ", minimum of {0}": NonEmptyString
  " ({0} perm.)": NonEmptyString
  ", {0} of which are permanent": PluralizationCategories
  "half of the activation cost": NonEmptyString
  " and ": NonEmptyString
  " + ": NonEmptyString
  " or ": NonEmptyString
  " / ": NonEmptyString
  " for ": NonEmptyString
  " (no more than {0})": NonEmptyString
  " (max. {0})": NonEmptyString
  "Immediate": NonEmptyString
  "Permanent": NonEmptyString
  "no more than ": NonEmptyString
  "max. ": NonEmptyString
  "Quality Levels": NonEmptyString
  "QL": NonEmptyString
  "QL {0}": NonEmptyString
  "Skill Points": NonEmptyString
  "SP": NonEmptyString
  "Sustained": NonEmptyString
  "(S)": NonEmptyString
  "{0} yards": PluralizationCategories
  "{0} yd": NonEmptyString
  "{0} miles": PluralizationCategories
  "{0} mi.": NonEmptyString
  "Sight": NonEmptyString
  "Self": NonEmptyString
  "Global": NonEmptyString
  "Touch": NonEmptyString
  "Radius": NonEmptyString
  " (casting)": NonEmptyString
  "Zone": NonEmptyString
  "Liturgical Chants and Ceremonies": NonEmptyString
  "General": NonEmptyString
  "Note": NonEmptyString
  "all": NonEmptyString

  "inlinewiki.castingtime": NonEmptyString
  "inlinewiki.ritualtime": NonEmptyString
  "inlinewiki.aecost": NonEmptyString
  "inlinewiki.range": NonEmptyString
  "inlinewiki.duration": NonEmptyString
  "inlinewiki.targetcategory": NonEmptyString
  "inlinewiki.property": NonEmptyString
  "inlinewiki.traditions": NonEmptyString
  "inlinewiki.skill": NonEmptyString
  "inlinewiki.lengthoftime": NonEmptyString
  "inlinewiki.musictradition": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthisspellscastingtime": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthisspellsritualtime": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthisspellscost": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthisspellsrange": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthisspellsduration": NonEmptyString
  "inlinewiki.spellenhancements": NonEmptyString
  /**
   * - `0`: Enhancement name
   * - `1`: Required Skill Rating
   * - `2`: AP value
   * - `3`: Description
   */
  "inlinewiki.spellenhancements.title": NonEmptyString
  "inlinewiki.tribaltraditions": NonEmptyString
  "inlinewiki.brew": NonEmptyString
  "inlinewiki.spirithalf": NonEmptyString
  "inlinewiki.spirithalf.short": NonEmptyString
  "inlinewiki.spiritortoughness": NonEmptyString
  "inlinewiki.spiritortoughness.short": NonEmptyString
  "inlinewiki.note": NonEmptyString

  "Blessings": NonEmptyString
  "Ceremonies": NonEmptyString
  "liturgicalchants.addbtn": NonEmptyString
  "liturgicalchants.header.name": NonEmptyString
  "liturgicalchants.header.traditions": NonEmptyString
  "liturgicalchants.header.group": NonEmptyString
  "liturgicalchants.header.skillrating": NonEmptyString
  "liturgicalchants.header.skillrating.tooltip": NonEmptyString
  "liturgicalchants.header.check": NonEmptyString
  "liturgicalchants.header.checkmodifier": NonEmptyString
  "liturgicalchants.header.checkmodifier.tooltip": NonEmptyString
  "liturgicalchants.header.improvementcost": NonEmptyString
  "liturgicalchants.header.improvementcost.tooltip": NonEmptyString
  "liturgicalchants.groups.blessing": NonEmptyString
  "liturgicalchants.aspects.general": NonEmptyString

  "inlinewiki.liturgicaltime": NonEmptyString
  "inlinewiki.ceremonialtime": NonEmptyString
  "inlinewiki.kpcost": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthischantsliturgicaltime": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthischantsceremonialtime": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthischantscost": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthischantsrange": NonEmptyString
  "inlinewiki.youcannotuseamodificationonthischantsduration": NonEmptyString
  "inlinewiki.liturgicalchantenhancements": NonEmptyString
  /**
   * - `0`: Enhancement name
   * - `1`: Required Skill Rating
   * - `2`: AP value
   * - `3`: Description
   */
  "inlinewiki.liturgicalchantenhancements.title": NonEmptyString

  "equipment.header.name": NonEmptyString
  "equipment.header.group": NonEmptyString
  "equipment.addbtn": NonEmptyString
  "equipment.createbtn": NonEmptyString
  "equipment.filters.allcombattechniques": NonEmptyString

  "equipment.purse.title": NonEmptyString
  "equipment.purse.ducats": NonEmptyString
  "equipment.purse.silverthalers": NonEmptyString
  "equipment.purse.halers": NonEmptyString
  "equipment.purse.kreutzers": NonEmptyString
  "equipment.purse.carryingcapacity": NonEmptyString
  "equipment.purse.initialstartingwealthandcarryingcapacity": NonEmptyString
  "equipment.purse.earnpay": NonEmptyString
  "equipment.purse.earn": NonEmptyString
  "equipment.purse.pay": NonEmptyString
  "equipment.purse.notefirst": NonEmptyString
  "equipment.purse.notesecond": NonEmptyString
  "equipment.purse.currentcredit": NonEmptyString
  "equipment.purse.amount": NonEmptyString

  "equipment.dialogs.addedit.damage": NonEmptyString
  "equipment.dialogs.addedit.length": NonEmptyString
  "equipment.dialogs.addedit.range": NonEmptyString
  "equipment.dialogs.addedit.edititem": NonEmptyString
  "equipment.dialogs.addedit.createitem": NonEmptyString
  "equipment.dialogs.addedit.number": NonEmptyString
  "equipment.dialogs.addedit.name": NonEmptyString
  "equipment.dialogs.addedit.price": NonEmptyString
  "equipment.dialogs.addedit.weight": NonEmptyString
  "equipment.dialogs.addedit.carriedwhere": NonEmptyString
  "equipment.dialogs.addedit.itemgroup": NonEmptyString
  "equipment.dialogs.addedit.itemgrouphint": NonEmptyString
  "equipment.dialogs.addedit.improvisedweapon": NonEmptyString
  "equipment.dialogs.addedit.improvisedweapongroup": NonEmptyString
  "equipment.dialogs.addedit.template": NonEmptyString
  "equipment.dialogs.addedit.combattechnique": NonEmptyString
  "equipment.dialogs.addedit.primaryattributeanddamagethreshold": NonEmptyString
  "equipment.dialogs.addedit.primaryattribute": NonEmptyString
  "equipment.dialogs.addedit.primaryattribute.short": NonEmptyString
  "equipment.dialogs.addedit.damagethreshold": NonEmptyString
  "equipment.dialogs.addedit.separatedamagethresholds": NonEmptyString
  "equipment.dialogs.addedit.breakingpointratingmodifier": NonEmptyString
  "equipment.dialogs.addedit.damaged": NonEmptyString
  "equipment.dialogs.addedit.reach": NonEmptyString
  "equipment.dialogs.addedit.attackparrymodifier": NonEmptyString
  "equipment.dialogs.addedit.structurepoints": NonEmptyString
  "equipment.dialogs.addedit.lengthwithunit": NonEmptyString
  "equipment.dialogs.addedit.parryingweapon": NonEmptyString
  "equipment.dialogs.addedit.twohandedweapon": NonEmptyString
  "equipment.dialogs.addedit.reloadtime": NonEmptyString
  "equipment.dialogs.addedit.rangeclose": NonEmptyString
  "equipment.dialogs.addedit.rangemedium": NonEmptyString
  "equipment.dialogs.addedit.rangefar": NonEmptyString
  "equipment.dialogs.addedit.ammunition": NonEmptyString
  "equipment.dialogs.addedit.protection": NonEmptyString
  "equipment.dialogs.addedit.encumbrance": NonEmptyString
  "equipment.dialogs.addedit.armortype": NonEmptyString
  "equipment.dialogs.addedit.sturdinessmodifier": NonEmptyString
  "equipment.dialogs.addedit.wear": NonEmptyString
  "equipment.dialogs.addedit.hitzonearmoronly": NonEmptyString
  "equipment.dialogs.addedit.movementmodifier": NonEmptyString
  "equipment.dialogs.addedit.initiativemodifier": NonEmptyString
  "equipment.dialogs.addedit.additionalpenalties": NonEmptyString

  "hitzonearmors.header.name": NonEmptyString
  "hitzonearmors.createbtn": NonEmptyString
  "hitzonearmors.dialogs.addedit.name": NonEmptyString
  "hitzonearmors.dialogs.addedit.edithitzonearmor": NonEmptyString
  "hitzonearmors.dialogs.addedit.createhitzonearmor": NonEmptyString
  "hitzonearmors.dialogs.addedit.head": NonEmptyString
  "hitzonearmors.dialogs.addedit.torso": NonEmptyString
  "hitzonearmors.dialogs.addedit.leftarm": NonEmptyString
  "hitzonearmors.dialogs.addedit.rightarm": NonEmptyString
  "hitzonearmors.dialogs.addedit.leftleg": NonEmptyString
  "hitzonearmors.dialogs.addedit.rightleg": NonEmptyString
  "hitzonearmors.dialogs.addedit.wear": NonEmptyString

  "inlinewiki.equipment.weight": NonEmptyString
  "inlinewiki.equipment.price": NonEmptyString
  "inlinewiki.equipment.ammunition": NonEmptyString
  "inlinewiki.equipment.combattechnique": NonEmptyString
  "inlinewiki.equipment.damage": NonEmptyString
  "inlinewiki.equipment.primaryattributeanddamagethreshold": NonEmptyString
  "inlinewiki.equipment.attackparrymodifier": NonEmptyString
  "inlinewiki.equipment.reach": NonEmptyString
  "inlinewiki.equipment.length": NonEmptyString
  "inlinewiki.equipment.reloadtime": NonEmptyString
  "inlinewiki.equipment.range": NonEmptyString
  /**
   * - `0`: Number of actions
   */
  "inlinewiki.equipment.actionsvalue": NonEmptyString
  "inlinewiki.equipment.protection": NonEmptyString
  "inlinewiki.equipment.encumbrance": NonEmptyString
  "inlinewiki.equipment.additionalpenalties": NonEmptyString
  "inlinewiki.equipment.note": NonEmptyString
  "inlinewiki.equipment.rules": NonEmptyString
  "inlinewiki.equipment.weaponadvantage": NonEmptyString
  "inlinewiki.equipment.weapondisadvantage": NonEmptyString
  "inlinewiki.equipment.armoradvantage": NonEmptyString
  "inlinewiki.equipment.armordisadvantage": NonEmptyString

  "pets.dialogs.addedit.deleteavatarbtn": NonEmptyString
  "pets.dialogs.addedit.name": NonEmptyString
  "pets.dialogs.addedit.sizecategory": NonEmptyString
  "pets.dialogs.addedit.type": NonEmptyString
  "pets.dialogs.addedit.apspent": NonEmptyString
  "pets.dialogs.addedit.totalap": NonEmptyString
  "pets.dialogs.addedit.protection": NonEmptyString
  "pets.dialogs.addedit.attackname": NonEmptyString
  "pets.dialogs.addedit.attack": NonEmptyString
  "pets.dialogs.addedit.parry": NonEmptyString
  "pets.dialogs.addedit.damagepoints": NonEmptyString
  "pets.dialogs.addedit.reach": NonEmptyString
  "pets.dialogs.addedit.actions": NonEmptyString
  "pets.dialogs.addedit.skills": NonEmptyString
  "pets.dialogs.addedit.specialabilities": NonEmptyString
  "pets.dialogs.addedit.notes": NonEmptyString
  "pets.dialogs.addedit.addbtn": NonEmptyString
  "pets.dialogs.addedit.savebtn": NonEmptyString

  // Inline Library
  "Show details": NonEmptyString

  // Experience Level
  "Maximum Attribute Value": NonEmptyString
  "Maximum Skill Value": NonEmptyString
  "Maximum Combat Technique": NonEmptyString
  "Maximum Attribute Total": NonEmptyString
  "Number of Spells/Liturgical Chants": NonEmptyString
  "Number from other Traditions": NonEmptyString

  // Skill
  "Check": NonEmptyString
  "Applications": NonEmptyString
  "Encumbrance": NonEmptyString
  "Yes": NonEmptyString
  "No": NonEmptyString
  "Maybe": NonEmptyString
  "Tools": NonEmptyString
  "Quality": NonEmptyString
  "Failed Check": NonEmptyString
  "Critical Success": NonEmptyString
  "Botch": NonEmptyString
  "Improvement Cost": NonEmptyString

  "Front Cover Inside": NonEmptyString
  "Back Cover Inside": NonEmptyString
  "since the {0}. printing": PluralizationCategories
  "removed in {0}. printing": PluralizationCategories
}

export const config: TypeConfig<UI, string, "UI"> = {
  name: "UI",
  id: getFilenameAsStringId,
  integrityValidator: () => Result.ok(undefined),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateLanguageFileName,
}
