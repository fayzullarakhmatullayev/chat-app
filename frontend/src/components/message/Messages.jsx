import Message from './Message';

const Messages = () => {
  return (
    <div className="px-4 flex flex-col overflow-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <Message key={index} isEven={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Messages;
