@echo off
:start
cls

echo -templates
echo or
echo -weather
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

:weather
start cmd
cd ".\client_views\react\production\weather"
echo weather clicked
@ECHO OFF
cmd /C "subl ."
cmd /C "npm start"
goto end


:end
taskkill /IM cmd.exe /F