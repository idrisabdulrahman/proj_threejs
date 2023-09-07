import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#f35627',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;