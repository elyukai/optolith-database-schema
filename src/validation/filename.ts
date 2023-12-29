import { basename, extname } from "node:path"

/**
 * Returns the numeric prefix of a filename, that is, the part before the first
 * underscore.
 */
export const getFilenamePrefixAsNumericId = (_data: unknown, filepath: string): number =>
  Number.parseInt(/^(\d+?)_/.exec(basename(filepath))?.[1] ?? "", 10)

/**
 * Returns the filename without the extension.
 */
export const getFilenameAsStringId = (_data: unknown, filepath: string): string =>
  basename(filepath, extname(filepath))
