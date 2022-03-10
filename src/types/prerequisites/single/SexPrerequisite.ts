import { BinarySex } from "../../_Sex"
import { DisplayOption } from "../DisplayOption"

/**
 * Requires a specific sex.
 * @title Sex Prerequisite
 */
export type SexPrerequisite = {
  tag: "Sex"

  id: BinarySex

  display_option?: DisplayOption
}
