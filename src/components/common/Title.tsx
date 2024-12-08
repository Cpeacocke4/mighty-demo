type TitleProps = {
  title: string;
};

const Title = (props: TitleProps) => {
  const { title } = props;
  return <h2 className="font-heading text-4xl text-purple">{title}</h2>;
};

export default Title;
