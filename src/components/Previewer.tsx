import { useSelector } from "react-redux";
import Markdown from "marked-react";
import TabLabel from "@component/assets/TabLabel";

const Previewer = () => {
  const previewContent = useSelector((state: any) => state.text);

  return (
    <div className="flex-flex-col w-2/3 rounded-full">
      <TabLabel />
      <div className="bg-secondary">
        <Markdown gfm={true} langPrefix={"html"} value={previewContent} />
      </div>
    </div>
  );
};

export default Previewer;
