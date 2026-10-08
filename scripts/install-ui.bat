@echo off
setlocal EnableExtensions
cd /d "%~dp0.."

echo ========================================
echo Onsenccupe - validation UI (Windows)
echo Working directory: %CD%
echo ========================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
  echo [FAIL] Commande: where npm
  echo npm introuvable dans le PATH. Installez Node.js puis rouvrez le terminal.
  exit /b 1
)

echo [1/4] npm install
call npm install
if errorlevel 1 (
  echo [FAIL] Commande: npm install
  exit /b 1
)

echo.
echo [2/4] npm run typecheck
call npm run typecheck
if errorlevel 1 (
  echo [FAIL] Commande: npm run typecheck
  exit /b 1
)

echo.
echo [3/4] npm run lint
call npm run lint
if errorlevel 1 (
  echo [FAIL] Commande: npm run lint
  exit /b 1
)

echo.
echo [4/4] npm run build
call npm run build
if errorlevel 1 (
  echo [FAIL] Commande: npm run build
  exit /b 1
)

echo.
echo ========================================
echo OK - validation terminée
echo Ensuite: npm run dev
echo Puis ouvrir: http://localhost:3000/ui-lab
echo ========================================
exit /b 0
