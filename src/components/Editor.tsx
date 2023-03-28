import { useDispatch } from "react-redux";
import { getPreview } from "../redux/previewSlice";
import TabLabel from "@component/assets/TabLabel";
import { ChangeEvent } from "react";

const Editor = () => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(getPreview(e.target.value));
  };
  return (
    <div className="flex-flex-col w-1/3 rounded-full">
      <TabLabel />
      <textarea
        className="bg-secondary w-full outline-none px-2"
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default Editor;
