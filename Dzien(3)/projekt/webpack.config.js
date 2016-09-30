module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
             { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}