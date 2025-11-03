# 🚀 Como enviar o Hera Browser para o GitHub

## Passo a Passo Completo

### 1️⃣ Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `hera-browser` (ou outro nome de sua escolha)
3. Descrição: "Um navegador moderno construído com Electron"
4. Escolha: **Público** ou **Privado**
5. ⚠️ **NÃO marque** "Initialize with README" (já temos um)
6. Clique em "Create repository"

### 2️⃣ Configurar o Remote

Após criar o repositório, você terá uma URL como:
- `https://github.com/SEU_USUARIO/hera-browser.git`

Execute os seguintes comandos:

#### Se você ainda NÃO criou o repositório:
```bash
# Remover o remote atual (se existir)
git remote remove origin

# Adicionar seu novo repositório (SUBSTITUA pela sua URL)
git remote add origin https://github.com/SEU_USUARIO/hera-browser.git

# Renomear branch para main (padrão do GitHub)
git branch -M main

# Fazer push
git push -u origin main
```

#### Se já tem o repositório criado:
```bash
git remote set-url origin https://github.com/SEU_USUARIO/hera-browser.git
git branch -M main
git push -u origin main
```

### 3️⃣ Autenticação

O GitHub não aceita mais senhas. Você precisará:

**Opção A - Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Marque `repo` como permissão
4. Use o token como senha quando pedir

**Opção B - SSH (Recomendado):**
```bash
# Gerar chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub:
# Settings → SSH and GPG keys → New SSH key

# Usar URL SSH ao invés de HTTPS
git remote set-url origin git@github.com:SEU_USUARIO/hera-browser.git
```

### 4️⃣ Push Final

```bash
git push -u origin main
```

## ✅ Verificação

Após o push, acesse:
`https://github.com/SEU_USUARIO/hera-browser`

Você deverá ver todos os arquivos lá!

## 📝 Próximos Passos

- Adicionar tags de versão: `git tag v2.0.0 && git push origin v2.0.0`
- Criar Releases no GitHub com os executáveis
- Adicionar badges e screenshots ao README

## 🔄 Para Futuras Atualizações

```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

