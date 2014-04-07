module.exports = slugification;


/**
 * Transform string into slug. Replaces spaces and special characters.
 * 
 * @param {string} str
 * @param {string|null} spaceReplacement
 * @param {string|null} specialCharReplacement
 * @return {string} slug
 */
function slugification (str, spaceReplacement, specialCharReplacement) {
  var matchSpaces = /\s+/g,
    matchSpecialChars = /[^a-zA-Z0-9-_]+/g;

  return str
    .replace(matchSpaces, spaceReplacement || '-')
    .replace(matchSpecialChars, specialCharReplacement || '');
}