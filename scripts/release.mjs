// One command release: npm run release [patch|minor|major]
// Commits pending changes, bumps the version, updates the starter's pin, tags and pushes.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const run = cmd => execSync(cmd, { stdio: "inherit" });
const bump = process.argv[2] || "patch";

if (!["patch", "minor", "major"].includes(bump)) {
  console.error("Use: npm run release [patch|minor|major]");
  process.exit(1);
}

// The starter lockfile changes on every install, so keep it out of git.
run("git rm --cached --ignore-unmatch -q starter/package-lock.json");
run("git add -A");
try {
  execSync("git diff --cached --quiet");
} catch {
  run('git commit -m "Update design system"');
}

run(`npm version ${bump} --no-git-tag-version`);
const { version } = JSON.parse(readFileSync("package.json", "utf8"));

const starterPath = "starter/package.json";
const starter = readFileSync(starterPath, "utf8").replace(
  /(unBloched-Vue-Template#)v[\d.]+/,
  `$1v${version}`
);
writeFileSync(starterPath, starter);

run("git add -A");
run(`git commit -m "Release v${version}"`);
run(`git tag -a v${version} -m "v${version}"`);
run("git push --follow-tags");
console.log(`\nReleased v${version}`);
