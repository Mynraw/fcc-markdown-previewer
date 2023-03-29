import { useSelector, useDispatch } from "react-redux";
import Markdown from "marked-react";
import { minMaxPrevTab } from "@component/redux/previewSlice";
import { FaExpandArrowsAlt, FaFreeCodeCamp } from "react-icons/fa";
import { FiMinimize2 } from "react-icons/fi";

const Previewer = () => {
  const previewContent = useSelector((state: any) => state.text);
  const minMaxPrevWindow = useSelector((state: any) => state.prevTabMaxed);
  const minMaxEditWindow = useSelector((state: any) => state.editTabMaxed);
  // TODO: put it in the use.
  const dispatch = useDispatch();

  const handleExpansion = () => {
    dispatch(minMaxPrevTab());
  };

  return (
    <>
      {!minMaxEditWindow && (
        <div className="flex-flex-col w-2/3 rounded-full">
          <div className="bg-primary p-1 flex items-center justify-between">
            <div className="flex items-center gap-x-2 px-2">
              <FaFreeCodeCamp className="text-2xl" />
              <span>Previewer</span>
            </div>
            <button type="button" className="px-2" onClick={handleExpansion}>
              {!minMaxPrevWindow ? (
                <FaExpandArrowsAlt className="text-xl hover:rotate-180 transition-all" />
              ) : (
                <FiMinimize2 className="text-xl hover:scale-90 transition-all" />
              )}
            </button>
          </div>
          <div
            className={`bg-secondary p-2 min-h-[200px] overflow-y-scroll ${
              minMaxPrevWindow ? "h-full" : "h-[500px]"
            }`}
          >
            <Markdown gfm={true} langPrefix={"html"} value={previewContent} />
          </div>
        </div>
      )}
    </>
  );
};

export default Previewer;
