"use strict";

   SetPgnUrl("test.pgn");
   SetImagePath("images/uscf/34");
   SetImageType("png");
   SetGameSelectorOptions(null, false, 0, 8, 0, 0, 0, 0, 10); // (head, num, chEvent, chSite, chRound, chWhite, chBlack, chResult, chDate);
   SetCommentsIntoMoveText(false);
   SetAutoplayDelay(2500); // milliseconds
   SetAutostartAutoplay(true);
   SetAutoplayNextGame(true);
   SetInitialGame(2);
   SetInitialHalfmove(1, true);
   SetShortcutKeysEnabled(true);

// Example below of customization of the shortcut squares

clearShortcutSquares("BG", "3");
clearShortcutSquares("BCDEFGH", "4567");
clearShortcutSquares("A", "456");

var warnedFlipBoard = false;
function FlipBoard() { if (!warnedFlipBoard) { myAlert("warning: flip board functionality disabled", false, true); warnedFlipBoard = true; } }

var oldCurrentGame;
function customFunctionOnPgnGameLoad() {
   if (typeof(oldCurrentGame) != "undefined") {
      document.getElementById("game" + oldCurrentGame).className = "gamelist";
   }
   oldCurrentGame = currentGame;
   document.getElementById("game" + currentGame).className = "gamelistselected";
   SetAutoPlay(true);
}
