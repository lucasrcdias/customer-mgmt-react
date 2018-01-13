import Settings from './../config/settings';

export const PRODUCTION = "production";
export const STAGING = "staging";
export const DEVELOPMENT = "development";

class Environment {
  constructor () {
    switch (window.location.host) {
      case "customermgmt.com":
        this.env = PRODUCTION;
        break;
      case "staging.customermgmt.com":
        this.env = STAGING;
        break;
      default:
        this.env = DEVELOPMENT;
    }
  }

  getAPIUrl = () => {
    return this.getSettings()["APIUrl"];
  }

  getSettings = () => {
    return Settings[this.env];
  }
}

export default new Environment();