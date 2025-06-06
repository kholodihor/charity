import Swal from "sweetalert2";
// Import the base styles - this is the standard CSS file that works with Vite
import "sweetalert2/dist/sweetalert2.css";

// Create a themed instance with borderless styling
const swal = Swal.mixin({
  customClass: {
    container: 'swal2-borderless'
  },
  buttonsStyling: false
});

export default swal;
