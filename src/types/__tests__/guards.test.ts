import {
  isBookmark,
  isBookmarkFolder,
  isHistoryEntry,
  isValidTabId,
  isValidUrl,
  isValidSettingKey,
  isValidBookmarkId,
  validateBookmarks,
  validateHistoryEntries
} from '../guards';

describe('Type Guards', () => {

  describe('isValidBookmarkId', () => {
    it('should return true for valid bookmark id', () => {
      expect(isValidBookmarkId('123')).toBe(true);
    });
  });

  describe('validateHistoryEntries', () => {
    it('should filter invalid history entries', () => {
      const input = [
        { url: 'https://example.com', title: 'Example', timestamp: 1234567890 },
        { url: 'invalid' } // Missing fields
      ];
      const result = validateHistoryEntries(input);
      expect(result).toHaveLength(1);
    });
  });

  describe('isBookmark', () => {
    it('should return true for valid bookmark', () => {
      const validBookmark = {
        id: '123',
        title: 'Test',
        position: 0,
        created_at: 1234567890,
        updated_at: 1234567890,
        url: 'https://example.com'
      };
      expect(isBookmark(validBookmark)).toBe(true);
    });

    it('should return false for invalid bookmark (missing required fields)', () => {
      const invalidBookmark = {
        id: '123',
        title: 'Test'
      };
      expect(isBookmark(invalidBookmark)).toBe(false);
    });

    it('should return false for invalid bookmark (wrong types)', () => {
      const invalidBookmark = {
        id: '123',
        title: 'Test',
        position: '0', // Should be number
        created_at: 1234567890,
        updated_at: 1234567890
      };
      expect(isBookmark(invalidBookmark)).toBe(false);
    });
  });

  describe('isBookmarkFolder', () => {
    it('should return true for valid folder', () => {
      const validFolder = {
        id: 'folder-1',
        name: 'My Folder',
        position: 0,
        created_at: 1234567890
      };
      expect(isBookmarkFolder(validFolder)).toBe(true);
    });

    it('should return true for valid folder with parent', () => {
      const validFolder = {
        id: 'subfolder-1',
        name: 'Sub Folder',
        position: 1,
        created_at: 1234567890,
        parent_id: 'folder-1'
      };
      expect(isBookmarkFolder(validFolder)).toBe(true);
    });

    it('should return false for invalid folder', () => {
      expect(isBookmarkFolder({})).toBe(false);
      expect(isBookmarkFolder(null)).toBe(false);
    });
  });

  describe('isHistoryEntry', () => {
    it('should return true for valid history entry', () => {
      const entry = {
        url: 'https://example.com',
        title: 'Example',
        timestamp: 1234567890
      };
      expect(isHistoryEntry(entry)).toBe(true);
    });
  });

  describe('isValidTabId', () => {
    it('should accept alphanumeric ids', () => {
      expect(isValidTabId('tab-123')).toBe(true);
      expect(isValidTabId('abc')).toBe(true);
    });

    it('should reject empty strings', () => {
      expect(isValidTabId('')).toBe(false);
    });

    it('should reject invalid characters', () => {
      expect(isValidTabId('tab/123')).toBe(false);
      expect(isValidTabId('tab 123')).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    it('should accept http/https urls', () => {
      expect(isValidUrl('https://google.com')).toBe(true);
      expect(isValidUrl('http://example.com')).toBe(true);
    });

    it('should reject non-http urls', () => {
      expect(isValidUrl('ftp://example.com')).toBe(false);
      expect(isValidUrl('file:///etc/passwd')).toBe(false);
    });

    it('should reject short strings', () => {
      expect(isValidUrl('http://a')).toBe(false);
    });
  });

  describe('isValidSettingKey', () => {
    it('should accept valid keys', () => {
      expect(isValidSettingKey('theme')).toBe(true);
      expect(isValidSettingKey('search-engine')).toBe(true);
      expect(isValidSettingKey('user_agent')).toBe(true);
    });

    it('should reject invalid keys', () => {
      expect(isValidSettingKey('invalid key')).toBe(false); // space
      expect(isValidSettingKey('key/slash')).toBe(false);
    });
  });

  describe('validateBookmarks', () => {
    it('should filter invalid bookmarks', () => {
      const input = [
        { id: '1', title: 'Valid', position: 0, created_at: 1, updated_at: 1, url: 'http://a.com' },
        { id: '2', title: 'Invalid' }, // Missing fields
        'not a bookmark'
      ];
      const result = validateBookmarks(input);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });

    it('should return empty array for non-array input', () => {
      expect(validateBookmarks('not an array')).toEqual([]);
    });
  });

});
