/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'fims-date-input',
  templateUrl: './date-input.component.html'
})
export class DateInputComponent {

  @Input() placeholder;

  @Input() controlName: string;

  @Input() form: FormGroup;

  @Input() title = '';

  get hasRequiredError(): boolean {
    return this.hasError('required');
  }

  get hasBeforeTodayError(): boolean {
    return this.hasError('beforeToday');
  }

  get hasAfterTodayError(): boolean {
    return this.hasError('afterToday');
  }

  hasError(key: string): boolean {
    return this.form.get(this.controlName).hasError(key);
  }
}
