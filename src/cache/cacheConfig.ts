import type { ChildEntityMap, EntityMap } from "../../gen/types.js"
import type { GetAllChildInstancesForParent, GetAllInstances, GetInstanceById } from "../utils.js"

export type CacheBuilder<T> = (database: {
  getInstanceById: GetInstanceById<keyof EntityMap>
  getAllInstances: GetAllInstances<keyof EntityMap>
  getAllChildInstancesForParent: GetAllChildInstancesForParent<keyof ChildEntityMap>
}) => T
