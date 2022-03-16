import { PreconditionGroup } from "./PrerequisiteGroups.js"

/**
 * A list of preconditions for the prerequisite it is defined on, so that it
 * only takes effect if the prerequisites in this list are matched.
 *
 * Usually appears at the `when` property of the parent prerequisite.
 * @title Preconditions (`when`)
 * @minItems 1
 */
export type Preconditions = PreconditionGroup[]
