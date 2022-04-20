interface Props {
  message: string | null;
}

const InfoNotification: React.FC<Props> = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="info">{message}</div>;
};

export default InfoNotification;
