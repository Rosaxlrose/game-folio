// Import Web Components
import { GameboyConsole } from './components/GameboyConsole.js';
import { GameboyTop } from './components/GameboyTop.js';
import { GameboyCross } from './components/GameboyCross.js';
import { GameboyButton } from './components/GameboyButton.js';
import { GameboyOptionButton } from './components/GameboyOptionButton.js';
import { GameboySpeaker } from './components/GameboySpeaker.js';
import { GameboyScreen } from './components/GameboyScreen.js';

// Initialize Web Components
if (!customElements.get('gameboy-console')) {
  customElements.define('gameboy-console', GameboyConsole);
}
if (!customElements.get('gameboy-top')) {
  customElements.define('gameboy-top', GameboyTop);
}
if (!customElements.get('gameboy-cross')) {
  customElements.define('gameboy-cross', GameboyCross);
}
if (!customElements.get('gameboy-button')) {
  customElements.define('gameboy-button', GameboyButton);
}
if (!customElements.get('gameboy-option-button')) {
  customElements.define('gameboy-option-button', GameboyOptionButton);
}
if (!customElements.get('gameboy-speaker')) {
  customElements.define('gameboy-speaker', GameboySpeaker);
}
if (!customElements.get('gameboy-screen')) {
  customElements.define('gameboy-screen', GameboyScreen);
}
