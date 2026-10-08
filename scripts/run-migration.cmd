@echo off
cd /d C:\Users\Jeux\Desktop\dev\Onsenccupe
if not exist package-lock.json.next14-stable copy /Y package-lock.json package-lock.json.next14-stable
if not exist package.json.next14-stable copy /Y package.json package.json.next14-stable
call npm install next@15.5.27 eslint-config-next@15.5.27 --save-exact
if errorlevel 1 exit /b 1
if exist .next rmdir /s /q .next
call npm run typecheck
if errorlevel 1 exit /b 1
call npm run lint
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1
call npm ls next react react-dom tailwindcss postcss postcss-selector-parser postcss-nested glob braces --all
call npm audit
echo MIGRATION_COMPLETE
