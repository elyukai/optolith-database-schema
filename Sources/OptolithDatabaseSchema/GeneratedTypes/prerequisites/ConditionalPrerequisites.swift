//
//  ConditionalPrerequisites.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// A list of preconditions for the prerequisite it is defined on, so that it only takes effect if the prerequisites in this list are matched.
/// 
/// Usually appears at the `when` property of the parent prerequisite.
public typealias Preconditions = [PreconditionGroup]
