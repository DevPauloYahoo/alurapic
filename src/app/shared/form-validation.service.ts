import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  errorMessage(fieldName: string, formGroup: FormGroup) {
    const field = formGroup.get(fieldName);

    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field?.errors
        ? field.errors['minlength']['requiredLength']
        : 8;
      return `${fieldName} dever ter no mínimo ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field?.errors
        ? field.errors['maxlength']['requiredLength']
        : 50;
      return `${fieldName} dever ter no máximo ${requiredLength} caracteres`;
    }

    if (field?.hasError('email')) {
      return `${fieldName} inválido`;
    }

    if (field?.hasError('pattern')) {
      return `${fieldName} deve ser em letras minúsculas e não pode começar com números`;
    }

    return 'campo inválido';
  }
}
