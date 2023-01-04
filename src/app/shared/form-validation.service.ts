import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  errorMessage(fieldName: string, translatedField: string, formGroup: FormGroup) {
    const field = formGroup.get(fieldName);

    if (field?.hasError('required')) {
      if (fieldName.trim() === 'file') {
        return 'Por favor, selecione uma foto';
      }
      return `${translatedField} é obrigatório`;
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field?.errors
        ? field.errors['minlength']['requiredLength']
        : 8;
      return `${translatedField} dever ter no mínimo ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field?.errors
        ? field.errors['maxlength']['requiredLength']
        : 50;
      return `${translatedField} dever ter no máximo ${requiredLength} caracteres`;
    }

    if (field?.hasError('email')) {
      return `${translatedField} inválido`;
    }

    if (field?.hasError('lowerCase')) {
      return `${translatedField} deve conter somente letras minúsculas`;
    }

    if (field?.hasError('usernameExists')) {
      return `Já existe um usuário com o (username) informado`;
    }

    if (fieldName === 'userName' && field?.valid) {
      return `${translatedField} disponível`;
    }

    return 'campo inválido';
  }
}
