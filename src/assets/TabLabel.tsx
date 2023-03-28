import { useState } from "react";
import { FaExpandArrowsAlt, FaFreeCodeCamp } from "react-icons/fa";
import { FiMinimize2 } from "react-icons/fi";

const TabLabel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };
  return (
    <div className="bg-primary p-1 flex items-center justify-between">
      <div className="flex items-center gap-x-2 px-2">
        <FaFreeCodeCamp className="text-2xl" />
        <span>Editor</span>
      </div>
      <button type="button" className="px-2" onClick={handleExpansion}>
        {!isExpanded ? (
          <FaExpandArrowsAlt className="text-xl hover:rotate-180 transition-all" />
        ) : (
          <FiMinimize2 className="text-xl hover:scale-90 transition-all" />
        )}
      </button>
    </div>
  );
};

export default TabLabel;
