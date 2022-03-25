import { AbstractControl } from "@angular/forms";

export function verificarEspacios(c:AbstractControl) {
    if (c.value == null) return null
    if (c.value.includes(' ')) {
        return { conEspacios : 'Este campo no debe poseer espacios' }
    }

    return null
}