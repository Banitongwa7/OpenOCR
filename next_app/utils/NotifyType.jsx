import { toast } from "react-toastify";

const notifyError = () => {
  toast.error("Une erreur est survenue !", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifyErrorFile = () => {
  toast.error("Fichier invalide ! veuillez réessayer avec un autre fichier !", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifySuccess = () => {
    toast.success("Felicitations ! Vous avez terminé l'extraction avec succès !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

const notifyEmptyChamp = () => {
  toast.error("Veuillez remplir tous les champs !", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}




export { notifyError, notifyErrorFile, notifySuccess, notifyEmptyChamp };