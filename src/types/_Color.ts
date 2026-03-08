import * as DB from "tsondb/schema/dsl"

export const AttributeColor = DB.Enum(import.meta.url, {
  name: "AttributeColor",
  comment: "A display color for an attribute.",
  values: () => ({
    Red: DB.EnumCase({ type: null }),
    Purple: DB.EnumCase({ type: null }),
    Green: DB.EnumCase({ type: null }),
    Black: DB.EnumCase({ type: null }),
    Yellow: DB.EnumCase({ type: null }),
    Blue: DB.EnumCase({ type: null }),
    White: DB.EnumCase({ type: null }),
    Orange: DB.EnumCase({ type: null }),
  }),
})

export const GradientColor = DB.Enum(import.meta.url, {
  name: "GradientColor",
  comment:
    "A display color for entries that have a certain color as a gradient in the header of their box in the official publications.",
  values: () => ({
    TribalTeal: DB.EnumCase({ type: null }), // HEX #507471 / CMYK 55 13 33 48
    OldRed: DB.EnumCase({ type: null }), // HEX #8c3537 / CMYK 51 91 81 6
    Verdigris: DB.EnumCase({ type: null }), // HEX #5b6235 / CMYK 70 53 91 17
    Gaia: DB.EnumCase({ type: null }), // HEX #62934b / CMYK 64 17 82 13
    SanMarino: DB.EnumCase({ type: null }), // HEX #4f70a8 / CMYK 75 53 10 2
    LightHarvestGold: DB.EnumCase({ type: null }), // HEX #dbb578 / CMYK 9 26 56 9
  }),
})
