import Toaster from "./Toaster";
import '../../global.css';

export default {
    title: 'Components/Toaster',
    component: Toaster
};

export const Default = {
    args: {
        type: "info",
        msg: "This is a message",
        id: 1
    }
};

export const Error = {
    args: {
        type: "error",
        msg: "This is a error message",
        id: 2
    }
};

export const Success = {
    args: {
        type: "success",
        msg: "This is a success message",
        id: 3
    }
};

export const Multiline = {
    args: {
        type: "info",
        msg: "This is a longer message. Therefore it must be more informative. Do you not also find this message very informative?",
        id: 3
    }
};