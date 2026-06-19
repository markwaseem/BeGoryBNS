@echo off
:: Set terminal background to Black (0) and text to Light Gray (7)
color 07
cls

echo ==========================================================
echo 🚀 BeGory Release Automation
echo ==========================================================
echo.

:: Run your existing Node script
call npm run release

echo.
echo ==========================================================
echo ✅ All tasks finished successfully!
echo ==========================================================
pause