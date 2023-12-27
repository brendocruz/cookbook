/*==============================================================================
==== Selection API =============================================================
==============================================================================*/
/*------------------------------------------------------------------------------
This API enables developers to acess and manipulate the portion of a document
selected by the user.
------------------------------------------------------------------------------*/





/*==============================================================================
==== INTERFACES ================================================================
==============================================================================*/

/*==== Selection INTERFACE =====================================================
Represents the range of text selected by the user or the current position of the
caret.
==============================================================================*/





/*==============================================================================
==== METHODS ===================================================================
==============================================================================*/

const selection_1: Selection | null = document.getSelection();
const selection_2: Selection | null = window.getSelection();
/*==== Document.getSelection METHODS ===========================================
Returns a `Selection` object representing the range of text selected by the
user, or the current position of the caret.
==============================================================================*/





/*==============================================================================
==== EVENTS ====================================================================
==============================================================================*/

addEventListener('selectionchange', (event) => { });
onselectionchange = (event) => {};
/*==== Document.selectionchange EVENT ==========================================
Fired when the current `Selection` of a `Document` is changed. This event is not
cancelable and does not bubble.
==============================================================================*/
/*==== Document.selectionchange EVENT ==========================================
This event is not quite the same as the `selectionchange` events fired when the
text selection in an `<input>` or `<textarea>` element is changed. See
HTMLInputElement.selectionchange event.
==============================================================================*/

addEventListener('selectstart', (event) => { });
onselectstart = (event) => {};
/*==== Node.selectstart EVENT ==================================================
Fired when a user starts a new selection. If the event is canceled, the 
selection is not changed.
==============================================================================*/
