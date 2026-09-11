/* No framework, network calls, accounts, storage, or external runtime assets. */
(function () {
  'use strict';
  const stories = window.RamayanaStories;
  const core = window.StoryBuilderCore;
  const byId = id => document.getElementById(id);
  const board = byId('story-board');
  const feedback = byId('feedback');
  const completed = new Set();
  let current = 0;
  let order = [];
  let letters = {};
  let history = [];
  let selected = null;
  let checked = null;
  let solved = false;
  let nativeDragId = null;
  let pointerDrag = null;
  let ghost = null;
  const story = () => stories[current];
  const solution = () => story().scenes.map(scene => scene.id);
  const sceneFor = id => story().scenes.find(scene => scene.id === id);
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function message(text, tone = '') {
    feedback.textContent = text;
    feedback.className = 'feedback' + (tone ? ' ' + tone : '');
  }
  function button(className, label, action) {
    const node = element('button', className, label);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
  }
  function renderPicker() {
    const picker = byId('story-picker');
    picker.replaceChildren();
    stories.forEach((item, index) => {
      const tab = button('story-tab', '', () => loadStory(index));
      tab.setAttribute('aria-current', String(index === current));
      tab.append(element('span', 'tab-number', String(index + 1).padStart(2, '0')));
      tab.append(element('span', '', item.title));
      if (completed.has(item.id)) {
        const tick = element('span', 'tab-done', '\u2713');
        tick.setAttribute('aria-label', 'completed');
        tab.append(tick);
      }
      picker.append(tab);
    });
    byId('progress-count').textContent = `${completed.size} / ${stories.length}`;
    byId('progress-dots').replaceChildren(...stories.map(item => element('i', completed.has(item.id) ? 'done' : '')));
  }
  function focusCard(id) {
    const slot = Array.from(board.children).find(node => node.dataset.id === id);
    if (slot) slot.querySelector('.card-select').focus({ preventScroll: true });
  }
  function selectCard(id) {
    if (solved) return;
    selected = selected === id ? null : id;
    renderBoard();
    focusCard(id);
    message(selected ? `Picture ${letters[id]} selected. Tap a position number to move it there.` : 'Selection cleared. Build the story together.');
  }
  function moveScene(id, destination, restoreFocus = false) {
    if (solved) return;
    const from = order.indexOf(id);
    if (from < 0 || destination < 0 || destination >= order.length) return;
    selected = null;
    if (from === destination) {
      renderBoard();
      if (restoreFocus) focusCard(id);
      message(`Picture ${letters[id]} is already in position ${destination + 1}.`);
      return;
    }
    history.push(order.slice());
    order = core.move(order, from, destination);
    checked = null;
    renderBoard();
    if (restoreFocus) focusCard(id);
    message(`Picture ${letters[id]} moved to position ${destination + 1}. What happens next?`);
  }
  function renderBoard() {
    document.body.classList.toggle('has-selection', selected !== null);
    board.replaceChildren();
    order.forEach((id, index) => {
      const scene = sceneFor(id);
      const slot = element('li', 'scene-slot');
      slot.dataset.id = id;
      slot.dataset.position = String(index);
      const place = button('position-button', '', () => {
        if (selected) moveScene(selected, index, true);
        else message('Tap a picture first, then tap its new position number.');
      });
      place.disabled = solved;
      place.setAttribute('aria-label', `Position ${index + 1}${index === 0 ? ', first' : index === order.length - 1 ? ', last' : ''}. Move selected picture here.`);
      place.append(element('span', 'position-number', String(index + 1)));
      place.append(element('span', 'position-word', index === 0 ? 'FIRST' : index === order.length - 1 ? 'LAST' : 'THEN'));
      const card = element('article', 'scene-card');
      card.draggable = !solved;
      card.dataset.id = id;
      card.classList.toggle('selected', selected === id);
      if (checked) card.classList.add(checked.matches[index] ? 'correct' : 'needs-move');
      const select = button('card-select', '', () => selectCard(id));
      select.disabled = solved;
      select.setAttribute('aria-pressed', String(selected === id));
      select.setAttribute('aria-label', `Picture ${letters[id]}: ${scene.label}. Position ${index + 1}.${checked ? (checked.matches[index] ? ' Correct position.' : ' Try another position.') : ''}`);
      const art = element('div', 'card-art');
      const image = element('img');
      image.src = window.StoryBuilderEmbeddedArt?.[scene.art] || `../../assets/images/ramayana-story-builder/${scene.art}.svg`;
      image.alt = scene.alt;
      image.draggable = false;
      image.width = 320;
      image.height = 224;
      const letter = element('span', 'card-letter', letters[id]);
      letter.setAttribute('aria-hidden', 'true');
      art.append(image, letter);
      select.append(art, element('span', 'card-caption', scene.label));
      select.addEventListener('keydown', event => {
        const offsets = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 };
        if (Object.hasOwn(offsets, event.key) || event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          const target = event.key === 'Home' ? 0 : event.key === 'End' ? order.length - 1 : order.indexOf(id) + offsets[event.key];
          moveScene(id, target, true);
        } else if (event.key === 'Escape') {
          event.preventDefault();
          selected = null;
          renderBoard();
          focusCard(id);
          message('Selection cleared.');
        }
      });
      const tools = element('div', 'card-tools');
      const earlier = button('move-button', '\u2190', () => moveScene(id, index - 1, true));
      earlier.disabled = solved || index === 0;
      earlier.setAttribute('aria-label', `Move ${scene.label} earlier`);
      const handle = button('drag-handle', '\u283f', () => {});
      handle.draggable = false;
      handle.disabled = solved;
      handle.setAttribute('aria-label', `Drag ${scene.label}. Alternatively, use the move arrows.`);
      handle.addEventListener('pointerdown', event => startPointerDrag(event, id, card));
      const later = button('move-button', '\u2192', () => moveScene(id, index + 1, true));
      later.disabled = solved || index === order.length - 1;
      later.setAttribute('aria-label', `Move ${scene.label} later`);
      tools.append(earlier, handle, later);
      card.append(select, tools);
      slot.append(place, card);
      board.append(slot);
    });
    byId('undo-button').disabled = solved || history.length === 0;
    byId('check-button').disabled = solved;
    byId('hint-button').disabled = solved;
  }
  function loadStory(index, previous) {
    cancelPointerDrag();
    nativeDragId = null;
    current = index;
    order = core.shuffle(solution(), previous);
    // Letters follow pictures after a move, but do not reveal their correct order.
    letters = Object.fromEntries(order.map((id, i) => [id, String.fromCharCode(65 + i)]));
    history = [];
    selected = null;
    checked = null;
    solved = false;
    byId('celebration').hidden = true;
    byId('retell-details').open = false;
    byId('story-summary').textContent = '';
    byId('round-label').textContent = `Story ${index + 1} of ${stories.length} / ${story().theme}`;
    byId('story-title').textContent = story().title;
    byId('story-subtitle').textContent = story().subtitle;
    renderPicker();
    renderBoard();
    message('Five pictures. One story. Build it together!');
  }
  function checkStory() {
    checked = core.evaluate(order, solution());
    selected = null;
    if (checked.solved) {
      solved = true;
      completed.add(story().id);
      const allDone = completed.size === stories.length;
      byId('success-title').textContent = allDone ? `All ${stories.length} stories complete!` : 'Story complete!';
      byId('takeaway').textContent = story().takeaway;
      byId('retell-prompt').textContent = story().prompt;
      byId('story-summary').textContent = story().summary;
      byId('next-button').textContent = allDone ? 'Play all again' : 'Next story \u2192';
      byId('celebration').hidden = false;
      message('All five pictures are in order. Now tell the story!', 'success');
      renderPicker();
      renderBoard();
      byId('success-title').tabIndex = -1;
      byId('success-title').focus({ preventScroll: true });
      byId('celebration').scrollIntoView({ block: 'nearest', behavior: 'auto' });
    } else {
      message(`${checked.correct} of 5 pictures are in place. Green borders mark those pictures. Keep exploring together!`);
      renderBoard();
    }
  }
  function clearDropTargets() {
    board.querySelectorAll('.drop-target').forEach(node => node.classList.remove('drop-target'));
  }
  function cancelPointerDrag() {
    if (pointerDrag) {
      const { handle, pointerId, card } = pointerDrag;
      if (handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId);
      card.classList.remove('dragging');
    }
    if (ghost) ghost.remove();
    ghost = null;
    pointerDrag = null;
    document.body.classList.remove('is-dragging');
    clearDropTargets();
  }
  function startPointerDrag(event, id, card) {
    if (solved || event.button !== 0) return;
    event.preventDefault();
    const handle = event.currentTarget;
    handle.setPointerCapture(event.pointerId);
    const rect = card.getBoundingClientRect();
    pointerDrag = { id, pointerId: event.pointerId, handle, card, startX: event.clientX, startY: event.clientY, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top, target: null, active: false };
  }
  window.addEventListener('pointermove', event => {
    if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
    const drag = pointerDrag;
    if (!drag.active && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 7) return;
    event.preventDefault();
    if (!drag.active) {
      drag.active = true;
      ghost = drag.card.cloneNode(true);
      ghost.classList.add('drag-ghost');
      ghost.setAttribute('aria-hidden', 'true');
      ghost.inert = true;
      ghost.style.width = `${drag.card.getBoundingClientRect().width}px`;
      document.body.append(ghost);
      drag.card.classList.add('dragging');
      document.body.classList.add('is-dragging');
    }
    ghost.style.left = `${event.clientX - drag.offsetX}px`;
    ghost.style.top = `${event.clientY - drag.offsetY}px`;
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('.scene-slot');
    clearDropTargets();
    drag.target = target && board.contains(target) ? Number(target.dataset.position) : null;
    if (drag.target !== null) target.classList.add('drop-target');
  }, { passive: false });
  window.addEventListener('pointerup', event => {
    if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
    const { id, target, active } = pointerDrag;
    cancelPointerDrag();
    if (active && target !== null) moveScene(id, target, true);
  });
  window.addEventListener('pointercancel', cancelPointerDrag);
  window.addEventListener('blur', cancelPointerDrag);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && pointerDrag) cancelPointerDrag();
  });
  board.addEventListener('dragstart', event => {
    const card = event.target.closest('.scene-card');
    if (!card || solved || pointerDrag || event.target.closest('.drag-handle')) {
      event.preventDefault();
      return;
    }
    nativeDragId = card.dataset.id;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', `${story().id}:${nativeDragId}`);
    card.classList.add('dragging');
  });
  board.addEventListener('dragover', event => {
    const slot = event.target.closest('.scene-slot');
    if (!nativeDragId || !slot) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    clearDropTargets();
    slot.classList.add('drop-target');
  });
  board.addEventListener('drop', event => {
    const slot = event.target.closest('.scene-slot');
    if (!nativeDragId || !slot || event.dataTransfer.getData('text/plain') !== `${story().id}:${nativeDragId}`) return;
    event.preventDefault();
    const id = nativeDragId;
    nativeDragId = null;
    clearDropTargets();
    moveScene(id, Number(slot.dataset.position), true);
  });
  board.addEventListener('dragend', () => {
    nativeDragId = null;
    clearDropTargets();
    board.querySelectorAll('.dragging').forEach(node => node.classList.remove('dragging'));
  });
  byId('check-button').addEventListener('click', checkStory);
  byId('hint-button').addEventListener('click', () => {
    const hint = core.nextHint(order, solution());
    message(hint ? `Try position ${hint.position + 1}: ${sceneFor(hint.id).hint}` : 'Your pictures look ready. Press "Check our story"!', 'hint');
  });
  byId('undo-button').addEventListener('click', () => {
    if (solved || !history.length) return;
    order = history.pop();
    selected = null;
    checked = null;
    renderBoard();
    message('Last move undone. Try another idea.');
  });
  byId('shuffle-button').addEventListener('click', () => loadStory(current, order));
  byId('next-button').addEventListener('click', () => {
    if (completed.size === stories.length) {
      completed.clear();
      loadStory(0);
    } else {
      let next = (current + 1) % stories.length;
      while (completed.has(stories[next].id)) next = (next + 1) % stories.length;
      loadStory(next);
    }
    byId('story-title').tabIndex = -1;
    byId('story-title').focus({ preventScroll: true });
    byId('game').scrollIntoView({ block: 'start', behavior: 'auto' });
  });
  byId('zoom-button').addEventListener('click', () => {
    const active = document.body.classList.toggle('zoom-mode');
    byId('zoom-button').setAttribute('aria-pressed', String(active));
    byId('zoom-button').textContent = active ? 'Exit Zoom view' : 'Zoom view';
  });
  if (!Array.isArray(stories) || stories.length !== 5 || !core) {
    message('The game could not load. Please refresh the page.');
    return;
  }
  loadStory(0);
})();
