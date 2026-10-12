// Smooth scrolling for in-page links, but not for the initial jump to /#section
window.addEventListener('load', () => document.documentElement.toggleAttribute('data-smooth-scroll', true));

// Mobile navigation toggle
const navbar = document.querySelector<HTMLElement>('[data-navbar]');
const toggler = navbar?.querySelector<HTMLButtonElement>('.toggler');

function setMenuOpen(open: boolean) {
  navbar?.toggleAttribute('data-open', open);
  toggler?.setAttribute('aria-expanded', String(open));
}

toggler?.addEventListener('click', () => setMenuOpen(!navbar?.hasAttribute('data-open')));
navbar?.querySelectorAll('.links a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

// Highlight the nav link of the section currently in view
const navLinks = new Map(
  [...document.querySelectorAll<HTMLAnchorElement>('[data-navbar] .links a')].map((link) => [link.hash.slice(1), link]),
);
const sections = [...navLinks.keys()]
  .map((id) => document.getElementById(id))
  .filter((section): section is HTMLElement => section !== null);

function updateActiveLink() {
  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
  // Last section whose top has passed the upper third of the viewport
  const current = atBottom
    ? sections.at(-1)
    : sections.filter((section) => section.getBoundingClientRect().top <= window.innerHeight / 3).at(-1);
  navLinks.forEach((link, id) => link.classList.toggle('active', id === (current ?? sections[0])?.id));
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);
updateActiveLink();

// Project popups, linked to the URL hash (/#<project-id>)
function dialogForHash(): HTMLDialogElement | null {
  const slug = decodeURIComponent(location.hash.slice(1));
  return slug ? document.querySelector<HTMLDialogElement>(`dialog[data-slug="${CSS.escape(slug)}"]`) : null;
}

function syncDialogWithHash() {
  const dialog = dialogForHash();
  document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach((open) => open !== dialog && open.close());
  if (dialog && !dialog.open) dialog.showModal();
}

document.querySelectorAll<HTMLDialogElement>('dialog[data-slug]').forEach((dialog) => {
  dialog.addEventListener('close', () => {
    if (location.hash === `#${dialog.dataset.slug}`) {
      history.replaceState(null, '', location.pathname + '#projects');
    }
  });
  // Close when clicking the backdrop
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});

window.addEventListener('hashchange', syncDialogWithHash);
syncDialogWithHash();
