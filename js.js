for (x=1; x <= 100; x++){
        if( x % 3 == 0 ){
            write("fizz")
        }
        if( x % 5 == 0 ){
            write("buzz")
        }
        if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
            write(x)
        }
    }