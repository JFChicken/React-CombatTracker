// @flow
import type { Action } from '../../types';

export const setFieldIdExpanded = (fieldId: Number): Action => ({
  type: 'NEXT_ROUND',
  payload: { fieldId },
});
export const toggleDeleteDialog = (fieldId: Number): Action => ({
  type: 'CLEAR_ROUNDS',
  payload: { fieldId },
});
