import { BinarySex } from "../../_Sex.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific sex.
 * @title Sex Prerequisite
 */
export type SexPrerequisite = {
  tag: "Sex"

  id: BinarySex

  display_option?: DisplayOption
}
