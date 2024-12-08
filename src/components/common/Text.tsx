type TextProps = {
  text: string | number;
};

const Text = (props: TextProps) => {
  const { text } = props;
  return <p className="font-body text-black">{text}</p>;
};

export default Text;
