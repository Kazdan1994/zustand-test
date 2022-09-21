export type Campaign = {
  name: string;
};

export type CampaignState = {
  campaigns: Campaign[];
  addCampaign: (newCampaign: Campaign) => void;
};
