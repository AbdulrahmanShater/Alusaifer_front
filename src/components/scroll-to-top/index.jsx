import useScrollTop from "@/hooks/use-scroll-top";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
  if (stick) {
    return (
      <button id="scrollUp" className="scroll-top" onClick={onClickHandler}>
        <FaAngleUp />
      </button>
    );
  }
  return null;
};

export default ScrollToTop;
