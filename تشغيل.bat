@echo off
title استاذ ياسر ابراهيم - English App
color 0A

echo ========================================
echo    استاذ ياسر ابراهيم - English App
echo ========================================
echo.

:: شغّل الخادم
echo [1] تشغيل الخادم...
start /min cmd /c "cd /d "C:\Users\tito\Desktop\استاذ ياسر ابراهيم" && node server.js"

:: انتظر ثانية عشان الخادم يشتغل
timeout /t 2 /nobreak >nul

:: شغّل ngrok
echo [2] تشغيل ngrok...
echo.
echo ========================================
echo    الرابط العام (أرسله لصديقك):
echo    https://antennae-anyway-reconfirm.ngrok-free.dev
echo ========================================
echo.
echo    الرابط المحلي: http://localhost:8080
echo ========================================
echo.
echo    اضغط Ctrl+C لإيقاف كل شيء
echo.

ngrok http 8080
