import TabLabel from "@component/assets/TabLabel";

const Editor = () => {
  return (
    <div className="flex-flex-col w-1/3 rounded-full">
      <TabLabel />
      <textarea className="bg-secondary w-full outline-none px-2"></textarea>
    </div>
  );
};

export default Editor;
