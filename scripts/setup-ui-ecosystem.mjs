/**
 * Installe les dépendances UI et vérifie les registries shadcn.
 * Usage: npm run ui:setup
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: root, stdio: "inherit" });
}

console.log("Onsenccupe — setup UI ecosystem (npm)");

if (!existsSync(resolve(root, "components.json"))) {
  console.error("components.json manquant.");
  process.exit(1);
}

run("npm install");

const componentsJson = JSON.parse(
  readFileSync(resolve(root, "components.json"), "utf8")
);
console.log("\nRegistries configurés:");
for (const [name, value] of Object.entries(componentsJson.registries ?? {})) {
  const url = typeof value === "string" ? value : value.url;
  console.log(`  ${name} → ${url}`);
}

console.log(`
Commandes utiles ensuite:
  npx shadcn@latest add button
  npx shadcn@latest add @magicui/shimmer-button
  npx shadcn@latest add @aceternity/bento-grid
  npx shadcn@latest add @reui/c-alert-1
  npx shadcn@latest add @v0/<chat-id>

MCP:
  - shadcn: déjà dans .cursor/mcp.json （activer dans Cursor Settings）
  - 21st.dev: définir TWENTY_FIRST_API_KEY (https://21st.dev/mcp)

Doc: docs/UI-ECOSYSTEM.md
Page démo: /ui-lab
`);
