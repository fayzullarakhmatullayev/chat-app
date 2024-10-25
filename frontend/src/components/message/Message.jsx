const Message = ({ isEven }) => {
  return (
    <div className={`chat ${isEven ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className={`chat-bubble ${isEven && 'bg-sky-500 text-white'}`}>
        {isEven ? 'Hello' : 'Longer text goes here'}
      </div>
      <div className="chat-footer">
        <time className="text-xs">12:45</time>
      </div>
    </div>
  );
};

export default Message;
