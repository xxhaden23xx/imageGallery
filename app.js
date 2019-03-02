var imageArray1 = ["Assets/peppa1.jpg", "Assets/peppa2.jpg" , "Assets/peppa3.jpg", "Assets/peppa4.jpg"];
var imageArray2 = ["Assets/iphone1.jpg", "Assets/iphone2.jpg" , "Assets/iphone3.jpg", "Assets/iphone4.jpg"];
var imageArray3 = ["Assets/mount1.jpg", "Assets/mount2.jpg" , "Assets/mount3.jpg", "Assets/mount4.jpg"];
var imageArray4 = ["Assets/brand1.jpg", "Assets/brand2.jpg" , "Assets/brand3.jpg", "Assets/brand4.jpg"];



document.getElementById("btn1").addEventListener("click", gallery1);
var img = document.getElementById("pic1");

var i = 0; 
var l = 0;
var g = 0;
var h = 0;
function gallery1()
{
    if (i == 4)
{
i = 0;
}
else
{
    i = i + 1
} 
img.src = imageArray1[i];
}

document.getElementById("btn2").addEventListener("click", gallery2);
var img2 = document.getElementById("pic2");
function gallery2()
{
    if (l == 4)
{
l = 0;
}
else
{
    l = l + 1
} 
img2.src = imageArray2[l];
}


document.getElementById("btn3").addEventListener("click", gallery3);
var img3 = document.getElementById("pic3");
function gallery3()
{
    if (g == 4)
{
g = 0;
}
else
{
    g = g + 1
} 
img3.src = imageArray3[g];
}


document.getElementById("btn4").addEventListener("click", gallery4);
var img4 = document.getElementById("pic4");
function gallery4()
{
    if (h == 4)
{
h = 0;
}
else
{
    h = h + 1
} 
img4.src = imageArray4[h];
}

