# 🔒 Segurança de Preload - Compartimentalização

## ⚠️ Problema Identificado

**VULNERABILIDADE CRÍTICA CORRIGIDA:**

Anteriormente, o mesmo preload (`preload.ts`) era injetado em TODAS as BrowserViews, incluindo sites externos como youtube.com, google.com, etc.

Isso significava que **qualquer site externo** poderia executar:
```javascript
window.heraAPI.clearHistory()
window.heraAPI.getBookmarks()
window.heraAPI.setSetting('searchEngine', 'malicious')
```

E ter acesso completo ao banco de dados e configurações do navegador! 🚨

---

## ✅ Solução Implementada

### Dois Preloads Separados

#### 1. `preload-ui.ts` (Privilegiado) 🔐

**Usado em:**
- ✅ `mainWindow` (UI principal do navegador)
- ✅ `menuView` (menu interno)
- ✅ Páginas internas: `hera://settings`, `hera://history`, `hera://downloads`, `hera://new-tab`

**Expõe:**
- ✅ HeraAPI completa
- ✅ Acesso ao banco de dados (histórico, favoritos)
- ✅ Configurações
- ✅ Downloads
- ✅ Todas as funcionalidades privilegiadas

**Seguro porque:**
- Essas páginas são controladas por você
- Código confiável
- Parte do navegador

#### 2. `preload-web.ts` (Não-Confiável) 🌐

**Usado em:**
- ✅ Sites externos (youtube.com, google.com, etc.)
- ✅ Qualquer URL que não seja `hera://`

**Expõe:**
- ✅ `webAPI.requestContextMenu()` - Apenas solicita menu de contexto
- ✅ `webAPI.notifyPageEvent()` - Notifica eventos permitidos
- ❌ **NÃO** expõe acesso ao banco de dados
- ❌ **NÃO** expõe histórico
- ❌ **NÃO** expõe favoritos
- ❌ **NÃO** expõe configurações
- ❌ **NÃO** expõe downloads

**Seguro porque:**
- Sites externos não têm acesso a dados sensíveis
- Apenas APIs seguras e limitadas
- Princípio do menor privilégio

---

## 🔧 Implementação Técnica

### Função de Seleção de Preload

```typescript
const getPreloadForUrl = (url: string): string => {
  // URLs internas são confiáveis - usam preload privilegiado
  if (url.startsWith('hera://')) {
    return MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY;
  }
  
  // URLs externas NÃO são confiáveis - usam preload limitado
  return PRELOAD_WEB_WEBPACK_ENTRY;
};
```

### Uso em createNewTab

```typescript
const view = new BrowserView({
  webPreferences: {
    preload: getPreloadForUrl(finalUrl), // ✅ Escolhe o preload correto
  }
});
```

---

## 📋 Checklist de Segurança

### ✅ Implementado

- [x] Dois preloads separados criados
- [x] `preload-ui.ts` com HeraAPI completa
- [x] `preload-web.ts` com API limitada
- [x] Função `getPreloadForUrl()` para seleção automática
- [x] `createNewTab()` usa preload correto baseado na URL
- [x] `mainWindow` usa preload privilegiado
- [x] `menuView` usa preload privilegiado
- [x] Configuração do webpack atualizada
- [x] Documentação de segurança criada

### 🔒 Proteções Ativas

- [x] Sites externos **NÃO** podem acessar `window.heraAPI`
- [x] Sites externos **NÃO** podem limpar histórico
- [x] Sites externos **NÃO** podem acessar favoritos
- [x] Sites externos **NÃO** podem modificar configurações
- [x] Sites externos **NÃO** podem acessar banco de dados
- [x] Apenas páginas `hera://` têm acesso privilegiado

---

## 🧪 Como Testar

### Teste 1: Página Interna (Deve Funcionar)

1. Abra `hera://history`
2. Abra DevTools (F12)
3. Execute no console:
```javascript
window.heraAPI.getHistory()
```
**Resultado esperado:** ✅ Retorna o histórico

### Teste 2: Site Externo (Deve Falhar)

1. Abra `https://youtube.com`
2. Abra DevTools (F12)
3. Execute no console:
```javascript
window.heraAPI
```
**Resultado esperado:** ❌ `undefined` (não existe)

4. Execute:
```javascript
window.webAPI
```
**Resultado esperado:** ✅ Objeto com APIs limitadas

5. Tente:
```javascript
window.webAPI.requestContextMenu(0, 0)
```
**Resultado esperado:** ✅ Funciona (API segura)

---

## 🎯 Princípios de Segurança Aplicados

### 1. Princípio do Menor Privilégio
Sites externos recebem apenas as permissões mínimas necessárias.

### 2. Compartimentalização
Separação clara entre código confiável (interno) e não-confiável (externo).

### 3. Defesa em Profundidade
Múltiplas camadas de proteção:
- Preloads separados
- Context isolation
- Validação de URLs
- APIs limitadas

### 4. Fail-Safe
Se algo der errado, o padrão é **negar acesso**, não conceder.

---

## 📚 Referências

- [Electron Security Best Practices](https://www.electronjs.org/docs/latest/tutorial/security)
- [Context Isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation)
- [Preload Scripts](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

---

## 🚀 Próximos Passos de Segurança

### Recomendações Futuras

1. **Content Security Policy (CSP)**
   - Adicionar CSP headers para páginas internas
   - Prevenir XSS em páginas `hera://`

2. **Permissions API**
   - Implementar sistema de permissões granular
   - Permitir que usuário controle o que sites podem fazer

3. **Sandbox**
   - Considerar habilitar sandbox para sites externos
   - Isolamento adicional de processos

4. **Audit Log**
   - Registrar tentativas de acesso a APIs sensíveis
   - Monitorar comportamento suspeito

---

## ✅ Status

**Vulnerabilidade:** ❌ Corrigida  
**Segurança:** ✅ Implementada  
**Testes:** ⏳ Pendente  
**Documentação:** ✅ Completa  

**Data:** 2025-11-03  
**Versão:** 2.0.1 (com correção de segurança)
