function fizzbuzz()
{
for (i=1; i<=151; i++)
{
    if( i % 3 == 0 )
    {
        if( i % 5 == 0 && i % 3 == 0)
        {
            console.log("FizzBuzz");
        }
        console.log("Fizz");
        
    }
    else if( i % 5 == 0)
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
}

}

fizzbuzz();