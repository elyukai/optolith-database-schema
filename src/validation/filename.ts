import { basename, extname } from "node:path"

/**
 * Returns the numeric prefix of a filename, that is, the part before the first
 * underscore.
 */
export const getFIlenamePrefixAsNumericId = (_data: {}, filepath: string): number =>
  Number.parseInt(/^(\d+?)_/.exec(basename(filepath))?.[1] ?? "", 10)

/**
 * Returns the filename without the extension.
 */
export const getFilenameAsStringId = (_data: {}, filepath: string): string =>
  basename(filepath, extname(filepath))
