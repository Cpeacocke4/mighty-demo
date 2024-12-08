type TextProps = {
  text: string;
};

const Text = (props: TextProps) => {
  const { text } = props;
  return <p className="font-body text-black">{text}</p>;
};

export default Text;
