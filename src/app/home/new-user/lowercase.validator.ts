import { AbstractControl } from "@angular/forms";

export function lowercaseValidator(control:AbstractControl) {
  const valor = control.value as string
  if (valor !== valor.toLowerCase()) return {lowercase: true}
  else return null
}
