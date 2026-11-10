// One command release: npm run release [patch|minor|major]
// Commits pending changes, bumps the version, updates the starter's pin, tags and pushes.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const run = cmd => execSync(cmd, { stdio: "inherit" });
const bump = process.argv[2] || "patch";

if (!["patch", "minor", "major"].includes(bump)) {
  console.error("Use: npm run release [patch|minor|major]");
  process.exit(1);
}

run("git add -A");
try {
  execSync("git diff --cached --quiet");
} catch {
  run('git commit -m "Update design system"');
}

run(`npm version ${bump} --no-git-tag-version`);
const { version } = JSON.parse(readFileSync("package.json", "utf8"));

// vue-nuxt-starter is a sibling repo in the same templates folder.
const starterDir = "../vue-nuxt-starter";
const starterPath = `${starterDir}/package.json`;
const starter = readFileSync(starterPath, "utf8").replace(
  /(vue-nuxt-design-system#)v[\d.]+/,
  `$1v${version}`
);
writeFileSync(starterPath, starter);

run("git add -A");
run(`git commit -m "Release v${version}"`);
run(`git tag -a v${version} -m "v${version}"`);
run("git push --follow-tags");

// vue-nuxt-starter is its own git repo: commit and push its updated pin too.
if (existsSync(`${starterDir}/.git`)) {
  const inStarter = cmd => execSync(cmd, { cwd: starterDir, stdio: "inherit" });
  inStarter("git add -A");
  try {
    execSync("git diff --cached --quiet", { cwd: starterDir });
  } catch {
    inStarter(`git commit -m "Use design system v${version}"`);
    inStarter("git push");
  }
}

console.log(`\nReleased v${version}`);
