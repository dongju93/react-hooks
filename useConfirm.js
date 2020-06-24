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
 
 const App = () => {
   const deleteWorld = () => {
     console.log("WORLD DELETE COMPLETED.");
   };
   const abort = () => console.log("ABORT!!");
   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
   return (
     <div className="App">
       <button onClick={confirmDelete}>Delte the world</button>
     </div>
   );
 };