(() => {
  "use strict";
  const navigation = document.getElementById("channels");
  if (!navigation || !Array.isArray(window.CHANNELS)) return;

  // 링크는 HTML에도 있어 JavaScript 없이 동작합니다.
  // config.js를 수정하면 기존 클릭 영역의 주소와 안내 문구만 갱신합니다.
  for (const channel of window.CHANNELS) {
    const link = navigation.querySelector(`[data-channel="${channel.id}"]`);
    if (!link) continue;
    link.href = channel.url;
    link.setAttribute("aria-label", channel.title);
    link.querySelector(".visually-hidden").textContent = `${channel.title} — ${channel.description}`;
  }
})();
