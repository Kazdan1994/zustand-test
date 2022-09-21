import create from "zustand";
import { Campaign, CampaignState } from "../types";
import { persist } from "zustand/middleware";

const useCampaignStore = create(
  persist<CampaignState>(
    (set) => ({
      campaigns: [],
      addCampaign: (newCampaign: Campaign) =>
        set((state: { campaigns: Campaign[] }) => ({
          campaigns: [...state.campaigns, newCampaign],
        })),
    }),
    {
      name: "campaign-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export { useCampaignStore };
