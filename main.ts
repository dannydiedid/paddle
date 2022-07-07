namespace SpriteKind {
    export const leftpaddles = SpriteKind.create()
    export const rightpaddles = SpriteKind.create()
}
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        `, SpriteKind.leftpaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        `, SpriteKind.leftpaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 6 6 6 6 6 9 . . . . . 
        . . . 6 7 7 7 7 7 7 9 . . . . . 
        . . . 6 7 7 7 7 7 7 9 . . . . . 
        . . . 6 7 7 7 7 7 7 9 . . . . . 
        . . . 6 7 7 7 7 7 7 7 . . . . . 
        . . . 6 7 7 7 7 7 7 7 . . . . . 
        . . . 9 7 7 7 7 7 7 b . . . . . 
        . . . 9 7 7 7 7 7 7 b . . . . . 
        . . . 9 7 7 7 7 7 7 b . . . . . 
        . . . 9 9 b b b 7 b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
