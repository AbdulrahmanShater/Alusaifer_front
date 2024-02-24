import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default class MyToast {
    text;
    constructor(text) {
        this.text = text
    }
    success = () => {
        toast.success(this.text, {
            position: 'top-left',
        });
    };
    error = () => {
        toast.error(this.text, {
            position: 'top-left',
        });
    };
    warning = () => {
        toast.warning(this.text, {
            position: 'top-left',
        });
    };
    info = () => {
        toast.info(this.text, {
            position: 'top-left',
        });
    };
    toast = () => {
        toast(this.text, {
            position: 'top-left',
        });
    };

}
