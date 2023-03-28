import TabLabel from "@component/assets/TabLabel";

const Previewer = () => {
  return (
    <div className="flex-flex-col w-2/3 rounded-full">
      <TabLabel />
      <div className="bg-secondary">output goes here</div>
    </div>
  );
};

export default Previewer;
