/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseFileEditorInput } from 'vs/workbench/contrib/files/common/editors/fileEditorInput';
import { BaseUntitledTextEditorInput } from 'vs/workbench/services/untitled/common/untitledTextEditorInput';
import { GroupIdentifier, IMoveResult } from 'vs/workbench/common/editor';
import { URI } from 'vs/base/common/uri';

export class CustomTextFileEditorInput extends BaseFileEditorInput {

	getName(): string {
		return `[custom text editor] ${super.getName()}`;
	}

	getTypeId(): string {
		return 'customTextFileEditorInput';
	}

	move(group: GroupIdentifier, target: URI): IMoveResult {
		return {
			editor: this.instantiationService.createInstance(CustomTextFileEditorInput, target, undefined, undefined)
		};
	}

	matches(otherInput: unknown): boolean {
		if (super.matches(otherInput) === true) {
			return true;
		}

		if (otherInput) {
			return otherInput instanceof CustomTextFileEditorInput && otherInput.resource.toString() === this.resource.toString();
		}

		return false;
	}
}

export class CustomUntitledTextEditorInput extends BaseUntitledTextEditorInput {

	getTypeId(): string {
		return 'customUntitledTextEditorInput';
	}

	getName(): string {
		return `[custom text editor] ${super.getName()}`;
	}

	matches(otherInput: unknown): boolean {
		if (super.matches(otherInput) === true) {
			return true;
		}

		if (otherInput) {
			return otherInput instanceof CustomUntitledTextEditorInput && otherInput.resource.toString() === this.resource.toString();
		}

		return false;
	}
}