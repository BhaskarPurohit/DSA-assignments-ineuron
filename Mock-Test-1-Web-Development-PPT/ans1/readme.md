1.Static Position:

The default position for an element.
Elements are positioned in the normal flow of the document.
The top, right, bottom, and left properties have no effect on statically positioned elements.

<div class="static">Static Position</div>
.static {
  position: static;
}


2.Fixed Position:

Positioned relative to the viewport (browser window).
Stays fixed even when the page is scrolled.
It does not move with scrolling.

<div class="fixed">Fixed Position</div>
.fixed {
  position: fixed;
  top: 20px;
  right: 20px;
}

3. Sticky Position:

Initially positioned according to the normal flow of the document.
Becomes "sticky" and remains fixed based on the user's scroll position.
Acts like a combination of relative and fixed positioning.
Example:
<div class="sticky">Sticky Position</div>
.sticky {
  position: sticky;
  top: 50px;
  background-color: lightblue;
}


4.Relative Position:

Positioned relative to its normal position in the document flow.
Can be moved using the top, right, bottom, and left properties.
Occupies its original space in the document flow.
Example:
<div class="relative">Relative Position</div>
.relative {
  position: relative;
  top: 20px;
  left: 20px;
}


5.Absolute Position:

Positioned relative to its nearest positioned ancestor or the initial containing block (usually the viewport).
Removed from the normal flow of the document.
Other elements fill the space it leaves behind.
Example:
<div class="parent">
  <div class="absolute">Absolute Position</div>
</div>
.parent {
  position: relative;
}
.absolute {
  position: absolute;
  top: 50px;
  left: 50px;
}


