var a=1;
var b=0;
var c=0;
var d=0;
var e=0;
function Tacos()
{
    if(b>0)
    {
        document.getElementById("div11").style.display="none";
        document.getElementById("div10").style.display="block";
        a++;b=0;c=0;d=0;e=0;
    }
    else if(c>0)
    {
        document.getElementById("div12").style.display="none";
        document.getElementById("div10").style.display="block";
        a++;b=0;c=0;d=0;e=0;
    }
    else if(d>0)
    {
        document.getElementById("div13").style.display="none";
        document.getElementById("div10").style.display="block";
        a++;b=0;c=0;d=0;e=0;
    }
    else if(e>0)
    {
        document.getElementById("div14").style.display="none";
        document.getElementById("div10").style.display="block";
        a++;b=0;c=0;d=0;e=0;
    }
    else if(a==0&&b==0&&c==0&&d==0&&e==0)
    {
        document.getElementById("div10").style.display="block";
        a++;
    }

    
    /*show('div10');*/

}

function Beers()
{
    
    if(a>0)
    {
        document.getElementById("div10").style.display="none";
        document.getElementById("div11").style.display="block";
        a=0;b++;c=0;d=0;e=0;
    }
    else if(c>0)
    {
        document.getElementById("div12").style.display="none";
        document.getElementById("div11").style.display="block";
        a=0;b++;c=0;d=0;e=0;
    }
    else if(d>0)
    {
        document.getElementById("div13").style.display="none";
        document.getElementById("div11").style.display="block";
        a=0;b++;c=0;d=0;e=0;
    }
    else if(e>0)
    {
        document.getElementById("div14").style.display="none";
        document.getElementById("div11").style.display="block";
        a=0;b++;c=0;d=0;e=0;
    }
    else if(a==0&&b==0&&c==0&&d==0&&e==0)
    {
        document.getElementById("div11").style.display="block";
        b++;
    }


}

function Wines()
{
    if(a>0)
    {
        document.getElementById("div10").style.display="none";
        document.getElementById("div12").style.display="block";
        a=0;b=0;c++;d=0;e=0;
    }
    else if(b>0)
    {
        document.getElementById("div11").style.display="none";
        document.getElementById("div12").style.display="block";
        a=0;b=0;c++;d=0;e=0;
    }
    else if(d>0)
    {
        document.getElementById("div13").style.display="none";
        document.getElementById("div12").style.display="block";
        a=0;b=0;c++;d=0;e=0;
    }
    else if(e>0)
    {
        document.getElementById("div14").style.display="none";
        document.getElementById("div12").style.display="block";
        a=0;b=0;c++;d=0;e=0;
    }
    else if(a==0&&b==0&&c==0&&d==0&&e==0)
    {
        document.getElementById("div12").style.display="block";
        c++;
    }

}

function Desserts()
{
    if(a>0)
    {
        document.getElementById("div10").style.display="none";
        document.getElementById("div13").style.display="block";
        a=0;b=0;c=0;d++;e=0;
    }
    else if(b>0)
    {
        document.getElementById("div11").style.display="none";
        document.getElementById("div13").style.display="block";
        a=0;b=0;c=0;d++;e=0;
    }
    else if(c>0)
    {
        document.getElementById("div12").style.display="none";
        document.getElementById("div13").style.display="block";
        a=0;b=0;c=0;d++;e=0;
    }
    else if(e>0)
    {
        document.getElementById("div14").style.display="none";
        document.getElementById("div13").style.display="block";
        a=0;b=0;c=0;d++;e=0;
    }
    else if(a==0&&b==0&&c==0&&d==0&&e==0)
    {
        document.getElementById("div13").style.display="block";
        d++;
    }

}

function Reservations()
{
    if(a>0)
    {
        document.getElementById("div10").style.display="none";
        document.getElementById("div14").style.display="block";
        a=0;b=0;c=0;d=0;e++;
    }
    else if(b>0)
    {
        document.getElementById("div11").style.display="none";
        document.getElementById("div14").style.display="block";
        a=0;b=0;c=0;d=0;e++;       
    }
    else if(c>0)
    {
        document.getElementById("div12").style.display="none";
        document.getElementById("div14").style.display="block";
        a=0;b=0;c=0;d=0;e++;
        
    }
    else if(d>0)
    {
        document.getElementById("div13").style.display="none";
        document.getElementById("div14").style.display="block";
        a=0;b=0;c=0;d=0;e++;
        
    }
    else if(a==0&&b==0&&c==0&&d==0&&e==0)
    {
        document.getElementById("div1").style.display="block";
        e++;
    }
}

/*
function show(divId)
{
    $("#" + divId).show();
}
*/