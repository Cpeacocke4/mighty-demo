type StatusBadgeProps = {
  status: string;
};

const StatusBadge = (props: StatusBadgeProps) => {
  const { status } = props;
  return (
    <p className="font-heading font-medium text-black bg-green px-5 w-min rounded-xl">
      {status}
    </p>
  );
};

export default StatusBadge;
