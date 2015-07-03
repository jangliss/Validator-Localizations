// ==UserScript==
// @name                WME Validator Localization for Wisconsin
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.7
// @author              xanderb
// @description         This script localizes WME Validator for Wisconsin, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2015-07-03",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr or St or Dr where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Jr |Rev /"
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect Highway",
    "problemEN": "Wisconsin uses WIS- for state and US- for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Wisconsin:.*(Wis Hwy |State Hwy |Wis-|SH-|State Rd |SR-|State Rte |WI-|WIS=|U[.S.|S|s] [H|h][WY|wy|ighway])/"
  },
  "129.solutionLink": "W:Wisconsin",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 30 meters",
    "solutionEN": "Does it really need to be there?",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-2]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Not Wisconsin",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in WI and change it",
    "template": "${state}",
    "regexp": "!/Wisconsin/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Wisconsin:.*(Cs-|CS-|County Hwy|County Rd |Cr-|Co Rd|Ch-|CR-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "City Name on Freeway",
    "problemEN": "City names on Freeway segments can cause detours",
    "solutionEN": "Remove the City Name",
    "template": "${typeRank}:${city}",
    "regexp": "/15:.+$/"
  },
  //Default US checks
  "27.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "112.enabled": !1,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": !0,
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
};
