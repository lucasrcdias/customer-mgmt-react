import Settings from './settings';

export const PRODUCTION = "production";
export const STAGING = "staging";
export const DEVELOPMENT = "development";

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

export default Settings[this.env];