const EPISODE_ID_PREFIX = "av-ep-episodes-";
const EPISODES_SELECTOR = `[id^="${EPISODE_ID_PREFIX}"]`;

const TITLE_SELECTOR = ".js-episode-title-name";
const SYNOPSIS_SELECTOR = '[data-automation-id^="synopsis-"]';

function template(title: Element, synopsis: Element): string {
  return `# ${title.textContent}


> ${synopsis.textContent}


`;
}

(function main() {
  const episodes = [...document.querySelectorAll(EPISODES_SELECTOR)];
  if (episodes.length < 1) {
    throw new Error(`${EPISODES_SELECTOR} doesn't match any elements.`);
  }

  const episodeMarkups = episodes.map((episode) => {
    const title = episode.querySelector(TITLE_SELECTOR);
    const synopsis = episode.querySelector(SYNOPSIS_SELECTOR);

    if (title == null || synopsis == null) {
      throw new Error(
        `${TITLE_SELECTOR} or ${SYNOPSIS_SELECTOR} for ${episode.id} is null.`
      );
    }

    return template(title, synopsis);
  });

  alert(episodeMarkups.join("\n"));
})();
