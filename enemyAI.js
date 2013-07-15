function enemyAI_AI(i)
{
    playerPos = physics_rotate (
        -enemy[i].rotation,
        player.position.x - enemy[i].point[0].x,
        player.position.y - enemy[i].point[0].y
    );
    
    angleBetweenViewAndPlayer = Math.acos (playerPos.y / Math.sqrt(playerPos.x * playerPos.x + playerPos.y * playerPos.y));
    
    /*
    var diffX = player.position.x - enemy[i].position.x;
    var diffY = player.position.y - enemy[i].position.y;
    var length = Math.sqrt(diffX * diffX + diffY * diffY);
    var angle = Math.acos(diffY / length);
    enemy[i].rotation = diffX < 0 ? angle : -angle;
    */
    
    var diffX = player.position.x - enemy[i].position.x;
    var diffY = player.position.y - enemy[i].position.y;
    var length = Math.sqrt(diffX * diffX + diffY * diffY);
    
    if (length > 300)
    {
        enemy[i].velocity = physics_getVelocity(properties.enemy.speed, enemy[i].rotation);
    }
    
    enemy[i].point = physics_getTrianglePoints(properties.enemy.halfHeight, properties.enemy.halfWidth, enemy[i].rotation);

    //shoot
};

function enemyAI()
{
    for (i=0; enemy[i]!=undefined && enemy[i].dead == false; i++){
        enemyAI_AI(i);
    };
}