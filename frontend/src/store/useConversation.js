import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useConversation = create(
  persist(
    (set) => ({
      messages: [],
      selectedConversation: null,
      setMessages: (messages) => set({ messages }),
      setSelectedConversation: (conversation) => set({ selectedConversation: conversation })
    }),
    { name: 'conversation' }
  )
);

export default useConversation;
