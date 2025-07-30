import Foundation
import FileDB

@Embedded
public struct Erratum {

  /// The date when the change was confirmed and applied to the entry.
  let date: Date

  /// A description of what changed.
  @MinLength(1)
  let description: String
  }
