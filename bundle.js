require("dotenv").config();

// Import Node.js Dependencies
const path = require("path");
const fs = require("fs");

// Import Third-party Dependencies
const esbuild = require("esbuild");

// CONSTANTS
const kEntryDir = path.join(__dirname, "src");
const kOutDir = path.join(__dirname, "out");

fs.mkdirSync(kOutDir, { recursive: true });

async function main() {
    await esbuild.build({
        entryPoints: [path.join(kEntryDir, "index.js")],
        loader: {
            ".jpg": "file",
            ".png": "file"
        },
        bundle: true,
        outdir: kOutDir,
        define: {
            "process.env.password": JSON.stringify(process.env.password),
            "process.env.mail": JSON.stringify(process.env.mail)
        }
    });

    fs.copyFileSync(path.join(kEntryDir, "index.html"), path.join(kOutDir, "index.html"));
}
main().catch(() => process.exit(1));