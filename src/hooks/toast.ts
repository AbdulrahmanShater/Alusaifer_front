import cogoToast from '@hasanm95/cogo-toast';
import 'react-toastify/dist/ReactToastify.css';
export default class MyToast {
    text;
    constructor(text: string) {
        this.text = text
    }
    success = () => {
        cogoToast.success(
            this.text, {
            position: 'top-left'
        });
    };
    error = () => {
        cogoToast.error(this.text, {
            position: 'top-left',
        });
    };
    warning = () => {
        cogoToast.warn(this.text, {
            position: 'top-left',
        });
    };
    info = () => {
        cogoToast.info(this.text, {
            position: 'top-left',
        });
    };
}
