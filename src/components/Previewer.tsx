import { useSelector } from "react-redux";
import Markdown from "marked-react";
import TabLabel from "@component/assets/TabLabel";

const Previewer = () => {
  const previewContent = useSelector((state: any) => state.text);
  const minMaxWindow = useSelector((state: any) => state.tabMaxed);
  // TODO: put it in the use.

  return (
    <div className="flex-flex-col w-2/3 rounded-full">
      <TabLabel />
      <div className="bg-secondary p-2 max-h-[500px] overflow-y-scroll">
        <Markdown gfm={true} langPrefix={"html"} value={previewContent} />
      </div>
    </div>
  );
};

export default Previewer;
