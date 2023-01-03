import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  errorMessage(fieldName: string, formGroup: FormGroup) {
    const field = formGroup.get(fieldName);

    if (field?.hasError('required')) {
      if (fieldName.trim() === 'file') {
        return 'Por favor, selecione uma foto';
      }
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

    if (field?.hasError('lowerCase')) {
      return `Username deve ser em letras minúsculas`;
    }

    if (field?.hasError('usernameExists')) {
      return `Já existe um usuário com (username) informado`;
    }

    if (fieldName === 'userName' && field?.valid) {
      return 'Username disponível';
    }

    return 'campo inválido';
  }
}
