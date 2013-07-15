function newEnemy(x, y)
{
    //get which array entry should be [over]written
    var i;
    for (i=0; enemy[i]!=undefined && enemy[i].dead == false; i++){};
    
    //make enemy
    enemy[i] = {
        "position": {"x": x, "y": y},
        "velocity": {"x": 0, "y": y},
        "health": 100,
        "rotation": random(0, 2*Math.PI),
        "dead": false,
        "height": properties.enemy.halfHeight,
        "width": properties.enemy.halfWidth,
        "point": physics_getTrianglePoints(properties.enemy.halfWidth, properties.enemy.halfHeight, 0)
    };
};

function newBullet(x, y, rotation, shooterVelocityX, shooterVelocityY)
{
    //get which array entry should be [over]written
    var i;
    for (i=0; bullet[i]!=undefined && bullet[i].dead == false; i++){};
    
    //make bullet
    velocity = physics_getVelocity(properties.bullet.speed, rotation);
    velocity.x += shooterVelocityX;
    velocity.y += shooterVelocityY;
    bullet[i] = {
        "position": {"x": x, "y": y},
        "velocity": velocity,
        "dead": false
    };
}