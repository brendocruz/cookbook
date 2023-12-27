const selection: Selection = document.getSelection()!;
/*==============================================================================
==== INSTANCE PROPERTIES =======================================================
==============================================================================*/

const _anchorNode: Node | null = selection.anchorNode;
/*==== anchorNode PROPERTY =====================================================
Returns the `Node` in which the selection begin.
==============================================================================*/

const _anchorOffset: number = selection.anchorOffset;
/*==== anchorOffset PROPERTY ===================================================
Returns a number representing the offset of the selection's anchor within the
`anchorNode`. If `anchorNode` is a text node, this is the number of characters
within `anchorNode` preceding the anchor. If `anchorNode` is an element, this is
the number of child nodes of the `anchorNode` preceding the anchor.
==============================================================================*/

const _focusNode: Node | null = selection.focusNode;
/*==== focusNode PROPERTY ======================================================
Returns the `Node` in which the selection ends.
==============================================================================*/

const _focusOffset: number = selection.focusOffset;
/*==== focusOffset PROPERTY ====================================================
Returns a number representing the offset of the selection's anchor within the
`anchorNode`. If `anchorNode` is a text node, this is the number of characters
within `anchorNode` preceding the anchor. If `anchorNode` is an element, this is
the number of child nodes of the `anchorNode` preceding the anchor.
==============================================================================*/

const isCollapsed: boolean = selection.isCollapsed;
/*==== isCollapsed PROPERTY ====================================================
Returns a boolean value which indicates whether or not there is currently any
text selected. No text is selected when the selection's start and end points are
at the same position in the content.
==============================================================================*/
/*==== NOTES ===================================================================
Keep in mind that a collapsed selection may still have one (or more) `Range`s
so, `Selection.rangeCount` may not be zero. In that scenario, calling a 
`Selection` object's `getRangeAt()` method may return a `Range` object which is
collapsed.
==============================================================================*/

const rangeCount: number = selection.rangeCount;
/*==== rangeCount PROPERTY =====================================================
Returns the number of ranges in the selection. A user can normally select one
range at a time, so the `rangeCount` will usually be `1`. Scripting can be used
to make the selection contain more than one range. 
==============================================================================*/
/*==== rangeCount VALUE ========================================================
Before the user has clicked a freshly loaded page, the `rangeCount` is `0`.
After the user clicks on the page, `rangeCount` is `1`, even if no selection is
visible.
==============================================================================*/

type SelectionType = 'None' | 'Caret' | 'Range';
const selection_type: SelectionType = selection.type as SelectionType;
/*==== type PROPERTY ===========================================================
Returns a string describing the type of the current selection.
==============================================================================*/
/*==== type 'None' =============================================================
No selection has currently been made.
==============================================================================*/
/*==== type 'Caret' ============================================================
The selection is collapsed.
==============================================================================*/
/*==== type 'Range' ============================================================
A range has been selected.
==============================================================================*/





/*==============================================================================
==== INSTANCE METHODS ==========================================================
==============================================================================*/

const index: number = 0;
const range: Range = selection.getRangeAt(index);
/*==== getRangeAt METHOD =======================================================
Returns a range object representing one of the ranges Currently selected.
==============================================================================*/

selection.addRange(range);
/*==== addRange METHOD =========================================================
Adds a `Range` to a `Selection`.
==============================================================================*/
/*==== NOTE ====================================================================
Currently only FireFox supports multiple selection range, other browser will not
add new ranges to the selection if it already contains one.
==============================================================================*/

selection.removeRange(range)
/*==== removeRange METHOD ======================================================
Removes a range from a selection.
==============================================================================*/

selection.removeAllRanges();
selection.empty(); // alias
/*==== removeAllRanges METHOD ==================================================
Removes all ranges from the selection, leaving the `anchorNode` and `focusNode`
properties equal to `null` and nothing selected.
==============================================================================*/
/*==== EVENT ===================================================================
When this method is called, a `selectionchange` event is fired at the document.
==============================================================================*/




const parentNode: Node = document.body.childNodes[0];
selection.selectAllChildren(parentNode);
/*==== selectAllChildren METHOD ================================================
Adds all the children of the specified node to the selection. Previous selection
is lost.
==============================================================================*/
/*==== parentNode ARGUMENT =====================================================
All children of `parentNode` will be selected. `parentNode` itself is not part
of the selection.
==============================================================================*/

const anchorNode: Node = document.childNodes[0];
const anchorOffset: number = 10;
const focusNode: Node = document.childNodes[1];
const focusOffset: number = 10;
selection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
/*==== setBaseAndExtent METHOD =================================================
Sets the selection to be a range including all or parts of two specified DOM
nodes, and any content located between them.
==============================================================================*/

const node: Node = document.body.childNodes[0];
const offset: number = 10;
selection.extend(node);
selection.extend(node, offset);
/*==== extend METHOD ===========================================================
Moves the focus of the selection to a specified point. The anchor of the 
selection does not move. The selection will be from the anchor to the new focus,
regardless of direction.
==============================================================================*/
/*==== offset ARGUMENT =========================================================
The offset position within `node` where the focus will be move to. If not
specified, the default value `0` is used.
==============================================================================*/

selection.deleteFromDocument();
/*==== extend METHOD ===========================================================
Deletes the selected text from the document's DOM.
==============================================================================*/

type AlyerType = 'move' | 'extend';
type Direction = 'forward' | 'backward' | 'left' | 'right';
type Granularity = 
	| 'character' | 'word' | 'sentence' 
	| 'line' | 'paragraph' 
	| 'lineboundary' | 'sentenceboundary' 
	| 'paragraphboundary' | 'documentboundary';
const alter: AlyerType = 'move';
const direction: Direction = 'forward';
const granularity: Granularity = 'character';
selection.modify(alter, direction, granularity);
/*==== modify METHOD ===========================================================
Applies a change to the current selection or cursor position, using simple
textual commands.
==============================================================================*/
/*==== alter ARGUMENT ==========================================================
The type of change to apply. Specify `'move'` to move the cursor position or
`'extend'` to extend the current selection.
==============================================================================*/
/*==== direction ARGUMENT ======================================================
The direction in which to adjust the current selection. You can specify 
`'forward'` or `'backward'` to adjust in the appropriate direction based on the
language at the selection point. If you want to adjust in a specific direction,
you can specify `'left'` or `'right'`.
==============================================================================*/
/*==== granularity ARGUMENT ====================================================
The distance to adjust the current selection or cursor position. You can move by
`'character'`, `'word'`, `'sentence'`, `'line'`, `'paragraph'`,
`'lineboundary'`, `'sentenceboundary'`, `'paragraphboundary'`, 
`'documentboundary';,
==============================================================================*/





selection.collapse(node)
selection.collapse(node, offset);
selection.setPosition(node);
selection.setPosition(node, offset);
/*==== collapse METHOD =========================================================
Collapses the current selection to a single point. The document is not modified.
If the content is focused and editable, the caret will blink there.
==============================================================================*/
/*==== node ARGUMENT ===========================================================
The caret location will be within this node. If this value is set to `null`, the
method will behave like `removeAllRanges`.
==============================================================================*/
/*==== offset OPTIONAL ARGUMENT ================================================
If not specified, the default value `0` is used.
==============================================================================*/


selection.collapseToStart();
/*==== collapseToStart METHOD ==================================================
Collapses the selection to the start of the first range in the selection. If the
content is focused and editable, the caret will blink there.
==============================================================================*/

selection.collapseToEnd();
/*==== collapseToStart METHOD ==================================================
Collapses the selection to the end of the last range in the selection. If the
content is focused and editable, the caret will blink there.
==============================================================================*/



const partialContainment: boolean = false;
selection.containsNode(node);
selection.containsNode(node, partialContainment);
/*==== containsNode METHOD =====================================================
Indicates whether a specified node is part of the selection.
==============================================================================*/
/*==== partialContainment OPTIONAL ARGUMENT ====================================
When `true`, returns `true` when a part of the node is part of the selection.
When `false`, returns `true` when the entire node is part of the selection. If
not specified, the default value `false` is used.
==============================================================================*/




const text = selection.toString();
/*==== toString METHOD =========================================================
Returns a string currently being represented by the selection object.
==============================================================================*/
