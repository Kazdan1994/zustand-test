import { useCampaignStore } from "./store";
import { ChangeEvent, useState } from "react";

function App() {
  const [campaign, setCampaign] = useState("");
  const campaigns = useCampaignStore((state) => state.campaigns);
  const addCampaign = useCampaignStore((state) => state.addCampaign);

  const handleClick = () => {
    addCampaign({ name: campaign });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCampaign(e.target.value);
  };

  return (
    <div>
      <div>{JSON.stringify(campaigns)}</div>
      <input type="text" value={campaign} onChange={handleChange} />
      <button onClick={handleClick}>Add a campaign</button>
    </div>
  );
}

export default App;
