import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // The address where the contract is deployed using deploy.js
  "0xD9B60269F406E6623505e14D2a6b69E218778e24"
);

export default instance;
