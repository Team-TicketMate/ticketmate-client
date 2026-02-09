import ModalTemplate from '@/shared/components/ui/modal/modal-template/modal-template';
import { ModalTemplateType } from '@/shared/components/ui/modal/modal-template/modal-template.type';

type LeaveChatModalProps = Omit<ModalTemplateType, 'children'>;

const LeaveChatModal = ({ onResolve, onReject }: LeaveChatModalProps) => {
  const handleFirstButtonClick = () => {
    onReject?.();
  };

  const handleSecondButtonClick = () => {
    onResolve?.(true);
  };

  return (
    <ModalTemplate
      title={'채팅방 나가기'}
      description={'채팅방을 나가시면 상대방과의 채팅이 종료됩니다.'}
      firstButtonLabel={'취소'}
      secondButtonLabel={'나가기'}
      onFirstButtonClick={handleFirstButtonClick}
      onSecondButtonClick={handleSecondButtonClick}
    ></ModalTemplate>
  );
};

export default LeaveChatModal;
