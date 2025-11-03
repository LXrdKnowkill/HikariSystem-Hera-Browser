import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('heraAPI', {
  // Tab Actions
  createNewTab: (url?: string) => ipcRenderer.invoke('tab:new', url),
  switchToTab: (id: string) => ipcRenderer.invoke('tab:switch', id),
  closeTab: (id: string) => ipcRenderer.invoke('tab:close', id),

  // Navigation Actions
  navigateTo: (url: string) => ipcRenderer.invoke('nav:to', url),
  navigateBack: () => ipcRenderer.invoke('nav:back'),
  navigateForward: () => ipcRenderer.invoke('nav:forward'),
  navigateReload: () => ipcRenderer.invoke('nav:reload'),
  getNavigationState: () => ipcRenderer.invoke('nav:get-state'),

  // Window Actions
  windowMinimize: () => ipcRenderer.invoke('window:minimize'),
  windowMaximize: () => ipcRenderer.invoke('window:maximize'),
  windowClose: () => ipcRenderer.invoke('window:close'),

  // History Actions
  getHistory: () => ipcRenderer.invoke('history:get'),
  clearHistory: () => ipcRenderer.invoke('history:clear'),

  // Bookmark Actions
  addBookmark: (url: string, title: string, favicon?: string, folderId?: string) => ipcRenderer.invoke('bookmark:add', url, title, favicon, folderId),
  removeBookmark: (id: string) => ipcRenderer.invoke('bookmark:remove', id),
  getBookmarks: (folderId?: string) => ipcRenderer.invoke('bookmark:get', folderId),
  searchBookmarks: (query: string) => ipcRenderer.invoke('bookmark:search', query),
  createBookmarkFolder: (name: string, parentId?: string) => ipcRenderer.invoke('bookmark:create-folder', name, parentId),
  getBookmarkFolders: (parentId?: string) => ipcRenderer.invoke('bookmark:get-folders', parentId),

  // Settings Actions
  getSetting: (key: string) => ipcRenderer.invoke('settings:get', key),
  setSetting: (key: string, value: string) => ipcRenderer.invoke('settings:set', key, value),
  getAllSettings: () => ipcRenderer.invoke('settings:getAll'),

  // Download Actions
  showItemInFolder: (path: string) => ipcRenderer.invoke('download:show-in-folder', path),
  openFile: (path: string) => ipcRenderer.invoke('download:open-file', path),

  // View Actions
  toggleMenu: () => {
    console.log('Sending menu:toggle IPC message from preload!');
    ipcRenderer.send('menu:toggle');
  },
  menuAction: (action: string) => ipcRenderer.send('menu:action', action),

  // Listeners from Main Process
  onTabCreated: (callback: (tabInfo: { id: string; title: string; url: string; favicon?: string }) => void) => {
    ipcRenderer.on('tab-created', (_, tabInfo) => callback(tabInfo));
  },
  onTabSwitched: (callback: (id: string, url: string) => void) => {
    ipcRenderer.on('tab-switched', (_, id, url) => callback(id, url));
  },
  onTabUpdated: (callback: (id: string, tabInfo: { title?: string; url?: string; favicon?: string; loading?: boolean }) => void) => {
    ipcRenderer.on('tab-updated', (_, id, tabInfo) => callback(id, tabInfo));
  },
  onTabClosed: (callback: (id: string) => void) => {
    ipcRenderer.on('tab-closed', (_, id) => callback(id));
  },
  onTabLoading: (callback: (id: string, isLoading: boolean) => void) => {
    ipcRenderer.on('tab-loading', (_, id, isLoading) => callback(id, isLoading));
  },
  onSetUIVisibility: (callback: (visible: boolean) => void) => {
    ipcRenderer.on('set-ui-visibility', (_, visible) => callback(visible));
  },
  onWindowMaximizedStatus: (callback: (isMaximized: boolean) => void) => {
    ipcRenderer.on('window:maximized-status', (_, isMaximized) => callback(isMaximized));
  },
  on: (channel: string, callback: (...args: any[]) => void) => {
    ipcRenderer.on(channel, (_, ...args) => callback(...args));
  },
  onDownloadStarted: (callback: (data: { id: string; filename: string; totalBytes: number }) => void) => {
    ipcRenderer.on('download-started', (_, data) => callback(data));
  },
  onDownloadProgress: (callback: (data: { id: string; receivedBytes: number }) => void) => {
    ipcRenderer.on('download-progress', (_, data) => callback(data));
  },
  onDownloadComplete: (callback: (data: { id: string; state: string; path: string }) => void) => {
    ipcRenderer.on('download-complete', (_, data) => callback(data));
  },
});