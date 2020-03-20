function Evaluate()
{
    var g1 = parseInt(document.getElementById("g1").value);
    var g2 = parseInt(document.getElementById("g2").value);
    var g3 = parseInt(document.getElementById("g3").value);
    var g4 = parseInt(document.getElementById("g4").value);
    var g5 = parseInt(document.getElementById("g5").value);
    var r1 = document.getElementById("r1");
    var r2 = document.getElementById("r2");
    var r3 = document.getElementById("r3");
    var r4 = document.getElementById("r4");
    var r5 = document.getElementById("r5");
    var rank = document.getElementById("rank");
    var exce = 0;
    var poor = 0;
    var invalid = 0;

   
    if (g1 >= 90 && g1 <= 100 )
    {
        r1.textContent = "Excellent";
        exce++;
    }
    else if (g1 >= 80 && g1 <= 89 )
    {
        r1.textContent = "Good";
    }
    else if (g1 >= 70 && g1 <= 79 )
    {
        r1.textContent = "Average";
    }
    else if (g1 >= 60 && g1 <= 69 )
    {
        r1.textContent = "Poor";
        poor++;
    }
    else if (g1 >= 0 && g1 <= 59 )
    {
        r1.textContent = "Fail";
        poor++;
    }
    else
    {
        r1.textContent = "Invalid Input";
        invalid++;
    }


    if (g2 >= 90 && g2 <= 100 )
    {
        r2.textContent = "Excellent";
        exce++;
    }
    else if (g2 >= 80 && g2 <= 89 )
    {
        r2.textContent = "Good";
    }
    else if (g2 >= 70 && g2 <= 79 )
    {
        r2.textContent = "Average";
    }
    else if (g2 >= 60 && g2 <= 69 )
    {
        r2.textContent = "Poor";
        poor++;
    }
    else if (g2 >= 0 && g2 <= 59 )
    {
        r2.textContent = "Fail";
        poor++;
    }
    else
    {
        r2.textContent = "Invalid Input";
        invalid++;
    }

    
    if (g3 >= 90 && g3 <= 100 )
    {
        r3.textContent = "Excellent";
        exce++;
    }
    else if (g3 >= 80 && g3 <= 89 )
    {
        r3.textContent = "Good";
    }
    else if (g3 >= 70 && g3 <= 79 )
    {
        r3.textContent = "Average";
    }
    else if (g3 >= 60 && g3 <= 69 )
    {
        r3.textContent = "Poor";
        poor++;
    }
    else if (g3 >= 0 && g3 <= 59 )
    {
        r3.textContent = "Fail";
        poor++;
    }
    else
    {
        r3.textContent = "Invalid Input";
        invalid++;
    }



    if (g4 >= 90 && g4 <= 100 )
    {
        r4.textContent = "Excellent";
        exce++;  
    }
    else if (g4 >= 80 && g4 <= 89 )
    {
        r4.textContent = "Good";
    }
    else if (g4 >= 70 && g4 <= 79 )
    {
        r4.textContent = "Average";
    }
    else if (g4 >= 60 && g4 <= 69 )
    {
        r4.textContent = "Poor";
        poor++;
    }
    else if (g4 >= 0 && g4 <= 59 )
    {
        r4.textContent = "Fail";
        poor++;
    }
    else
    {
        r4.textContent = "Invalid Input";
        invalid++;
    }

    if (g5 >= 90 && g5 <= 100 )
    {
        r5.textContent = "Excellent";
        exce++;
    }
    else if (g5 >= 80 && g5 <= 89 )
    {
        r5.textContent = "Good";
    }
    else if (g5 >= 70 && g5 <= 79 )
    {
        r5.textContent = "Average";
    }
    else if (g5 >= 60 && g5 <= 69 )
    {
        r5.textContent = "Poor";
        poor++;
    }
    else if (g5 >= 0 && g5 <= 59 )
    {
        r5.textContent = "Fail";
        poor++;
    }
    else
    {
        r5.textContent = "Invalid Input";
        invalid++;
    }


    if (invalid > 0)
    {
        rank.textContent = "?";
    }
    else if (exce==5)
    {
        rank.textContent = '“Top Honor Student”';
    }
    else if (poor==5)
    {
        rank.textContent = '“Repeater”';
    }
    else
    {
        rank.textContent = '“Second Honorable Student”';
    }
}

