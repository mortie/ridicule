//keyboard manager
onkeydown = onkeyup = function(e)
{
    e=e||event//to deal with IE
    keyboardMap[e.keyCode]=e.type=='keydown'?true:false;
    
    //pauseUnpause if P
    if (e.keyCode == properties.key.pause && e.type == 'keydown')
    {
        pauseUnpause();
    };
};

//Pause if not paused, resume if it is
function pauseUnpause()
{
    if (state.paused)
    {
        updateGameLoops("start");
        state.paused = false;
    }
    else
    {
        updateGameLoops("stop");
        state.paused = true;
        gui_pause();
    };
}

//change velocity based on keyboard input
function keyboard_keyboardControls()
{
    //forward if W
    if (keyboardMap[properties.key.up])
    {
        if (player.velocity.relative < properties.player.speed)
        {
            player.velocity.relative += properties.player.acceleration;
        };
    };
    
    //backward if S
    if (keyboardMap[properties.key.down])
    {
        if (player.velocity.relative > -properties.player.speed)
        {
            player.velocity.relative -= properties.player.acceleration;
        };
    };
    
    //turn left if A
    if (keyboardMap[properties.key.left])
    {
        player.rotation -= properties.player.rotationSpeed;
        player.point = physics_getTrianglePoints(player.halfHeight, player.halfWidth, player.rotation);
    };
    
    //turn right if D
    if (keyboardMap[properties.key.right])
    {
        player.rotation += properties.player.rotationSpeed;
        player.point = physics_getTrianglePoints(player.halfHeight, player.halfWidth, player.rotation);
    };
    
    //shoot on space
    if (keyboardMap[properties.key.shoot])
    {
        if (player.fireTimer >= properties.player.fireSpeed)
        {
            var halfHeight = properties.player.halfHeight;
            newBullet(
                player.point[0].x+player.position.x,
                player.point[0].y+player.position.y,
                player.rotation,
                player.velocity.x,
                player.velocity.y
            );
            player.fireTimer = 0;
        };
    }
    if (player.fireTimer < properties.player.fireSpeed)
    {
        player.fireTimer++;
    };
}