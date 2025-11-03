@echo off
echo ========================================
echo  Force Push - Versao Local para Main
echo ========================================
echo.
echo ATENCAO: Isso vai SOBRESCREVER o GitHub
echo com a versao local (mais atual)
echo.
pause

echo.
echo 1. Abortando merge em andamento...
git merge --abort 2>nul

echo.
echo 2. Limpando estado...
git reset --hard HEAD

echo.
echo 3. Adicionando todos os arquivos...
git add .

echo.
echo 4. Fazendo commit local...
git commit -m "feat: history/downloads pages + security fix (v2.0.1)" 2>nul
if errorlevel 1 (
    echo Nenhuma mudanca para commitar ou commit ja existe
)

echo.
echo 5. Criando/atualizando tag...
git tag -d v2.0.1 2>nul
git tag -a v2.0.1 -m "Release v2.0.1 - History/Downloads + Security Fix"

echo.
echo 6. FORCANDO push para main...
git push origin main --force

echo.
echo 7. FORCANDO push da tag...
git push origin v2.0.1 --force

echo.
echo ========================================
echo  Push forcado concluido com sucesso!
echo ========================================
echo.
echo A versao local agora esta no GitHub!
echo Acesse: https://github.com/seu-usuario/hera-browser
echo.
pause
