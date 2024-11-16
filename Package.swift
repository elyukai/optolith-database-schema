// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription
import CompilerPluginSupport

let package = Package(
    name: "OptolithDatabaseSchema",
    platforms: [
        .macOS(.v13), .iOS(.v16), .tvOS(.v16), .watchOS(.v9), .macCatalyst(.v16)
    ],
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "OptolithDatabaseSchema",
            targets: ["OptolithDatabaseSchema"]),
    ],
    dependencies: [
        .package(url: "https://github.com/elyukai/DiscriminatedEnum.git", branch: "main"),
        .package(url: "https://github.com/swiftlang/swift-syntax.git", from: "600.0.0-latest"),
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .target(
            name: "OptolithDatabaseSchema",
            dependencies: ["DiscriminatedEnum", "OptolithDatabaseSchemaMacros"]),
        
        .macro(
            name: "OptolithDatabaseSchemaMacros",
            dependencies: [
                .product(name: "SwiftSyntaxMacros", package: "swift-syntax"),
                .product(name: "SwiftCompilerPlugin", package: "swift-syntax")
            ]
        ),
    ]
)
