function draw_triangle(point, x, y)
{
    gameCtx.save();
    
    gameCtx.beginPath();
    gameCtx.moveTo(point[0].x+x, point[0].y+y);
    gameCtx.lineTo(point[1].x+x, point[1].y+y);
    gameCtx.lineTo(point[2].x+x, point[2].y+y);
    gameCtx.closePath();
        
    gameCtx.fill();
    gameCtx.stroke();
    
    gameCtx.restore();
}

function draw()
{
    var nowTime = new Date().getTime();
    var dt = nowTime-state.lastTimeMilliseconds;
    state.FPSDynamic = Math.floor(1000/dt);
    state.lastTimeMilliseconds = nowTime;
    
    //get time, for FPS count
    var beginTime = new Date().getTime();
    
    //clear and resize
    gameArea.width = state.gameWidth;
    gameArea.height = state.gameHeight;
    
    //draw enemies
    for (var i=0; i<=numberOfEnemies; i++)
    {
        //only draw if not dead
        if (enemy[i] != undefined && enemy[i].dead == false)
        {
                var x = enemy[i].position.x;
                var y = enemy[i].position.y;
                draw_triangle(enemy[i].point, x, y);
        };
    };
    
    //draw ship
    var x = player.position.x;
    var y = player.position.y;
    draw_triangle(player.point, x, y);
    
    //draw bullet
    var i=0;
    while (bullet[i] != undefined)
    {
        if (bullet[i].dead == false)
        {
            gameCtx.beginPath();
            gameCtx.arc(bullet[i].position.x, bullet[i].position.y, properties.bullet.size, 0, 2 * Math.PI, false);
            gameCtx.fill();
            gameCtx.stroke();
        };
        i++;
    };
    
    //draw FPS
    gameCtx.font = "normal 36px Verdana";
    gameCtx.fillStyle = "#000000";
    gameCtx.strokeText(state.FPS, 50, 90);
    state.FPSTimer++;
};
    