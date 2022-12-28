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

    return 'campo inválido';
  }
}
