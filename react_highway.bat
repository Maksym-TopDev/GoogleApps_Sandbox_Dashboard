@echo off
:start
cls

echo -templates
echo or
echo -weather
echo or
echo -vanilla
echo.
set /p STATIC= Which server to work on?:
goto %STATIC%

:templates
start cmd /k "nodemon"
start cmd
cd ".\client_views\react\templates"
echo templates clicked
@ECHO OFF
cmd /C "subl ."
cmd /C "npm start"
goto end

:vanilla
start cmd /k "TIMEOUT /T 20 & start chrome "" "http://localhost:5000""
echo vanilla clicked
@ECHO OFF
cmd /C "subl ."
cmd /C "nodemon"
goto end

:weather
start cmd
cd ".\client_views\react\production\weather-closet"
echo weather clicked
@ECHO OFF
cmd /C "subl ."
cmd /C "npm start"
goto end

:lovemee
start cmd
cd ".\client_views\react\production\lovemee"
echo lovemee clicked
@ECHO OFF
cmd /C "subl ."
cmd /C "npm start"
goto end


:end
taskkill /IM cmd.exe /F