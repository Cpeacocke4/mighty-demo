type WidgetProps = {
  title: string;
  value: number;
  unit?: string;
};

const Widget = (props: WidgetProps) => {
  const { title, value, unit = "" } = props;

  return (
    <div className="flex grow bg-container px-10 py-6 h-full rounded-md shadow-md">
      <div className="flex-col space-y-2">
        <p className="text-black font-body font-regular text-4xl">{`${value}${unit}`}</p>
        <p className="font-heading text-grey font-medium">{title}</p>
      </div>
    </div>
  );
};

export default Widget;
