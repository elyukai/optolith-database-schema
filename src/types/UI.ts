/**
 * @main UI
 */

import { Result } from "../helpers/result.js"
import { TypeConfig } from "../typeConfig.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenameAsStringId } from "../validation/filename.js"
import { PluralizationCategories } from "./_I18n.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title UI
 */
export type UI = {
  /**
   * - `0`: Name of the app
   */
  "macosmenubar.aboutapp": NonEmptyString
  "macosmenubar.preferences": NonEmptyString
  "macosmenubar.quit": NonEmptyString
  "macosmenubar.edit": NonEmptyString
  "macosmenubar.view": NonEmptyString
  "initialization.loadtableserror": NonEmptyString
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
  "header.apleft": NonEmptyString
  "header.savebtn": NonEmptyString
  "Show Settings": NonEmptyString
  "Toggle DevTools": NonEmptyString
  "header.aptooltip.title": NonEmptyString
  /**
   * - `0`: AP Total
   */
  "header.aptooltip.total": NonEmptyString
  /**
   * - `0`: AP Spent
   */
  "header.aptooltip.spent": NonEmptyString
  /**
   * - `0`: Current AP spent on advantages
   * - `1`: Maximum possible AP spent on advantages
   */
  "header.aptooltip.spentonadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic advantages
   * - `1`: Maximum possible AP spent on magic advantages
   */
  "header.aptooltip.spentonmagicadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed advantages
   * - `1`: Maximum possible AP spent on blessed advantages
   */
  "header.aptooltip.spentonblessedadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on disadvantages
   * - `1`: Maximum possible AP spent on disadvantages
   */
  "header.aptooltip.spentondisadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic disadvantages
   * - `1`: Maximum possible AP spent on magic disadvantages
   */
  "header.aptooltip.spentonmagicdisadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed disadvantages
   * - `1`: Maximum possible AP spent on blessed disadvantages
   */
  "header.aptooltip.spentonblesseddisadvantages": NonEmptyString
  /**
   * - `0`: AP spent on race
   */
  "header.aptooltip.spentonrace": NonEmptyString
  /**
   * - `0`: AP spent on profession
   */
  "header.aptooltip.spentonprofession": NonEmptyString
  /**
   * - `0`: AP spent on attributes
   */
  "header.aptooltip.spentonattributes": NonEmptyString
  /**
   * - `0`: AP spent on skills
   */
  "header.aptooltip.spentonskills": NonEmptyString
  /**
   * - `0`: AP spent on combat techniques
   */
  "header.aptooltip.spentoncombattechniques": NonEmptyString
  /**
   * - `0`: AP spent on spells
   */
  "header.aptooltip.spentonspells": NonEmptyString
  /**
   * - `0`: AP spent on cantrips
   */
  "header.aptooltip.spentoncantrips": NonEmptyString
  /**
   * - `0`: AP spent on liturgical chants
   */
  "header.aptooltip.spentonliturgicalchants": NonEmptyString
  /**
   * - `0`: AP spent on blessings
   */
  "header.aptooltip.spentonblessings": NonEmptyString
  /**
   * - `0`: AP spent on special abilities
   */
  "header.aptooltip.spentonspecialabilities": NonEmptyString
  /**
   * - `0`: AP spent on energies (LP/AE/KP)
   */
  "header.aptooltip.spentonenergies": NonEmptyString
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
  "general.dice": NonEmptyString
  "general.none": NonEmptyString
  "general.or": NonEmptyString
  "general.and": NonEmptyString
  "general.error": NonEmptyString
  "general.errorcode": NonEmptyString
  "general.emptylistplaceholder": NonEmptyString
  "general.emptylistnoresultsplaceholder": NonEmptyString
  /**
   * - `0`: AP value
   */
  "general.apvalue": PluralizationCategories
  /**
   * - `0`: AP value
   */
  "general.apvalue.short": NonEmptyString
  /**
   * - `0`: Name of element
   * - `1`: AP value
   */
  "general.withapvalue": NonEmptyString
  "general.filters.searchfield.placeholder": NonEmptyString
  "general.filters.sort.alphabetically": NonEmptyString
  "general.filters.sort.bydatemodified": NonEmptyString
  "general.filters.sort.bygroup": NonEmptyString
  "general.filters.sort.byimprovementcost": NonEmptyString
  "general.filters.sort.byproperty": NonEmptyString
  "general.filters.sort.bylocation": NonEmptyString
  "general.filters.sort.bycost": NonEmptyString
  "general.filters.sort.byweight": NonEmptyString
  "general.filters.showactivatedentries": NonEmptyString
  "general.dialogs.savebtn": NonEmptyString
  "general.dialogs.donebtn": NonEmptyString
  "general.dialogs.deletebtn": NonEmptyString
  "general.dialogs.yesbtn": NonEmptyString
  "general.dialogs.nobtn": NonEmptyString
  "general.dialogs.okbtn": NonEmptyString
  "general.dialogs.cancelbtn": NonEmptyString
  "general.dialogs.copybtn": NonEmptyString
  "general.dialogs.createbtn": NonEmptyString
  "general.dialogs.applybtn": NonEmptyString
  "general.dialogs.addbtn": NonEmptyString
  "general.dialogs.notenoughap.title": NonEmptyString
  /**
   * - `0`: Missing AP
   */
  "general.dialogs.notenoughap.message": NonEmptyString
  /**
   * - `0`: Category in which the limit is reached
   */
  "general.dialogs.reachedaplimit.title": NonEmptyString
  /**
   * - `0`: Missing AP
   * - `1`: Maximum possible AP spent on category
   * - `2`: Category in which the limit is reached
   */
  "general.dialogs.reachedaplimit.message": NonEmptyString
  "general.dialogs.reachedaplimit.advantages": NonEmptyString
  "general.dialogs.reachedaplimit.magicaladvantages": NonEmptyString
  "general.dialogs.reachedaplimit.blessedadvantages": NonEmptyString
  "general.dialogs.reachedaplimit.disadvantages": NonEmptyString
  "general.dialogs.reachedaplimit.magicaldisadvantages": NonEmptyString
  "general.dialogs.reachedaplimit.blesseddisadvantages": NonEmptyString
  "settings.title": NonEmptyString
  "settings.language": NonEmptyString
  "settings.fallbacklanguage": NonEmptyString
  "settings.systemlanguage": NonEmptyString
  "settings.languagehint": NonEmptyString
  "settings.theme": NonEmptyString
  "settings.theme.dark": NonEmptyString
  "settings.theme.light": NonEmptyString
  "settings.showanimations": NonEmptyString
  "settings.enableeditingheroaftercreationphase": NonEmptyString
  "settings.checkforupdatesbtn": NonEmptyString
  "settings.newversionavailable.title": NonEmptyString
  /**
   * - `0`: Version number
   */
  "settings.newversionavailable.message": NonEmptyString
  /**
   * - `0`: Version number
   * - `1`: Size of update package
   */
  "settings.newversionavailable.messagewithsize": NonEmptyString
  "settings.newversionavailable.updatebtn": NonEmptyString
  "settings.nonewversionavailable.title": NonEmptyString
  "settings.nonewversionavailable.message": NonEmptyString
  "settings.downloadingupdate.title": NonEmptyString
  "heroes.filters.origin.allheroes": NonEmptyString
  "heroes.filters.origin.ownheroes": NonEmptyString
  "heroes.filters.origin.sharedheroes": NonEmptyString
  "heroes.importherobtn": NonEmptyString
  "heroes.createherobtn": NonEmptyString
  "heroes.exportheroasjsonbtn": NonEmptyString
  "heroes.duplicateherobtn": NonEmptyString
  "heroes.deleteherobtn": NonEmptyString
  "heroes.openherobtn": NonEmptyString
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
  "imprint.title": NonEmptyString
  "profile.editprofessionnamebtn": NonEmptyString
  "profile.addadventurepointsbtn": NonEmptyString
  "profile.endherocreationbtn": NonEmptyString
  "profile.changeheroavatarbtn": NonEmptyString
  "profile.deleteavatarbtn": NonEmptyString
  "profile.dialogs.changeheroavatar.title": NonEmptyString
  "profile.dialogs.changeheroavatar.selectfilebtn": NonEmptyString
  "profile.dialogs.changeheroavatar.imagefiletype": NonEmptyString
  "profile.dialogs.changeheroavatar.invalidfilewarning": NonEmptyString
  "profile.dialogs.addadventurepoints.title": NonEmptyString
  "profile.dialogs.addadventurepoints.label": NonEmptyString
  "profile.advantages": NonEmptyString
  "profile.disadvantages": NonEmptyString
  "personaldata.title": NonEmptyString
  "personaldata.sex.male": NonEmptyString
  "personaldata.sex.female": NonEmptyString
  "personaldata.family": NonEmptyString
  "personaldata.placeofbirth": NonEmptyString
  "personaldata.dateofbirth": NonEmptyString
  "personaldata.age": NonEmptyString
  "personaldata.haircolor": NonEmptyString
  "personaldata.eyecolor": NonEmptyString
  "personaldata.size": NonEmptyString
  "personaldata.weight": NonEmptyString
  "personaldata.rank": NonEmptyString
  "personaldata.socialstatus": NonEmptyString
  "personaldata.characteristics": NonEmptyString
  "personaldata.otherinfo": NonEmptyString
  "personaldata.cultureareaknowledge": NonEmptyString
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
  "rules.rulebase": NonEmptyString
  "rules.enableallrulebooks": NonEmptyString
  "rules.focusrules": NonEmptyString
  "rules.optionalrules": NonEmptyString
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
  "attributes.totalpoints": NonEmptyString
  "attributes.attributeadjustmentselection": NonEmptyString
  "attributes.derivedcharacteristics.tooltips.modifier": NonEmptyString
  "attributes.derivedcharacteristics.tooltips.bought": NonEmptyString
  "attributes.derivedcharacteristics.tooltips.losttotal": NonEmptyString
  "attributes.derivedcharacteristics.tooltips.boughtback": NonEmptyString
  "attributes.lostpermanently.lifepoints": NonEmptyString
  "attributes.lostpermanently.lifepoints.short": NonEmptyString
  "attributes.lostpermanently.arcaneenergy": NonEmptyString
  "attributes.lostpermanently.arcaneenergy.short": NonEmptyString
  "attributes.lostpermanently.karmapoints": NonEmptyString
  "attributes.lostpermanently.karmapoints.short": NonEmptyString
  "attributes.removeenergypointslostpermanently.title": NonEmptyString
  "attributes.removeenergypointslostpermanently.message": NonEmptyString
  "attributes.removeenergypointslostpermanently.removebtn": NonEmptyString
  "attributes.pointslostpermanentlyeditor.boughtback": NonEmptyString
  "attributes.pointslostpermanentlyeditor.spent": NonEmptyString
  "advantages.filters.commonadvantages": NonEmptyString
  "disadvantages.filters.commondisadvantages": NonEmptyString
  "advantagesdisadvantages.addbtn": NonEmptyString
  "advantagesdisadvantages.afraidof": NonEmptyString
  "advantagesdisadvantages.immunityto": NonEmptyString
  "advantagesdisadvantages.hatredfor": NonEmptyString
  "advantagesdisadvantages.header.name": NonEmptyString
  "advantagesdisadvantages.header.adventurepoints": NonEmptyString
  "advantagesdisadvantages.header.adventurepoints.tooltip": NonEmptyString
  /**
   * - `0`: Current AP spent on advantages
   * - `1`: Maximum possible AP spent on advantages
   */
  "advantagesdisadvantages.apspent.spentonadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic advantages
   * - `1`: Maximum possible AP spent on magic advantages
   */
  "advantagesdisadvantages.apspent.spentonmagicadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed advantages
   * - `1`: Maximum possible AP spent on blessed advantages
   */
  "advantagesdisadvantages.apspent.spentonblessedadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on disadvantages
   * - `1`: Maximum possible AP spent on disadvantages
   */
  "advantagesdisadvantages.apspent.spentondisadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on magic disadvantages
   * - `1`: Maximum possible AP spent on magic disadvantages
   */
  "advantagesdisadvantages.apspent.spentonmagicdisadvantages": NonEmptyString
  /**
   * - `0`: Current AP spent on blessed disadvantages
   * - `1`: Maximum possible AP spent on blessed disadvantages
   */
  "advantagesdisadvantages.apspent.spentonblesseddisadvantages": NonEmptyString
  "advantagesdisadvantages.dialogs.customcost.title": NonEmptyString
  /**
   * - `0`: Entry name
   */
  "advantagesdisadvantages.dialogs.customcost.for": NonEmptyString
  "specialabilities.addbtn": NonEmptyString
  "specialabilities.header.name": NonEmptyString
  "specialabilities.header.group": NonEmptyString
  "specialabilities.header.adventurepoints": NonEmptyString
  "specialabilities.header.adventurepoints.tooltip": NonEmptyString
  "specialabilities.nativetonguelevel": NonEmptyString
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
  "skills.commonskills": NonEmptyString
  "skills.header.name": NonEmptyString
  "skills.header.skillrating": NonEmptyString
  "skills.header.skillrating.tooltip": NonEmptyString
  "skills.header.group": NonEmptyString
  "skills.header.check": NonEmptyString
  "skills.header.improvementcost": NonEmptyString
  "skills.header.improvementcost.tooltip": NonEmptyString
  "inlinewiki.check": NonEmptyString
  "inlinewiki.newapplications": NonEmptyString
  "inlinewiki.applications": NonEmptyString
  "inlinewiki.uses": NonEmptyString
  "inlinewiki.encumbrance": NonEmptyString
  "inlinewiki.encumbrance.yes": NonEmptyString
  "inlinewiki.encumbrance.no": NonEmptyString
  "inlinewiki.encumbrance.maybe": NonEmptyString
  "inlinewiki.tools": NonEmptyString
  "inlinewiki.quality": NonEmptyString
  "inlinewiki.failedcheck": NonEmptyString
  "inlinewiki.criticalsuccess": NonEmptyString
  "inlinewiki.botch": NonEmptyString
  "inlinewiki.improvementcost": NonEmptyString
  "showfrequency.stronglyrecommended": NonEmptyString
  "showfrequency.common": NonEmptyString
  "showfrequency.uncommon": NonEmptyString
  "showfrequency.unfamiliarspells": NonEmptyString
  "combattechniques.header.name": NonEmptyString
  "combattechniques.header.group": NonEmptyString
  "combattechniques.header.combattechniquerating": NonEmptyString
  "combattechniques.header.combattechniquerating.tooltip": NonEmptyString
  "combattechniques.header.improvementcost": NonEmptyString
  "combattechniques.header.improvementcost.tooltip": NonEmptyString
  "combattechniques.header.primaryattribute": NonEmptyString
  "combattechniques.header.primaryattribute.tooltip": NonEmptyString
  "combattechniques.header.attack": NonEmptyString
  "combattechniques.header.attack.tooltip": NonEmptyString
  "combattechniques.header.parry": NonEmptyString
  "combattechniques.header.parry.tooltip": NonEmptyString
  "inlinewiki.special": NonEmptyString
  "inlinewiki.primaryattribute": NonEmptyString
  "spells.addbtn": NonEmptyString
  "spells.header.name": NonEmptyString
  "spells.header.property": NonEmptyString
  "spells.header.group": NonEmptyString
  "spells.header.skillrating": NonEmptyString
  "spells.header.skillrating.tooltip": NonEmptyString
  "spells.header.check": NonEmptyString
  "spells.header.checkmodifier": NonEmptyString
  "spells.header.checkmodifier.tooltip": NonEmptyString
  "spells.header.improvementcost": NonEmptyString
  "spells.header.improvementcost.tooltip": NonEmptyString
  "spells.groups.cantrip": NonEmptyString
  "spells.traditions.general": NonEmptyString
  "magicalactions.animistforces.tribes.general": NonEmptyString
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
  "equipment.purse.earnpay":  NonEmptyString
  "equipment.purse.earn":  NonEmptyString
  "equipment.purse.pay":  NonEmptyString
  "equipment.purse.notefirst":  NonEmptyString
  "equipment.purse.notesecond":  NonEmptyString
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
}

export const config: TypeConfig<UI, string> = {
  name: "UI",
  id: getFilenameAsStringId,
  integrityValidator: () => Result.ok(undefined),
  schemaValidator: createSchemaValidator(import.meta.url),
}
