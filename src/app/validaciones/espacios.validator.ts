import { AbstractControl } from "@angular/forms";

export function verificarEspacios(c:AbstractControl) {
    if (c.value == null) return null
    if (c.value.includes(' ')) {
        return { conEspacios : 'Este campo no debe poseer espacios' }
    }

    return null
}
    export function verificarEspaciosMensaje(mensaje:string) {
        return function verificarEspacios(c:AbstractControl) {
            // si el valor del input es null retorno null porque no hay error
            if (c.value == null) return null
            // si incluyo un valor con espacios
            if (c.value.includes(' ')) {
                return {conEspacios : mensaje};
            }
            // si el valor del input no incluye espacios retorno null porque no hay error
            return null;
        }
    }