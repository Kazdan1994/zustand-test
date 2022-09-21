import create from "zustand";
import { Campaign, CampaignState } from "../types";

const useCampaignStore = create<CampaignState>((set) => ({
  campaigns: [],
  addCampaign: (newCampaign: Campaign) =>
    set((state: { campaigns: Campaign[] }) => ({
      campaigns: [...state.campaigns, newCampaign],
    })),
}));

export { useCampaignStore };
