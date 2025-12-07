let isBullshitMode = CookieStorage.get('bullshit') ?? true;

if (!isBullshitMode) {
  removeBullshit();
}

function bullshit(cb) {
  if (isBullshitMode) {
    cb?.();
  }
}

function disableBullshit() {
  isBullshitMode = false;
  CookieStorage.store('bullshit', false);
  removeBullshit();
}

function removeBullshit() {
  document.querySelectorAll('[data-bullshit]').forEach((bsNode) => {
    // bsNode.hidden = 'true';
    bsNode.remove();
  });
}
