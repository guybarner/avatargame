// רמת הקןשי של האויב
function difficulty(choosed) {
    if (choosed == "easy") {
        sessionStorage.setItem("difficulty", "easy");
    }
    else {
        if (choosed == "normal") {
            sessionStorage.setItem("difficulty", "normal");
        }
        else if (choosed == "hard") {
            sessionStorage.setItem("difficulty", "hard");
        }
    }
}
var difficulty1 = sessionStorage.getItem('difficulty');
// השלב במשחק
var level1 = 1;
function level(leveli) {
    if (leveli == 'level2') {
        sessionStorage.setItem("level", "level2");
    }
    else 
    {
        sessionStorage.removeItem("level");
        sessionStorage.setItem("level", "level3");
    }
}
var level;
console.log(sessionStorage.getItem("level"));
//השחקן שאתה משחק
function character(hero) {
    if (hero == "zuko") {
        sessionStorage.setItem("hero", "zuko");
    }
    else {
        if (hero == "katara") {
            sessionStorage.setItem("hero", "katara");
        }
        else if (hero == "ang") {
            sessionStorage.setItem("hero", "ang");
        }
    }
}
var hero = sessionStorage.getItem('hero');
var imghero = document.createElement("img");
var enemy = document.createElement("img");
var bulletimg = document.createElement("img");
var herox = 450;
var heroy = 530;
var enemyx = 450;
var enemyy = 0;
var bulletimg1;
enemy.setAttribute("src", "Images/OzaiProfileImage.png");
var seconedbulletimg = document.createElement("img");
//תכנות הכדור של הירייה לפי הדמות שבחרת
if (hero == "katara") {
    imghero.setAttribute("src", "Images/KataraProfileImage.jpg");
    bulletimg.setAttribute("src", "Images/waterbubble.jpg");
    seconedbulletimg.setAttribute("src", "Images/snowflake.jpg");
    bulletimg1 = "waterbubble";
}
else {
    if (hero == "zuko") {
        imghero.setAttribute("src", "Images/ZukoProfileImage.jpg");
        bulletimg.setAttribute("src", "Images/fire.jpg");
        seconedbulletimg.setAttribute("src", "Images /fire3.jpg");
        bulletimg1 = "fire2";
    }
    else if (hero == "ang") {
        imghero.setAttribute("src", "Images/AngProfileImage.jpg");
        bulletimg.setAttribute("src", "Images/air.jpg");
        seconedbulletimg.setAttribute("src", "Images/wind.jpg");
        bulletimg1 = "air";
    }
}
var enemyhp = 0;
var yourhp = 250;
//מה שמודפס ברגע שמתחיל המשחק
function image() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.drawImage(imghero, herox, heroy, 100, 100);
    context.drawImage(enemy, enemyx, enemyy, 100, 100);
    var herohealth = document.getElementById("p3");
    var herohealth2 = document.getElementById("healthhero");
    herohealth2.max = yourhp;
    herohealth2.value = yourhp;
    herohealth.innerHTML = "your health: " + yourhp;
    heal();
}
var damage20 = 10;
//הכמות חיים וחוזק הייריה של האויב לפי הרמה שנבחרה
function enemylvl() {
    var enemyhealth = document.getElementById("p4");
    var healthenemy = document.getElementById("healthenemy");
    if (difficulty1 == "easy") {
        enemyhp = 200;
        damage20 = 10;
        healthenemy.value = enemyhp;
        healthenemy.max = enemyhp;
        enemyhealth.innerHTML = "enemy health:" + healthenemy.value;
    }
    else if (difficulty1 == "normal") {
        enemyhp = 250;
        damage20 = 15;
        healthenemy.value = enemyhp;
        healthenemy.max = enemyhp;
        enemyhealth.innerHTML = "enemy health:" + healthenemy.value;
    }
    else if (difficulty1 == "hard") {
        enemyhp = 300;
        damage20 = 20;
        healthenemy.value = enemyhp;
        healthenemy.max = enemyhp;
        enemyhealth.innerHTML = "enemy health:" + healthenemy.value;
    }
}
var seconeds = 4;
document.addEventListener("keydown", movestuff, true);
// המקשים של המשחק : תזוזה ויכולות
function movestuff(e) {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    switch (e.keyCode) {
        case 37:
            context.clearRect(herox, heroy, 100, 100);
            herox -= 10;
            context.drawImage(imghero, herox, heroy, 100, 100);
            if (herox < 0) {
                context.clearRect(herox, heroy, 100, 100);
                herox = 0;
                context.drawImage(imghero, herox, heroy, 100, 100);
            }
            break;
        case 39:
            context.clearRect(herox, heroy, 100, 100);
            herox += 10;
            context.drawImage(imghero, herox, heroy, 100, 100);
            if (herox + 110 > 1000) {
                context.clearRect(herox, heroy, 100, 100);
                herox = 900;
                context.drawImage(imghero, herox, heroy, 100, 100);
            }
            break;
        case 38:
            context.clearRect(herox, heroy, 100, 100);
            heroy -= 10;
            context.drawImage(imghero, herox, heroy, 100, 100);
            if (heroy < 315) {
                context.clearRect(herox, heroy, 100, 100);
                heroy = 315;
                context.drawImage(imghero, herox, heroy, 100, 100);
            }
            break;
        case 40:
            context.clearRect(herox, heroy, 100, 100);
            heroy += 10;
            context.drawImage(imghero, herox, heroy, 100, 100);
            if (heroy + 110 > 630) {
                context.clearRect(herox, heroy, 100, 100);
                heroy = 530;
                context.drawImage(imghero, herox, heroy, 100, 100);
            }
            break;
        case 90:
            if (seconeds >= 4) {
                if (true1 == true) {
                    createstartpoint();
                    bullet();
                }
                else {
                    createstartpoint();
                }
                true1 = false;
                seconeds = 0;
            }
            break;
        case 88:
            if (sessionStorage.getItem("level") == "level2" || sessionStorage.getItem("level") == "level3") {
                heal();
            }
            break;
        case 83:
            if (sessionStorage.getItem("level") == "level3") {
                hitbomb1();
            }
            break;
    }
}
var true1 = true;
//התזוזה של האויבים במשחק
function movee() {
    if (sessionStorage.getItem("level") == "level2") {
        moveeazula1();
        azulaAbillity();
        var l = document.getElementById("l");
        l.innerHTML = "second abillity: hit " + (6 - hit) + " more to activate!";
    }
    if (sessionStorage.getItem("level") == "level3") {
        moveeazula1();
        azulaAbillity();
        moveeazula2();
        azula2Abillity();
        var l = document.getElementById("l");
        l.innerHTML = "second abillity: hit " + (6 - hit) + " more to activate!";
        var l2 = document.getElementById("l2");
        l2.innerHTML = "third abillity: hit " + (10 - hitbomb) + " more to activate!";
    }
    var fps = 60;
    setInterval(restart, 1000 / fps);
}
var bullety = herox + 40;
var bulletx = heroy - 20;
// ציור הירייה
function drawbullet(bulletimg) {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletx, bullety - 20, 20, 40);
    context.drawImage(bulletimg, bulletx, bullety - 20, 20, 40);
}
var change = 10;
var coordx = enemyx;
var coordy = enemyy;
var hcoordx = 0;
var hcoordy = 0;
function drawbulletfirst() {
    drawbullet();
}
var lg = 1;
var lb = 1;
var num100 = 15;
var time3 = 250;
var time5 = 250;
var time11 = 250;
var hit = 0;
var hitbomb = 0;
//התזוזה של הכדור בכל פעם שיש ירייה
function movebulletstraight(bulletimg12, abillitynumber) {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var healthenemy = document.getElementById("healthenemy");
    var enemyhealth = document.getElementById("p4");
    var l = document.getElementById("l");
    var l2 = document.getElementById("l2");
    if (bullety >= enemyy + 110 || enemyx - 1 > bulletx || enemyx + 101 < bulletx + 20) {
        change = 1;
        context.clearRect(bulletx, bullety - 10, 21, 40);
        drawbullet(bulletimg12);
        bullety -= 2;
    }
    else {
        context.clearRect(bulletx, bullety - 10, 21, 40);
        bullety = -40;
        if (abillitynumber == 1) {
            if (lg == 1) {
                var healthenemy = document.getElementById("healthenemy");
                healthenemy.value -= num100;
                if (sessionStorage.getItem("level") == "level2" || sessionStorage.getItem("level") == "level3") {
                    hit++;
                    l.innerHTML = "second abillity: hit " + (6 - hit) + " more to activate!";
                    if (hit == 6) {
                        l.innerHTML = "second abillity: you can heal!";
                    }
                }
                if (sessionStorage.getItem("level") == "level3") {
                    hitbomb++;
                    l2.innerHTML = "third abillity: hit " + (10 - hitbomb) + " more to activate!";
                    if (hitbomb == 10) {
                        l2.innerHTML = "third abillity: boomb himmmm!";
                    }
                }
                enemyhealth.innerHTML = "enemy health:" + healthenemy.value;
                lg++;
                if (healthenemy.value <= 0) {
                    if (sessionStorage.getItem("level") == "level2") {
                        window.location.href = "WinLevel2.html";
                    }
                    else {
                        if (sessionStorage.getItem("level") == "level3") {
                            window.location.href = "WinLevel3.html";
                        }
                        else {
                            window.location.href = "win.html";
                        }
                    }
                }
            }
        }
    }
    if (bullety < 20) {
        context.clearRect(bulletx, bullety - 10, 21, 40);
        lg = 2;
    }
}
function clear() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 1000, 630);
    context.globalAlpha = 1;
    image();
}
// יצירת נקודת היציאה של הכדור
function createstartpoint() {
    lg = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletx, bullety - 20, 21, 40);
    var startx = herox + 40;
    var starty = heroy - 30;
    bulletx = startx;
    bullety = starty;
    hcoordx = startx - 40;
}
var bulletex = enemyx + 40;
var bulletey = enemyy + 30;
// יצירת נקודת היציאה של הכדור של האויב
function createenemystartpoint() {
    rnd = Math.floor(Math.random() * 1500) + 3500; 
    la = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletex, bulletey - 20, 21, 40);
    bulletex = enemyx + 40;
    bulletey = enemyy + 130;
}
var herobulletfps = bulletfps;
var time0 = 1000 / herobulletfps;
var time2 = 1000 / herobulletfps;
//פעולת הירייה
function bullet() {
    lg = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletx, bullety - 20, 21, 50);
    drawbullet(bulletimg);
    var handle1 = setInterval("movebulletstraight(bulletimg,1);", time2);
    time2 = time0 * 24;
}
var originalseconeds = 0;
// הזמן שבו הגיבור לא יכול לירות עוד ירייה לאחר שירה
function timer() {
    var p = document.getElementById("p");
    if (seconeds < 4) {
        seconeds++;
        p.innerHTML = "first abillity: " + seconeds;
    }
}
var seconeds2 = 0;
function timer2() {
    var p2 = document.getElementById("p10000");
    if (seconeds2 < 4) {
        seconeds2++;
        p2.innerHTML = "first abillity: " + seconeds1;
    }
}
setInterval(timer, 1000);
setInterval(timer2, 1000);
var bombx = 0;
var bomby = 0;
function getenemycoords() {
    bombx = enemyx;
    bomby = enemyy;

}
var i12 = 1;
var limit2 = 40;
var time10 = 1000;
var time4 = 100;
var seconedimg;
var abc = 1;
var value1 = 5;
var time = 500;
var enemyspeed = 2.5;
//תזוזה של האויב
function restart() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(enemyx, enemyy, 100, 100);
    enemyx += enemyspeed;
    if (enemyx > 900 || enemyx < 0) {
        enemyspeed = -enemyspeed;
    }
    context.drawImage(enemy, enemyx, enemyy, 100, 100);
}
var hp1 = 1;
function hp() {

}
var wind = document.createElement("img");
wind.setAttribute("src", "Images/wind.jpg");
var sand = document.createElement("img");
sand.setAttribute("src", "Images/sand.jpg");
var time100 ;
var enemyAbillityImg = document.createElement("img");
enemyAbillityImg.setAttribute("src", "Images/fire.jpg");
var bulletfps = 60;
var rnd; 
//היכולת של האויב
function enemyAbillity() {
    rnd = Math.floor(Math.random() * 1500) + 3500; 
    la = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletex, bulletey - 20, 21, 50);
    setInterval(createenemystartpoint, rnd);
    drawenemybullet();
    var handle10 = setInterval("enemyabillitymove();", 1000 / bulletfps);
}
var endimage = document.createElement("img");
endimage.setAttribute("src", "Images/explosain.jpg");
var la = 1;
var hp14 = 10;
var change3 = 2.5;
var time200 = 1000 / bulletfps;
//תזוזה של הכדור של האויב
function enemyabillitymove() {
    var hp13 = document.getElementById("healthhero");
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var herohealth = document.getElementById("p3");

    if (bulletey + 40 < heroy || herox + 1 > bulletex + 20 || herox + 99 < bulletex) {
        context.clearRect(bulletex, bulletey - 20, 21, 40);
        bulletey += 2.5;
        drawenemybullet();
        if (bulletey + 40 >= 630)
            context.clearRect(bulletex, bulletey - 20, 21, 40);
    }
    else {
        if (la == 1) {
            hp13.value -= damage20;
            herohealth.innerHTML = "your health: " + hp13.value;
            la++;
        }
        bulletfps = bulletfps * 15;
        context.clearRect(bulletex, bulletey - 20, 21, 40);
        bulletey = 700;
        if (hp13.value <= 0) {
            window.location.href = "endhtml.html";
        }
    }
}
//לצייר את הכדור של האויב
function drawenemybullet() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(bulletex, bulletey - 20, 20, 40);
    context.drawImage(enemyAbillityImg, bulletex, bulletey - 20, 20, 40);
}
var time20 = 4000;
var azula1 = document.createElement("img");
azula1.setAttribute("src", "Images/Azula.png");
var azulacoords = {
    x : 0,
    y : 250,
    width : 50,
    height: 50,
    xbullet: 50,
    ybullet: 275,
    bulletwidth: 10,
    bulletheight:10,
}
//תזוזה של אויב שני
function moveeazula1() {
    var azula1fps = 60;
    setInterval(restartazula1, 1000 / azula1fps);
}
//תזוזה של אויב שני
function restartazula1() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azulacoords.x, azulacoords.y, azulacoords.width, azulacoords.height);
    azulacoords.y += enemyspeed;
    if (azulacoords.y > 580 || azulacoords.y < 0) {
        enemyspeed = -enemyspeed;
    }
    context.drawImage(azula1, azulacoords.x, azulacoords.y, azulacoords.width, azulacoords.height);
}
var azula2 = document.createElement("img");
azula2.setAttribute("src", "Images/azula2.jpg");
var azula2coords = {
    x: 950,
    y: 250,
    width: 50,
    height: 50,
    xbullet: 1150,
    ybullet: 275,
    bulletwidth: 10,
    bulletheight: 10,
}
//תזוזה של אויב שלישי
function moveeazula2() {
    var azula2fps = 60;
    setInterval(restartazula2, 1000 / azula2fps);
}
//תזוזה של אויב שלישי
function restartazula2() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azula2coords.x, azula2coords.y, azula2coords.width, azula2coords.height);
    azula2coords.y += enemyspeed;
    if (azula2coords.y >= 580 || azula2coords.y <= 0) {
        enemyspeed = -enemyspeed;
    }
    context.drawImage(azula2, azula2coords.x, azula2coords.y, azula2coords.width, azula2coords.height);

}
//אויב שני תזוזת כדור
function azula1abillitymove() {
    var hp13 = document.getElementById("healthhero");
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var herohealth = document.getElementById("p3");
    if (azulacoords.xbullet < herox || heroy + 0.5 > azulacoords.ybullet + 20 || heroy + 99 < azulacoords.ybullet) {
        context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
        azulacoords.xbullet += 2;
        drawazulabullet();
        if (azulacoords.xbullet + 20 >= 900)
            context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
    }
    else {
        console.log("lol");
        if (lf == 1) {
            hp13.value -= damage20;
            herohealth.innerHTML = "your health: " + hp13.value;
            lf++;
        }
        context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
        azulacoords.xbullet = 700;
        if (hp13.value <= 0) {
            window.location.href = "endhtml.html";
        }
    }
}
var azulabulletimg = document.createElement("img");
azulabulletimg.setAttribute("src", "Images/azulaflame.jpg");
//אויב שני יצירת הכדור
function drawazulabullet() {    
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
    context.drawImage(azulabulletimg, azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
}
var lf;
var rnd1 = 1;
//יצירת נקודת התחלה של הכדור של האויב השני
function createazulastartpoint() {
    rnd1 = Math.floor(Math.random() * 1500) + 3500;
    lf = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
    azulacoords.xbullet = azulacoords.x + 50;
    azulacoords.ybullet = azulacoords.y + 25;
}
//הפעלה של היכולת עצמה
function azulaAbillity() {
    rnd1 = Math.floor(Math.random() * 1500) + 3500;
    lf = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azulacoords.xbullet, azulacoords.ybullet, azulacoords.bulletwidth, azulacoords.bulletheight);
    setInterval(createazulastartpoint, rnd1);
    drawazulabullet();
    setInterval("azula1abillitymove();", 1000 / bulletfps);
}
//אויב שלישי תזוזת כדור
function azula2abillitymove() {
    var hp13 = document.getElementById("healthhero");
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var herohealth = document.getElementById("p3");
    if (azula2coords.xbullet > herox + 100 || heroy + 0.5 > azula2coords.ybullet + 20 || heroy + 99 < azula2coords.ybullet) {
        context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
        azula2coords.xbullet -= 2.5;
        drawazula2bullet();
        if (azula2coords.xbullet + 20 <= 0)
            context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
    }
    else {
        console.log("lol");
        if (lo == 1) {
            hp13.value -= damage20;
            herohealth.innerHTML = "your health: " + hp13.value;
            lo++;
        }
        context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
        azula2coords.xbullet = -100;
        if (hp13.value <= 0) {
            window.location.href = "endhtml.html";
        }
    }
}
var azula2bulletimg = document.createElement("img");
azula2bulletimg.setAttribute("src", "Images/azula2flame.jpg");
//אויב שלישי יצירת הכדור
function drawazula2bullet() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
    context.drawImage(azula2bulletimg, azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);

}
var lo;
var rnd2 = 1;
//יצירת נקודת התחלה של הכדור של האויב השלישי
function createazula2startpoint() {
    rnd2 = Math.floor(Math.random() * 1500) + 3500;
    lo = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
    azula2coords.xbullet = azula2coords.x ;
    azula2coords.ybullet = azula2coords.y + 25;
}
//הפעלה של היכולת עצמה
function azula2Abillity() {
    rnd2 = Math.floor(Math.random() * 1500) + 3500;
    lo = 1;
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.clearRect(azula2coords.xbullet, azula2coords.ybullet, azula2coords.bulletwidth, azula2coords.bulletheight);
    setInterval(createazula2startpoint, rnd2);
    drawazula2bullet();
    setInterval("azula2abillitymove();", 1000 / bulletfps);
}
var change11 = 10;
var change12 = 0;
var change13 = 25;
var rnd2;
var rnd3;
// יכולת שנייה של גיבור
function heal() {
    var hp13 = document.getElementById("healthhero")
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var herohealth = document.getElementById("p3");
    var l = document.getElementById("l");
    change11 = 10;
    change12 = 0;
    change13 = 25;
    fg = 1;
    if (hit == 6) {
        hp13.value += hp13.value * 0.3;
        herohealth.innerHTML = "your health: " + hp13.value;
        for (var p = 1; p <= 1.5; p++) {
            for (var q = 1; q <= 2; q++) {
                change12 = 0;
                change12 += 40;
                context.beginPath();
                context.rect(herox - change11, heroy + change12, 10, 40);
                context.fillStyle = "green";
                context.fill();
                change12 = 15;
                change12 += 40;
                context.beginPath();
                context.rect(herox - change13, heroy + change12, 40, 10);
                context.fillStyle = "green";
                context.fill();
                change11 -= 100;
                change13 -= 100;
                change12 += 40;              
            }
        }
        setInterval(drawhero, 1500);
        hit = 0;
        l.innerHTML = "second abillity: hit " + (6 - hit) + " more to activate!";
    } 
}
var fg = 1;
function drawhero() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    if (fg == 1) {
        context.clearRect(herox - 50, heroy - 50, 200, 150);
        context.drawImage(imghero, herox, heroy, 100, 100);
        fg++;
    }
}
// יכולת שלישית של גיבור
var bomb = document.createElement("img");
bomb.setAttribute("src", "Images/bomb.jpg");
function hitbomb1() {
    var l2 = document.getElementById("l2");
    var healthenemy = document.getElementById("healthenemy");
    var enemyhealth = document.getElementById("p4");
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    if (hitbomb == 10) {
        getenemycoords();
        context.drawImage(bomb, bombx, bomby, 100, 100);
        context.clearRect(bombx, bomby, 100, 100);
        healthenemy.value -= 90;
        enemyhealth.innerHTML = "enemy health:" + healthenemy.value;
        hitbomb = 0;
        l2.innerHTML = "third abillity: hit " + (10 - hitbomb) + " more to activate!";
    }
}
// איתחול שלבים ובחירות
function clearlevel() {
    sessionStorage.clear();
}

