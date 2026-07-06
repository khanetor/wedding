// Minimal markdown -> HTML for the static, trusted gift bodies: **bold**,
// [text](url), bullet lists (- …), and blank-line paragraph breaks.
// The content is static and authored by us, so set:html is safe.
export function giftMarkdown(src: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s: string) =>
    escape(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // ponytail: link regex uses a lazy match; still breaks on `)` in URLs
      // (e.g. Wikipedia). Encode `)` as `%29` in gift body links.
      .replace(/\[([^\]]+)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // ponytail: blank lines between consecutive list items split into separate
  // <ul> blocks because paragraph splitting happens first. Keep list items
  // contiguous (no blank lines) in gift bodies.
  return src
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split(/\n/);
      let out = '';
      let i = 0;
      while (i < lines.length) {
        if (lines[i].trimStart().startsWith('-')) {
          let j = i;
          while (j < lines.length && lines[j].trimStart().startsWith('-')) j++;
          out +=
            '<ul>' +
            lines
              .slice(i, j)
              .map((l) => '<li>' + inline(l.trimStart().replace(/^-\s+/, '')) + '</li>')
              .join('') +
            '</ul>';
          i = j;
        } else {
          let j = i;
          while (j < lines.length && !lines[j].trimStart().startsWith('-')) j++;
          out += '<p>' + inline(lines.slice(i, j).join('<br />')) + '</p>';
          i = j;
        }
      }
      return out;
    })
    .join('');
}
