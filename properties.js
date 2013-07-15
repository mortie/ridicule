var properties = {
    "key": {
        "up": 87,
        "left": 65,
        "down": 83,
        "right": 68,
        "pause": 80,
        "shoot": 32
    },
    "FPS": 120,
    "gameSpeed": 120,
    "FPSUpdateSpeed": 50,
    "player": {
        "speed": 4,
        "acceleration": 0.5,
        "rotationSpeed": 0.04,
        "rotationAcceleration": 0.01,
        "height": 40,
        "width": 20,
        "halfHeight": 20,
        "halfWidth": 10,
        "fireSpeed": 10
    },
    "bullet": {
        "speed": 5,
        "size": 2,
        "damage": 5
    },
    "enemy": {
        "halfHeight": 10,
        "halfWidth": 5,
        "speed": 3.5
    }
};

var state = {
    "paused": false,
    "gameWidth": 100,
    "gameHeight": 100,
    "lastTimeMilliseconds": 0,
    "FPSTimer": 0,
    "FPS": 0,
    "FPSDynamic": 0
}