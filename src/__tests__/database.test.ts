
import { initDatabase, closeDatabase, addBookmark, getBookmarks, clearHistory, addHistoryEntry, getHistory } from '../database';
import fs from 'fs';
import path from 'path';

// Mock electron
jest.mock('electron', () => ({
  app: {
    getPath: jest.fn().mockReturnValue('./test-data'),
    isPackaged: false
  }
}));

// Mock database path creation
const testDir = './test-data';
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

describe('Database', () => {
  beforeAll(() => {
    // Ensure clean state
    const dbPath = path.join(testDir, 'hera-browser.db');
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
    initDatabase();
  });

  afterAll(() => {
    closeDatabase();
    // Cleanup
    const dbPath = path.join(testDir, 'hera-browser.db');
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir);
    }
  });

  beforeEach(() => {
    // Clear tables before each test if needed
    // For now we rely on specific tests or creating new items
  });

  describe('Bookmarks', () => {
    it('should add and retrieve a bookmark', () => {
      const bookmark = addBookmark('bm-1', 'https://example.com', 'Example', 'icon.png');
      expect(bookmark).toBeDefined();
      expect(bookmark.id).toBe('bm-1');
      expect(bookmark.url).toBe('https://example.com');

      const bookmarks = getBookmarks();
      expect(bookmarks).toHaveLength(1);
      expect(bookmarks[0].id).toBe('bm-1');
    });
  });

  describe('History', () => {
    it('should add and retrieve history', () => {
      clearHistory();
      addHistoryEntry('https://google.com', 'Google', 'favicon.ico');

      const history = getHistory();
      expect(history).toHaveLength(1);
      expect(history[0].url).toBe('https://google.com');
      expect(history[0].title).toBe('Google');
    });

    it('should ignore internal urls', () => {
      const initialCount = getHistory().length;
      addHistoryEntry('hera://settings', 'Settings');
      const finalCount = getHistory().length;
      expect(finalCount).toBe(initialCount);
    });
  });
});
