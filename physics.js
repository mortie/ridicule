function physics_getVelocity(speed, rotation)
{
    var returnValue = {
        "y": speed * Math.cos(rotation),
        "x": -speed * Math.sin(rotation)
    };
    return returnValue;
};

function physics_triangleCollision(point1, point2)
{
    overAB = ((b.x - a.x)*(point.y - a.y) - (b.y - a.y)*(point.x - a.x)) > 0;
    overBC = ((c.x - b.x)*(point.y - b.y) - (c.y - b.y)*(point.x - b.x)) > 0;
    overCA = ((a.x - c.x)*(point.y - c.y) - (a.y - c.y)*(point.x - c.x)) > 0;
    
    console.log(overAB+" "+overBC+" "+overCA);
};

function physics_rotate(rot, x, y)
{
    return {
        "x": Math.cos(rot) * x - Math.sin(rot) * y,
        "y": newY = Math.sin(rot) * x + Math.cos(rot) * y
    }
}

function physics_getTrianglePoints(halfHeight, halfWidth, rot)
{
    var point=[]
    for (var i=0; i<=2; ++i)
    {
        var x;
        var y;
        switch (i)
        {
            case 0:
                x = 0;
                y = properties.player.halfHeight;
                break;
            case 1:
                x = -properties.player.halfWidth;
                y = -properties.player.halfHeight;
                break;
            case 2:
                x = properties.player.halfWidth;
                y = -properties.player.halfHeight;
                break;
        }
        
        point[i] = physics_rotate(rot, x, y);
    }
    return point;
}

function physics_player()
{
    keyboard_keyboardControls();
    
    //set delta X and delta Y according to the relative velocity
    var velocity = physics_getVelocity(player.velocity.relative, player.rotation);
    player.velocity.x = velocity.x;
    player.velocity.y = velocity.y;
    
    //reduce velocity over time if not moving
    if (!keyboardMap[properties.key.up] && !keyboardMap[properties.key.down])
    {
        if (Math.abs(player.velocity.relative) > 0.3)
        {
            player.velocity.relative *= 0.975;
        }
        else
        {
            player.velocity.relative = 0;
        };
    };
        
    //update player position
    player.position.x += player.velocity.x;
    player.position.y += player.velocity.y;
}

function physics_bullet()
{
    for (var i=0; bullet[i] != undefined; ++i)
    {
        if (bullet[i].dead == false)
        {
            var cBullet = bullet[i]
            
            if (cBullet.position.x > 0
                && cBullet.position.x < state.gameWidth
                && cBullet.position.y > 0
                && cBullet.position.y < state.gameHeight)
            {
                cBullet.position.x += cBullet.velocity.x;
                cBullet.position.y += cBullet.velocity.y;
            }
            else
            {
                cBullet.dead = true;
            };
                
        };
    };
};

function physics()
{
    physics_player();
    physics_bullet();
};