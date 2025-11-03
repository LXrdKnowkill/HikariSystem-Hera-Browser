# Como renomear o repositório no GitHub

## Passos:

### 1. No GitHub:
1. Acesse: https://github.com/LXrdKnowkill/HikariSystem-Hera-Browser/settings
2. Role até a seção **"Repository name"**
3. Altere o nome para: `hera-browser` (ou `HeraBrowser`)
4. Clique em **"Rename"**

### 2. Atualizar o remote local:

Depois de renomear, execute:

```bash
git remote set-url origin https://github.com/LXrdKnowkill/NOVO_NOME.git
git remote -v  # Verificar
```

### 3. Pronto!

O repositório agora terá o nome mais curto.

---

**Nota:** O caminho longo que você vê (`Desktop/Luska/...`) é apenas local do seu computador. No GitHub, todos verão apenas a estrutura do repositório (arquivos e pastas dentro dele).

