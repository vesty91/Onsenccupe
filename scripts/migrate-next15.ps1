# Controlled Next 14 -> 15.5.27 migration. NEVER run: npm audit fix --force
$ErrorActionPreference = "Stop"
Set-Location "C:\Users\Jeux\Desktop\dev\Onsenccupe"

if (-not (Test-Path "package.json.next14-stable")) {
  Copy-Item "package.json" "package.json.next14-stable" -Force
}
if (-not (Test-Path "package-lock.json.next14-stable")) {
  Copy-Item "package-lock.json" "package-lock.json.next14-stable" -Force
}

Write-Host "=== npm install next@15.5.27 eslint-config-next@15.5.27 --save-exact ==="
npm install next@15.5.27 eslint-config-next@15.5.27 --save-exact
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

if (Test-Path ".next") {
  Remove-Item -Recurse -Force ".next"
  Write-Host "Removed .next"
}

Write-Host "=== typecheck ==="
npm run typecheck
if ($LASTEXITCODE -ne 0) { throw "typecheck failed" }

Write-Host "=== lint ==="
npm run lint
if ($LASTEXITCODE -ne 0) { throw "lint failed" }

Write-Host "=== build ==="
npm run build
if ($LASTEXITCODE -ne 0) { throw "build failed" }

Write-Host "=== npm ls ==="
npm ls next react react-dom tailwindcss postcss postcss-selector-parser postcss-nested glob braces --all

Write-Host "=== npm audit ==="
npm audit

Write-Host "=== DONE ==="
