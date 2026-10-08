import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

// Shared SweetAlert instance with the site's colors
const swal = Swal.mixin({
  confirmButtonColor: '#f7941d',
  cancelButtonColor: '#6c757d',
})

export default swal
