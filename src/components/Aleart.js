import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const Aleart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancleRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>버튼</Button>

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>삭제 확인</AlertDialogHeader>
            <AlertDialogBody>삭제 하시겠습니까?</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancleRef} onClick={onClose}>
                취소
              </Button>
              <Button onClick={onClose}>삭제</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Aleart;
