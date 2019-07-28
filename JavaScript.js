// Function to set the cookie
// cname and cvalue and exdays are just the parameters to the function
function setCookie(cname, cvalue, exdays) {
    // New date
    var d = new Date();

    document.write("6.  no cookie, call setCookie fct, value of var d", "<br>");
    document.write(d, "<br>");

   
    // Date expiration time currnet time + exdays
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    //alert(d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)));

    // Expires variable
    var expires = "expires=" + d.toUTCString();

    document.write("7.  expires variable", "<br>");
    document.write(expires, "<br>");

    document.write("7b.  cookie variables", "<br>");
    document.write(cname, " ", cvalue, " ", expires, "<br>");


    // Set the actual cookie
    //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = "null=1";
    //var test = doccument.cookie;
    //alert(document.cookie);
    

    document.write("8.  document.cookie", "<br>");
    document.write("= ", document.cookie);
}

// Function to get a cookie by a name
function getCookie(cname)
{
    // Variable for cookie name passed by parameter
    var name = cname + "=";

    document.write("2.  call to getCookie fct, value of var name", "<br>");
    document.write(name, "<br>");
   

    // Decode grabbed cookie method

    var decodedCookie = decodeURIComponent(document.cookie);

    document.write("3.  still in getCookie fct, value of var decodedCookie", "<br>");
    document.write(decodedCookie, "<br>");
 

    // Split the contents, blah blah
    var ca = decodedCookie.split(';');

    document.write("4.  still in getCookie fct, value of var ca", "<br>");
    document.write(ca, "<br>");


    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    document.write("5.  still in getCookie fct, value of c.substring", "<br>");
    document.write(c.substring(name.length, c.length), "<br>");


    return "";
}

// Do this everytime page loads
window.onload = function () {
    // GET THE DIV by ID #count and set its reference to a variable named counter
    let counter = document.getElementById(count);

    document.write("1.  Value of .onload var counter", "<br>");
    document.write(counter, "<br>");


    // Grab cookie by name and get value we calling function, if it exists increment it
    if (getCookie(counter))
    {
        // Set a variable to count for the cookie's value
        let count = parseInt(getCookie(counter))

        // Increment the value
        count = count + 1;
        // Set the cookie for same name to new count, with same expiration
        setCookie(counter, count, 10);
        // Set the div contents to the count of cookie, for testing purposes
        counter.innerHTML += count;
    }
    else
    {
        // Cookie wasn't present
        // Set cookie, name = counter, value = 1, expires 10 days
        setCookie(counter, 1, 10);

        // Alert showing that cookie was not present
        alert('We set the cookie since it was not present, refresh to show cookie counter')
    }
}