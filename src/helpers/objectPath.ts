/**
 * A path segment descriptor is either a key or an index.
 */
export type PathSegmentDescriptor = { k: string } | { i: number }

/**
 * A path descriptor is a list of path segment descriptors.
 */
export type PathDescriptor = PathSegmentDescriptor[]

export const printPathDescriptor = (pathDescriptor: PathDescriptor): string =>
  pathDescriptor
    .map(segment => "k" in segment ? segment.k : segment.i)
    .join("/")
