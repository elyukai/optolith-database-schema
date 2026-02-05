import { Array, IncludeIdentifier, TypeAlias } from "tsondb/schema/dsl"
import { PreconditionGroup } from "./PrerequisiteGroups.js"

export const Preconditions = TypeAlias(import.meta.url, {
  name: "Preconditions",
  comment: `A list of preconditions for the prerequisite it is defined on, so that it only takes effect if the prerequisites in this list are matched.

Usually appears at the \`when\` property of the parent prerequisite.`,
  type: () => Array(IncludeIdentifier(PreconditionGroup), { minItems: 1 }),
})
