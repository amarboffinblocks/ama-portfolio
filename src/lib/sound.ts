const CLICK_SOUND_SRC = "/sounds/click.mp3";

let clickAudio: HTMLAudioElement | null = null;

function getClickAudio() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!clickAudio) {
    clickAudio = new Audio(CLICK_SOUND_SRC);
    clickAudio.preload = "auto";
  }

  return clickAudio;
}

export function playClickSound() {
  const audio = getClickAudio();
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  void audio.play().catch(() => {
    // Autoplay policies or missing file — ignore so UI still works.
  });
}
