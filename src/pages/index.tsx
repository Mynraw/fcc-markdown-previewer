import Editor from "@component/components/Editor";
import Previewer from "@component/components/Previewer";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Editor />
      <Previewer />
    </div>
  );
}
