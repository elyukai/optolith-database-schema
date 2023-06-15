/**
 * @title Dice
 */
export type Dice = {
  /**
   * Number of dice of the same type. Example: 2 in 2D6.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * Number of sides on every die. Example: 6 in 2D6.
   */
  sides: DieType
}

/**
 * Number of sides on every dice. Example: 6 in 2D6.
 */
export type DieType =
  | 3
  | 6
  | 20
