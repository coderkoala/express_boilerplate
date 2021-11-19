import Swal from 'sweetalert2/dist/sweetalert2.js';

class SweetAlert {
    
    renderMessage(title, message, type = "success", callback = null) {
        try {
            Swal.fire({
                title: title,
                icon: type,
                html: message,
                confirmButtonColor: '#2a1ab9',
                cancelButtonColor: '#ff7674',
            }).then(callback);
        } catch (e) {}
    }

    renderMessageHtml(
        title,
        message,
        type = null,
        callback = null,
        width = null
    ) {
        try {
            Swal.fire({
                title: title,
                html: message,
                icon: type,
                width: width,
                showCloseButton: true,
                showConfirmButton: false,
                confirmButtonColor: '#2a1ab9',
                cancelButtonColor: '#ff7674',

            }).then(callback);
        } catch (e) {}
    }
}

export default new SweetAlert();