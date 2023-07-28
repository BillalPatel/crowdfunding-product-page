interface ProgressBarProps {
  percentage: string;
}

export function ProgressBar(props: ProgressBarProps) {
  const { percentage } = props;

  return (
    <div className="progress-bar rounded-full h-3 w-full bg-[#fafafa]">
      <div className={`bg-[#3cb4ac] rounded-full h-full w-${percentage}`}></div>
    </div>
  );
}
