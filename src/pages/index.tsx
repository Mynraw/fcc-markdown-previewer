import Editor from "@component/components/Editor";
import Previewer from "@component/components/Previewer";

export default function Home() {
  return (
    <div className="w-full h-full bg-black text-white grid place-items-center py-5 gap-y-3">
      <Editor />
      <Previewer />
    </div>
  );
}
