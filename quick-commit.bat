@echo off
echo ========================================
echo  Quick Commit Script - Hera Browser
echo ========================================
echo.

echo Adding all files...
git add .

echo.
echo Committing with message...
git commit -m "feat: add history/downloads pages + security fix (v2.0.1)" -m "- Critical security fix: preload compartmentalization" -m "- New pages: hera://history and hera://downloads" -m "- Download notifications and visual feedback" -m "- TypeScript 100%% coverage" -m "- Code cleanup and organization"

echo.
echo Creating tag...
git tag -a v2.0.1 -m "Release v2.0.1 - History/Downloads + Security Fix"

echo.
echo ========================================
echo  Commit completed successfully!
echo ========================================
echo.
echo Next steps:
echo   git push origin main
echo   git push origin v2.0.1
echo.
pause
