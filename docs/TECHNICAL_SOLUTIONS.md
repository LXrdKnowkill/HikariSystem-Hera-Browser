# Soluções Técnicas - Hera Browser

Este documento consolida as soluções técnicas implementadas no Hera Browser.

## WhatsApp Web - Sessão Persistente

### Problema
WhatsApp Web não mantinha a sessão entre reinicializações do navegador, pedindo para escanear o QR code toda vez.

### Solução
Implementada sessão persistente usando `partition: 'persist:web-content'` para sites externos:

```typescript
const partition = finalUrl.startsWith('hera://') ? undefined : 'persist:web-content';

const view = new BrowserView({
  webPreferences: {
    preload: getPreloadForUrl(finalUrl),
    partition: partition,
    contextIsolation: true,
    nodeIntegration: false
  }
});
```

### Configuração Adicional
- User Agent configurado globalmente: Chrome 131
- Permissões habilitadas: media, notifications, clipboard, etc
- Sessão persistente compartilhada entre todas as abas externas

---

## Protocolo hera:// - Páginas Internas

### Problema
Páginas internas (`hera://new-tab`, `hera://settings`, etc) mostravam erro do Windows: "Obter um aplicativo para abrir este 'hera' link".

### Causa
O código JavaScript em `new-tab.html` usava `window.location.href` para navegar, o que fazia o Windows interceptar o protocolo antes do Electron.

### Solução
Mudança para usar a API do Electron:

```javascript
// ANTES (causava erro)
window.location.href = `hera://navigate-from-newtab?url=${encodeURIComponent(query)}`;

// DEPOIS (funciona corretamente)
await window.heraAPI.navigateTo(finalUrl);
```

### Benefícios
- Navegação controlada pelo Electron
- Sem interferência do sistema operacional
- Melhor tratamento de erros
- Código mais limpo e manutenível

---

## Segurança - Preload Compartmentalization

### Arquitetura
- `preload.ts` (privilegiado): Usado em páginas internas (hera://)
- `preload-web.ts` (limitado): Usado em sites externos

### Proteção
Sites externos não têm acesso a:
- Banco de dados SQLite
- Sistema de arquivos
- APIs privilegiadas do Electron

---

## Referências
- [SECURITY_PRELOAD.md](../SECURITY_PRELOAD.md) - Detalhes de segurança
- [WHATSAPP-WEB-INFO.md](../WHATSAPP-WEB-INFO.md) - Informações sobre WhatsApp Web
- [SOLUCAO-WHATSAPP.md](../SOLUCAO-WHATSAPP.md) - Solução detalhada do WhatsApp
