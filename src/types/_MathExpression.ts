import {
  Array,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  Param,
  TypeArgument,
  type Enum,
  type IncludeIdentifier,
  type TypeParameter,
} from "tsondb/schema/dsl"

type BinaryMathOperationName =
  | "Addition"
  | "Subtraction"
  | "Multiplication"
  | "Division"
  | "Exponentiation"

type BinaryMathOperation = {
  [K in BinaryMathOperationName]: EnumCase<
    Array<IncludeIdentifier<[Value: TypeParameter], MathOperation>>
  >
}

export type MathOperation = Enum<
  "MathOperation",
  {
    Value: EnumCase<TypeArgument>
  } & BinaryMathOperation,
  [Value: TypeParameter<"Value">]
>

export const MathOperation: MathOperation = GenEnum(import.meta.url, {
  name: "MathOperation",
  parameters: [Param("Value")],
  values: Value => {
    const binaryOperationType = Array(
      GenIncludeIdentifier<MathOperation, [Value: TypeParameter]>(MathOperation, [
        TypeArgument(Value),
      ]),
      { minItems: 2, maxItems: 2 },
    )

    return {
      Value: EnumCase({
        comment: "A direct value.",
        type: TypeArgument(Value),
      }),
      Addition: EnumCase({
        comment: "Adds two values.",
        type: binaryOperationType,
      }),
      Subtraction: EnumCase({
        comment: "Subtracts the right value from the left value.",
        type: binaryOperationType,
      }),
      Multiplication: EnumCase({
        comment: "Multiplies two values.",
        type: binaryOperationType,
      }),
      Division: EnumCase({
        comment: "Divides the left value by the right value.",
        type: binaryOperationType,
      }),
      Exponentiation: EnumCase({
        comment: "Raises the left value to the power of the right value.",
        type: binaryOperationType,
      }),
    }
  },
})
