export const storage = await browser.storage.sync.get({dnd_sync: {}});
export const my_characters = storage?.dnd_sync?.characters;