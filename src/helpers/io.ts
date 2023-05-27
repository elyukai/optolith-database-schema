import { readFile, readdir } from "node:fs/promises"
import { basename, dirname, extname, join } from "node:path"
import YAML from "yaml"

/**
 * Recursively reads all files in a directory and its subdirectories.
 * @param dirPath The path to the directory to read.
 */
export async function* readDirectoryRec(
  dirPath: string,
  filterName: (entryName: string) => boolean = () => true
): AsyncGenerator<string> {
  const dirEntries = await readdir(dirPath, { withFileTypes: true })

  for (const dirEntry of dirEntries) {
    if (filterName(dirEntry.name)) {
      const dirEntryPath = join(dirPath, dirEntry.name)
      if (dirEntry.isDirectory()) {
        yield* readDirectoryRec(dirEntryPath)
      } else {
        yield dirEntryPath
      }
    }
  }
}

/**
 * Reads a JSON file and parses its content.
 * @param filePath The path to the JSON file.
 * @returns The parsed JSON content.
 */
export const readJsonFile = async (filePath: string): Promise<unknown> => {
  const fileContent = await readFile(filePath, "utf-8")
  return JSON.parse(fileContent)
}

/**
 * Reads a YAML file and parses its content.
 * @param filePath The path to the YAML file.
 * @returns The parsed YAML content.
 */
export const readYamlFile = async (filePath: string): Promise<unknown> => {
  const fileContent = await readFile(filePath, "utf-8")
  return YAML.parse(fileContent)
}

/**
 * Changes the extension of a file path.
 * @param path The path to the file.
 * @param ext The new extension to use.
 * @returns
 */
export const changeFileExtension = (path: string, ext: string) =>
  join(dirname(path), basename(path, extname(path)) + ext)

/**
 * Checks if a file name represents a hidden file.
 * @param name The file name to check.
 */
export const isHiddenFileName = (name: string) => !name.startsWith(".")
