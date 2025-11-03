# 🔧 Correção do Menu - Histórico e Downloads

## 🐛 Problema

Ao clicar em "Histórico" ou "Downloads" no menu dos 3 pontinhos, as páginas não abriam corretamente.

## ✅ Solução

### Antes (Errado)
```typescript
case 'history':
  mainWindow.webContents.send('show-history'); // ❌ Enviava evento
  break;
case 'downloads':
  mainWindow.webContents.send('show-downloads'); // ❌ Enviava evento
  break;
```

### Depois (Correto)
```typescript
case 'history':
  createNewTab('hera://history'); // ✅ Abre página dedicada
  break;
case 'downloads':
  createNewTab('hera://downloads'); // ✅ Abre página dedicada
  break;
```

## 📝 Arquivo Modificado

- `src/index.ts` - Handler `menu:action` corrigido

## 🎯 Resultado

Agora ao clicar no menu:
- ✅ "Histórico" abre `hera://history` em nova aba
- ✅ "Downloads" abre `hera://downloads` em nova aba
- ✅ "Configurações" continua abrindo `hera://settings`
- ✅ "Nova Aba" continua funcionando normalmente

## 🧪 Como Testar

1. Abra o navegador
2. Clique nos 3 pontinhos (menu)
3. Clique em "Histórico"
4. ✅ Deve abrir a página de histórico em nova aba
5. Clique nos 3 pontinhos novamente
6. Clique em "Downloads"
7. ✅ Deve abrir a página de downloads em nova aba

---

**Status:** ✅ Corrigido  
**Data:** 2025-11-03
