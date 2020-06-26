const useConfirm = (message, onConfirm, onCancel) => {
   if (!onConfirm || typeof callback !== "function") {
     return;
   }
   if (onCancel && typeof callback !== "function") {
      return;
   }
   const confirmAction = () => {
     if (confirm(message)) {
      onConfirm();
     } else {
      onCancel();
     }
   };
   return confirmAction;
 };