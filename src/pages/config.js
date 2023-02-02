// ----- Navbar Pages ----- //
const HOMEPAGE = "Hub"
const pages_all = ["About", "Support"]; 
const pages = ["Create"]
const settings = ['Login', 'Account', 'Theme', 'Logout']

// -----  ENV URLS ----- //
const ENV_URL = {
  'local': 'http://localhost:8099',
  'dev':   'https://www.immria.com/',
}


// -----  API Endpoints ----- //
const API_URL = {
  'local': 'http://localhost:1545',
  'dev': 'https://api.immria.atemosta.com',
}

// -----  Support Info ----- //
const SUPPORT_INFO = {
  'EMAIL': 'ohaiyo+immria@atemosta.com',
  'MATRIX': 'https://matrix.to/#/#immria:atemosta.com',
  'MASTODON': 'https://mastodon.social/@atemosta',
  'TWITTER': 'https://twitter.com/atemosta'
}

// -----  Worlds Info ----- //
const WEBVR_ENDPOINT = '/worlds';
const WEBVR_INDEX = 'deploy/index.html'
const WEBVR_URL = {
  'local':  ENV_URL['local'] + WEBVR_ENDPOINT,
  'dev':    ENV_URL['dev']   + WEBVR_ENDPOINT,
  'qa':     ENV_URL['qa'] +    WEBVR_ENDPOINT,
  'prod':   ENV_URL['prod'] +  WEBVR_ENDPOINT,
}

const WORLD_TYPES = [
  'desert1', // this one is glictchy
  'farm1', 
  // 'forest', // <- this one sux lul
  'forest2',
  'forest3',
  'jungle1', // update skybox
  'lava1',
  'monument',
  'ocean1',
  'rocky1',
  // 'snowy1', // this one renders pink rn
  'spooky1'
]

export {
  HOMEPAGE,
  pages_all,
  pages,
  settings,
  ENV_URL,
  SUPPORT_INFO,
  API_URL,
  WEBVR_INDEX,
  WEBVR_URL,
  WORLD_TYPES
}