import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import queryKey from '@/app/chat/[id]/_shared/services/query-key';
import chatQueryKey from '@/app/chat/_shared/services/query-key';
import { toastify } from '@/shared/components/ui/toast/toastify';

import {
  patchCancelProgress,
  postChatRoomLeave,
  sendChatMessageImage,
} from './api';
import {
  PatchCancelProgressRequest,
  PostChatRoomLeaveRequest,
  SendChatImageMessageRequest,
} from './type';

export const useSendChatMessageImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: SendChatImageMessageRequest) =>
      sendChatMessageImage(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.chatMessageList() });
    },
  });
};

export const usePatchCancelProgress = () => {
  return useMutation({
    mutationFn: (request: PatchCancelProgressRequest) =>
      patchCancelProgress(request),
  });
};

export const usePostChatRoomLeave = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (request: PostChatRoomLeaveRequest) =>
      postChatRoomLeave(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: chatQueryKey.chatList() });
      router.replace('/chat');
    },
    onError: () => {
      toastify({
        variant: 'error',
        description: '채팅방 나가기 실패',
      });
    },
  });
};
