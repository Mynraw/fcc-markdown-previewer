import { useDispatch, useSelector } from "react-redux";
import { getPreview } from "../redux/previewSlice";
import { ChangeEvent } from "react";
import { FaExpandArrowsAlt, FaFreeCodeCamp } from "react-icons/fa";
import { FiMinimize2 } from "react-icons/fi";
import { minMaxEditTab } from "@component/redux/previewSlice";

const Editor = () => {
  const dispatch = useDispatch();
  const minMaxEditWindow = useSelector((state: any) => state.editTabMaxed);
  const minMaxPrevWindow = useSelector((state: any) => state.prevTabMaxed);

  const handleExpansion = () => {
    dispatch(minMaxEditTab());
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(getPreview(e.target.value));
  };

  return (
    <div
      className={`flex-flex-col w-1/3 rounded-full ${
        minMaxPrevWindow ? "hidden" : "block"
      }`}
    >
      <div className="bg-primary p-1 flex items-center justify-between">
        <div className="flex items-center gap-x-2 px-2">
          <FaFreeCodeCamp className="text-2xl" />
          <span>Editor</span>
        </div>
        <button type="button" className="px-2" onClick={handleExpansion}>
          {!minMaxEditWindow ? (
            <FaExpandArrowsAlt className="text-xl hover:rotate-180 transition-all" />
          ) : (
            <FiMinimize2 className="text-xl hover:scale-90 transition-all" />
          )}
        </button>
      </div>
      <textarea
        id="editor"
        className={`bg-secondary w-full outline-none px-2 ${
          minMaxEditWindow ? "h-full" : "h-[300px]"
        }`}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default Editor;
