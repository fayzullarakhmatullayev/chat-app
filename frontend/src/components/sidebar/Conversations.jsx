import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <Conversation key={index} />
      ))}
    </div>
  );
};

export default Conversations;
