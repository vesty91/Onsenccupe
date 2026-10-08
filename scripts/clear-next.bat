@echo off
cd /d "%~dp0.."
echo Stopping note: arretez "npm run dev" (Ctrl+C) puis relancez.
if exist .next (
  rmdir /s /q .next
  echo .next supprime.
) else (
  echo Pas de dossier .next.
)
pause
