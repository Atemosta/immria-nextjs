import { ENV_URL } from "../config";

const getEnv = () => {
  let env;
  if (typeof window !== 'undefined') {
    if (window.location.href.includes(ENV_URL["dev"]) || window.location.href.includes("atos.local:8099")) {
      env = 'dev';
    } else if (window.location.href.includes(ENV_URL["qa"])) {
      env = 'qa';
    } else if (window.location.href.includes(ENV_URL["prod"])) {
      env = 'prod';
    } else {
      env = 'local';
    }
  }
  console.log("Current ENV: " + env);
  return env;
};

export default getEnv;
