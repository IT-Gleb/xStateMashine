import { CopyToClipBoard_Svg } from "../utils/svgIcons";

export const CardClipButtonComponent = ({
  paramText,
}: {
  paramText: string;
}) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await navigator.clipboard.writeText(paramText);
  };
  return (
    <button
      className="w-[25px] h-[25px] overflow-hidden active:scale-90 text-slate-200"
      type="button"
      onClick={handleClick}
      title="Скопировать в буфер"
    >
      <CopyToClipBoard_Svg paramWidth={24} paramHeight={24} />
    </button>
  );
};
