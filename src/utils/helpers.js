export function clampText(text, len=200){
  if(!text) return "";
  return text.length > len ? text.slice(0, len) + "..." : text;
}
