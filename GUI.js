function gui_pause()
{
    gameCtx.font = 40 + 'px Arial';
    gameCtx.textAlign = "center";
    gameCtx.fillText("Game paused",gameArea.width/2,gameArea.height/2);
    gameCtx.font = 20 + 'px Arial';
    gameCtx.fillText("Press P to unpause",gameArea.width/2,gameArea.height/2+40);
}