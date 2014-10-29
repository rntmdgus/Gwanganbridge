var count;
var count1;
var cuont2;
var count3;
var count4;
var r;
var i;
var bg;

var trailX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var trailY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function setup(){
   bg = loadImage("1.jpg");
   createCanvas(1920,830);

   r=0;
   i=0;
   size=[120,70,100];
   size1=[180,100,150];
   size2=[150,80,120];
   size3=[100,90,130];
   size4=[100,80,140];
   size5=[170,110,140];
   size6=[80,60,90];

   //러버덕
   count=1920;
   //자동차1
   count1=1920;
   //지느러미
   count2=1920;
   count3=1920;
   //자동차2
   count4=2000;
}


function draw(){
   background(bg);  

   noStroke();
   noCursor();


//ěëě°¨
   drawCar(count1,437);
   count1=count1+5;
   if(count1>2000){
   count1=0;
} 

//ěëě°¨
   drawCar1(count4,437);
   count4=count4+12;
   if(count4>2000){
   count4=0;
} 

   //eĹ?
   fill(Math.random()*255,Math.random()*255,Math.random()*255,70);
   rect(20,180,17,17);
   rect(120,80,15,15);
   rect(180,200,13,13);
   rect(270,100,15,15);
   rect(400,10,18,18);
   rect(500,200,12,12);
   rect(650,80,15,15);
   rect(800,350,14,14);
   rect(950,140,12,12);
   rect(1000,20,15,15);
   rect(1100,190,18,18);
   rect(1300,250,16,16);
   rect(1450,50,15,15);
   rect(1650,200,14,14);
   rect(1700,50,15,15);
   rect(1800,130,17,17);
   rect(1900,220,13,13);

   //?Â¸Â°e??0
   fill(118,199,184);
   rect(410,290,10,60);
   fill(118,199,184);
   rect(410,350,10,50);
   fill(118,199,184);
   rect(410,400,10,50);
   fill(118,199,184);
   rect(410,290,20,10);
   rect(410,490,10,80);

   //?Â¸Â°e??1
   fill(44,169,199);
   rect(420,290,10,60);
   fill(44,169,199);
   rect(420,350,10,50);
   fill(44,169,199);
   rect(420,400,10,50);
   fill(44,169,199);
   rect(420,290,20,10);
   rect(420,490,10,80);

   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(420,280,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226); 

   fill(94,86,75);
   rect(400,570,50,10);
   fill(53,45,36);
   rect(395,580,60,20);

   //?Â¸Â°e??2
   fill(27,138,180);
   rect(430,290,10,60);
   fill(27,138,180);
   rect(430,350,10,50);
   fill(27,138,180);
   rect(430,400,10,50);
   fill(27,138,180);
   fill(27,138,180);
   rect(430,500,10,70);

   //e?Â¤e?????1
   fill(193,191,137);
   rect(400,300,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);     
   rect(390,300,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);  
   rect(380,310,10,140);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(370,310,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(360,320,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(350,320,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(340,330,10,120);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(330,330,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(320,340,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   rect(310,340,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   fill(193,191,137);
   rect(300,350,10,100);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(290,350,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(280,360,10,10);
   fill(560,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(270,360,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   fill(179,151,112);
   rect(260,370,10,80);
   fill(179,151,112);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);    
   rect(250,370,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);   
   rect(240,380,10,10);
   fill(179,151,112);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(230,380,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);   
   rect(220,390,10,60);
   fill(179,151,112);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253);   
   rect(210,390,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);   
   fill(179,151,112);
   rect(200,400,10,10);
   fill(179,151,112);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(190,400,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);
   rect(180,410,10,40);
   fill(169,104,113);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(170,410,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);   
   rect(160,420,10,10);
   fill(169,104,113);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);    
   rect(150,420,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);    
   fill(169,104,113);     
   rect(140,430,10,20);
   fill(169,104,113);  
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(130,430,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);     
   rect(120,440,10,10);
   fill(169,104,113);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   rect(110,440,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);     
   rect(100,440,10,10);
   fill(169,104,113);



   //e?Â¤e?????2
   fill(193,191,137);
   rect(440,300,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);     
   rect(450,300,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   fill(193,191,137);  
   rect(460,310,10,140);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   rect(470,310,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   fill(193,191,137);
   rect(480,320,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(490,320,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(500,330,10,120);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(510,330,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(520,340,10,10);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(530,340,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(193,191,137);
   rect(540,350,10,100);
   fill(193,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   rect(550,350,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);  
   fill(193,191,137);
   rect(560,360,10,10);
   fill(560,191,137);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(570,360,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);
   rect(580,370,10,80);
   fill(179,151,112);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);   
   rect(590,370,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);   
   rect(600,380,10,10);
   fill(179,151,112);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(610,380,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);   
   rect(620,390,10,60);
   fill(179,151,112);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(630,390,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(179,151,112);
   rect(640,400,10,10);
   fill(179,151,112);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(650,400,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);
   rect(660,410,10,40);
   fill(169,104,113);   
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(670,410,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);    
   fill(169,104,113);   
   rect(680,420,10,10);
   fill(169,104,113);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   rect(690,420,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);     
   rect(700,430,10,20);
   fill(169,104,113);  
   fill(Math.random()*17,Math.random()*48,Math.random()*253);    
   rect(710,430,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);     
   rect(720,440,10,10);
   fill(169,104,113);
   fill(Math.random()*17,Math.random()*48,Math.random()*253);   
   rect(730,440,10,10);
   fill(Math.random()*17,Math.random()*48,Math.random()*253); 
   fill(169,104,113);     
   rect(740,440,10,10);
   fill(169,104,113);


   //e?Â¤e?????3
   fill(193,191,137);
   rect(1560,320,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   rect(1550,320,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);  
   rect(1540,330,10,120);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1530,330,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1520,340,10,00);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1510,340,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1500,350,10,100);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1490,350,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1480,360,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1470,360,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1460,370,10,80);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1450,370,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1440,380,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1430,380,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);
   rect(1420,390,10,60);
   fill(179,151,112);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   rect(1410,390,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);   
   rect(1400,400,10,10);
   fill(179,151,112);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1390,400,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);   
   rect(1380,410,10,40);
   fill(179,151,112);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1370,410,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);
   rect(1360,420,10,10);
   fill(179,151,112);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1350,420,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(169,104,113);
   rect(1340,430,10,10);
   fill(169,104,113);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1330,430,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   fill(169,104,113);   
   rect(1320,440,10,10);
   fill(169,104,113);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1310,440,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   fill(169,104,113);     
   rect(1300,440,10,10);
   fill(169,104,113);  


   //e?Â¤e?????4
   fill(193,191,137);
   rect(1600,320,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   rect(1610,320,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);  
   rect(1620,330,10,120);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1630,330,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1640,340,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1650,340,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1660,350,10,100);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1670,350,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1680,360,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1690,360,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1700,370,10,80);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1710,370,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(193,191,137);
   rect(1720,380,10,10);
   fill(193,191,137);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1730,380,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);
   rect(1740,390,10,60);
   fill(179,151,112);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   rect(1750,390,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);   
   rect(1760,400,10,10);
   fill(179,151,112);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1770,400,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);   
   rect(1780,410,10,40);
   fill(179,151,112);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1790,410,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(179,151,112);
   rect(1800,420,10,10);
   fill(179,151,112);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1810,420,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   fill(169,104,113);
   rect(1820,430,10,10);
   fill(169,104,113);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1830,430,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);     
   fill(169,104,113);   
   rect(1840,440,10,10);
   fill(169,104,113);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1850,440,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   fill(169,104,113);     
   rect(1860,440,10,10);
   fill(169,104,113);  

   //1eË??Â§Â¸e?Â¤e??e?Â¸i??
   fill(125,107,105);
   rect(0,450,20,10);
   fill(125,107,105);
   fill(251,228,158);    
   rect(20,450,10,10);
   fill(251,228,158);   
   fill(125,107,105);    
   rect(30,450,30,10);
   fill(125,107,105);
   fill(251,228,158);  
   rect(60,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(70,450,30,10);
   fill(125,107,105);  
   fill(251,228,158); 
   rect(100,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);      
   rect(110,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(140,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);      
   rect(150,450,30,10);
   fill(125,107,105);    
   fill(251,228,158);    
   rect(180,450,10,10);
   fill(251,228,158);   
   fill(125,107,105);      
   rect(190,450,30,10);
   fill(125,107,105);
   fill(251,228,158);   
   rect(220,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(230,450,30,10);
   fill(125,107,105);  
   fill(251,228,158); 
   rect(260,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(270,450,30,10);
   fill(125,107,105);
   fill(251,228,158);   
   rect(300,450,10,10);
   fill(251,228,158); 
   fill(125,107,105); 
   rect(310,450,30,10);
   fill(125,107,105); 
   fill(251,228,158);   
   rect(340,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(350,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(380,450,10,10);
   fill(125,107,105);    
   rect(390,450,30,10);
   fill(125,107,105); 
   rect(420,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(430,450,30,10);
   fill(125,107,105);
   fill(251,228,158);     
   rect(460,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(470,450,30,10);
   fill(125,107,105);  
   fill(251,228,158);  
   rect(500,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(510,450,30,10);
   fill(125,107,105);
   fill(251,228,158);  
   rect(540,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(550,450,30,10);
   fill(125,107,105);
   fill(251,228,158);   
   rect(580,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(590,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(620,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);      
   rect(630,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(660,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(670,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(700,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(710,450,30,10);
   fill(125,107,105);
   fill(251,228,158);       
   rect(740,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(750,450,30,10);
   fill(125,107,105);
   fill(251,228,158);  
   rect(780,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(790,450,30,10);
   fill(125,107,105);   
   fill(251,228,158); 
   rect(820,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);  
   rect(830,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(860,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(870,450,30,10);
   fill(125,107,105);
   fill(251,228,158);    
   rect(900,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(910,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(940,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(950,450,30,10);
   fill(125,107,105); 
   fill(251,228,158); 
   rect(980,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(990,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1020,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1030,450,30,10);
   fill(125,107,105); 
   fill(251,228,158); 
   rect(1060,450,10,10);
   fill(251,228,158); 
   fill(125,107,105); 
   rect(1070,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1100,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(1110,450,30,10);
   fill(125,107,105);   
   fill(251,228,158); 
   rect(1140,450,10,10);
   fill(251,228,158);   
   fill(125,107,105);      
   rect(1150,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1180,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1190,450,30,10);
   fill(125,107,105); 
   fill(251,228,158); 
   rect(1220,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(1230,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1260,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(1270,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1300,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1310,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1340,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(1350,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1380,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);  
   rect(1390,450,30,10);
   fill(125,107,105);
   fill(251,228,158);   
   rect(1420,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(1430,450,30,10);
   fill(125,107,105);
   fill(251,228,158);  
   rect(1460,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1470,450,30,10);
   fill(125,107,105);   
   fill(251,228,158); 
   rect(1500,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(1510,450,30,10);
   fill(125,107,105);
   fill(251,228,158);   
   rect(1540,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1550,450,30,10);
   fill(125,107,105); 
   rect(1580,450,10,10);
   fill(125,107,105);    
   rect(1590,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1620,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1630,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1660,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);  
   rect(1670,450,30,10);
   fill(125,107,105); 
   fill(251,228,158);  
   rect(1700,450,10,10);
   fill(251,228,158); 
   fill(125,107,105); 
   rect(1710,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1740,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1750,450,30,10);
   fill(125,107,105); 
   fill(251,228,158); 
   rect(1780,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);    
   rect(1790,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1820,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(1830,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1860,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);     
   rect(1870,450,30,10);
   fill(125,107,105);
   fill(251,228,158); 
   rect(1900,450,10,10);
   fill(251,228,158); 
   fill(125,107,105);   
   rect(1910,450,30,10);
   fill(125,107,105);



  //2eË??Â§Â¸ e?Â¸i??
   fill(224,87,77);
   rect(20,460,10,10);
   rect(60,460,10,10);
   rect(100,460,10,10);
   rect(140,460,10,10);
   rect(180,460,10,10);
   rect(220,460,10,10);
   rect(260,460,10,10);
   rect(300,460,10,10);
   rect(340,460,10,10);   
   rect(380,460,10,10);
   rect(420,460,10,10);
   rect(460,460,10,10);
   rect(500,460,10,10);
   rect(540,460,10,10);
   rect(580,460,10,10); 
   rect(620,460,10,10);
   rect(660,460,10,10);
   rect(700,460,10,10);
   rect(740,460,10,10);
   rect(780,460,10,10);
   rect(820,460,10,10);
   rect(860,460,10,10);
   rect(900,460,10,10);
   rect(940,460,10,10);   
   rect(980,460,10,10);
   rect(1020,460,10,10);
   rect(1060,460,10,10);
   rect(1100,460,10,10);
   rect(1140,460,10,10);
   rect(1180,460,10,10); 
   rect(1220,460,10,10);
   rect(1260,460,10,10);
   rect(1300,460,10,10);
   rect(1340,460,10,10);
   rect(1380,460,10,10);
   rect(1420,460,10,10);
   rect(1460,460,10,10);
   rect(1500,460,10,10);
   rect(1540,460,10,10);   
   rect(1580,460,10,10);
   rect(1620,460,10,10);
   rect(1660,460,10,10);
   rect(1700,460,10,10);
   rect(1740,460,10,10);
   rect(1780,460,10,10); 
   rect(1820,460,10,10);
   rect(1860,460,10,10);
   rect(1900,460,10,10);   

  //3eË??Â§Â¸ e?Â¸i??
   fill(224,87,77);
   rect(10,470,10,10);
   rect(30,470,10,10);  
   rect(50,470,10,10);  
   rect(70,470,10,10);  
   rect(90,470,10,10);  
   rect(110,470,10,10);  
   rect(130,470,10,10);
   rect(150,470,10,10);  
   rect(170,470,10,10);  
   rect(190,470,10,10);  
   rect(210,470,10,10);  
   rect(230,470,10,10);  
   rect(250,470,10,10);  
   rect(270,470,10,10);  
   rect(290,470,10,10);  
   rect(310,470,10,10);  
   rect(330,470,10,10);  
   rect(350,470,10,10);  
   rect(370,470,10,10);  
   rect(390,470,10,10);  
   rect(410,470,10,10);  
   rect(430,470,10,10);  
   rect(450,470,10,10);  
   rect(470,470,10,10);  
   rect(490,470,10,10);  
   rect(510,470,10,10);  
   rect(530,470,10,10);
   rect(550,470,10,10);  
   rect(570,470,10,10);  
   rect(590,470,10,10);  
   rect(610,470,10,10);  
   rect(630,470,10,10);  
   rect(650,470,10,10);  
   rect(670,470,10,10);  
   rect(690,470,10,10);  
   rect(710,470,10,10);  
   rect(730,470,10,10);  
   rect(750,470,10,10);  
   rect(770,470,10,10);  
   rect(790,470,10,10);  
   rect(810,470,10,10);  
   rect(830,470,10,10);  
   rect(850,470,10,10);  
   rect(870,470,10,10);  
   rect(890,470,10,10);  
   rect(910,470,10,10);  
   rect(930,470,10,10);
   rect(950,470,10,10);  
   rect(970,470,10,10);  
   rect(990,470,10,10);  
   rect(1010,470,10,10);  
   rect(1030,470,10,10);  
   rect(1050,470,10,10);  
   rect(1070,470,10,10);  
   rect(1090,470,10,10);  
   rect(1110,470,10,10);  
   rect(1130,470,10,10);  
   rect(1150,470,10,10);  
   rect(1170,470,10,10);  
   rect(1190,470,10,10);  
   rect(1210,470,10,10);  
   rect(1230,470,10,10);  
   rect(1250,470,10,10);  
   rect(1270,470,10,10);  
   rect(1290,470,10,10);  
   rect(1310,470,10,10);  
   rect(1330,470,10,10);  
   rect(1350,470,10,10);  
   rect(1370,470,10,10);  
   rect(1390,470,10,10);  
   rect(1410,470,10,10);  
   rect(1430,470,10,10);
   rect(1450,470,10,10);  
   rect(1470,470,10,10);  
   rect(1490,470,10,10);  
   rect(1510,470,10,10);  
   rect(1530,470,10,10);  
   rect(1550,470,10,10);  
   rect(1570,470,10,10);  
   rect(1590,470,10,10);  
   rect(1610,470,10,10);  
   rect(1630,470,10,10);  
   rect(1650,470,10,10);  
   rect(1670,470,10,10);  
   rect(1690,470,10,10);  
   rect(1710,470,10,10);  
   rect(1730,470,10,10);  
   rect(1750,470,10,10);  
   rect(1770,470,10,10);  
   rect(1790,470,10,10);  
   rect(1810,470,10,10);  
   rect(1830,470,10,10);  
   rect(1850,470,10,10);  
   rect(1870,470,10,10);  
   rect(1890,470,10,10);  
   rect(1910,470,10,10);  
   rect(1930,470,10,10);  



  //4eË??Â§Â¸ e?Â¸i??
   fill(224,87,77);
   rect(0,480,10,10);
   rect(40,480,10,10);
   rect(80,480,10,10);
   rect(120,480,10,10);  
   rect(160,480,10,10);
   rect(200,480,10,10);
   rect(240,480,10,10);
   rect(280,480,10,10);
   rect(320,480,10,10);
   rect(360,480,10,10);
   rect(400,480,10,10);
   rect(440,480,10,10);
   rect(480,480,10,10);
   rect(520,480,10,10);
   rect(560,480,10,10);
   rect(600,480,10,10);            
   rect(640,480,10,10);
   rect(680,480,10,10);
   rect(720,480,10,10);  
   rect(760,480,10,10);
   rect(800,480,10,10);
   rect(840,480,10,10);
   rect(880,480,10,10);
   rect(920,480,10,10);
   rect(960,480,10,10);
   rect(1000,480,10,10);
   rect(1040,480,10,10);
   rect(1080,480,10,10);
   rect(1120,480,10,10);
   rect(1160,480,10,10);
   rect(1200,480,10,10);   
   rect(1240,480,10,10);
   rect(1280,480,10,10);
   rect(1320,480,10,10);  
   rect(1360,480,10,10);
   rect(1400,480,10,10);
   rect(1440,480,10,10);
   rect(1480,480,10,10);
   rect(1520,480,10,10);
   rect(1560,480,10,10);
   rect(1600,480,10,10);
   rect(1640,480,10,10);
   rect(1680,480,10,10);
   rect(1720,480,10,10);   
   rect(1760,480,10,10);
   rect(1800,480,10,10);
   rect(1840,480,10,10);  
   rect(1880,480,10,10);
   rect(1920,480,10,10);


//ëśëš
   var t=(new Date()%5000)/5000;
   light(Math.abs(0.5-t)*800,50);
   var t=(new Date()%4000)/4000;
   light(Math.abs(0.5-t)*800,50);
   var t=(new Date()%3000)/3000;
   light(Math.abs(0.5-t)*800,50);


   var t=(new Date()%5300)/5300;
   light1(Math.abs(0.5-t)*800,50);
   var t=(new Date()%3800)/3800;
   light1(Math.abs(0.5-t)*800,50);
   var t=(new Date()%3400)/3400;
   light1(Math.abs(0.5-t)*800,50);


   var t=(new Date()%5200)/5200;
   light2(Math.abs(0.5-t)*800,50);
   var t=(new Date()%3800)/3800;
   light2(Math.abs(0.5-t)*800,50);
   var t=(new Date()%3500)/3500;
   light2(Math.abs(0.5-t)*800,50);


   var t=(new Date()%4800)/4800;
   light3(Math.abs(0.5-t)*800,50);
   var t=(new Date()%4100)/4100;
   light3(Math.abs(0.5-t)*800,50);
   var t=(new Date()%2900)/2900;
   light3(Math.abs(0.5-t)*800,50);


  //5eË??Â§Â¸ e?Â¸i??
   fill(75,66,57);
   rect(0,490,20,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(20,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);   
   rect(30,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(60,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(70,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(100,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57); 
   rect(110,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(140,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);  
   rect(150,490,30,10);
   fill(75,66,57);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(180,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(190,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(220,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(230,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(260,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(270,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(300,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);      
   rect(310,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(340,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(350,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(380,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(390,490,30,10);
   fill(75,66,57); 
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(420,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(430,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(460,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(470,490,30,10);
   fill(75,66,57);   
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(500,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(510,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(540,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(550,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(580,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(590,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(620,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(630,490,30,10);
   fill(75,66,57); 
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(660,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(670,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(700,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(710,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(740,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(750,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(780,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(790,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(820,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(830,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(860,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(870,490,30,10);
   fill(75,66,57); 
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(900,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(910,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(940,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(950,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(980,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(990,490,30,10);
   fill(75,66,57); 
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1020,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1030,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1060,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1070,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1100,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1110,490,30,10);
   fill(75,66,57);    
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1140,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1150,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1180,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1190,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1220,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1230,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1260,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);      
   rect(1270,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);
   rect(1300,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);       
   fill(75,66,57);     
   rect(1310,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1340,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1350,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1380,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1390,490,30,10);
   fill(75,66,57); 
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1420,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);  
   rect(1430,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1460,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1470,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1500,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1510,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1540,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1550,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1580,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1590,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1620,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);   
   rect(1630,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1660,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);  
   rect(1670,490,30,10);
   fill(75,66,57);  
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1700,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57); 
   rect(1710,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1740,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1750,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1780,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1790,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1820,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);    
   rect(1830,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1860,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);     
   rect(1870,490,30,10);
   fill(75,66,57);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);    
   rect(1900,490,10,10);
   fill(Math.random()*215,Math.random()*82,Math.random()*226);   
   fill(75,66,57);  
   rect(1910,490,30,10);
   fill(75,66,57);

   //?Â¸Â°e??3
   fill(118,199,184);
   rect(1570,310,10,40);
   fill(118,199,184);
   rect(1570,350,10,50);
   fill(118,199,184);
   rect(1570,400,10,50);
   rect(1570,500,10,70);

   fill(122,104,102);
   rect(1560,570,50,10);

   fill(Math.random()*215,Math.random()*82,Math.random()*226);  
   rect(1580,300,10,10);

   fill(40,40,40);
   rect(1555,580,60,20);


   //?Â¸Â°e??4
   fill(63,170,150);
   rect(1580,310,10,40);
   fill(63,170,150);
   rect(1580,350,10,50);
   fill(63,170,150);
   rect(1580,400,10,50);
   rect(1580,500,10,70);

   //?Â¸Â°e??5
   fill(32,137,150)
   rect(1590,310,10,40);
   fill(32,137,150)
   rect(1590,350,10,50);
   fill(32,137,150);
   rect(1590,400,10,50);
   rect(1590,500,10,70);

   //?Â°Âe??e??

   fill(215,103,0);    
   rect(20,420,10,10);
   fill(98,103,94);  
   fill(98,103,94);    
   rect(20,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(820,420,10,10); 
   fill(98,103,94);  
   rect(820,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(900,420,10,10);
   fill(98,103,94);   
   rect(900,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(980,420,10,10);
   fill(98,103,94);   
   rect(980,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(1060,420,10,10);
   fill(98,103,94);  
   rect(1060,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(1140,420,10,10);
   fill(98,103,94);  
   rect(1140,430,10,20);
   fill(98,103,94);  
   fill(215,103,0);    
   rect(1220,420,10,10);
   fill(98,103,94);  
   rect(1220,430,10,20);
   fill(98,103,94);  
 

   //eÂ°?e?Â¤e????Â¨

   fill(Math.random()*20,Math.random()*18,Math.random()*19,50);
   rect(0,600,200,250);
   fill(Math.random()*17,Math.random()*17,Math.random()*51,50);
   rect(20,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(40,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(60,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(80,600,200,250);
   fill(Math.random()*49,Math.random()*71,Math.random()*109,50);
   rect(100,600,200,250);
   fill(Math.random()*80,Math.random()*71,Math.random()*109,50);
   rect(120,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*128,50);
   rect(140,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*128,50);
   rect(160,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*188,50);
   rect(180,600,200,250);
   fill(Math.random()*49,Math.random()*106,Math.random()*112,50);
   rect(200,600,200,250);
   fill(Math.random()*49,Math.random()*106,Math.random()*112,50);
   rect(220,600,200,250);
   fill(Math.random()*50,Math.random()*144,Math.random()*170,50);
   rect(240,600,200,250);
   fill(Math.random()*78,Math.random()*175,Math.random()*145,50);
   rect(260,600,200,250);   
   fill(Math.random()*77,Math.random()*143,Math.random()*111,50);
   rect(280,600,200,250);
   fill(Math.random()*79,Math.random()*179,Math.random()*207,50);
   rect(300,600,200,250);
   fill(Math.random()*79,Math.random()*179,Math.random()*207,50);
   rect(320,600,200,250);
   fill(Math.random()*141,Math.random()*211,Math.random()*215,50);
   rect(340,600,200,250);
   fill(Math.random()*172,Math.random()*239,Math.random()*245,50);
   rect(360,600,200,250);
   fill(Math.random()*179,Math.random()*221,Math.random()*221,50);
   rect(380,600,200,250);
   fill(Math.random()*185,Math.random()*238,Math.random()*241,50);
   rect(400,600,200,250);
   fill(Math.random()*255,Math.random()*255,Math.random()*255,50);
   rect(420,600,200,250);

   fill(Math.random()*185,Math.random()*238,Math.random()*241,50);
   rect(440,600,200,250);
   fill(Math.random()*179,Math.random()*221,Math.random()*221,50);
   rect(460,600,200,250);
   fill(Math.random()*172,Math.random()*239,Math.random()*245,50);
   rect(480,600,200,250);
   fill(Math.random()*141,Math.random()*211,Math.random()*215,50);
   rect(500,600,200,250);
   fill(Math.random()*79,Math.random()*179,Math.random()*207,50);
   rect(500,600,200,250);
   fill(Math.random()*79,Math.random()*179,Math.random()*207,50);
   rect(520,600,200,250);
   fill(Math.random()*77,Math.random()*143,Math.random()*111,50);
   rect(540,600,200,250);
   fill(Math.random()*78,Math.random()*175,Math.random()*145,50);
   rect(560,600,200,250);
   fill(Math.random()*50,Math.random()*144,Math.random()*170,50);
   rect(580,600,200,250);
   fill(Math.random()*49,Math.random()*106,Math.random()*112,50);
   rect(600,600,200,250);
   fill(Math.random()*49,Math.random()*106,Math.random()*112,50);
   rect(600,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*188,50);
   rect(620,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*128,50);
   rect(640,600,200,250);
   fill(Math.random()*51,Math.random()*85,Math.random()*128,50);
   rect(660,600,200,250);
   fill(Math.random()*80,Math.random()*71,Math.random()*109,50);
   rect(680,600,200,250);
   fill(Math.random()*49,Math.random()*71,Math.random()*109,50);
   rect(700,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(720,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(740,600,200,250);
   fill(Math.random()*34,Math.random()*51,Math.random()*85,50);
   rect(760,600,200,250);
   fill(Math.random()*51,Math.random()*51,Math.random()*85,50);
   rect(780,600,200,250);
   fill(Math.random()*75,Math.random()*48,Math.random()*105,50);
   rect(800,600,200,250);

   fill(Math.random()*133,Math.random()*57,Math.random()*76,50);
   rect(820,600,200,250);
   fill(Math.random()*151,Math.random()*57,Math.random()*88,50);
   rect(840,600,200,250);
   fill(Math.random()*112,Math.random()*90,Math.random()*91,50);
   rect(860,600,200,250);
   fill(Math.random()*140,Math.random()*52,Math.random()*98,50);
   rect(880,600,200,250);
   fill(Math.random()*157,Math.random()*68,Math.random()*73,50);
   rect(900,600,200,250);
   fill(Math.random()*164,Math.random()*57,Math.random()*147,50);
   rect(920,600,200,250);
   fill(Math.random()*144,Math.random()*72,Math.random()*117,50);
   rect(940,600,200,250);
   fill(Math.random()*113,Math.random()*50,Math.random()*62,50);
   rect(960,600,200,250);
   fill(Math.random()*127,Math.random()*71,Math.random()*73,50);
   rect(980,600,200,250);
   fill(Math.random()*59,Math.random()*46,Math.random()*75,50);
   rect(1000,600,200,250);
   fill(Math.random()*136,Math.random()*81,Math.random()*83,50);
   rect(1020,600,200,250);
   fill(Math.random()*115,Math.random()*67,Math.random()*77,50);
   rect(1040,600,200,250);
   fill(Math.random()*127,Math.random()*71,Math.random()*78,50);
   rect(1060,600,200,250);
   fill(Math.random()*118,Math.random()*54,Math.random()*70,50);
   rect(1080,600,200,250);
   fill(Math.random()*83,Math.random()*73,Math.random()*88,50);
   rect(1100,600,200,250);
   fill(Math.random()*98,Math.random()*57,Math.random()*77,50);
   rect(1120,600,200,250);
   fill(Math.random()*156,Math.random()*106,Math.random()*96,50);
   rect(1140,600,200,250);
   fill(Math.random()*134,Math.random()*81,Math.random()*84,50);
   rect(1160,600,200,250);
   fill(Math.random()*117,Math.random()*138,Math.random()*116,50);
   rect(1180,600,200,250);
   fill(Math.random()*169,Math.random()*109,Math.random()*97,50);
   rect(1200,600,200,250);
   fill(Math.random()*126,Math.random()*99,Math.random()*91,50);
   rect(1220,600,200,250);
   fill(Math.random()*107,Math.random()*54,Math.random()*140,50);
   rect(1240,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*140,50);
   rect(1260,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*182,50);
   rect(1280,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*147,50);
   rect(1300,600,200,250);
   fill(Math.random()*192,Math.random()*48,Math.random()*26,50);
   rect(1320,600,200,250);
   fill(Math.random()*192,Math.random()*88,Math.random()*70,50);
   rect(1340,600,200,250);
   fill(Math.random()*192,Math.random()*115,Math.random()*70,50);
   rect(1360,600,200,250);
   fill(Math.random()*192,Math.random()*115,Math.random()*77,50);
   rect(1380,600,200,250);
   fill(Math.random()*192,Math.random()*143,Math.random()*26,50);
   rect(1400,600,200,250);
   fill(Math.random()*192,Math.random()*194,Math.random()*26,50);
   rect(1420,600,200,250);
   fill(Math.random()*234,Math.random()*224,Math.random()*89,50);
   rect(1440,600,200,250);
   fill(Math.random()*182,Math.random()*158,Math.random()*117,50);
   rect(1460,600,200,250);
   fill(Math.random()*170,Math.random()*173,Math.random()*139,50);
   rect(1480,600,200,250);
   fill(Math.random()*115,Math.random()*99,Math.random()*85,50);
   rect(1500,600,200,250);
   fill(Math.random()*163,Math.random()*148,Math.random()*117,50);
   rect(1520,600,200,250);
   fill(Math.random()*192,Math.random()*226,Math.random()*105,50);
   rect(1540,600,200,250);
   fill(Math.random()*252,Math.random()*226,Math.random()*188,50);
   rect(1560,600,200,250);
   fill(Math.random()*255,Math.random()*255,Math.random()*255,50);
   rect(1580,600,200,250);

   fill(Math.random()*252,Math.random()*226,Math.random()*188,50);
   rect(1600,600,200,250);
   fill(Math.random()*192,Math.random()*226,Math.random()*105,50);
   rect(1620,600,200,250);
   fill(Math.random()*163,Math.random()*148,Math.random()*117,50);
   rect(1640,600,200,250);
   fill(Math.random()*192,Math.random()*115,Math.random()*77,50);
   rect(1660,600,200,250);
   fill(Math.random()*192,Math.random()*115,Math.random()*70,50);
   rect(1680,600,200,250);
   fill(Math.random()*192,Math.random()*88,Math.random()*70,50);
   rect(1700,600,200,250);
   fill(Math.random()*192,Math.random()*48,Math.random()*26,50);
   rect(1720,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*147,50);
   rect(1740,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*182,50);
   rect(1760,600,200,250);
   fill(Math.random()*64,Math.random()*54,Math.random()*140,50);
   rect(1780,600,200,250);
   fill(Math.random()*109,Math.random()*45,Math.random()*109,50);
   rect(1800,600,200,250);
   fill(Math.random()*77,Math.random()*45,Math.random()*64,50);
   rect(1820,600,200,250);
   fill(Math.random()*54,Math.random()*10,Math.random()*64,50);
   rect(1840,600,200,250);
   fill(Math.random()*54,Math.random()*10,Math.random()*64,50);
   rect(1860,600,200,250);
   fill(Math.random()*32,Math.random()*10,Math.random()*32,50);
   rect(1880,600,200,250);
   fill(Math.random()*20,Math.random()*18,Math.random()*19,50);
   rect(1900,600,200,250);

//ě§ëëŹëŻ¸
   drawJi(count2,520);
   count2=count2-7;
   if(count2>1920){
   count2=0;
} 

//ëŹë˛ë
   drawDuck(count,550);
   count=count-2;
   if(count>1920){
   count=0;
}



//i?Â­?ĹË strokeWeight e?????, stroke ??????, ellipse ??????

   fill(255,255,255,60);
   ellipse(100,100,50,50);
   ellipse(450,150,50,50);
   ellipse(800,200,50,50);
   ellipse(1000,50,50,50);
   ellipse(1150,350,50,50);
   ellipse(1500,120,50,50);
   ellipse(1800,250,50,50);
   noFill();

   if (mouseX < 150){
      if (mouseX > 50){
         if(mouseY < 150){
            for(var i = 0 ; i < 2; i++){
               strokeWeight(30*Math.random())
               stroke(Math.random()*205,Math.random()*150,Math.random()*150);
               ellipse(100,100, r%size[i],r%size[i]);
               r=r+1;
            }
         }
      } 
   }

   else if (mouseX < 500){
      if(mouseX > 400){
         if(mouseY < 200){
            if(mouseY > 100){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*255,Math.random()*255,Math.random()*193);
                  ellipse(450,150, r%size1[i],r%size1[i]);
                  r=r+1;
               }
            }
         }
      } 
   }

   else if (mouseX < 850){
      if (mouseX > 750){
         if(mouseY < 250){
            if(mouseY > 150){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*235,Math.random()*240,Math.random()*190);
                  ellipse(800,200, r%size2[i],r%size2[i]);
                  r=r+1;
               }
            }
         }
      }
   }

   else if (mouseX < 1100){
      if(mouseX > 900){
         if(mouseY < 150){
            if(mouseY > 0){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*235,Math.random()*250,Math.random()*230);
                  ellipse(1000,50, r%size3[i],r%size3[i]);
                  r=r+1;
               }
            }
         }
      }
   }

   else if (mouseX < 1250){
      if(mouseX > 1050){
         if(mouseY < 450){
            if(mouseY > 250){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*245,Math.random()*185,Math.random()*153);
                  ellipse(1150,350, r%size6[i],r%size6[i]);
                  r=r+1;
               }
            }
         }
      }
   }

   else if (mouseX < 1550){
      if(mouseX > 1450){
         if(mouseY < 220){
            if(mouseY > 20){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*245,Math.random()*215,Math.random()*178);
                  ellipse(1500,120, r%size4[i],r%size4[i]);
                  r=r+1;
               }
            } 
         }
      }
   }
  
   else if (mouseX < 1900){
      if(mouseX > 1700){
         if(mouseY < 350){
            if(mouseY > 150){
               for(var i = 0 ; i < 2; i++){
                  strokeWeight(30*Math.random())
                  stroke(Math.random()*255,Math.random()*235,Math.random()*180);
                  ellipse(1800,250, r%size5[i],r%size5[i]);
                  r=r+1;
               } 
            }
         }
      }
   }





   // mouse ellipse
   ellipse(mouseX, mouseY, 3, 3);

   // trail ellopse #0
   trailX[0] = (mouseX + trailX[0] * 3) / 4;
   trailY[0] = (mouseY + trailY[0] * 3) / 4;
   ellipse(trailX[0], trailY[0], 3, 3);

   for (var i = 1; i < 20; i = i +1)
   {
      trailX[i] = (trailX[i-1] + trailX[i] * 5) / 6;
      trailY[i] = (trailY[i-1] + trailY[i] * 5) / 6;
      strokeWeight(30*Math.random())
                  stroke(Math.random()*245,Math.random()*215,Math.random()*178);
                  
      ellipse(trailX[i], trailY[i], 4, 4);
   }


//eÂ§?e?Â

   strokeWeight();
   noStroke();
   fill(130);
   rect(mouseX-10, mouseY, 20, 130);
   fill(100);
   rect(mouseX-5, mouseY+130, 10, 60);


   fill(252*Math.random(), 240*Math.random(), 47*Math.random(), 40);
   rect(mouseX-20, mouseY-20, 40, 40);
   fill(252*Math.random(), 192*Math.random(), 47*Math.random(), 70);
   rect(mouseX-15, mouseY-15, 30, 30);
   fill(225*Math.random(), 106*Math.random(), 52*Math.random(), 100);
   rect(mouseX-10, mouseY-10, 20, 20);

  //ę´ěëŚŹ
fill(0);
   rect(0,790,1920,40);
   rect(0,680,20,80);
   rect(10,670,10,10);
   rect(70,720,30,80);
   rect(30,750,40,60);
   rect(90,760,40,50);
   rect(150,770,40,50);
   rect(200,760,80,40);
   rect(280,730,40,80);
   rect(300,700,10,30);
   rect(290,720,20,10);
   rect(330,750,50,80);
   rect(380,730,20,100);
   rect(410,770,20,50);   
   rect(450,780,70,30);
   rect(520,760,50,40);
   rect(580,770,30,20);
   rect(610,780,50,10);
   rect(670,720,40,80);
   rect(700,740,20,70);
   rect(730,790,1000,30);
   rect(1740,780,500,40);
   rect(740,740,30,50);
   rect(790,770,50,40);
   rect(840,760,20,80);
   rect(870,770,10,50);
   rect(880,760,10,60);
   rect(890,770,50,70);
   rect(950,760,30,60);
   rect(990,780,80,70);
   rect(1060,770,40,80);
   rect(1010,790,30,90);
   rect(1110,760,20,80);
   rect(1200,770,60,40);
   rect(1280,770,40,80);
   rect(1350,770,20,80);
   rect(1370,780,10,10);
   rect(1380,720,30,80);
   rect(1420,750,40,60);
   rect(1460,760,40,50);
   rect(1510,770,40,50);
   rect(1560,780,80,40);
   rect(1650,730,40,80);
   rect(1670,700,10,80);   
   rect(1660,720,10,80);      
   rect(1700,780,10,30);
   rect(1720,780,20,10);
   rect(1750,750,50,80);
   rect(1820,730,20,100);
   rect(1840,770,20,50);   
   rect(1880,780,70,30);
   rect(1890,700,50,100);
   rect(1920,680,30,120);
   rect(1860,680,30,120);
   rect(1840,720,20,120);   
//ë¤ě¨ěŹě¸

fill(172*Math.random(), 255*Math.random(), 28*Math.random(), 100);
rect(270,780,10,10);
rect(300,750,10,10);
fill(114*Math.random(), 0*Math.random(), 255*Math.random(), 100);
rect(355,760,10,10);
rect(365,780,10,10);
rect(380,760,10,10);
fill(255*Math.random(), 90*Math.random(), 0*Math.random(), 100);
rect(465,800,10,10);
rect(485,800,10,10);
rect(505,800,10,10);
fill(255*Math.random(), 255*Math.random(), 255*Math.random(), 100);
rect(610,800,10,10);
rect(630,800,10,10);
fill(255*Math.random(), 0*Math.random(), 198*Math.random(), 100);
rect(680,750,10,10);
rect(680,770,10,10);
rect(680,790,10,10);
fill(0*Math.random(), 255*Math.random(), 162*Math.random(), 100);
rect(800,780,10,10);
rect(820,780,10,10);
fill(0*Math.random(), 222*Math.random(), 255*Math.random(), 100);
rect(960,790,10,10);
fill(255*Math.random(), 37*Math.random(), 83*Math.random(), 100);
rect(1000,790,10,10);
rect(1020,800,10,10);
rect(1040,790,10,10);
rect(1060,800,10,10);
rect(1080,790,10,10);
fill(172*Math.random(), 255*Math.random(), 28*Math.random(), 100);
rect(1210,785,10,10);
rect(1240,785,10,10);
fill(114*Math.random(), 0*Math.random(), 255*Math.random(), 100);
rect(1295,795,10,10);
fill(255*Math.random(), 90*Math.random(), 0*Math.random(), 100);
rect(1390,730,10,10);
rect(1390,750,10,10);
rect(1390,770,10,10);
rect(1390,790,10,10);
fill(255*Math.random(), 255*Math.random(), 255*Math.random(), 100);
rect(1450,770,10,10);
rect(1470,785,10,10);
fill(255*Math.random(), 0*Math.random(), 198*Math.random(), 100);
rect(1580,795,10,10);
rect(1600,805,10,10);
rect(1620,795,10,10);

}

function drawDuck(x,y){

//ě 
fill(209,96,40);
stroke(209,96,40);
rect(x,y+60,20,10);
rect(x+20, y+60,10,10);
rect(x-10,y+70,60,10);

fill(220,124,89);
stroke(220,124,89);
rect(x-10,y+60,10,10);

fill(100,22,7);
stroke(100,22,7);
rect(x-10,y+80,60,10);

fill(112,41,7);
stroke(112,41,7);
rect(x,y+90,30,10);

fill(199,113,24);
stroke(199,113,24);
rect(x+30,y+60,10,10);
rect(x-20,y+70,10,10);
//ë
fill(156,127,47);
stroke(156,127,47);
rect(x+60,y+40,10,10);
rect(x+60,y+60,10,10);

fill(73,56,22);
stroke(73,56,22);
rect(x+80,y+50,10,10);

fill(117,93,28);
stroke(117,93,28);
rect(x+70,y+40,10,10);
rect(x+60,y+60,10,10);
rect(x-30,y+60,10,10);

fill(0);
stroke(0);
rect(x+70,y+50,10,10);

fill(58,53,44);
stroke(58,53,44);
rect(x+60,y+50,10,10);
rect(x-30,y+50,10,10);
rect(x+70,y+60,10,10);

//ěźęľ´
fill(193,175,118);
stroke(193,175,118);
rect(x,y,10,10);
rect(x+70,y,10,10);
rect(x-30,y+40,10,10);
rect(x+110,y+110,10,10);
rect(x+150,y+140,10,10);

fill(241,216,147);
stroke(241,216,147);
rect(x+20,y+20,20,10);
rect(x+50,y+120,10,10);
rect(x+40,y+130,20,10);

fill(236,203,84);
stroke(236,203,84);
rect(x+20,y+10,20,10);
rect(x-10,y+20,20,10);
rect(x+10,y+30,30,10);
rect(x+120,y+140,30,10);
rect(x+120,y+150,10,10);

fill(233,196,56);
stroke(233,196,56);
rect(x+10,y,60,10);
rect(x,y+10,20,10);
rect(x+40,y+10,40,10);
rect(x+10,y+20,20,10);
rect(x+40,y+20,50,10);
rect(x-20,y+30,30,10);
rect(x+40,y+30,60,10);
rect(x-20,y+40,80,10);
rect(x+80,y+40,20,10);
rect(x-20,y+50,80,10);
rect(x+90,y+50,10,10);
rect(x-20,y+60,20,10);
rect(x+40,y+60,20,10);
//ëŞ¸íľ
rect(x-60,y+140,20,10);
rect(x-70,y+150,180,10);
rect(x-60,y+160,110,10);
rect(x+60,y+140,50,10);
rect(x+90,y+110,20,30);
rect(x+130,y+150,20,10);
rect(x+10,y+130,10,10);

fill(226,188,54);
stroke(226,188,54);
rect(x-40,y+120,40,30);
rect(x-30,y+110,20,10);
rect(x-50,y+130,10,10);
rect(x,y+130,10,20);
rect(x+10,y+140,50,10)
rect(x+60,y+110,30,30);
rect(x+110,y+120,10,30);
rect(x+120,y+130,10,10);

fill(214,178,65);
stroke(214,178,65);
rect(x-10,y+10,10,10);
rect(x-20,y+20,10,10);
rect(x+80,y+10,10,10);
rect(x+90,y+20,10,10);
rect(x-40,y+110,10,10);
rect(x+40,y+120,10,10);
rect(x+20,y+130,20,10);
rect(x+120,y+120,10,10);
rect(x+130,y+130,10,10);

fill(178,134,41);
stroke(178,134,41);
rect(x-30,y+40,10,10);
rect(x+100,y+30,10,30);
rect(x-30,y+100,10,10);
rect(x,y+120,40,10);
rect(x+130,y+160,30,10);

fill(171,117,8);
stroke(171,117,8);
rect(x-10,y+110,10,10);
rect(x+50,y+110,10,10);
rect(x-70,y+160,10,10);
rect(x-60,y+170,180,20);
rect(x+50,y+160,80,10);
rect(x+110,y+150,10,10);
rect(x+150,y+150,10,10);

fill(132,83,10);
stroke(132,83,10);
rect(x-30,y+70,10,20);
rect(x-20,y+100,20,10);
rect(x,y+110,50,10);
rect(x+50,y+100,60,10);
rect(x+60,y+70,30,10);
rect(x+80,y+60,20,10);
rect(x-70,y+170,10,10);
rect(x-60,y+190,190,10);
rect(x+120,y+170,40,10);
rect(x+120,y+180,10,10);

fill(96,78,48);
stroke(96,78,48);
rect(x-40,y+50,10,40);
rect(x+110,y+50,10,30);
rect(x-30,y+70,10,20);

fill(56,47,34);
stroke(56,47,34);
rect(x+110,y+80,10,10);

fill(127,69,7);
stroke(127,69,7);
rect(x+100,y+60,10,10);
rect(x+50,y+70,10,10);
rect(x+90,y+70,20,10);
rect(x-20,y+80,10,10);
rect(x+50,y+80,60,10);
rect(x-30,y+90,30,10);
rect(x+30,y+90,70,10);
rect(x,y+100,50,10);
rect(x-40,y+200,180,20);
rect(x-50,y+200,10,10);
rect(x+130,y+180,20,20);

fill(114,72,19);
stroke(114,72,19);
rect(x+100,y+90,10,10);
rect(x-70,y+180,10,10);
rect(x-50,y+210,10,10);
rect(x+150,y+180,10,10);

fill(140,119,61);
stroke(140,119,61);
rect(x-50,y+120,10,10);
rect(x-70,y+140,10,10);

//ë°ë¤
fill(65,76,68,180);
stroke(65,76,68,180);
rect(x-70,y+220,220,10);

fill(45,56,48,130);
stroke(45,56,48,130);
rect(x-80,y+230,240,10);
}

function drawCar(x,y){

fill(241,14,81);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);


fill(95,179,39);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);



fill(0,185,209);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);
}


function drawCar1(x,y){

fill(241,14,81);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);


fill(95,179,39);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);



fill(0,185,209);
rect(x-13,y+4,46,6);
rect(x,y,15,4);
rect(x-1,y+1,1,1);
rect(x-4,y+3,1,1);
rect(x-3,y+2,3,2);
rect(x+16,y+1,1,1);
rect(x+18,y+3,1,1);
rect(x+16,y+2,2,2);
rect(x-15,y+6,1,4);
rect(x-6,y+11,5,1);
rect(x+21,y+10,6,1);
rect(x+21,y+11,5,1);
}

function drawDuck1(x,y){

//ě 
fill(209,96,40);
stroke(209,96,40);
rect(x,y+60,10,5);
rect(x+20, y+60,5,5);
rect(x-10,y+70,30,5);

fill(220,124,89);
stroke(220,124,89);
rect(x-10,y+60,5,5);

fill(100,22,7);
stroke(100,22,7);
rect(x-10,y+80,30,5);

fill(112,41,7);
stroke(112,41,7);
rect(x,y+90,15,5);

fill(199,113,24);
stroke(199,113,24);
rect(x+30,y+60,5,5);
rect(x-20,y+70,5,5);
//ë
fill(156,127,47);
stroke(156,127,47);
rect(x+60,y+40,5,5);
rect(x+60,y+60,5,5);

fill(73,56,22);
stroke(73,56,22);
rect(x+80,y+50,5,5);

fill(117,93,28);
stroke(117,93,28);
rect(x+70,y+40,5,5);
rect(x+60,y+60,5,5);
rect(x-30,y+60,5,5);

fill(0);
stroke(0);
rect(x+70,y+50,5,5);

fill(58,53,44);
stroke(58,53,44);
rect(x+60,y+50,5,5);
rect(x-30,y+50,5,5);
rect(x+70,y+60,5,5);

//ěźęľ´
fill(193,175,118);
stroke(193,175,118);
rect(x,y,5,5);
rect(x+70,y,5,5);
rect(x-30,y+40,5,5);
rect(x+110,y+110,5,5);
rect(x+150,y+140,5,5);

fill(241,216,147);
stroke(241,216,147);
rect(x+20,y+20,10,5);
rect(x+50,y+120,5,5);
rect(x+40,y+130,10,5);

fill(236,203,84);
stroke(236,203,84);
rect(x+20,y+10,10,5);
rect(x-10,y+20,10,5);
rect(x+10,y+30,15,5);
rect(x+120,y+140,15,5);
rect(x+120,y+150,5,5);

fill(233,196,56);
stroke(233,196,56);
rect(x+10,y,30,5);
rect(x,y+10,10,5);
rect(x+40,y+10,20,5);
rect(x+10,y+20,10,5);
rect(x+40,y+20,25,5);
rect(x-20,y+30,15,5);
rect(x+40,y+30,30,5);
rect(x-20,y+40,40,5);
rect(x+80,y+40,10,5);
rect(x-20,y+50,40,5);
rect(x+90,y+50,5,5);
rect(x-20,y+60,10,5);
rect(x+40,y+60,10,5);
//ëŞ¸íľ
rect(x-60,y+140,10,5);
rect(x-70,y+150,90,5);
rect(x-60,y+160,55,5);
rect(x+60,y+140,25,5);
rect(x+90,y+110,10,15);
rect(x+130,y+150,10,5);
rect(x+10,y+130,5,5);

fill(226,188,54);
stroke(226,188,54);
rect(x-40,y+120,20,15);
rect(x-30,y+110,10,5);
rect(x-50,y+130,5,5);
rect(x,y+130,5,10);
rect(x+10,y+140,25,5)
rect(x+60,y+110,15,15);
rect(x+110,y+120,5,15);
rect(x+120,y+130,5,5);

fill(214,178,65);
stroke(214,178,65);
rect(x-10,y+10,5,5);
rect(x-20,y+20,5,5);
rect(x+80,y+10,5,5);
rect(x+90,y+20,5,5);
rect(x-40,y+110,5,5);
rect(x+40,y+120,5,5);
rect(x+20,y+130,10,5);
rect(x+120,y+120,5,5);
rect(x+130,y+130,5,5);

fill(178,134,41);
stroke(178,134,41);
rect(x-30,y+40,5,5);
rect(x+100,y+30,5,15);
rect(x-30,y+100,5,5);
rect(x,y+120,20,5);
rect(x+130,y+160,15,5);

fill(171,117,8);
stroke(171,117,8);
rect(x-10,y+110,5,5);
rect(x+50,y+110,5,5);
rect(x-70,y+160,5,5);
rect(x-60,y+170,90,10);
rect(x+50,y+160,40,5);
rect(x+110,y+150,5,5);
rect(x+150,y+150,5,5);

fill(132,83,10);
stroke(132,83,10);
rect(x-30,y+70,5,10);
rect(x-20,y+100,10,5);
rect(x,y+110,25,5);
rect(x+50,y+100,30,5);
rect(x+60,y+70,15,5);
rect(x+80,y+60,10,5);
rect(x-70,y+170,5,5);
rect(x-60,y+190,95,5);
rect(x+120,y+170,20,5);
rect(x+120,y+180,5,5);

fill(96,78,48);
stroke(96,78,48);
rect(x-40,y+50,5,20);
rect(x+110,y+50,5,15);
rect(x-30,y+70,5,10);

fill(56,47,34);
stroke(56,47,34);
rect(x+110,y+80,5,5);

fill(127,69,7);
stroke(127,69,7);
rect(x+100,y+60,5,5);
rect(x+50,y+70,5,5);
rect(x+90,y+70,10,5);
rect(x-20,y+80,5,5);
rect(x+50,y+80,30,5);
rect(x-30,y+90,15,5);
rect(x+30,y+90,35,5);
rect(x,y+100,25,5);
rect(x-40,y+200,90,10);
rect(x-50,y+200,5,5);
rect(x+130,y+180,10,10);

fill(114,72,19);
stroke(114,72,19);
rect(x+100,y+90,5,5);
rect(x-70,y+180,5,5);
rect(x-50,y+210,5,5);
rect(x+150,y+180,5,5);

fill(140,119,61);
stroke(140,119,61);
rect(x-50,y+120,5,5);
rect(x-70,y+140,5,5);

//ë°ë¤
fill(65,76,68,180);
stroke(65,76,68,180);
rect(x-70,y+220,110,5);

fill(45,56,48,130);
stroke(45,56,48,130);
rect(x-80,y+230,120,5);
}


//ě§ëëŹëŻ¸
function drawJi(x,y){
fill(73,86,88);
rect(x,y,10,10);
rect(x-10,y+10,10,10);
rect(x-20,y+20,10,10);
rect(x-30,y+30,10,20);
rect(x-40,y+40,10,30);
rect(x-50,y+60,10,30);
rect(x-60,y+90,10,20);

fill(94,104,106);
rect(x+10,y,20,10);
rect(x,y+10,30,10);
rect(x-10,y+20,30,10);
rect(x-20,y+30,30,20);
rect(x-30,y+50,40,20);
rect(x-40,y+70,50,20);
rect(x-50,y+90,70,20);

fill(82,87,90);
rect(x+20,y+20,10,10);
rect(x+10,y+30,20,10);
rect(x+10,y+40,10,50);

fill(80,98,103);
rect(x+20,y+40,10,70);


fill(65,76,68,180);
stroke(65,76,68,180);
rect(x-70,y+110,110,10);

fill(45,56,48,130);
stroke(45,56,48,130);
rect(x-80,y+120,130,10);

}

function light(x,y){
   var orgX,orgY,n;
   orgX = 200;
   orgY = 490;
   n=100;
   var diffX, diffY;
   diffX = orgX-x;
   diffY = orgY-y;
   for(var i =0; i<n;i++){
         fill(255-i/n*255);
      ellipse(orgX-diffX/n*i-60,orgY-diffY/n*i,7,10);
   }
}

function light1(x,y){
   var orgX,orgY,n;
   orgX = 200;
   orgY = 490;
   n=100;
   var diffX, diffY;
   diffX = orgX-x;
   diffY = orgY-y;
   for(var i =0; i<n;i++){
         fill(255-i/n*255);
      ellipse(orgX-diffX/n*i+500,orgY-diffY/n*i,7,10);
   }
}

function light2(x,y){
   var orgX,orgY,n;
   orgX = 200;
   orgY = 490;
   n=100;
   var diffX, diffY;
   diffX = orgX-x;
   diffY = orgY-y;
   for(var i =0; i<n;i++){
         fill(255-i/n*255);
      ellipse(orgX-diffX/n*i+1060,orgY-diffY/n*i,7,10);
   }
}

function light3(x,y){
   var orgX,orgY,n;
   orgX = 200;
   orgY = 490;
   n=100;
   var diffX, diffY;
   diffX = orgX-x;
   diffY = orgY-y;
   for(var i =0; i<n;i++){
         fill(255-i/n*255);
      ellipse(orgX-diffX/n*i+1620,orgY-diffY/n*i,7,10);
   }

 
}