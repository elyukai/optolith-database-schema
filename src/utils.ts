import type * as Database from "../gen/types.js"

export type GetInstanceById<T extends keyof Database.EntityMap> = {
  <U extends T>(enumCase: IdentifierEnum<U>): Database.EntityMap[U] | undefined
  <U extends T>(entity: U, id: string): Database.EntityMap[U] | undefined
}

export type GetAllInstances<T extends keyof Database.EntityMap> = <U extends T>(
  entity: U,
) => [id: string, content: Database.EntityMap[U]][]

export type GetAllChildInstancesForParent<T extends keyof Database.ChildEntityMap> = <U extends T>(
  entity: U,
  parentId: Database.ChildEntityMap[U][2],
) => [id: string, content: Database.ChildEntityMap[U][0]][]

export type Case<K extends string, T = undefined> = T extends NonNullable<unknown> | null
  ? { kind: K } & { [Key in K]: Extract<T, NonNullable<unknown> | null> }
  : { kind: K }

/**
 * Creates an enum case object.
 */
export const Case = (<K extends string, T>(kind: K, value: T): Case<K, T> =>
  (value === undefined ? { kind } : { kind, [kind]: value }) as Case<K, T>) as {
  <K extends string>(kind: K): Case<K>
  <K extends string, T extends NonNullable<unknown> | null>(kind: K, value: T): Case<K, T>
}

export type IdentifierEnum<K extends keyof Database.EntityMap> = { [K1 in K]: Case<K1, string> }[K]

export const stringFromEnumIdentifier = (
  enumCase: IdentifierEnum<keyof Database.EntityMap>,
): string => enumCase[enumCase.kind as keyof typeof enumCase]
