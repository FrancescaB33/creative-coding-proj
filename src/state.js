let STATE = {
  BASE: 0,
  RATIO: 0,
  WIDTH: 0,
  HEIGHT: 0,
};

let pContext;

export function setState(property, value) {
  STATE[property] = value;
}

export function getState(property) {
  return STATE[property];
}

export function getFullState() {
  return STATE;
}

export function setPContext(p) {
  pContext = p;
}

export function getPContext() {
  return pContext;
}
