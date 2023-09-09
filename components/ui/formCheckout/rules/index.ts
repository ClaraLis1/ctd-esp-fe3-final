import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(10, "Máximo 10 caracteres"),
    lastName: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(10, "Máximo 10 caracteres"),
    email: yup.string().required("Este campo es requerido").email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    address1: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    address2: yup.string(),
    city: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    state: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    zipCode: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    number: yup.string().required("Este campo es requerido").matches(/^[0-9]{16}$/, "Debe ser un número de 16 dígitos"),
    cvc: yup.string().required("Este campo es requerido").matches(/^[0-9]{3}$/, "Debe ser un número de 3 dígitos"),
    expDate: yup.string().required("Este campo es requerido").matches(/^[0-9]{6}$/, "Debe ser un número de 6 dígitos"),
    nameOnCard: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(20, "Máximo 20 caracteres"),
  
})
