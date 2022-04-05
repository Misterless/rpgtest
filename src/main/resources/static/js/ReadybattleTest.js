$ryan = $("#testryan");
$enemy = $("#testenemy");
$bg = $("#c1");
$boxLeft= $("#c1").position().left;
$boxTop= $("#c1").position().top;
$boxBottom= $("#c1").innerHeight().top;

let $heroLeft =$("#testryan").position().left;
let enemyLeft =$("#testenemy").position().left;
let heroTop =$("#testryan").position().top;
let enemyTop =$("#testenemy").position().top;

let movecount =0;
let createEnemy=0;
let enemyCount=math.random()*16+1;

makeEnemyList();
setInterval(init, 100);


    $("#move-real-btn").click((event)=>{
            location.href ="/RealBattle"
        })            


 
    $("#testdown-btn").click((event) => {
        //console.log(heroTop,$boxTop,$bg.height());
        if (heroTop<($boxTop/2)+$bg.height()){
            console.log(heroTop);
            $ryan.animate({ top : '+=60' }, 800);
        
        heroTop +=60;
                    
        checkPosition();
        checkbattle();
        }
    });
    
    $("#testup-btn").click((event) => {
        if(heroTop>$boxTop+7){
        $ryan.animate({ top : `-=60` }, 800);
        heroTop -=60; 
        
        checkPosition();
        checkbattle();
    }
});
    $("#testright-btn").click((event) => {
        console.log($boxLeft,$heroLeft,$bg.width(),$ryan.width());
        if($heroLeft+$ryan.width()<$boxLeft+$bg.width()){
        $ryan.animate({ left : `+=60` }, 800);
        $heroLeft +=60;
        
        checkPosition();
        checkbattle();
        }
    });
 
    $("#testleft-btn").click((event) => {
        if($heroLeft>$boxLeft){
        $ryan.animate({ left : `-=60` }, 800);
        
        $heroLeft -=60;
        
        
        checkPosition();
        checkbattle();
        }
    });

    function  checkPosition() {
        setTimeout(function() {
            $(".testryan").text("left:" + $(".testryan").css("left") + " top:" + $(".testryan").css("top"));
                }, 1200);
            }

    function checkbattle(){
        if ($heroLeft==enemyLeft && heroTop==enemyTop){
                          
                    location.href ="/RealBattle"
                }
            }
                            
            function makeEnemy() {
                enemyList.forEach(enemy => {
                  if (enemy.status === true) {
                    enemy.EnemyImg.createEnemy(enemy.x, enemy.y);
                    if (enemy.y + enemyHeight > 580) {
                      enemy.x = randomiseX();
                      enemy.y = 0;
                    }
                  }
                });
              }

              class Enemy {
                constructor() {
                  this.enemy = document.createElement("div");
                }
              
                createEnemy(x, y) {
                  bg.appendChild(this.enemy);
                  this.enemy.className = "enemy";
                  this.enemy.style.left = `${x}px`;
                  this.enemy.style.top = `${y}px`;
                }
            }
            function randomiseX() {
                return Math.random() * 1200;
              }
              function randomiseY(){
                  return Math.random() *600;
              }
              
              function makeEnemyList() {
                for (let i = 0; i < enemyCount; i++) {
                  enemy = {};
                  enemy["EnemyImg"] = new Enemy();
                  enemy["status"] = true;
                  enemy["x"] = randomiseX();
                  enemy["y"] = 0;
                  enemyList.push(enemy);
                }
              }
              function batchEnemy() {
                let pad = 10;    //패딩10픽셀
                enemyList.forEach(enemy => {
                  if (enemy.status === true) {
                    if (
                      heroX + pad <= enemy.x + enemyWidth &&
                      heroX + heroWidth >= enemy.x + pad
                    ) {
                      if (heroY + pad < enemy.y + enemyHeight) {
                        enemy.status = false;
                        //여기쯤에서 레디스 저장해야하는데~~
                        location.href ="/RealBattle"    
                        setTimeout(detectCollision, 2000);
                      }
                    }
                  }
                });
              }



            function initial(){
                makeEnemy();
                fallEnemy();
            }