export default function Button(iconType, id, ...classes) {
  return `
  <button class="${classes.join(" ")}" data-guid="${id}">
    <i class="${iconType}" data-guid="${id}"></i>
  </button>
    `;
}
