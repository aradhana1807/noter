"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const ConfirmModal = ({ children, onConfirm }: ConfirmModalProps) => {
  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>Are you sure?
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>

      <AlertDialogFooter>
        <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
          Cancel
        </AlertDialogCancel>

        <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
