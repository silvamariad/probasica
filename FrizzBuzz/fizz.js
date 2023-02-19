var numeros     = 30;
var divisible   = false;

for(var i = 1; i <= 30; i ++)
{
    divisible = false;
    if(i % 3 == 0)
    {
        document.write("Frizz");
        divisible = true;
    }
    
    if(i % 5 == 0)
    {
        document.write("Buzz");
        divisible = true;
    }
    
    if(!divisible)
    {
        document.write(i);
    }
    document.write("<br />");
}