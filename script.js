(() => {
  "use strict";
  const icons = {
    instagram: '<rect x="11" y="11" width="34" height="34" rx="10" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="28" cy="28" r="8" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="39" cy="17" r="2.5" fill="currentColor"/>',
    youtube: '<rect x="5" y="11" width="46" height="34" rx="10" fill="currentColor"/><path d="M24 20l14 8-14 8z" fill="white"/>',
    facebook: '<circle cx="28" cy="28" r="26" fill="currentColor"/><path d="M31 52V32h7l1-8h-8v-4c0-3 1-4 5-4h4V9h-6c-8 0-12 4-12 11v4h-6v8h6v20z" fill="white"/>',
    homepage: '<circle cx="28" cy="28" r="21" fill="none" stroke="currentColor" stroke-width="2.8"/><ellipse cx="28" cy="28" rx="10" ry="21" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M7 28h42M11 17q17 9 34 0M11 39q17-9 34 0M28 7v42" fill="none" stroke="currentColor" stroke-width="2.5"/>'
  };
  const navigation = document.getElementById("channels");
  const fragment = document.createDocumentFragment();
  for (const channel of window.CHANNELS) {
    const link = document.createElement("a");
    link.className = `channel ${channel.id}`;
    link.href = channel.url;
    // 같은 탭에서 이동하여 QR 스캔 브라우저에서도 자연스럽게 열립니다.
    const icon = document.createElement("span");
    icon.className = "service-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `<svg viewBox="0 0 56 56">${icons[channel.id] || icons.homepage}</svg>`;
    const copy = document.createElement("span");
    copy.className = "channel-copy";
    const title = document.createElement("strong");
    title.textContent = channel.title;
    const description = document.createElement("span");
    description.textContent = channel.description;
    copy.append(title, description);
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    link.append(icon, copy, arrow);
    fragment.append(link);
  }
  navigation.append(fragment);
})();
