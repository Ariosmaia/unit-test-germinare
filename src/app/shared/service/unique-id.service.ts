import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds: number;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  constructor() {
    this.numberOfGeneratedIds = 0;
  }

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty');
    }

    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  getNumberGeneretedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generatedUniqueId(): string {
    return uuidv4();
  }
}
