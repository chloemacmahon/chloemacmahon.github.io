
const themeBtn = document.querySelector("#theme-btn");
var currentTheme = "";

themeBtn.addEventListener("click",(e)=>{
    currentTheme = localStorage.getItem("currentTheme");
    console.log(localStorage.getItem("currentTheme"));
        switch(document.body.getAttribute("data-theme")){
            case "":
                currentTheme = "red-green"
                break; 
            case "red-green":
                currentTheme = "yellow-blue"
                break;
            case "yellow-blue":
                currentTheme = "pink-blue"
                break;
            case "pink-blue":
                currentTheme = "purple-teal";
                break;
            case "purple-teal":
                currentTheme = "";
                break;
            default:
                currentTheme = ""
                break;
        }
        document.body.setAttribute("data-theme",currentTheme);
    localStorage.setItem("currentTheme",currentTheme);
    console.log(localStorage.getItem("currentTheme"));
    console.log("themeswitched");
});

function themeSwitch(){
    currentTheme = localStorage.getItem("currentTheme");
    console.log(localStorage.getItem("currentTheme"));
    document.body.setAttribute("data-theme",currentTheme);
    localStorage.setItem("currentTheme",currentTheme);
    console.log(localStorage.getItem("currentTheme"));
    console.log("themeswitched");
}